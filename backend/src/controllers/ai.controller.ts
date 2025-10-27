import { Response, NextFunction } from 'express';
import { AuthRequest } from '../middleware/auth';
import openai, { openAIConfig } from '../config/openai';
import { cacheHelper } from '../config/redis';

export const chatWithAI = async (req: AuthRequest, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { message } = req.body;

    const completion = await openai.chat.completions.create({
      model: openAIConfig.model,
      messages: [
        {
          role: 'system',
          content: 'You are a helpful career advisor assistant.',
        },
        { role: 'user', content: message },
      ],
      max_tokens: openAIConfig.maxTokens,
      temperature: openAIConfig.temperature,
    });

    res.json({
      success: true,
      data: {
        response: completion.choices[0].message.content,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const analyzeResume = async (req: AuthRequest, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { resumeText } = req.body;

    // Check cache first
    const cacheKey = `resume:analysis:${req.user!.id}`;
    const cached = await cacheHelper.get(cacheKey);
    
    if (cached) {
      res.json({ success: true, data: cached, cached: true });
      return;
    }

    const completion = await openai.chat.completions.create({
      model: openAIConfig.model,
      messages: [
        {
          role: 'system',
          content:
            'You are an expert resume analyzer. Analyze the resume and provide feedback on strengths, weaknesses, and suggestions for improvement.',
        },
        { role: 'user', content: `Analyze this resume:\n\n${resumeText}` },
      ],
      max_tokens: openAIConfig.maxTokens,
    });

    const analysis = {
      feedback: completion.choices[0].message.content,
      timestamp: new Date().toISOString(),
    };

    // Cache the result for 1 hour
    await cacheHelper.set(cacheKey, analysis, 3600);

    res.json({ success: true, data: analysis });
  } catch (error) {
    next(error);
  }
};

export const generateCoverLetter = async (req: AuthRequest, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { jobDescription, userProfile } = req.body;

    const completion = await openai.chat.completions.create({
      model: openAIConfig.model,
      messages: [
        {
          role: 'system',
          content:
            'You are an expert cover letter writer. Generate a professional cover letter based on the job description and user profile.',
        },
        {
          role: 'user',
          content: `Job Description:\n${jobDescription}\n\nUser Profile:\n${JSON.stringify(userProfile)}`,
        },
      ],
      max_tokens: openAIConfig.maxTokens,
    });

    res.json({
      success: true,
      data: {
        coverLetter: completion.choices[0].message.content,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const getCareerAdvice = async (req: AuthRequest, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { question } = req.body;

    const completion = await openai.chat.completions.create({
      model: openAIConfig.model,
      messages: [
        {
          role: 'system',
          content:
            'You are an experienced career counselor. Provide helpful, actionable career advice.',
        },
        { role: 'user', content: question },
      ],
      max_tokens: openAIConfig.maxTokens,
      temperature: openAIConfig.temperature,
    });

    res.json({
      success: true,
      data: {
        advice: completion.choices[0].message.content,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const optimizeLinkedInProfile = async (req: AuthRequest, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { profileData } = req.body;

    const completion = await openai.chat.completions.create({
      model: openAIConfig.model,
      messages: [
        {
          role: 'system',
          content:
            'You are a LinkedIn optimization expert. Provide specific suggestions to improve the LinkedIn profile.',
        },
        {
          role: 'user',
          content: `Optimize this LinkedIn profile:\n${JSON.stringify(profileData)}`,
        },
      ],
      max_tokens: openAIConfig.maxTokens,
    });

    res.json({
      success: true,
      data: {
        suggestions: completion.choices[0].message.content,
      },
    });
  } catch (error) {
    next(error);
  }
};
