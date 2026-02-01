'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, MessageSquare, BarChart3, Shield } from 'lucide-react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Logo from '@/components/ui/Logo';
import { authService } from '@/lib/utils/auth';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    if (authService.isAuthenticated()) {
      router.push('/dashboard');
    }
  }, [router]);

  const features = [
    {
      icon: MessageSquare,
      title: 'Conversations intelligentes',
      description: 'Gérez toutes vos conversations client en un seul endroit'
    },
    {
      icon: Zap,
      title: 'IA intégrée',
      description: 'Automatisez les réponses avec notre assistant IA puissant'
    },
    {
      icon: BarChart3,
      title: 'Analytics en temps réel',
      description: 'Suivez vos performances avec des tableaux de bord détaillés'
    },
    {
      icon: Shield,
      title: 'Sécurisé & Fiable',
      description: 'Vos données sont protégées avec les meilleurs standards'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--color-neutral-50)] via-blue-50 to-[var(--color-secondary-light)]">
      {/* Header */}
      <header className="border-b border-white/20 bg-white/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Logo size="md" />
            <div className="flex items-center gap-2 sm:gap-4">
              <Link href="/auth/login">
                <Button variant="ghost" className="text-sm sm:text-base px-3 sm:px-4">
                  Se connecter
                </Button>
              </Link>
              <Link href="/auth/register">
                <Button variant="primary" className="text-sm sm:text-base px-3 sm:px-4">
                  Commencer
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-[var(--color-neutral-900)] mb-4 sm:mb-6 leading-tight">
              La plateforme CRM
              <span className="block bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] bg-clip-text text-transparent mt-2">
                {`propulsée par l'IA`}
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-[var(--color-neutral-600)] mb-8 sm:mb-10 max-w-2xl mx-auto px-4">
              Gérez vos conversations, tickets et campagnes marketing avec une intelligence artificielle qui comprend vos clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Link href="/auth/register" className="w-full sm:w-auto">
                <Button variant="primary" size="lg" icon={ArrowRight} iconPosition="right" className="w-full sm:w-auto">
                  Démarrer gratuitement
                </Button>
              </Link>
              <Link href="/auth/login" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Voir une démo
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12 sm:mt-16 relative px-4"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] blur-3xl opacity-20 rounded-3xl"></div>
            <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-2xl border border-[var(--color-neutral-200)] p-2 overflow-hidden">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg sm:rounded-xl aspect-video flex items-center justify-center p-4">
                <div className="text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] rounded-xl sm:rounded-2xl mx-auto mb-3 sm:mb-4 flex items-center justify-center shadow-lg">
                    <Zap size={32} className="text-white sm:w-10 sm:h-10" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-neutral-900)] mb-2">
                    Dashboard PulsAI
                  </h3>
                  <p className="text-sm sm:text-base text-[var(--color-neutral-600)]">
                    Interface moderne et intuitive
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="text-center mb-12 sm:mb-16 px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-neutral-900)] mb-3 sm:mb-4">
            Tout ce dont vous avez besoin
          </h2>
          <p className="text-base sm:text-lg text-[var(--color-neutral-600)]">
            Une solution complète pour gérer votre relation client
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 px-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-5 sm:p-6 shadow-lg border border-[var(--color-neutral-200)] hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] rounded-lg flex items-center justify-center mb-4">
                <feature.icon size={24} className="text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[var(--color-neutral-900)] mb-2">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-[var(--color-neutral-600)]">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center text-white shadow-2xl"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            Prêt à transformer votre CRM ?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 opacity-90">
            {`Rejoignez des milliers d'entreprises qui utilisent déjà PulsAI`}
          </p>
          <Link href="/auth/register" className="inline-block w-full sm:w-auto">
            <Button 
              variant="secondary" 
              size="lg" 
              icon={ArrowRight} 
              iconPosition="right"
              className="shadow-xl w-full sm:w-auto"
            >
              Commencer maintenant
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--color-neutral-200)] bg-white/50 backdrop-blur-sm mt-12 sm:mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <Logo size="sm" />
            <p className="text-xs sm:text-sm text-[var(--color-neutral-600)] text-center">
              © 2026 PulsAI - Propulsé par HARNIX SAS
            </p>
            <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm text-[var(--color-neutral-600)]">
              <a href="#" className="hover:text-[var(--color-primary)] transition-colors">
                Confidentialité
              </a>
              <a href="#" className="hover:text-[var(--color-primary)] transition-colors">
                Conditions
              </a>
              <a href="#" className="hover:text-[var(--color-primary)] transition-colors">
                Support
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}