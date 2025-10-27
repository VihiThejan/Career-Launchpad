'use client';

import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ProgressBar } from '@/components/ui/ProgressBar';
import {
  TrendingUp,
  Award,
  Target,
  BookOpen,
  Clock,
  Calendar,
  CheckCircle,
} from 'lucide-react';

export default function ProgressPage() {
  const skillProgress = [
    { name: 'React', level: 85, total: 100, color: 'bg-blue-600' },
    { name: 'Node.js', level: 70, total: 100, color: 'bg-green-600' },
    { name: 'TypeScript', level: 65, total: 100, color: 'bg-indigo-600' },
    { name: 'AWS', level: 45, total: 100, color: 'bg-orange-600' },
    { name: 'Docker', level: 40, total: 100, color: 'bg-purple-600' },
  ];

  const achievements = [
    {
      id: 1,
      title: 'Fast Learner',
      description: 'Complete 5 courses in a month',
      iconType: 'TrendingUp',
      earned: true,
      date: 'Oct 15, 2025',
    },
    {
      id: 2,
      title: 'Certification Master',
      description: 'Earn 3 certifications',
      iconType: 'Award',
      earned: true,
      date: 'Sep 28, 2025',
    },
    {
      id: 3,
      title: 'Code Warrior',
      description: 'Complete 100 coding challenges',
      iconType: 'Target',
      earned: false,
      progress: 67,
    },
  ];

  const getAchievementIcon = (iconType: string) => {
    switch (iconType) {
      case 'TrendingUp': return TrendingUp;
      case 'Award': return Award;
      case 'Target': return Target;
      default: return Award;
    }
  };

  const recentActivities = [
    {
      id: 1,
      type: 'course',
      title: 'Completed "React Hooks" module',
      course: 'Advanced React Patterns',
      time: '2 hours ago',
    },
    {
      id: 2,
      type: 'assessment',
      title: 'Scored 95% on TypeScript Quiz',
      course: 'TypeScript Masterclass',
      time: '1 day ago',
    },
    {
      id: 3,
      type: 'certification',
      title: 'Earned AWS Cloud Practitioner',
      course: 'AWS Fundamentals',
      time: '3 days ago',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Learning Progress
        </h1>
        <p className="text-gray-600">
          Track your skills development and achievements
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <div className="text-center">
            <BookOpen className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <p className="text-3xl font-bold text-gray-900">13/20</p>
            <p className="text-sm text-gray-600">Courses Completed</p>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <Clock className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <p className="text-3xl font-bold text-gray-900">127</p>
            <p className="text-sm text-gray-600">Learning Hours</p>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <Award className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <p className="text-3xl font-bold text-gray-900">8</p>
            <p className="text-sm text-gray-600">Certificates Earned</p>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <TrendingUp className="w-8 h-8 text-orange-600 mx-auto mb-2" />
            <p className="text-3xl font-bold text-gray-900">24</p>
            <p className="text-sm text-gray-600">Skills Acquired</p>
          </div>
        </Card>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Skills Progress */}
          <Card title="Skills Progress" subtitle="Your technical proficiency">
            <div className="space-y-4">
              {skillProgress.map((skill) => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900">
                      {skill.name}
                    </span>
                    <span className="text-sm text-gray-600">
                      {skill.level}/{skill.total}
                    </span>
                  </div>
                  <ProgressBar value={skill.level} variant="success" />
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              View All Skills
            </Button>
          </Card>

          {/* Recent Activity */}
          <Card title="Recent Activity" subtitle="Your latest achievements">
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    {activity.type === 'course' && (
                      <BookOpen className="w-5 h-5 text-blue-600" />
                    )}
                    {activity.type === 'assessment' && (
                      <Target className="w-5 h-5 text-green-600" />
                    )}
                    {activity.type === 'certification' && (
                      <Award className="w-5 h-5 text-purple-600" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{activity.title}</p>
                    <p className="text-sm text-gray-600">{activity.course}</p>
                    <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Achievements */}
          <Card title="Achievements" subtitle={`${achievements.filter((a) => a.earned).length} earned`}>
            <div className="space-y-4">
              {achievements.map((achievement) => {
                const Icon = getAchievementIcon(achievement.iconType);
                return (
                  <div
                    key={achievement.id}
                    className={`p-4 rounded-lg border-2 ${
                      achievement.earned
                        ? 'bg-yellow-50 border-yellow-200'
                        : 'bg-gray-50 border-gray-200'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          achievement.earned
                            ? 'bg-yellow-200'
                            : 'bg-gray-200'
                        }`}
                      >
                        <Icon
                          className={`w-6 h-6 ${
                            achievement.earned
                              ? 'text-yellow-600'
                              : 'text-gray-400'
                          }`}
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {achievement.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {achievement.description}
                        </p>
                        {achievement.earned ? (
                          <div className="flex items-center gap-1 mt-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span className="text-xs text-gray-500">
                              {achievement.date}
                            </span>
                          </div>
                        ) : (
                          <div className="mt-2">
                            <ProgressBar
                              value={achievement.progress || 0}
                              variant="warning"
                              showLabel
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>

          {/* Weekly Goal */}
          <Card title="Weekly Goal">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 relative">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    className="text-gray-200"
                  />
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 40}`}
                    strokeDashoffset={`${2 * Math.PI * 40 * (1 - 0.73)}`}
                    className="text-blue-600"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-900">73%</span>
                </div>
              </div>
              <p className="font-medium text-gray-900 mb-1">
                11 / 15 hours
              </p>
              <p className="text-sm text-gray-600">
                Keep it up! 4 hours to go
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
