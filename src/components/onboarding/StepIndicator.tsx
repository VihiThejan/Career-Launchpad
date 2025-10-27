'use client';

import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Step {
  id: number;
  name: string;
  description: string;
}

interface StepIndicatorProps {
  steps: Step[];
  currentStep: number;
}

export const StepIndicator = ({ steps, currentStep }: StepIndicatorProps) => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center flex-1">
            {/* Step Circle */}
            <div className="flex flex-col items-center">
              <div
                className={cn(
                  'w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all',
                  currentStep > step.id
                    ? 'bg-green-500 text-white'
                    : currentStep === step.id
                    ? 'bg-blue-600 text-white ring-4 ring-blue-100'
                    : 'bg-gray-200 text-gray-600'
                )}
              >
                {currentStep > step.id ? (
                  <Check className="w-5 h-5" />
                ) : (
                  step.id
                )}
              </div>
              
              {/* Step Label */}
              <div className="mt-2 text-center hidden sm:block">
                <p
                  className={cn(
                    'text-sm font-medium',
                    currentStep >= step.id
                      ? 'text-gray-900'
                      : 'text-gray-500'
                  )}
                >
                  {step.name}
                </p>
                <p className="text-xs text-gray-500 mt-0.5">
                  {step.description}
                </p>
              </div>
            </div>

            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div
                className={cn(
                  'flex-1 h-0.5 mx-2 transition-all',
                  currentStep > step.id
                    ? 'bg-green-500'
                    : 'bg-gray-200'
                )}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
