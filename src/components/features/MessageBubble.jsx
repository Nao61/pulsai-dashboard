'use client';

import { motion } from 'framer-motion';

export default function MessageBubble({ message, index }) {
  const isAgent = message.sender === 'agent';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: index * 0.05 }}
      className={`flex ${isAgent ? 'justify-end' : 'justify-start'} mb-4`}
    >
      <div className={`flex items-end gap-2 max-w-[70%] ${isAgent ? 'flex-row-reverse' : 'flex-row'}`}>
        {!isAgent && (
          <div className="w-7 h-7 bg-gradient-to-br from-neutral-400 to-neutral-600 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white text-[11px] font-semibold">U</span>
          </div>
        )}

        <div>
          <div
            className={`
              px-4 py-2.5 rounded-2xl
              ${isAgent
                ? 'bg-primary text-white rounded-br-sm'
                : 'bg-neutral-100 text-neutral-900 rounded-bl-sm'
              }
            `}
          >
            <p className="text-[14px] leading-relaxed">{message.content}</p>
          </div>
          <span className={`text-[11px] text-neutral-500 mt-1 block ${isAgent ? 'text-right' : 'text-left'}`}>
            {message.time}
          </span>
        </div>


        {isAgent && (
          <div className="w-7 h-7 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white text-[11px] font-semibold">A</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}