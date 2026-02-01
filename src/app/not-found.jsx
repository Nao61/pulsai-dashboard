'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, MessageSquare, Ticket, ArrowLeft, Search } from 'lucide-react';
import Button from '@/components/ui/Button';
import Logo from '@/components/ui/Logo';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-blue-50 to-secondary-light flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="flex justify-center mb-8">
            <Logo size="lg" />
          </div>

          <div className="mb-8 relative">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative inline-block"
            >
              <span className="text-[150px] md:text-[200px] font-bold text-neutral-200 select-none leading-none">
                404
              </span>
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="w-24 h-24 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center shadow-xl"
                >
                  <Search className="w-12 h-12 text-white" />
                </motion.div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Page introuvable
            </h1>
            <p className="text-lg text-neutral-600 mb-8 max-w-md mx-auto">
              Oups ! La page que vous recherchez semble avoir disparu dans le cloud...
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-4"
          >
            <Link href="/dashboard" className="block">
              <Button 
                variant="primary" 
                size="lg" 
                icon={Home} 
                iconPosition="left"
                className="w-full sm:w-auto"
              >
                Retour au Dashboard
              </Button>
            </Link>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/dashboard/conversations">
                <button className="flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-neutral-200 text-neutral-700 font-medium rounded-lg hover:border-primary hover:text-primary transition-all w-full sm:w-auto">
                  <MessageSquare size={18} />
                  Conversations
                </button>
              </Link>

              <Link href="/dashboard/tickets">
                <button className="flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-neutral-200 text-neutral-700 font-medium rounded-lg hover:border-primary hover:text-primary transition-all w-full sm:w-auto">
                  <Ticket size={18} />
                  Tickets
                </button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 pt-8 border-t border-neutral-200"
          >
            <p className="text-sm text-neutral-500 mb-4">
              Pages disponibles dans PulsAI :
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                { label: 'Accueil', href: '/dashboard' },
                { label: 'Conversations', href: '/dashboard/conversations' },
                { label: 'Tickets', href: '/dashboard/tickets' },
                { label: 'Campagnes', href: '/dashboard/campaigns' },
              ].map((link) => (
                <Link key={link.href} href={link.href}>
                  <span className="px-3 py-1.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 text-sm font-medium rounded-lg transition-colors cursor-pointer">
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>


          <div className="mt-8">
            <p className="text-neutral-400 text-sm">
              © 2026 PulsAI - Propulsé par HARNIX SAS
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}