'use client';

import { motion } from 'framer-motion';
import Badge from '@/components/ui/Badge';

export default function ConversationItem({ conversation, isActive, onClick }) {
  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'success';
      case 'resolved': return 'default';
      default: return 'default';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{ x: 2 }}
      onClick={onClick}
      className={`
        p-4 border-b border-neutral-100 cursor-pointer transition-colors
        ${isActive ? 'bg-blue-50 border-l-4 border-l-primary' : 'hover:bg-neutral-50'}
      `}
    >
      <div className="flex items-start gap-3">
        <div className="relative flex-shrink-0">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center">
            <span className="text-white text-[14px] font-semibold">
              {conversation.user.avatar}
            </span>
          </div>
          {conversation.user.status === 'online' && (
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-success border-2 border-white rounded-full"></div>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-1">
            <h4 className="text-[14px] font-semibold text-neutral-900 truncate">
              {conversation.user.name}
            </h4>
            <span className="text-[12px] text-neutral-500 flex-shrink-0 ml-2">
              {conversation.timestamp}
            </span>
          </div>
          <p className="text-[13px] text-neutral-600 line-clamp-2 mb-2">
            {conversation.lastMessage}
          </p>
          <div className="flex items-center gap-2">
            <Badge variant={getStatusColor(conversation.status)} size="sm">
              {conversation.status === 'active' ? 'Active' : 'Résolue'}
            </Badge>
            {conversation.unread > 0 && (
              <span className="px-2 py-0.5 bg-primary text-white text-[11px] font-semibold rounded-full">
                {conversation.unread}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}