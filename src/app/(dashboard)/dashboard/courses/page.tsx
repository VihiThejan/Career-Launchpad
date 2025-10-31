'use client';

import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Badge } from '@/components/ui/Badge';
import { ProgressBar } from '@/components/ui/ProgressBar';
import {
  BookOpen,
  Search,
  Filter,
  Clock,
  Star,
  Play,
  CheckCircle,
} from 'lucide-react';
import Link from 'next/link';

export default function CoursesPage() {
  const courses = [
    {
      id: 1,
      title: 'Complete React Developer Course',
      instructor: 'Sarah Johnson',
      level: 'Intermediate',
      duration: '24 hours',
      rating: 4.8,
      students: 15234,
      progress: 65,
      enrolled: true,
      thumbnail: '',
    },
    {
      id: 2,
      title: 'Node.js Backend Masterclass',
      instructor: 'Mike Chen',
      level: 'Advanced',
      duration: '18 hours',
      rating: 4.9,
      students: 9823,
      progress: 42,
      enrolled: true,
      thumbnail: '',
    },
    {
      id: 3,
      title: 'AWS Solutions Architect',
      instructor: 'Emily Davis',
      level: 'Intermediate',
      duration: '32 hours',
      rating: 4.7,
      students: 12456,
      progress: 0,
      enrolled: false,
      thumbnail: '',
    },
    {
      id: 4,
      title: 'TypeScript Deep Dive',
      instructor: 'John Smith',
      level: 'Intermediate',
      duration: '12 hours',
      rating: 4.9,
      students: 8765,
      progress: 0,
      enrolled: false,
      thumbnail: '',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">My Courses</h1>
        <p className="text-gray-600">
          Continue learning or explore new courses
        </p>
      </div>

      {/* Search and Filters */}
      <Card>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <Input
              placeholder="Search courses..."
              leftIcon={<Search className="w-4 h-4" />}
            />
          </div>
          <Button variant="outline" leftIcon={<Filter className="w-4 h-4" />}>
            Filters
          </Button>
        </div>
      </Card>

      {/* Tabs */}
      <div className="flex gap-4 border-b border-gray-200">
        <button className="px-4 py-2 font-medium text-red-600 border-b-2 border-red-600">
          All Courses ({courses.length})
        </button>
        <button className="px-4 py-2 font-medium text-gray-600 hover:text-gray-900">
          In Progress ({courses.filter((c) => c.enrolled && c.progress > 0).length})
        </button>
        <button className="px-4 py-2 font-medium text-gray-600 hover:text-gray-900">
          Completed (0)
        </button>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Card key={course.id} className="group hover:shadow-lg transition-shadow">
            {/* Thumbnail */}
            <div className="aspect-video bg-gradient-to-br from-red-100  rounded-lg mb-4 flex items-center justify-center">
              <BookOpen className="w-12 h-12 text-red-600" />
            </div>

            {/* Content */}
            <div className="space-y-3">
              <div>
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-gray-900 line-clamp-2">
                    {course.title}
                  </h3>
                  {course.enrolled && course.progress === 100 && (
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  )}
                </div>
                <p className="text-sm text-gray-600">{course.instructor}</p>
              </div>

              <div className="flex items-center gap-2">
                <Badge variant="info" size="sm">
                  {course.level}
                </Badge>
                <span className="text-xs text-gray-500 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {course.duration}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-sm font-medium">{course.rating}</span>
                <span className="text-xs text-gray-500">
                  ({course.students.toLocaleString()} students)
                </span>
              </div>

              {course.enrolled && course.progress > 0 ? (
                <>
                  <ProgressBar value={course.progress} variant="success" showLabel />
                  <Button variant="primary" className="w-full">
                    <Play className="w-4 h-4 mr-2" />
                    Continue Learning
                  </Button>
                </>
              ) : course.enrolled ? (
                <Button variant="primary" className="w-full">
                  <Play className="w-4 h-4 mr-2" />
                  Start Course
                </Button>
              ) : (
                <Button variant="outline" className="w-full">
                  Enroll Now
                </Button>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
