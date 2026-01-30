//Simulation de Données pour le Dashboard
export const dashboardStats = {
  conversations: {
    total: 1247,
    active: 89,
    resolved: 1158,
    change: +12.5,
    trend: 'up'
  },
  tickets: {
    total: 342,
    open: 45,
    inProgress: 28,
    resolved: 269,
    change: -3.2,
    trend: 'down'
  },
  campaigns: {
    total: 18,
    active: 5,
    completed: 13,
    avgOpenRate: 24.8,
    change: +8.4,
    trend: 'up'
  },
  aiInteractions: {
    total: 3842,
    today: 124,
    avgResponseTime: '2.3s',
    satisfaction: 94.2,
    change: +5.7,
    trend: 'up'
  }
};

export const recentActivities = [
  {
    id: 1,
    type: 'conversation',
    user: 'Marie Dupont',
    action: 'a envoyé un nouveau message',
    time: 'Il y a 5 min',
    status: 'unread'
  },
  {
    id: 2,
    type: 'ticket',
    user: 'Jean Martin',
    action: 'a créé un ticket urgent',
    time: 'Il y a 12 min',
    status: 'urgent'
  },
  {
    id: 3,
    type: 'campaign',
    user: 'Système',
    action: 'Campagne "Promo Été" envoyée avec succès',
    time: 'Il y a 1h',
    status: 'success'
  },
  {
    id: 4,
    type: 'ai',
    user: 'IA Assistant',
    action: 'a traité 15 nouvelles conversations',
    time: 'Il y a 2h',
    status: 'info'
  },
  {
    id: 5,
    type: 'ticket',
    user: 'Sophie Leclerc',
    action: 'a résolu le ticket #1234',
    time: 'Il y a 3h',
    status: 'resolved'
  }
];

export const quickActions = [
  {
    id: 1,
    title: 'Nouvelle conversation',
    description: 'Démarrer un chat avec un client',
    icon: 'MessageSquare',
    color: 'primary',
    href: '/dashboard/conversations'
  },
  {
    id: 2,
    title: 'Créer un ticket',
    description: 'Ouvrir un nouveau ticket support',
    icon: 'Ticket',
    color: 'warning',
    href: '/dashboard/tickets'
  },
  {
    id: 3,
    title: 'Lancer une campagne',
    description: 'Créer une nouvelle campagne marketing',
    icon: 'Megaphone',
    color: 'success',
    href: '/dashboard/campaigns'
  },
  {
    id: 4,
    title: 'IA Assistant',
    description: 'Configurer les réponses automatiques',
    icon: 'Bot',
    color: 'info',
    href: '/dashboard/ai'
  }
];

export const performanceData = [
  { month: 'Jan', tickets: 245, conversations: 892 },
  { month: 'Fév', tickets: 289, conversations: 1024 },
  { month: 'Mar', tickets: 312, conversations: 1156 },
  { month: 'Avr', tickets: 298, conversations: 1089 },
  { month: 'Mai', tickets: 334, conversations: 1247 },
  { month: 'Juin', tickets: 342, conversations: 1312 }
];