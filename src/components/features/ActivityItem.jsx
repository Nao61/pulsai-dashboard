'use client';

import { MessageSquare, Ticket, Megaphone, Bot, CheckCircle2 } from 'lucide-react';
import Badge from '@/components/ui/Badge';

const iconMap = {
  conversation: MessageSquare,
  ticket: Ticket,
  campaign: Megaphone,
  ai: Bot,
  default: CheckCircle2,
};

export default function ActivityItem({ activity }) {
  
  const Icon = iconMap[activity.type] || iconMap.default;

  const getIconColor = () => {
    switch (activity.type) {
      case 'conversation': return 'bg-blue-100 text-[var(--color-primary)]';
      case 'ticket': return 'bg-yellow-100 text-[var(--color-warning)]';
      case 'campaign': return 'bg-green-100 text-[var(--color-success)]';
      case 'ai': return 'bg-purple-100 text-purple-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  const getBadgeVariant = () => {
    switch (activity.status) {
      case 'unread': return 'primary';
      case 'urgent': return 'error';
      case 'success': return 'success';
      case 'resolved': return 'success';
      case 'info': return 'info';
      default: return 'default';
    }
  };

  return (
    <div className="flex items-start gap-4 p-4 hover:bg-[var(--color-neutral-50)] rounded-lg transition-colors">
      <div className={`p-2 rounded-lg ${getIconColor()}`}>
        <Icon size={18} />
      </div>
      
      <div className="flex-1 min-w-0">
        <p className="text-sm text-[var(--color-neutral-900)] font-medium">
          {activity.user}
        </p>
        <p className="text-sm text-[var(--color-neutral-600)] mt-0.5">
          {activity.action}
        </p>
        <p className="text-xs text-[var(--color-neutral-500)] mt-1">
          {activity.time}
        </p>
      </div>

      <Badge variant={getBadgeVariant()} size="sm">
        {activity.status}
      </Badge>
    </div>
  );
}
