'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Search, Filter, MoreVertical } from 'lucide-react';
import Button from '@/components/ui/Button';
import TicketCard from '@/components/features/TicketCard';
import { tickets } from '@/data/mockData';

export default function TicketsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const columns = [
    { id: 'nouveau', title: 'Nouveau', color: 'bg-blue-500', count: tickets.nouveau.length },
    { id: 'enCours', title: 'En cours', color: 'bg-yellow-500', count: tickets.enCours.length },
    { id: 'resolu', title: 'Résolu', color: 'bg-green-500', count: tickets.resolu.length }
  ];

  const totalTickets = tickets.nouveau.length + tickets.enCours.length + tickets.resolu.length;

  const filterTickets = (ticketList) => {
    if (!searchQuery) return ticketList;
    return ticketList.filter(ticket =>
      ticket.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.customer.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  return (
    <div className="h-full flex flex-col max-w-[1600px] mx-auto">
      <div className="mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-[28px] font-semibold text-neutral-900 mb-1">
              Gestion des Tickets
            </h1>
            <p className="text-[15px] text-neutral-600">
              {totalTickets} tickets au total
            </p>
          </div>
          <Button variant="primary" icon={Plus} iconPosition="left">
            Nouveau ticket
          </Button>
        </div>


        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
          <input
            type="text"
            placeholder="Rechercher un ticket..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          />
        </div>
      </div>


      <div className="flex-1 overflow-x-auto">
        <div className="flex gap-4 h-full min-w-max pb-4">
          {columns.map((column) => {
            const columnTickets = filterTickets(tickets[column.id]);
            
            return (
              <div key={column.id} className="flex-1 min-w-[320px] max-w-[400px] flex flex-col">
                <div className="flex items-center justify-between mb-4 px-1">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 ${column.color} rounded-full`}></div>
                    <h3 className="text-[15px] font-semibold text-neutral-900">
                      {column.title}
                    </h3>
                    <span className="px-2 py-0.5 bg-neutral-100 text-neutral-600 text-[12px] font-medium rounded-full">
                      {columnTickets.length}
                    </span>
                  </div>
                  <button className="p-1.5 hover:bg-neutral-100 rounded transition-colors">
                    <MoreVertical size={16} className="text-neutral-400" />
                  </button>
                </div>


                <div className="flex-1 space-y-3 overflow-y-auto pr-1">
                  <AnimatePresence mode="popLayout">
                    {columnTickets.map((ticket) => (
                      <TicketCard key={ticket.id} ticket={ticket} />
                    ))}
                  </AnimatePresence>

                  {columnTickets.length === 0 && (
                    <div className="flex items-center justify-center h-32 border-2 border-dashed border-neutral-200 rounded-lg">
                      <p className="text-[13px] text-neutral-500">Aucun ticket</p>
                    </div>
                  )}


                  <button className="w-full p-3 text-[14px] text-neutral-600 hover:bg-neutral-50 border-2 border-dashed border-neutral-200 hover:border-neutral-300 rounded-lg transition-colors flex items-center justify-center gap-2">
                    <Plus size={16} />
                    Ajouter un ticket
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}