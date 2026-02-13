'use client';

import { useState, useEffect } from 'react';
import { Bell, User } from 'lucide-react';
import { authService } from '@/lib/utils/auth';
import Badge from '@/components/ui/Badge';

export default function Header() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    setCurrentUser(authService.getCurrentUser());
  }, []);

  return (
    <header className="bg-white border-b border-[var(--color-neutral-200)] px-6 py-4 sticky top-0 z-30">
      <div className="flex items-center justify-between">
        <div className="flex-1 ml-12">
          <h1 className="text-2xl font-bold text-[var(--color-neutral-900)]">
            Tableau de bord
          </h1>
          <p className="text-sm text-[var(--color-neutral-500)] mt-1">
            Bienvenue sur PulsAI
          </p>
        </div>

        <div className="flex items-center gap-4">
          <button className="relative p-2 hover:bg-[var(--color-neutral-100)] rounded-lg transition-colors">
            <Bell size={20} className="text-[var(--color-neutral-600)]" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-[var(--color-error)] rounded-full"></span>
          </button>

          <div className="flex items-center gap-3 pl-4 border-l border-[var(--color-neutral-200)]">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-medium text-[var(--color-neutral-900)]">
                {currentUser?.name || 'Utilisateur'}
              </p>
              <p className="text-xs text-[var(--color-neutral-500)]">
                {currentUser?.email || ''}
              </p>
            </div>
            <div className="w-10 h-10 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] rounded-full flex items-center justify-center text-white font-bold shadow-md">
              {currentUser?.name?.charAt(0)?.toUpperCase() || 'U'}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}