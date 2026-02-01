import { Ubuntu } from 'next/font/google';
import './globals.css';

const ubuntu = Ubuntu({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ubuntu'
});

export const metadata = {
  title: 'PulsAI - CRM Intelligence Artificielle',
  description: 'Plateforme CRM propulsée par IA pour gérer conversations, tickets et campagnes',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={ubuntu.variable}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}