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
import { StepIndicator } from '@/components/onboarding/StepIndicator';
import { User, MapPin, Briefcase } from 'lucide-react';

const steps = [
  { id: 1, name: 'Personal Info', description: 'Tell us about yourself' },
  { id: 2, name: 'Education', description: 'Your educational background' },
  { id: 3, name: 'Experience', description: 'Your work history' },
  { id: 4, name: 'Skills', description: 'Your technical skills' },
  { id: 5, name: 'Goals', description: 'Your career aspirations' },
];

const personalInfoSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  title: z.string().optional(),
  location: z.string().optional(),
  phone: z.string().optional(),
  bio: z.string().max(500, 'Bio must be less than 500 characters').optional(),
});

type PersonalInfoData = z.infer<typeof personalInfoSchema>;

export default function OnboardingPage() {
  const router = useRouter();
  const [currentStep] = useState(1);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PersonalInfoData>({
    resolver: zodResolver(personalInfoSchema),
  });

  const onSubmit = (data: PersonalInfoData) => {
    console.log('Personal info:', data);
    // Save to localStorage or state management
    localStorage.setItem('onboarding_step1', JSON.stringify(data));
    router.push('/onboarding/education');
  };

  const handleSkip = () => {
    router.push('/onboarding/education');
  };

  return (
    <>
      <StepIndicator steps={steps} currentStep={currentStep} />

      <Card className="max-w-2xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Personal Information
          </h1>
          <p className="text-gray-600">
            Let&apos;s start with some basic information about you
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* First Name & Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                First Name *
              </label>
              <Input
                id="firstName"
                type="text"
                placeholder="John"
                leftIcon={<User className="w-4 h-4" />}
                error={errors.firstName?.message}
                {...register('firstName')}
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Last Name *
              </label>
              <Input
                id="lastName"
                type="text"
                placeholder="Doe"
                leftIcon={<User className="w-4 h-4" />}
                error={errors.lastName?.message}
                {...register('lastName')}
              />
            </div>
          </div>

          {/* Professional Title */}
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Professional Title
            </label>
            <Input
              id="title"
              type="text"
              placeholder="e.g., Software Developer, Data Analyst"
              leftIcon={<Briefcase className="w-4 h-4" />}
              error={errors.title?.message}
              {...register('title')}
            />
          </div>

          {/* Location */}
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Location
            </label>
            <Input
              id="location"
              type="text"
              placeholder="City, Country"
              leftIcon={<MapPin className="w-4 h-4" />}
              error={errors.location?.message}
              {...register('location')}
            />
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Phone Number
            </label>
            <Input
              id="phone"
              type="tel"
              placeholder="+1 (555) 123-4567"
              error={errors.phone?.message}
              {...register('phone')}
            />
          </div>

          {/* Bio */}
          <div>
            <label
              htmlFor="bio"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Bio
            </label>
            <Textarea
              id="bio"
              rows={4}
              placeholder="Tell us about yourself, your interests, and what you're looking for..."
              maxLength={500}
              showCount
              error={errors.bio?.message}
              {...register('bio')}
            />
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center pt-4">
            <Button type="button" variant="ghost" onClick={handleSkip}>
              Skip
            </Button>
            <Button type="submit" variant="primary">
              Next: Education
            </Button>
          </div>
        </form>
      </Card>
    </>
  );
}
