// src/app/dashboard/conversations/page.jsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Send,
  Paperclip,
  Smile,
  MoreVertical,
  CheckCheck,
  Archive,
  Trash2,
  Phone,
  Video,
  Info
} from 'lucide-react';
import Button from '@/components/ui/Button';
import ConversationItem from '@/components/features/ConversationItem';
import MessageBubble from '@/components/features/MessageBubble';
import { conversations } from '@/data/mockData';

export default function ConversationsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
  const [messageInput, setMessageInput] = useState('');

  const filteredConversations = conversations.filter(conv =>
    conv.user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    conv.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!messageInput.trim()) return;
    
    console.log('Envoi du message:', messageInput);
    setMessageInput('');
  };

  return (
    <div className="h-[calc(100vh-180px)] flex gap-4 max-w-[1600px] mx-auto">
      {/* Sidebar - Liste des conversations */}
      <div className="w-full sm:w-80 lg:w-96 flex flex-col bg-white border border-neutral-200 rounded-xl overflow-hidden">
        {/* Header Sidebar */}
        <div className="p-4 border-b border-neutral-100">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[17px] font-semibold text-neutral-900">
              Messages
            </h2>
            <button className="p-2 hover:bg-neutral-100 rounded-lg transition-colors">
              <Filter size={18} className="text-neutral-600" />
            </button>
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" size={16} />
            <input
              type="text"
              placeholder="Rechercher..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-neutral-50 border border-neutral-200 rounded-lg text-[14px] focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>
        </div>

        {/* Liste des conversations */}
        <div className="flex-1 overflow-y-auto">
          {filteredConversations.map((conversation) => (
            <ConversationItem
              key={conversation.id}
              conversation={conversation}
              isActive={selectedConversation?.id === conversation.id}
              onClick={() => setSelectedConversation(conversation)}
            />
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col bg-white border border-neutral-200 rounded-xl overflow-hidden">
        {selectedConversation ? (
          <>
            {/* Chat Header */}
            <div className="px-6 py-4 border-b border-neutral-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center">
                    <span className="text-white text-[14px] font-semibold">
                      {selectedConversation.user.avatar}
                    </span>
                  </div>
                  {selectedConversation.user.status === 'online' && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-success border-2 border-white rounded-full"></div>
                  )}
                </div>
                <div>
                  <h3 className="text-[15px] font-semibold text-neutral-900">
                    {selectedConversation.user.name}
                  </h3>
                  <p className="text-[13px] text-neutral-500">
                    {selectedConversation.user.email}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-neutral-100 rounded-lg transition-colors">
                  <Phone size={18} className="text-neutral-600" />
                </button>
                <button className="p-2 hover:bg-neutral-100 rounded-lg transition-colors">
                  <Video size={18} className="text-neutral-600" />
                </button>
                <button className="p-2 hover:bg-neutral-100 rounded-lg transition-colors">
                  <Info size={18} className="text-neutral-600" />
                </button>
                <div className="w-px h-6 bg-neutral-200 mx-1"></div>
                {selectedConversation.status === 'active' && (
                  <button className="flex items-center gap-2 px-3 py-1.5 text-[13px] text-success hover:bg-green-50 rounded-lg transition-colors">
                    <CheckCheck size={16} />
                    Résoudre
                  </button>
                )}
                <button className="p-2 hover:bg-neutral-100 rounded-lg transition-colors">
                  <MoreVertical size={18} className="text-neutral-600" />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-6 bg-neutral-50">
              <div className="max-w-4xl mx-auto">
                {selectedConversation.messages.map((message, index) => (
                  <MessageBubble key={message.id} message={message} index={index} />
                ))}
              </div>
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-neutral-100 bg-white">
              <form onSubmit={handleSendMessage} className="flex items-end gap-3">
                <div className="flex-1 relative">
                  <textarea
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    placeholder="Tapez votre message..."
                    rows={1}
                    className="w-full px-4 py-3 pr-20 border border-neutral-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSendMessage(e);
                      }
                    }}
                  />
                  <div className="absolute right-3 bottom-3 flex items-center gap-2">
                    <button
                      type="button"
                      className="p-1.5 hover:bg-neutral-100 rounded-lg transition-colors"
                    >
                      <Paperclip size={18} className="text-neutral-400" />
                    </button>
                    <button
                      type="button"
                      className="p-1.5 hover:bg-neutral-100 rounded-lg transition-colors"
                    >
                      <Smile size={18} className="text-neutral-400" />
                    </button>
                  </div>
                </div>
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  icon={Send}
                  disabled={!messageInput.trim()}
                  className="flex-shrink-0"
                >
                  Envoyer
                </Button>
              </form>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search size={28} className="text-neutral-400" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                Sélectionnez une conversation
              </h3>
              <p className="text-neutral-600">
                Choisissez une conversation dans la liste pour commencer
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}