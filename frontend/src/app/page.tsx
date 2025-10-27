import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Rocket, GraduationCap, Briefcase, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Rocket className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">Career Launchpad</h1>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/register">
              <Button variant="primary">Get Started</Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge variant="info" className="mb-4">
            AI-Powered Career Platform
          </Badge>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Transform Your IT Career with AI Guidance
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get personalized learning paths, expert mentorship, and AI-powered career recommendations
            to accelerate your journey in tech.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" leftIcon={<Rocket className="w-5 h-5" />}>
                Start Your Journey
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold">Personalized Learning</h3>
              <p className="text-gray-600 text-sm">
                AI-curated courses tailored to your goals and skill level
              </p>
            </div>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                <Briefcase className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold">Job Matching</h3>
              <p className="text-gray-600 text-sm">
                Find opportunities that match your skills and aspirations
              </p>
            </div>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold">Expert Mentorship</h3>
              <p className="text-gray-600 text-sm">
                Connect with industry professionals for guidance
              </p>
            </div>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                <Rocket className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold">Career Roadmap</h3>
              <p className="text-gray-600 text-sm">
                Get a clear path from where you are to where you want to be
              </p>
            </div>
          </Card>
        </div>

        {/* Stats Section */}
        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="grid md:grid-cols-3 gap-8 text-center py-8">
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-blue-100">Active Learners</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Expert Mentors</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5,000+</div>
              <div className="text-blue-100">Jobs Posted</div>
            </div>
          </div>
        </Card>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t border-gray-200 mt-20">
        <div className="text-center text-gray-600">
          <p>© 2025 Career Launchpad. Built with Next.js & TypeScript.</p>
        </div>
      </footer>
    </div>
  );
}
