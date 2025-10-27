'use client';

import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { Badge } from '@/components/ui/Badge';
import { Avatar } from '@/components/ui/Avatar';
import {
  BookOpen,
  Briefcase,
  Award,
  TrendingUp,
  Clock,
  Target,
  Users,
  Calendar,
  CheckCircle,
  ArrowRight,
  Play,
  Star,
} from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  // Mock data - replace with real data from API
  const user = {
    name: 'John Doe',
    avatar: '',
    level: 'Intermediate',
  };

  const stats = [
    {
      label: 'Courses Enrolled',
      value: '12',
      change: '+2 this month',
      icon: BookOpen,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      label: 'Skills Acquired',
      value: '24',
      change: '+5 this month',
      icon: Award,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      label: 'Job Applications',
      value: '8',
      change: '+3 this week',
      icon: Briefcase,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      label: 'Learning Hours',
      value: '47',
      change: '+12 this week',
      icon: Clock,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
  ];

  const activeCourses = [
    {
      id: 1,
      title: 'Advanced React Patterns',
      progress: 65,
      instructor: 'Sarah Johnson',
      nextLesson: 'Context API Deep Dive',
      thumbnail: '',
    },
    {
      id: 2,
      title: 'Node.js Backend Development',
      progress: 42,
      instructor: 'Mike Chen',
      nextLesson: 'Express Middleware',
      thumbnail: '',
    },
    {
      id: 3,
      title: 'AWS Cloud Practitioner',
      progress: 28,
      instructor: 'Emily Davis',
      nextLesson: 'EC2 Basics',
      thumbnail: '',
    },
  ];

  const upcomingTasks = [
    {
      id: 1,
      title: 'Complete React project assignment',
      course: 'Advanced React Patterns',
      dueDate: '2 days',
      priority: 'high',
    },
    {
      id: 2,
      title: 'Submit portfolio review',
      course: 'Career Development',
      dueDate: '5 days',
      priority: 'medium',
    },
    {
      id: 3,
      title: 'Practice coding challenges',
      course: 'Interview Prep',
      dueDate: '1 week',
      priority: 'low',
    },
  ];

  const recommendedCourses = [
    {
      id: 1,
      title: 'TypeScript Masterclass',
      level: 'Intermediate',
      duration: '8 hours',
      rating: 4.8,
      students: 12453,
    },
    {
      id: 2,
      title: 'System Design Interview',
      level: 'Advanced',
      duration: '12 hours',
      rating: 4.9,
      students: 8921,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, {user.name}! 👋
          </h1>
          <p className="text-gray-600 mt-1">
            Here&apos;s your learning progress and upcoming activities
          </p>
        </div>
        <Badge variant="info" size="lg">
          {user.level}
        </Badge>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label} className="relative overflow-hidden">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                  <p className="text-xs text-green-600 mt-2">{stat.change}</p>
                </div>
                <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Active Courses - Left Column (2/3) */}
        <div className="lg:col-span-2 space-y-6">
          {/* Continue Learning */}
          <Card
            title="Continue Learning"
            subtitle={`${activeCourses.length} courses in progress`}
          >
            <div className="space-y-4">
              {activeCourses.map((course) => (
                <div
                  key={course.id}
                  className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {course.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        Instructor: {course.instructor}
                      </p>
                    </div>
                    <Button size="sm" variant="primary">
                      <Play className="w-4 h-4 mr-1" />
                      Resume
                    </Button>
                  </div>
                  
                  <div className="mb-2">
                    <ProgressBar
                      value={course.progress}
                      variant="success"
                      showLabel
                    />
                  </div>
                  
                  <p className="text-xs text-gray-500">
                    Next: {course.nextLesson}
                  </p>
                </div>
              ))}
            </div>
            
            <Link href="/dashboard/courses" className="block mt-4">
              <Button variant="ghost" className="w-full">
                View All Courses
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </Card>

          {/* Career Progress */}
          <Card
            title="Career Progress"
            subtitle="Your path to becoming a Senior Developer"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="font-medium text-gray-900">Junior Developer</p>
                    <p className="text-sm text-gray-600">Completed</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-blue-50 border-2 border-blue-400 rounded-lg">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-900">Mid-Level Developer</p>
                    <p className="text-sm text-gray-600">In Progress - 68%</p>
                  </div>
                </div>
                <Badge variant="info">Current</Badge>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 border border-gray-200 rounded-lg">
                <div className="flex items-center gap-3">
                  <Target className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="font-medium text-gray-900">Senior Developer</p>
                    <p className="text-sm text-gray-600">Target Goal</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Upcoming Tasks */}
          <Card title="Upcoming Tasks" subtitle={`${upcomingTasks.length} tasks pending`}>
            <div className="space-y-3">
              {upcomingTasks.map((task) => (
                <div
                  key={task.id}
                  className="p-3 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors"
                >
                  <div className="flex items-start gap-2 mb-2">
                    <input
                      type="checkbox"
                      className="mt-1 rounded border-gray-300"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">
                        {task.title}
                      </p>
                      <p className="text-xs text-gray-500">{task.course}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      Due in {task.dueDate}
                    </span>
                    <Badge
                      variant={
                        task.priority === 'high'
                          ? 'danger'
                          : task.priority === 'medium'
                          ? 'warning'
                          : 'default'
                      }
                      size="sm"
                    >
                      {task.priority}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
            
            <Link href="/dashboard/tasks" className="block mt-4">
              <Button variant="ghost" className="w-full text-sm">
                View All Tasks
              </Button>
            </Link>
          </Card>

          {/* Recommended Courses */}
          <Card title="Recommended for You">
            <div className="space-y-4">
              {recommendedCourses.map((course) => (
                <div
                  key={course.id}
                  className="p-3 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors"
                >
                  <h4 className="font-medium text-gray-900 mb-2">
                    {course.title}
                  </h4>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="info" size="sm">
                      {course.level}
                    </Badge>
                    <span className="text-xs text-gray-500">
                      {course.duration}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{course.rating}</span>
                      <span className="text-xs text-gray-500">
                        ({course.students.toLocaleString()})
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <Link href="/dashboard/courses" className="block mt-4">
              <Button variant="primary" className="w-full text-sm">
                Explore Courses
              </Button>
            </Link>
          </Card>

          {/* Quick Actions */}
          <Card title="Quick Actions">
            <div className="space-y-2">
              <Link href="/dashboard/assessments">
                <Button variant="outline" className="w-full justify-start">
                  <Target className="w-4 h-4 mr-2" />
                  Take Assessment
                </Button>
              </Link>
              <Link href="/dashboard/mentors">
                <Button variant="outline" className="w-full justify-start">
                  <Users className="w-4 h-4 mr-2" />
                  Find a Mentor
                </Button>
              </Link>
              <Link href="/dashboard/jobs">
                <Button variant="outline" className="w-full justify-start">
                  <Briefcase className="w-4 h-4 mr-2" />
                  Browse Jobs
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
