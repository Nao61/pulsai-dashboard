'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Plus, 
  Search, 
  Filter,
  Mail,
  MessageSquare,
  TrendingUp,
  Calendar,
  DollarSign,
  MoreVertical,
  Play,
  Pause,
  Edit,
  Trash2
} from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { campaigns } from '@/data/mockData';

export default function CampaignsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredCampaigns = campaigns.filter(campaign => {
    const matchesSearch = campaign.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === 'all' || campaign.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const stats = {
    total: campaigns.length,
    active: campaigns.filter(c => c.status === 'active').length,
    completed: campaigns.filter(c => c.status === 'completed').length,
    draft: campaigns.filter(c => c.status === 'draft').length,
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'success';
      case 'completed': return 'info';
      case 'draft': return 'default';
      default: return 'default';
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case 'active': return 'Active';
      case 'completed': return 'Terminée';
      case 'draft': return 'Brouillon';
      default: return status;
    }
  };

  const getTypeIcon = (type) => {
    return type === 'email' ? Mail : MessageSquare;
  };

  return (
    <div className="max-w-[1400px] mx-auto">
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-[28px] font-semibold text-neutral-900 mb-1">
              Campagnes Marketing
            </h1>
            <p className="text-[15px] text-neutral-600">
              Gérez et suivez vos campagnes email et SMS
            </p>
          </div>
          <Button variant="primary" icon={Plus} iconPosition="left">
            Nouvelle campagne
          </Button>
        </div>

        {/* Les Statistiques */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {[
            { label: 'Total', value: stats.total, color: 'text-neutral-900' },
            { label: 'Actives', value: stats.active, color: 'text-success' },
            { label: 'Terminées', value: stats.completed, color: 'text-info' },
            { label: 'Brouillons', value: stats.draft, color: 'text-neutral-500' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Card padding="md" className="text-center">
                <div className={`text-[32px] font-semibold ${stat.color} mb-1`}>
                  {stat.value}
                </div>
                <div className="text-[13px] text-neutral-600">{stat.label}</div>
              </Card>
            </motion.div>
          ))}
        </div>


        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
            <input
              type="text"
              placeholder="Rechercher une campagne..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setFilterStatus('all')}
              className={`px-4 py-2.5 rounded-lg border transition-colors ${
                filterStatus === 'all'
                  ? 'bg-primary text-white border-primary'
                  : 'bg-white border-neutral-200 text-neutral-700 hover:border-neutral-300'
              }`}
            >
              Toutes
            </button>
            <button
              onClick={() => setFilterStatus('active')}
              className={`px-4 py-2.5 rounded-lg border transition-colors ${
                filterStatus === 'active'
                  ? 'bg-success text-white border-success'
                  : 'bg-white border-neutral-200 text-neutral-700 hover:border-neutral-300'
              }`}
            >
              Actives
            </button>
            <button
              onClick={() => setFilterStatus('completed')}
              className={`px-4 py-2.5 rounded-lg border transition-colors ${
                filterStatus === 'completed'
                  ? 'bg-info text-white border-info'
                  : 'bg-white border-neutral-200 text-neutral-700 hover:border-neutral-300'
              }`}
            >
              Terminées
            </button>
          </div>
        </div>
      </div>


      {/* listes des campagnes */}
      <div className="space-y-4">
        {filteredCampaigns.map((campaign, index) => {
          const TypeIcon = getTypeIcon(campaign.type);
          
          return (
            <motion.div
              key={campaign.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Card padding="none" hover className="overflow-hidden">
                <div className="p-5">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-3 flex-1">
                      <div className="p-2.5 bg-primary/10 rounded-lg">
                        <TypeIcon size={20} className="text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-[17px] font-semibold text-neutral-900 mb-1">
                          {campaign.name}
                        </h3>
                        <div className="flex items-center gap-2 flex-wrap">
                          <Badge variant={getStatusColor(campaign.status)} size="sm">
                            {getStatusLabel(campaign.status)}
                          </Badge>
                          <span className="text-[13px] text-neutral-500">
                            {campaign.type === 'email' ? 'Email' : 'SMS'}
                          </span>
                          <span className="text-[13px] text-neutral-400">•</span>
                          <span className="text-[13px] text-neutral-500">
                            {campaign.startDate} - {campaign.endDate}
                          </span>
                        </div>
                      </div>
                    </div>
                    <button className="p-2 hover:bg-neutral-100 rounded-lg transition-colors">
                      <MoreVertical size={18} className="text-neutral-500" />
                    </button>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
                    <div className="p-3 bg-neutral-50 rounded-lg">
                      <div className="text-[11px] text-neutral-600 mb-0.5">Envoyés</div>
                      <div className="text-[18px] font-semibold text-neutral-900">
                        {campaign.sent.toLocaleString()}
                      </div>
                    </div>
                    <div className="p-3 bg-neutral-50 rounded-lg">
                      <div className="text-[11px] text-neutral-600 mb-0.5">Ouverts</div>
                      <div className="text-[18px] font-semibold text-neutral-900">
                        {campaign.opened.toLocaleString()}
                      </div>
                    </div>
                    <div className="p-3 bg-neutral-50 rounded-lg">
                      <div className="text-[11px] text-neutral-600 mb-0.5">Clics</div>
                      <div className="text-[18px] font-semibold text-neutral-900">
                        {campaign.clicked.toLocaleString()}
                      </div>
                    </div>
                    <div className="p-3 bg-neutral-50 rounded-lg">
                      <div className="text-[11px] text-neutral-600 mb-0.5">Conversions</div>
                      <div className="text-[18px] font-semibold text-success">
                        {campaign.converted.toLocaleString()}
                      </div>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <div className="text-[11px] text-blue-700 mb-0.5">Taux ouverture</div>
                      <div className="text-[18px] font-semibold text-blue-700">
                        {campaign.openRate}%
                      </div>
                    </div>
                    <div className="p-3 bg-purple-50 rounded-lg">
                      <div className="text-[11px] text-purple-700 mb-0.5">Taux clic</div>
                      <div className="text-[18px] font-semibold text-purple-700">
                        {campaign.clickRate}%
                      </div>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg">
                      <div className="text-[11px] text-green-700 mb-0.5">Conversion</div>
                      <div className="text-[18px] font-semibold text-green-700">
                        {campaign.conversionRate}%
                      </div>
                    </div>
                  </div>

                  {campaign.status !== 'completed' && (
                    <div className="flex items-center gap-2 mt-4 pt-4 border-t border-neutral-100">
                      {campaign.status === 'active' && (
                        <button className="flex items-center gap-2 px-3 py-1.5 text-[13px] text-warning hover:bg-yellow-50 rounded-lg transition-colors">
                          <Pause size={14} />
                          Mettre en pause
                        </button>
                      )}
                      {campaign.status === 'draft' && (
                        <button className="flex items-center gap-2 px-3 py-1.5 text-[13px] text-success hover:bg-green-50 rounded-lg transition-colors">
                          <Play size={14} />
                          Lancer
                        </button>
                      )}
                      <button className="flex items-center gap-2 px-3 py-1.5 text-[13px] text-neutral-600 hover:bg-neutral-100 rounded-lg transition-colors">
                        <Edit size={14} />
                        Modifier
                      </button>
                      <button className="flex items-center gap-2 px-3 py-1.5 text-[13px] text-error hover:bg-red-50 rounded-lg transition-colors ml-auto">
                        <Trash2 size={14} />
                        Supprimer
                      </button>
                    </div>
                  )}
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* les statistiques vides */}
      {filteredCampaigns.length === 0 && (
        <Card padding="lg" className="text-center">
          <div className="py-12">
            <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search size={24} className="text-neutral-400" />
            </div>
            <h3 className="text-lg font-semibold text-neutral-900 mb-2">
              Aucune campagne trouvée
            </h3>
            <p className="text-neutral-600 mb-6">
              Essayez de modifier vos critères de recherche
            </p>
            <Button variant="outline" onClick={() => { setSearchQuery(''); setFilterStatus('all'); }}>
              Réinitialiser les filtres
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
}