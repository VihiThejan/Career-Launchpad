'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';
import { Checkbox } from '@/components/ui/Checkbox';
import { StepIndicator } from '@/components/onboarding/StepIndicator';
import { Plus, Trash2, Briefcase } from 'lucide-react';

const steps = [
  { id: 1, name: 'Personal Info', description: 'Tell us about yourself' },
  { id: 2, name: 'Education', description: 'Your educational background' },
  { id: 3, name: 'Experience', description: 'Your work history' },
  { id: 4, name: 'Skills', description: 'Your technical skills' },
  { id: 5, name: 'Goals', description: 'Your career aspirations' },
];

const experienceSchema = z.object({
  experience: z.array(
    z.object({
      title: z.string().min(2, 'Job title is required'),
      company: z.string().min(2, 'Company name is required'),
      location: z.string().optional(),
      startDate: z.string().min(1, 'Start date is required'),
      endDate: z.string().optional(),
      current: z.boolean().optional(),
      description: z.string().optional(),
    })
  ),
});

type ExperienceData = z.infer<typeof experienceSchema>;

export default function ExperiencePage() {
  const router = useRouter();
  const [currentStep] = useState(3);

  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ExperienceData>({
    resolver: zodResolver(experienceSchema),
    defaultValues: {
      experience: [
        {
          title: '',
          company: '',
          location: '',
          startDate: '',
          endDate: '',
          current: false,
          description: '',
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'experience',
  });

  const onSubmit = (data: ExperienceData) => {
    console.log('Experience data:', data);
    localStorage.setItem('onboarding_step3', JSON.stringify(data));
    router.push('/onboarding/skills');
  };

  const handleBack = () => {
    router.push('/onboarding/education');
  };

  const handleSkip = () => {
    router.push('/onboarding/skills');
  };

  return (
    <>
      <StepIndicator steps={steps} currentStep={currentStep} />

      <Card className="max-w-3xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Work Experience
          </h1>
          <p className="text-gray-600">
            Tell us about your professional journey
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {fields.map((field, index) => (
            <div
              key={field.id}
              className="p-5 border border-gray-200 rounded-lg space-y-4"
            >
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-blue-600" />
                  <h3 className="font-semibold text-gray-900">
                    Position {index + 1}
                  </h3>
                </div>
                {fields.length > 1 && (
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => remove(index)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                )}
              </div>

              {/* Job Title & Company */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Job Title *
                  </label>
                  <Input
                    placeholder="e.g., Software Engineer"
                    error={errors.experience?.[index]?.title?.message}
                    {...register(`experience.${index}.title`)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company *
                  </label>
                  <Input
                    placeholder="e.g., Google"
                    error={errors.experience?.[index]?.company?.message}
                    {...register(`experience.${index}.company`)}
                  />
                </div>
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <Input
                  placeholder="City, Country"
                  {...register(`experience.${index}.location`)}
                />
              </div>

              {/* Dates */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Start Date *
                  </label>
                  <Input
                    type="month"
                    error={errors.experience?.[index]?.startDate?.message}
                    {...register(`experience.${index}.startDate`)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    End Date
                  </label>
                  <Input
                    type="month"
                    disabled={watch(`experience.${index}.current`)}
                    error={errors.experience?.[index]?.endDate?.message}
                    {...register(`experience.${index}.endDate`)}
                  />
                </div>
              </div>

              {/* Current Position */}
              <Checkbox
                label="I currently work here"
                {...register(`experience.${index}.current`)}
              />

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <Textarea
                  rows={4}
                  placeholder="Describe your responsibilities, achievements, and key projects..."
                  {...register(`experience.${index}.description`)}
                />
              </div>
            </div>
          ))}

          {/* Add More Button */}
          <Button
            type="button"
            variant="outline"
            onClick={() =>
              append({
                title: '',
                company: '',
                location: '',
                startDate: '',
                endDate: '',
                current: false,
                description: '',
              })
            }
            leftIcon={<Plus className="w-4 h-4" />}
            className="w-full"
          >
            Add Another Position
          </Button>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center pt-4">
            <div className="flex gap-3">
              <Button type="button" variant="ghost" onClick={handleBack}>
                Back
              </Button>
              <Button type="button" variant="ghost" onClick={handleSkip}>
                Skip
              </Button>
            </div>
            <Button type="submit" variant="primary">
              Next: Skills
            </Button>
          </div>
        </form>
      </Card>
    </>
  );
}
