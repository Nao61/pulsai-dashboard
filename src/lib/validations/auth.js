import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string()
    .min(1, 'Veuillez remplir cet champ')
    .email('Email invalide'),
  password: z.string()
    .min(1, 'Veuillez remplir cet champ')
});

export const registerSchema = z.object({
  name: z.string()
    .min(1, 'Veuillez remplir cet champ')
    .min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string()
    .min(1, 'Veuillez remplir cet champ')
    .email('Email invalide'),
  password: z.string()
    .min(1, 'Veuillez remplir cet champ')
    .min(6, 'Le mot de passe doit contenir au moins 6 caractères')
    .regex(/[A-Z]/, 'Le mot de passe doit contenir au moins une majuscule')
    .regex(/[0-9]/, 'Le mot de passe doit contenir au moins un chiffre'),
  confirmPassword: z.string()
    .min(1, 'Veuillez confirmer le mot de passe')
}).refine(data => data.password === data.confirmPassword, {
  message: 'Les mots de passe ne correspondent pas',
  path: ['confirmPassword']
});