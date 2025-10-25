import { OpenAI } from 'openai';
import { logger } from './logger';

if (!process.env.OPENAI_API_KEY) {
  logger.warn('⚠️  OpenAI API key not configured');
}

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const openAIConfig = {
  model: process.env.OPENAI_MODEL || 'gpt-4',
  maxTokens: parseInt(process.env.OPENAI_MAX_TOKENS || '2000'),
  temperature: parseFloat(process.env.OPENAI_TEMPERATURE || '0.7'),
};

export default openai;
