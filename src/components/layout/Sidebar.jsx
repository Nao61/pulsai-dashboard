'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home, 
  MessageSquare, 
  Ticket, 
  Megaphone, 
  Bot, 
  Settings,
  LogOut,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '@/components/ui/Logo';
import { authService } from '@/lib/utils/auth';
import { useRouter } from 'next/navigation';

const menuItems = [
  { icon: Home, label: 'Accueil', href: '/dashboard' },
  { icon: MessageSquare, label: 'Conversations', href: '/dashboard/conversations' },
  { icon: Ticket, label: 'Tickets', href: '/dashboard/tickets' },
  { icon: Megaphone, label: 'Campagnes', href: '/dashboard/campaigns' },
  { icon: Bot, label: 'IA Assistant', href: '/dashboard/ai' },
  { icon: Settings, label: 'Paramètres', href: '/dashboard/settings' },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleLogout = () => {
    authService.logout();
    router.push('/auth/login');
  };

  return (
    <>
      <button
        onClick={() => setIsMobileOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md text-[var(--color-neutral-700)] hover:bg-[var(--color-neutral-100)]"
      >
        <Menu size={24} />
      </button>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileOpen(false)}
            className="lg:hidden fixed inset-0 bg-black/50 z-40"
          />
        )}
      </AnimatePresence>

      <motion.aside
        initial={{ x: -280 }}
        animate={{ x: isMobileOpen ? 0 : -280 }}
        transition={{ type: 'spring', damping: 25 }}
        className={`
          fixed lg:static inset-y-0 left-0 z-50
          w-64 bg-white border-r border-[var(--color-neutral-200)]
          flex flex-col
          lg:translate-x-0
        `}
      >
        <div className="p-6 border-b border-[var(--color-neutral-200)]">
          <div className="flex items-center justify-between">
            <Logo size="md" />
            <button
              onClick={() => setIsMobileOpen(false)}
              className="lg:hidden p-2 hover:bg-[var(--color-neutral-100)] rounded-lg"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileOpen(false)}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-lg
                  transition-all duration-200
                  ${isActive 
                    ? 'bg-[var(--color-primary)] text-white shadow-md' 
                    : 'text-[var(--color-neutral-700)] hover:bg-[var(--color-neutral-100)]'
                  }
                `}
              >
                <Icon size={20} />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-[var(--color-neutral-200)]">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-[var(--color-error)] hover:bg-red-50 transition-colors"
          >
            <LogOut size={20} />
            <span className="font-medium">Déconnexion</span>
          </button>
        </div>
      </motion.aside>
    </>
  );
}