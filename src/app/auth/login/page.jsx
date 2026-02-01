'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Logo from '@/components/ui/Logo';
import { authService } from '@/lib/utils/auth';
import { loginSchema } from '@/lib/validations/auth';

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setIsLoading(true);

    // Validation avec Zod
    try {
      const validatedData = loginSchema.parse(formData);
      await new Promise(resolve => setTimeout(resolve, 800));
      const result = authService.login(validatedData.email, validatedData.password);
      
      if (result.success) {
        router.push('/dashboard');
      } else {
        setErrors({ general: result.error });
      }
    } catch (error) {
      if (error.issues) {
        const zodErrors = {};
        error.issues.forEach(err => {
          zodErrors[err.path[0]] = err.message;
        });
        setErrors(zodErrors);
      } else {
        setErrors({ general: 'Une erreur est survenue' });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[var(--color-neutral-50)] via-blue-50 to-[var(--color-secondary-light)] p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md"
      >
        <div className="bg-white rounded-2xl shadow-2xl p-8 border border-[var(--color-neutral-200)]">
          <div className="flex justify-center mb-8">
            <Logo size="lg" />
          </div>

          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-[var(--color-neutral-900)] mb-2">
              Bon retour !
            </h1>
            <p className="text-[var(--color-neutral-500)]">
              Connectez-vous à votre espace PulsAI
            </p>
          </div>

          {errors.general && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg"
            >
              <p className="text-sm text-[var(--color-error)] flex items-center gap-2">
                <span className="text-lg">⚠️</span>
                {errors.general}
              </p>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <Input
              label="Adresse email"
              type="email"
              name="email"
              placeholder="exemple@email.com"
              icon={Mail}
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              required
            />

            <Input
              label="Mot de passe"
              type="password"
              name="password"
              placeholder="••••••••"
              icon={Lock}
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
              required
            />

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 text-[var(--color-primary)] border-[var(--color-neutral-300)] rounded focus:ring-2 focus:ring-[var(--color-primary)]"
                />
                <span className="text-[var(--color-neutral-600)]">Se souvenir de moi</span>
              </label>
              <button
                type="button"
                className="text-[var(--color-primary)] hover:underline font-medium"
              >
                Mot de passe oublié ?
              </button>
            </div>

            {/* Bouton submit */}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
              icon={ArrowRight}
              iconPosition="right"
              isLoading={isLoading}
            >
              Se connecter
            </Button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[var(--color-neutral-200)]"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-[var(--color-neutral-500)]">
                Pas encore de compte ?
              </span>
            </div>
          </div>

          <Link href="/auth/register">
            <Button variant="outline" size="lg" className="w-full">
              Créer un compte
            </Button>
          </Link>
        </div>

        <p className="text-center mt-6 text-sm text-[var(--color-neutral-500)]">
          © 2026 PulsAI - Propulsé par HARNIX
        </p>
      </motion.div>
    </div>
  );
}