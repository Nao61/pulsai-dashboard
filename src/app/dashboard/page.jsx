'use client';

import { useEffect, useState } from 'react';
import { MessageSquare, Ticket, Megaphone, Bot } from 'lucide-react';
import StatCard from '@/components/features/StatCard';
import ActivityItem from '@/components/features/ActivityItem';
import QuickActionCard from '@/components/features/QuickActionCard';
import Card from '@/components/ui/Card';
import { dashboardStats, recentActivities, quickActions } from '@/data/mockData';
import { authService } from '@/lib/utils/auth';

export default function DashboardPage() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    setCurrentUser(authService.getCurrentUser());
  }, []);

  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-[var(--color-neutral-900)] mb-2">
          Bonjour, {currentUser?.name?.split(' ')[0] || 'Utilisateur'} 👋
        </h2>
        <p className="text-[var(--color-neutral-600)]">
          {`Voici un aperçu de votre activité CRM aujourd'hui`}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Conversations"
          value={dashboardStats.conversations.total.toLocaleString()}
          subtitle={`${dashboardStats.conversations.active} actives`}
          change={dashboardStats.conversations.change}
          trend={dashboardStats.conversations.trend}
          icon={MessageSquare}
          iconColor="primary"
          index={0}
        />
        
        <StatCard
          title="Tickets"
          value={dashboardStats.tickets.total}
          subtitle={`${dashboardStats.tickets.open} en attente`}
          change={dashboardStats.tickets.change}
          trend={dashboardStats.tickets.trend}
          icon={Ticket}
          iconColor="warning"
          index={1}
        />
        
        <StatCard
          title="Campagnes"
          value={dashboardStats.campaigns.total}
          subtitle={`${dashboardStats.campaigns.active} actives`}
          change={dashboardStats.campaigns.change}
          trend={dashboardStats.campaigns.trend}
          icon={Megaphone}
          iconColor="success"
          index={2}
        />
        
        <StatCard
          title="IA Interactions"
          value={dashboardStats.aiInteractions.total.toLocaleString()}
          subtitle={`${dashboardStats.aiInteractions.satisfaction}% satisfaction`}
          change={dashboardStats.aiInteractions.change}
          trend={dashboardStats.aiInteractions.trend}
          icon={Bot}
          iconColor="info"
          index={3}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <h3 className="text-xl font-bold text-[var(--color-neutral-900)] mb-4">
            Actions rapides
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {quickActions.map((action, index) => (
              <QuickActionCard key={action.id} action={action} index={index} />
            ))}
          </div>
        </div>

        <div className="lg:col-span-1">
          <h3 className="text-xl font-bold text-[var(--color-neutral-900)] mb-4">
            Activité récente
          </h3>
          <Card padding="none" className="max-h-[500px] overflow-y-auto">
            <div className="divide-y divide-[var(--color-neutral-100)]">
              {recentActivities.map((activity) => (
                <ActivityItem key={activity.id} activity={activity} />
              ))}
            </div>
          </Card>
        </div>
      </div>

      <Card>
        <h3 className="text-xl font-bold text-[var(--color-neutral-900)] mb-6">
          Performance mensuelle
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { label: 'Taux de résolution', value: '94.2%', color: 'success' },
            { label: 'Temps de réponse', value: '2.3 min', color: 'info' },
            { label: 'Satisfaction client', value: '4.8/5', color: 'success' },
            { label: 'Tickets ouverts', value: '45', color: 'warning' },
            { label: 'Taux d\'ouverture', value: '24.8%', color: 'primary' },
            { label: 'Conversion', value: '12.5%', color: 'success' }
          ].map((metric, index) => (
            <div key={index} className="text-center p-4 bg-[var(--color-neutral-50)] rounded-lg">
              <p className="text-2xl font-bold text-[var(--color-neutral-900)] mb-1">
                {metric.value}
              </p>
              <p className="text-sm text-[var(--color-neutral-600)]">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}