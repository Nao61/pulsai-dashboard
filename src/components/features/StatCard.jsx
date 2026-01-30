'use client';

import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';
import Card from '@/components/ui/Card';

export default function StatCard({ 
  title, 
  value, 
  subtitle, 
  change, 
  trend, 
  icon: Icon,
  iconColor = 'primary',
  index = 0 
}) {
  
  const iconColors = {
    primary: 'bg-blue-100 text-[var(--color-primary)]',
    success: 'bg-green-100 text-[var(--color-success)]',
    warning: 'bg-yellow-100 text-[var(--color-warning)]',
    info: 'bg-purple-100 text-purple-600'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Card hover padding="md" className="h-full">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-sm text-[var(--color-neutral-500)] font-medium mb-1">
              {title}
            </p>
            <h3 className="text-3xl font-bold text-[var(--color-neutral-900)] mb-2">
              {value}
            </h3>
            <p className="text-sm text-[var(--color-neutral-600)]">
              {subtitle}
            </p>
          </div>
          
          <div className={`p-3 rounded-lg ${iconColors[iconColor]}`}>
            <Icon size={24} />
          </div>
        </div>

        {/* Indicateur de changement */}
        {change !== undefined && (
          <div className="mt-4 pt-4 border-t border-[var(--color-neutral-100)]">
            <div className="flex items-center gap-1">
              {trend === 'up' ? (
                <TrendingUp size={16} className="text-[var(--color-success)]" />
              ) : (
                <TrendingDown size={16} className="text-[var(--color-error)]" />
              )}
              <span className={`text-sm font-medium ${
                trend === 'up' ? 'text-[var(--color-success)]' : 'text-[var(--color-error)]'
              }`}>
                {change > 0 ? '+' : ''}{change}%
              </span>
              <span className="text-sm text-[var(--color-neutral-500)] ml-1">
                vs mois dernier
              </span>
            </div>
          </div>
        )}
      </Card>
    </motion.div>
  );
}