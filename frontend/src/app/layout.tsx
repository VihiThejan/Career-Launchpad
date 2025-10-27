import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ReactQueryProvider } from '@/lib/reactQuery';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { MobileMenu } from '@/components/layout/MobileMenu';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Career Launchpad - AI-Powered IT Career Development",
  description: "Transform your IT career with AI-powered guidance, personalized learning paths, and expert mentorship.",
  keywords: ["career development", "IT careers", "online learning", "mentorship", "job search"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ReactQueryProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <MobileMenu />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
