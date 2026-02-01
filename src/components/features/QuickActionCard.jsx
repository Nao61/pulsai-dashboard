'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { MessageSquare, Ticket, Megaphone, Bot, ArrowRight } from 'lucide-react';

const iconMap = {
  MessageSquare,
  Ticket,
  Megaphone,
  Bot,
};

export default function QuickActionCard({ action, index }) {

  const Icon = iconMap[action.icon] || MessageSquare;

  const getColorClasses = () => {
    switch (action.color) {
      case 'primary': return 'bg-blue-50 border-blue-200 hover:bg-blue-100 text-[var(--color-primary)]';
      case 'warning': return 'bg-yellow-50 border-yellow-200 hover:bg-yellow-100 text-[var(--color-warning)]';
      case 'success': return 'bg-green-50 border-green-200 hover:bg-green-100 text-[var(--color-success)]';
      case 'info': return 'bg-purple-50 border-purple-200 hover:bg-purple-100 text-purple-600';
      default: return 'bg-gray-50 border-gray-200 hover:bg-gray-100 text-gray-600';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <Link href={action.href}>
        <div className={`
          p-6 rounded-xl border-2 
          transition-all duration-200 
          cursor-pointer group
          ${getColorClasses()}
        `}>
          <div className="flex items-start justify-between mb-3">
            <div className="p-3 rounded-lg bg-white shadow-sm">
              <Icon size={24} />
            </div>
            <ArrowRight 
              size={20} 
              className="opacity-0 group-hover:opacity-100 transition-opacity" 
            />
          </div>

          <h4 className="font-bold text-[var(--color-neutral-900)] mb-1">
            {action.title}
          </h4>
          <p className="text-sm text-[var(--color-neutral-600)]">
            {action.description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
