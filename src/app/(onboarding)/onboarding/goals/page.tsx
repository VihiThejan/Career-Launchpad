'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';
import { Select } from '@/components/ui/Select';
import { StepIndicator } from '@/components/onboarding/StepIndicator';
import { Target, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/useToast';

const steps = [
  { id: 1, name: 'Personal Info', description: 'Tell us about yourself' },
  { id: 2, name: 'Education', description: 'Your educational background' },
  { id: 3, name: 'Experience', description: 'Your work history' },
  { id: 4, name: 'Skills', description: 'Your technical skills' },
  { id: 5, name: 'Goals', description: 'Your career aspirations' },
];

const goalsSchema = z.object({
  targetRole: z.string().min(2, 'Target role is required'),
  targetIndustry: z.string().optional(),
  timeline: z.string().min(1, 'Timeline is required'),
  motivation: z.string().optional(),
  learningGoals: z.string().optional(),
});

type GoalsData = z.infer<typeof goalsSchema>;

const targetRoles = [
  'Software Engineer',
  'Frontend Developer',
  'Backend Developer',
  'Full Stack Developer',
  'DevOps Engineer',
  'Data Scientist',
  'Data Analyst',
  'Machine Learning Engineer',
  'Cloud Architect',
  'Product Manager',
  'UI/UX Designer',
  'QA Engineer',
  'Security Engineer',
  'Mobile Developer',
];

const industries = [
  'Technology',
  'Finance',
  'Healthcare',
  'E-commerce',
  'Education',
  'Gaming',
  'Telecommunications',
  'Manufacturing',
  'Consulting',
  'Startups',
];

export default function GoalsPage() {
  const router = useRouter();
  const { showToast } = useToast();
  const [currentStep] = useState(5);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GoalsData>({
    resolver: zodResolver(goalsSchema),
  });

  const onSubmit = async (data: GoalsData) => {
    setIsSubmitting(true);
    console.log('Goals data:', data);

    // Save to localStorage
    localStorage.setItem('onboarding_step5', JSON.stringify(data));

    // Simulate API call to save all onboarding data
    setTimeout(() => {
      showToast('Onboarding completed successfully!', { type: 'success' });
      router.push('/dashboard');
    }, 1000);
  };

  const handleBack = () => {
    router.push('/onboarding/skills');
  };

  return (
    <>
      <StepIndicator steps={steps} currentStep={currentStep} />

      <Card className="max-w-3xl mx-auto">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <Target className="w-6 h-6 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">Career Goals</h1>
          </div>
          <p className="text-gray-600">
            Help us understand your career aspirations
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Target Role */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Target Role *
            </label>
            <Select
              options={targetRoles.map((role) => ({
                value: role,
                label: role,
              }))}
              placeholder="Select your target role"
              error={errors.targetRole?.message}
              {...register('targetRole')}
            />
            <p className="text-xs text-gray-500 mt-1">
              What position are you aiming for?
            </p>
          </div>

          {/* Target Industry */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Industry
            </label>
            <Select
              options={industries.map((industry) => ({
                value: industry,
                label: industry,
              }))}
              placeholder="Select preferred industry"
              {...register('targetIndustry')}
            />
          </div>

          {/* Timeline */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Timeline to Achieve Goal *
            </label>
            <Select
              options={[
                { value: '3-months', label: '3 Months' },
                { value: '6-months', label: '6 Months' },
                { value: '1-year', label: '1 Year' },
                { value: '2-years', label: '2 Years' },
                { value: 'flexible', label: 'Flexible' },
              ]}
              placeholder="Select timeline"
              error={errors.timeline?.message}
              {...register('timeline')}
            />
          </div>

          {/* Motivation */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              What Motivates You?
            </label>
            <Textarea
              rows={4}
              placeholder="Tell us what drives you in your career journey..."
              {...register('motivation')}
            />
          </div>

          {/* Learning Goals */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Specific Learning Goals
            </label>
            <Textarea
              rows={4}
              placeholder="What skills or technologies do you want to learn? Any certifications you're pursuing?"
              {...register('learningGoals')}
            />
          </div>

          {/* Success Message Box */}
          <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg">
            <div className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-blue-600 mt-0.5" />
              <div>
                <h4 className="font-semibold text-blue-900 mb-1">
                  You&apos;re Almost Done!
                </h4>
                <p className="text-sm text-blue-700">
                  After completing this step, we&apos;ll create a personalized
                  learning path tailored to your goals and current skill level.
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center pt-4">
            <Button type="button" variant="ghost" onClick={handleBack}>
              Back
            </Button>
            <Button
              type="submit"
              variant="primary"
              isLoading={isSubmitting}
              className="px-8"
            >
              Complete Onboarding
            </Button>
          </div>
        </form>
      </Card>
    </>
  );
}
