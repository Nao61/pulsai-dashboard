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
    user: 'HARNIX',
    action: 'a envoyé un nouveau message',
    time: 'Il y a 5 min',
    status: 'unread'
  },
  {
    id: 2,
    type: 'ticket',
    user: 'HARNIX SAS',
    action: 'a créé un ticket urgent',
    time: 'Il y a 12 min',
    status: 'urgent'
  },
  {
    id: 3,
    type: 'campaign',
    user: 'Système',
    action: 'Campagne envoyée avec succès',
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
    user: 'HARNIX GROUP',
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


export const conversations = [
  {
    id: 1,
    user: {
      name: 'Naofal LADJOLOU',
      email: 'naofal.ladjolou@email.com',
      avatar: 'NL',
      status: 'online'
    },
    lastMessage: 'Merci pour votre aide ! Le problème est résolu.',
    timestamp: '2 min',
    unread: 0,
    status: 'resolved',
    messages: [
      { id: 1, sender: 'user', content: 'Bonjour, j\'ai un problème avec ma commande #1234', time: '14:32' },
      { id: 2, sender: 'agent', content: 'Bonjour Naofal ! Je vais regarder ça tout de suite.', time: '14:33' },
      { id: 3, sender: 'agent', content: 'Je vois le problème, je vous envoie un lien de suivi.', time: '14:35' },
      { id: 4, sender: 'user', content: 'Merci pour votre aide ! Le problème est résolu.', time: '14:40' }
    ]
  },
  {
    id: 2,
    user: {
      name: 'Farid MOUSSILIOU',
      email: 'farid.moussiliou@email.com',
      avatar: 'FM',
      status: 'online'
    },
    lastMessage: 'Quand est-ce que je peux recevoir ma commande ?',
    timestamp: '15 min',
    unread: 2,
    status: 'active',
    messages: [
      { id: 1, sender: 'user', content: 'Bonjour, j\'ai passé commande hier', time: '10:15' },
      { id: 2, sender: 'user', content: 'Quand est-ce que je peux recevoir ma commande ?', time: '10:16' }
    ]
  },
  {
    id: 3,
    user: {
      name: 'Koss WEB',
      email: 'koss.web@email.com',
      avatar: 'KW',
      status: 'offline'
    },
    lastMessage: 'Parfait, merci beaucoup !',
    timestamp: '1h',
    unread: 0,
    status: 'resolved',
    messages: [
      { id: 1, sender: 'user', content: 'Je voudrais modifier mon adresse de livraison', time: '09:20' },
      { id: 2, sender: 'agent', content: 'Bien sûr ! Quelle est la nouvelle adresse ?', time: '09:21' },
      { id: 3, sender: 'user', content: 'Atlantique ABOMEY-CALAVI', time: '09:22' },
      { id: 4, sender: 'agent', content: 'C\'est noté ! L\'adresse a été mise à jour.', time: '09:23' },
      { id: 5, sender: 'user', content: 'Parfait, merci beaucoup !', time: '09:24' }
    ]
  },
  {
    id: 4,
    user: {
      name: 'Marc ALLADAGBIN',
      email: 'marc.a@email.com',
      avatar: 'MA',
      status: 'online'
    },
    lastMessage: 'Le paiement ne passe pas',
    timestamp: '2h',
    unread: 1,
    status: 'active',
    messages: [
      { id: 1, sender: 'user', content: 'Le paiement ne passe pas', time: '08:45' }
    ]
  },
  {
    id: 5,
    user: {
      name: 'Emma HOUESSOU',
      email: 'emma.houessou@email.com',
      avatar: 'EH',
      status: 'offline'
    },
    lastMessage: 'Produit de très bonne qualité',
    timestamp: '3h',
    unread: 0,
    status: 'resolved',
    messages: [
      { id: 1, sender: 'user', content: 'Produit reçu aujourd\'hui', time: '07:30' },
      { id: 2, sender: 'user', content: 'Produit de très bonne qualité', time: '07:31' }
    ]
  }
];

// Tickets mockés
export const tickets = {
  nouveau: [
    {
      id: 'T-001',
      title: 'Problème de connexion',
      description: 'Impossible de se connecter depuis ce matin',
      priority: 'high',
      customer: 'Naofal LADJOLOU',
      createdAt: '2h',
      tags: ['Compte', 'Urgent']
    },
    {
      id: 'T-002',
      title: 'Facture manquante',
      description: 'Je n\'ai pas reçu ma facture du mois dernier',
      priority: 'medium',
      customer: 'Farid MOUSSILIOU',
      createdAt: '4h',
      tags: ['Facturation']
    }
  ],
  enCours: [
    {
      id: 'T-003',
      title: 'Remboursement en attente',
      description: 'Demande de remboursement suite à retour produit',
      priority: 'high',
      customer: 'Koss WEB',
      createdAt: '1 jour',
      tags: ['Remboursement', 'Urgent']
    },
    {
      id: 'T-004',
      title: 'Question sur abonnement',
      description: 'Comment changer de formule ?',
      priority: 'low',
      customer: 'Marc ALLADAGBIN',
      createdAt: '2 jours',
      tags: ['Abonnement']
    }
  ],
  resolu: [
    {
      id: 'T-005',
      title: 'Mise à jour profil',
      description: 'Changement d\'adresse effectué',
      priority: 'low',
      customer: 'Emma HOUESSOU',
      createdAt: '3 jours',
      tags: ['Compte']
    },
    {
      id: 'T-006',
      title: 'Livraison reçue',
      description: 'Confirmation de réception',
      priority: 'medium',
      customer: 'HARNIX SAS',
      createdAt: '4 jours',
      tags: ['Livraison']
    }
  ]
};

// Campagnes mockées
export const campaigns = [
  {
    id: 1,
    name: 'Offre vacances 2026',
    status: 'active',
    type: 'email',
    sent: 12450,
    opened: 3087,
    clicked: 617,
    converted: 154,
    openRate: 24.8,
    clickRate: 20.0,
    conversionRate: 4.99,
    startDate: '01/02/2026',
    endDate: '29/02/2026',
    budget: '5 000€'
  },
  {
    id: 2,
    name: 'Relance Paniers Abandonnés',
    status: 'active',
    type: 'email',
    sent: 8923,
    opened: 2410,
    clicked: 723,
    converted: 289,
    openRate: 27.0,
    clickRate: 30.0,
    conversionRate: 12.0,
    startDate: '15/01/2026',
    endDate: '15/03/2026',
    budget: '3 000€'
  },
  {
    id: 3,
    name: 'Newsletter Janvier',
    status: 'completed',
    type: 'email',
    sent: 18456,
    opened: 4245,
    clicked: 849,
    converted: 127,
    openRate: 23.0,
    clickRate: 20.0,
    conversionRate: 2.99,
    startDate: '05/01/2026',
    endDate: '31/01/2026',
    budget: '2 500€'
  },
  {
    id: 4,
    name: 'Black Friday 2025',
    status: 'completed',
    type: 'sms',
    sent: 25678,
    opened: 23145,
    clicked: 6945,
    converted: 2084,
    openRate: 90.1,
    clickRate: 30.0,
    conversionRate: 8.12,
    startDate: '22/11/2025',
    endDate: '29/11/2025',
    budget: '10 000€'
  },
  {
    id: 5,
    name: 'Bienvenue Nouveaux Clients',
    status: 'draft',
    type: 'email',
    sent: 0,
    opened: 0,
    clicked: 0,
    converted: 0,
    openRate: 0,
    clickRate: 0,
    conversionRate: 0,
    startDate: '-',
    endDate: '-',
    budget: '1 500€'
  }
];