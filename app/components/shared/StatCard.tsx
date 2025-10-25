import React from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  color?: 'blue' | 'red' | 'green' | 'yellow';
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, trend, color = 'blue' }) => {
  const colorClasses = {
    blue: 'from-[#012169] to-[#1E3A8A]',
    red: 'from-[#C8102E] to-[#DC2626]',
    green: 'from-green-600 to-green-500',
    yellow: 'from-yellow-600 to-yellow-500',
  };

  return (
    <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6 hover:shadow-md transition-all duration-200">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">{title}</p>
          <p className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{value}</p>
          {trend && (
            <div className="flex items-center space-x-1">
              <svg
                className={`w-4 h-4 ${trend.isPositive ? 'text-green-500 dark:text-green-400' : 'text-red-500 dark:text-red-400'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={trend.isPositive ? 'M5 10l7-7m0 0l7 7m-7-7v18' : 'M19 14l-7 7m0 0l-7-7m7 7V3'}
                />
              </svg>
              <span className={`text-sm font-medium ${trend.isPositive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                {Math.abs(trend.value)}%
              </span>
              <span className="text-gray-500 dark:text-gray-400 text-sm">vs last month</span>
            </div>
          )}
        </div>
        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${colorClasses[color]} flex items-center justify-center text-white shadow-md`}>
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
