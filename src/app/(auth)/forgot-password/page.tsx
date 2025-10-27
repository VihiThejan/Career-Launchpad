'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { Mail, ArrowLeft, CheckCircle } from 'lucide-react';
import { useMutation } from '@tanstack/react-query';
import { z } from 'zod';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card } from '@/components/ui/Card';
import { useToast } from '@/hooks/useToast';
import { authService } from '@/services/auth.service';

const forgotPasswordSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

type ForgotPasswordData = z.infer<typeof forgotPasswordSchema>;

export default function ForgotPasswordPage() {
  const { showToast } = useToast();
  const [emailSent, setEmailSent] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordData>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const forgotPasswordMutation = useMutation({
    mutationFn: (data: ForgotPasswordData) =>
      authService.forgotPassword(data.email),
    onSuccess: (_, variables) => {
      setSubmittedEmail(variables.email);
      setEmailSent(true);
      showToast('Password reset link sent!', { type: 'success' });
    },
    onError: () => {
      showToast('Failed to send reset link. Please try again.', {
        type: 'error',
      });
    },
  });

  const onSubmit = (data: ForgotPasswordData) => {
    forgotPasswordMutation.mutate(data);
  };

  if (emailSent) {
    return (
      <Card className="w-full max-w-md text-center">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-2">Check Your Email</h1>
        <p className="text-gray-600 mb-6">
          We&apos;ve sent a password reset link to:
        </p>
        <p className="text-blue-600 font-medium mb-6">{submittedEmail}</p>
        <p className="text-sm text-gray-500 mb-8">
          Didn&apos;t receive the email? Check your spam folder or{' '}
          <button
            onClick={() => setEmailSent(false)}
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            try again
          </button>
        </p>

        <Link href="/login">
          <Button variant="outline" className="w-full" leftIcon={<ArrowLeft className="w-4 h-4" />}>
            Back to Login
          </Button>
        </Link>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Forgot Password?</h1>
        <p className="text-gray-600">
          No worries! Enter your email and we&apos;ll send you a reset link.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            leftIcon={<Mail className="w-4 h-4" />}
            error={errors.email?.message}
            {...register('email')}
          />
        </div>

        <Button
          type="submit"
          variant="primary"
          className="w-full"
          isLoading={forgotPasswordMutation.isPending}
        >
          Send Reset Link
        </Button>

        <Link href="/login">
          <Button
            type="button"
            variant="ghost"
            className="w-full"
            leftIcon={<ArrowLeft className="w-4 h-4" />}
          >
            Back to Login
          </Button>
        </Link>
      </form>
    </Card>
  );
}
