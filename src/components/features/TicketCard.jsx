'use client';

import { motion } from 'framer-motion';
import { Clock, User, MoreVertical } from 'lucide-react';
import Badge from '@/components/ui/Badge';

export default function TicketCard({ ticket }) {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'error';
      case 'medium': return 'warning';
      case 'low': return 'info';
      default: return 'default';
    }
  };

  const getPriorityLabel = (priority) => {
    switch (priority) {
      case 'high': return 'Urgent';
      case 'medium': return 'Moyen';
      case 'low': return 'Faible';
      default: return priority;
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -2 }}
      className="bg-white rounded-lg border border-neutral-200 p-4 cursor-pointer hover:shadow-md transition-all"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[12px] font-mono text-neutral-500">{ticket.id}</span>
            <Badge variant={getPriorityColor(ticket.priority)} size="sm">
              {getPriorityLabel(ticket.priority)}
            </Badge>
          </div>
          <h4 className="text-[15px] font-semibold text-neutral-900 mb-1 line-clamp-2">
            {ticket.title}
          </h4>
          <p className="text-[13px] text-neutral-600 line-clamp-2">
            {ticket.description}
          </p>
        </div>
        <button className="p-1 hover:bg-neutral-100 rounded transition-colors flex-shrink-0">
          <MoreVertical size={16} className="text-neutral-400" />
        </button>
      </div>

      {ticket.tags && ticket.tags.length > 0 && (
        <div className="flex items-center gap-1.5 mb-3 flex-wrap">
          {ticket.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-0.5 bg-neutral-100 text-neutral-700 text-[11px] font-medium rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="flex items-center justify-between pt-3 border-t border-neutral-100">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center">
            <span className="text-white text-[10px] font-medium">
              {ticket.customer.charAt(0)}
            </span>
          </div>
          <span className="text-[12px] text-neutral-600">{ticket.customer}</span>
        </div>
        <div className="flex items-center gap-1 text-neutral-500">
          <Clock size={12} />
          <span className="text-[11px]">{ticket.createdAt}</span>
        </div>
      </div>
    </motion.div>
  );
}