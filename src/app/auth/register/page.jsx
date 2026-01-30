// src/app/auth/register/page.jsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { User, Mail, Lock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Logo from '@/components/ui/Logo';
import { authService } from '@/lib/utils/auth';
import { registerSchema } from '@/lib/validations/auth';

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
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
      const validatedData = registerSchema.parse(formData);
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const result = authService.register({
        name: validatedData.name,
        email: validatedData.email,
        password: validatedData.password
      });
      
      if (result.success) {
        // Redirection vers dashboard
        router.push('/dashboard');
      } else {
        setErrors({ general: result.error });
      }
    } catch (error) {
      if (error.errors) {
        const zodErrors = {};
        error.errors.forEach(err => {
          zodErrors[err.path[0]] = err.message;
        });
        setErrors(zodErrors);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const getPasswordStrength = () => {
    const password = formData.password;
    if (!password) return { label: '', color: '', width: '0%' };
    
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    
    if (strength <= 1) return { label: 'Faible', color: 'bg-red-500', width: '25%' };
    if (strength === 2) return { label: 'Moyen', color: 'bg-yellow-500', width: '50%' };
    if (strength === 3) return { label: 'Bon', color: 'bg-blue-500', width: '75%' };
    return { label: 'Excellent', color: 'bg-green-500', width: '100%' };
  };

  const passwordStrength = getPasswordStrength();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[var(--color-neutral-50)] via-blue-50 to-[var(--color-secondary-light)] p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md"
      >
        <div className="bg-white rounded-2xl shadow-2xl p-8 border border-[var(--color-neutral-200)]">
          <div className="flex justify-center mb-6">
            <Logo size="lg" />
          </div>

          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-[var(--color-neutral-900)] mb-2">
              Créer un compte
            </h1>
            <p className="text-[var(--color-neutral-500)]">
              Rejoignez PulsAI dès maintenant !
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
              label="Nom complet"
              type="text"
              name="name"
              placeholder="John Doe"
              icon={User}
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
              required
            />

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

            <div>
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
              
              {formData.password && (
                <div className="mt-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-[var(--color-neutral-600)]">
                      Force du mot de passe
                    </span>
                    <span className={`text-xs font-medium ${
                      passwordStrength.label === 'Excellent' ? 'text-green-600' :
                      passwordStrength.label === 'Bon' ? 'text-blue-600' :
                      passwordStrength.label === 'Moyen' ? 'text-yellow-600' :
                      'text-red-600'
                    }`}>
                      {passwordStrength.label}
                    </span>
                  </div>
                  <div className="h-2 bg-[var(--color-neutral-100)] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: passwordStrength.width }}
                      className={`h-full ${passwordStrength.color} transition-all duration-300`}
                    />
                  </div>
                </div>
              )}
            </div>

            <Input
              label="Confirmer le mot de passe"
              type="password"
              name="confirmPassword"
              placeholder="••••••••"
              icon={CheckCircle2}
              value={formData.confirmPassword}
              onChange={handleChange}
              error={errors.confirmPassword}
              required
            />

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full mt-6"
              icon={ArrowRight}
              iconPosition="right"
              isLoading={isLoading}
            >
              Créer mon compte
            </Button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[var(--color-neutral-200)]"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-[var(--color-neutral-500)]">
                Vous avez déjà un compte ?
              </span>
            </div>
          </div>

          <Link href="/auth/login">
            <Button variant="outline" size="lg" className="w-full">
              Se connecter
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