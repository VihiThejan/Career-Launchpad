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
import { Plus, Trash2, GraduationCap } from 'lucide-react';

const steps = [
  { id: 1, name: 'Personal Info', description: 'Tell us about yourself' },
  { id: 2, name: 'Education', description: 'Your educational background' },
  { id: 3, name: 'Experience', description: 'Your work history' },
  { id: 4, name: 'Skills', description: 'Your technical skills' },
  { id: 5, name: 'Goals', description: 'Your career aspirations' },
];

const educationSchema = z.object({
  education: z.array(
    z.object({
      institution: z.string().min(2, 'Institution name is required'),
      degree: z.string().min(2, 'Degree is required'),
      fieldOfStudy: z.string().min(2, 'Field of study is required'),
      startDate: z.string().min(1, 'Start date is required'),
      endDate: z.string().optional(),
      current: z.boolean().optional(),
      description: z.string().optional(),
    })
  ),
});

type EducationData = z.infer<typeof educationSchema>;

export default function EducationPage() {
  const router = useRouter();
  const [currentStep] = useState(2);

  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<EducationData>({
    resolver: zodResolver(educationSchema),
    defaultValues: {
      education: [
        {
          institution: '',
          degree: '',
          fieldOfStudy: '',
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
    name: 'education',
  });

  const onSubmit = (data: EducationData) => {
    console.log('Education data:', data);
    localStorage.setItem('onboarding_step2', JSON.stringify(data));
    router.push('/onboarding/experience');
  };

  const handleBack = () => {
    router.push('/onboarding');
  };

  const handleSkip = () => {
    router.push('/onboarding/experience');
  };

  return (
    <>
      <StepIndicator steps={steps} currentStep={currentStep} />

      <Card className="max-w-3xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Educational Background
          </h1>
          <p className="text-gray-600">
            Add your educational qualifications
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
                  <GraduationCap className="w-5 h-5 text-blue-600" />
                  <h3 className="font-semibold text-gray-900">
                    Education {index + 1}
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

              {/* Institution */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Institution *
                </label>
                <Input
                  placeholder="e.g., Stanford University"
                  error={errors.education?.[index]?.institution?.message}
                  {...register(`education.${index}.institution`)}
                />
              </div>

              {/* Degree & Field of Study */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Degree *
                  </label>
                  <Input
                    placeholder="e.g., Bachelor's, Master's"
                    error={errors.education?.[index]?.degree?.message}
                    {...register(`education.${index}.degree`)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Field of Study *
                  </label>
                  <Input
                    placeholder="e.g., Computer Science"
                    error={errors.education?.[index]?.fieldOfStudy?.message}
                    {...register(`education.${index}.fieldOfStudy`)}
                  />
                </div>
              </div>

              {/* Dates */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Start Date *
                  </label>
                  <Input
                    type="month"
                    error={errors.education?.[index]?.startDate?.message}
                    {...register(`education.${index}.startDate`)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    End Date
                  </label>
                  <Input
                    type="month"
                    disabled={watch(`education.${index}.current`)}
                    error={errors.education?.[index]?.endDate?.message}
                    {...register(`education.${index}.endDate`)}
                  />
                </div>
              </div>

              {/* Current */}
              <Checkbox
                label="I'm currently studying here"
                {...register(`education.${index}.current`)}
              />

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <Textarea
                  rows={3}
                  placeholder="Notable achievements, coursework, honors..."
                  {...register(`education.${index}.description`)}
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
                institution: '',
                degree: '',
                fieldOfStudy: '',
                startDate: '',
                endDate: '',
                current: false,
                description: '',
              })
            }
            leftIcon={<Plus className="w-4 h-4" />}
            className="w-full"
          >
            Add Another Education
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
              Next: Experience
            </Button>
          </div>
        </form>
      </Card>
    </>
  );
}
