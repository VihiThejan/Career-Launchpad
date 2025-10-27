'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Select } from '@/components/ui/Select';
import { StepIndicator } from '@/components/onboarding/StepIndicator';
import { Plus, X, Code } from 'lucide-react';
import { useToast } from '@/hooks/useToast';

const steps = [
  { id: 1, name: 'Personal Info', description: 'Tell us about yourself' },
  { id: 2, name: 'Education', description: 'Your educational background' },
  { id: 3, name: 'Experience', description: 'Your work history' },
  { id: 4, name: 'Skills', description: 'Your technical skills' },
  { id: 5, name: 'Goals', description: 'Your career aspirations' },
];

interface Skill {
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

const popularSkills = [
  'JavaScript',
  'Python',
  'Java',
  'React',
  'Node.js',
  'TypeScript',
  'SQL',
  'AWS',
  'Docker',
  'Git',
  'MongoDB',
  'Angular',
  'Vue.js',
  'C++',
  'Go',
];

export default function SkillsPage() {
  const router = useRouter();
  const { showToast } = useToast();
  const [currentStep] = useState(4);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [newSkillName, setNewSkillName] = useState('');
  const [newSkillLevel, setNewSkillLevel] = useState<Skill['level']>('intermediate');

  const addSkill = () => {
    if (!newSkillName.trim()) {
      showToast('Please enter a skill name', { type: 'error' });
      return;
    }

    if (skills.some((s) => s.name.toLowerCase() === newSkillName.toLowerCase())) {
      showToast('Skill already added', { type: 'warning' });
      return;
    }

    setSkills([...skills, { name: newSkillName.trim(), level: newSkillLevel }]);
    setNewSkillName('');
    setNewSkillLevel('intermediate');
  };

  const removeSkill = (skillName: string) => {
    setSkills(skills.filter((s) => s.name !== skillName));
  };

  const addPopularSkill = (skillName: string) => {
    if (skills.some((s) => s.name === skillName)) {
      showToast('Skill already added', { type: 'warning' });
      return;
    }
    setSkills([...skills, { name: skillName, level: 'intermediate' }]);
  };

  const getLevelColor = (level: Skill['level']) => {
    switch (level) {
      case 'beginner':
        return 'default';
      case 'intermediate':
        return 'info';
      case 'advanced':
        return 'success';
      case 'expert':
        return 'warning';
      default:
        return 'default';
    }
  };

  const handleSubmit = () => {
    if (skills.length === 0) {
      showToast('Please add at least one skill', { type: 'error' });
      return;
    }

    localStorage.setItem('onboarding_step4', JSON.stringify({ skills }));
    router.push('/onboarding/goals');
  };

  const handleBack = () => {
    router.push('/onboarding/experience');
  };

  const handleSkip = () => {
    router.push('/onboarding/goals');
  };

  return (
    <>
      <StepIndicator steps={steps} currentStep={currentStep} />

      <Card className="max-w-3xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Technical Skills
          </h1>
          <p className="text-gray-600">
            Add your technical skills and proficiency levels
          </p>
        </div>

        {/* Add Skill Form */}
        <div className="mb-6 p-5 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2 mb-4">
            <Code className="w-5 h-5 text-blue-600" />
            <h3 className="font-semibold text-gray-900">Add a Skill</h3>
          </div>

          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-1">
              <Input
                value={newSkillName}
                onChange={(e) => setNewSkillName(e.target.value)}
                placeholder="e.g., JavaScript, Python, AWS"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    addSkill();
                  }
                }}
              />
            </div>
            <div className="w-full md:w-48">
              <Select
                value={newSkillLevel}
                onChange={(e) => setNewSkillLevel(e.target.value as Skill['level'])}
                options={[
                  { value: 'beginner', label: 'Beginner' },
                  { value: 'intermediate', label: 'Intermediate' },
                  { value: 'advanced', label: 'Advanced' },
                  { value: 'expert', label: 'Expert' },
                ]}
              />
            </div>
            <Button
              type="button"
              onClick={addSkill}
              leftIcon={<Plus className="w-4 h-4" />}
            >
              Add
            </Button>
          </div>
        </div>

        {/* Popular Skills */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-700 mb-3">
            Popular Skills (click to add)
          </h3>
          <div className="flex flex-wrap gap-2">
            {popularSkills.map((skill) => (
              <button
                key={skill}
                type="button"
                onClick={() => addPopularSkill(skill)}
                className="px-3 py-1 text-sm bg-white border border-gray-300 rounded-full hover:border-blue-500 hover:text-blue-600 transition-colors"
              >
                + {skill}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Skills */}
        {skills.length > 0 && (
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-700 mb-3">
              Your Skills ({skills.length})
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg"
                >
                  <span className="font-medium text-gray-900">{skill.name}</span>
                  <Badge variant={getLevelColor(skill.level)} size="sm">
                    {skill.level}
                  </Badge>
                  <button
                    type="button"
                    onClick={() => removeSkill(skill.name)}
                    className="ml-1 text-gray-400 hover:text-red-600 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

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
          <Button type="button" variant="primary" onClick={handleSubmit}>
            Next: Goals
          </Button>
        </div>
      </Card>
    </>
  );
}
