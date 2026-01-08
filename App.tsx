
import React, { useState, useEffect } from 'react';
import { InfoSection } from './components/InfoSection';
import { InfoCard } from './types';

// Modern professional icons
const Icons = {
  Refund: () => <span className="text-3xl">💳</span>,
  CheckInOut: () => <span className="text-3xl">🏡</span>,
  Coffee: () => <span className="text-3xl">☕</span>,
  Wifi: () => <span className="text-3xl">📡</span>,
  Rules: () => <span className="text-3xl">📋</span>,
  Pet: () => <span className="text-3xl">🐕</span>,
  Security: () => <span className="text-3xl">🔒</span>,
  Contact: () => <span className="text-3xl">📱</span>,
  Shower: () => <span className="text-3xl">🛁</span>,
  Restaurant: () => <span className="text-3xl">🍴</span>,
  Massage: () => <span className="text-3xl">💆‍♀️</span>,
  Cleaning: () => <span className="text-3xl">🧹</span>,
  Fridge: () => <span className="text-3xl">🍷</span>
};

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    '/assets/WhatsApp Image 2026-01-07 at 23.26.09 (1).jpeg',
    '/assets/WhatsApp Image 2026-01-07 at 23.26.09.jpeg',
    '/assets/WhatsApp Image 2026-01-07 at 23.26.10 (1).jpeg',
    '/assets/WhatsApp Image 2026-01-07 at 23.26.10 (2).jpeg',
    '/assets/WhatsApp Image 2026-01-07 at 23.26.10 (3).jpeg',
    '/assets/WhatsApp Image 2026-01-07 at 23.26.10.jpeg',
    '/assets/WhatsApp Image 2026-01-07 at 23.26.11 (1).jpeg',
    '/assets/WhatsApp Image 2026-01-07 at 23.26.11.jpeg',
  ];

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    if (!showContent) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [showContent, images.length]);

  const cards: InfoCard[] = [
    {
      id: 'check',
      title: 'Check-in e Check-out',
      icon: <Icons.CheckInOut />,
      isImportant: true,
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
              <p className="text-xs text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-1">Check-in</p>
              <p className="text-xl font-bold text-green-700 dark:text-green-400">15:00</p>
            </div>
            <div className="p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
              <p className="text-xs text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-1">Check-out</p>
              <p className="text-xl font-bold text-red-700 dark:text-red-400">12:00</p>
            </div>
          </div>
          <div className="p-4 bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500 rounded">
            <p className="text-sm font-semibold text-amber-900 dark:text-amber-200">⚠️ Late Check-out</p>
            <p className="text-xs text-amber-800 dark:text-amber-300 mt-1">Após 12h: cobrança automática de <strong>R$ 390,00</strong></p>
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-400">📋 Apresentar documento com foto no check-in</p>
        </div>
      )
    },
    {
      id: 'recepcao',
      title: 'Horário da Recepção',
      icon: <Icons.Contact />,
      isImportant: true,
      content: (
        <div className="space-y-4">
          <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Horário de Atendimento</p>
            <p className="text-2xl font-bold text-blue-700 dark:text-blue-400">08h - 22h</p>
          </div>
          <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border-2 border-red-300 dark:border-red-800">
            <p className="text-xs uppercase tracking-wide text-red-600 dark:text-red-400 mb-2 font-semibold">🚨 Emergência 24h</p>
            <a href="tel:35988931913" className="text-xl font-bold text-red-700 dark:text-red-400 hover:text-red-800 transition-colors">(35) 98893-1913</a>
          </div>
        </div>
      )
    },
    {
      id: 'cafe',
      title: 'Café da Manhã',
      icon: <Icons.Coffee />,
      content: (
        <div className="space-y-3">
          <div className="p-4 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Horário de Serviço</p>
            <p className="text-2xl font-bold text-amber-700 dark:text-amber-400">08h30 - 10h30</p>
          </div>
          <p className="text-gray-700 dark:text-gray-300">🍞 Servido no salão com variedade completa de itens</p>
          <div className="flex items-start gap-2 p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
            <span className="text-lg">💡</span>
            <p className="text-xs text-blue-900 dark:text-blue-300">Restrições alimentares ou preferências? Avise a recepção com antecedência!</p>
          </div>
        </div>
      )
    },
    {
      id: 'wifi',
      title: 'Wi-fi Gratuito',
      icon: <Icons.Wifi />,
      content: (
        <div>
          <p>Garantido e rápido nas áreas comuns da pousada.</p>
          <div className="mt-3 p-3 bg-brand-olive/5 rounded-xl border border-brand-olive/20 flex justify-between items-center">
            <span className="font-medium">Senha: <code className="text-brand-earth">chalesmv</code></span>
            <button onClick={() => navigator.clipboard.writeText('chalesmv')} className="text-xs text-brand-olive font-bold uppercase tracking-wider">Copiar</button>
          </div>
        </div>
      )
    },
    {
      id: 'estorno',
      title: 'Política de Estorno',
      icon: <Icons.Refund />,
      content: (
        <div className="space-y-3">
          <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border-l-4 border-green-500">
            <p className="text-sm font-semibold text-green-900 dark:text-green-200 mb-1">✓ Cancelamento Gratuito</p>
            <p className="text-xs text-green-800 dark:text-green-300">Até 7 dias após confirmação - Reembolso integral (Art. 49 CDC)</p>
          </div>
          <div className="p-3 bg-amber-50 dark:bg-amber-950/20 rounded-lg border-l-4 border-amber-500">
            <p className="text-sm font-semibold text-amber-900 dark:text-amber-200 mb-1">⚠️ Cancelamento Tardio</p>
            <p className="text-xs text-amber-800 dark:text-amber-300">Após 7 dias: Sem reembolso</p>
          </div>
          <div className="p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border-l-4 border-red-500">
            <p className="text-sm font-semibold text-red-900 dark:text-red-200 mb-1">✕ No-show</p>
            <p className="text-xs text-red-800 dark:text-red-300">Não comparecimento: Cobrança integral</p>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">⏱️ Estornos processados em até 7 dias úteis</p>
        </div>
      )
    },
    {
      id: 'regras',
      title: 'Regras e Políticas',
      icon: <Icons.Rules />,
      isImportant: true,
      content: (
        <div className="space-y-3">
          <div className="p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border-l-4 border-red-500">
            <div className="flex items-start gap-2">
              <span className="text-red-500 text-xl flex-shrink-0">🚬</span>
              <div>
                <p className="font-semibold text-red-900 dark:text-red-200 text-sm">Proibido Fumar</p>
                <p className="text-xs text-red-800 dark:text-red-300">Multa: 1 diária extra se detectado</p>
              </div>
            </div>
          </div>
          <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border-l-4 border-blue-500">
            <div className="flex items-start gap-2">
              <span className="text-blue-500 text-xl flex-shrink-0">🐕</span>
              <div>
                <p className="font-semibold text-blue-900 dark:text-blue-200 text-sm">Pets Bem-vindos</p>
                <p className="text-xs text-blue-800 dark:text-blue-300">Diária: R$ 150,00 | Sempre supervisionados</p>
              </div>
            </div>
          </div>
          <div className="p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border-l-4 border-purple-500">
            <div className="flex items-start gap-2">
              <span className="text-purple-500 text-xl flex-shrink-0">👥</span>
              <div>
                <p className="font-semibold text-purple-900 dark:text-purple-200 text-sm">Hóspedes Registrados</p>
                <p className="text-xs text-purple-800 dark:text-purple-300">Acesso apenas para quem consta na reserva</p>
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-400 mt-3">🔧 Danos identificados serão cobrados no check-out</p>
        </div>
      )
    },
    {
      id: 'chuveiro',
      title: 'Banho e Hidromassagem',
      icon: <Icons.Shower />,
      content: (
        <div className="space-y-3">
          <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border-2 border-blue-300 dark:border-blue-700">
            <div className="flex items-start gap-3">
              <span className="text-3xl">💧</span>
              <div>
                <p className="font-bold text-blue-900 dark:text-blue-200 mb-2">Importante para seu Conforto</p>
                <p className="text-sm text-blue-800 dark:text-blue-300">Mantenha a <strong>ducha higienica sempre desligada</strong> quando não estiver em uso.</p>
              </div>
            </div>
          </div>
          <div className="p-3 bg-amber-50 dark:bg-amber-950/20 rounded-lg">
            <p className="text-xs text-amber-900 dark:text-amber-300">⚡ A ducha ligada pode interferir no aquecimento do chuveiro e da hidromassagem</p>
          </div>
        </div>
      )
    },
    {
      id: 'limpeza',
      title: 'Serviço de Arrumação',
      icon: <Icons.Cleaning />,
      isImportant: true,
      content: (
        <div className="space-y-3">
          <div className="p-4 bg-amber-50 dark:bg-amber-950/30 border-2 border-amber-400 rounded-lg">
            <p className="font-bold text-amber-900 dark:text-amber-200 flex items-center gap-2">
              <span className="text-xl">⏰</span>
              Solicitar até as 14h
            </p>
          </div>
          <p className="text-gray-700 dark:text-gray-300">A arrumação é realizada mediante solicitação via <strong>WhatsApp</strong>.</p>
          <div className="p-3 bg-green-100 dark:bg-green-950/30 border border-green-400 rounded-lg">
            <p className="text-sm text-green-900 dark:text-green-200">
              ✓ Resposta rápida da equipe
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'massagem',
      title: 'Serviço de Massagem',
      icon: <Icons.Massage />,
      content: (
        <div className="space-y-3">
          <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
            <p className="text-base text-gray-700 dark:text-gray-300 mb-3">🧘‍♀️ Relaxe com nosso serviço de <strong>massagem profissional</strong> nas dependências da pousada.</p>
            <div className="flex items-center gap-2 text-sm text-purple-700 dark:text-purple-300">
              <span>📞</span>
              <span>Contate a recepção para valores e agendamento</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'restaurante',
      title: 'Restaurante da Pousada',
      icon: <Icons.Restaurant />,
      content: (
        <div className="space-y-4">
          <div className="p-4 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">🌅</span>
              <p className="font-semibold text-orange-900 dark:text-orange-200">Vista Privilegiada</p>
            </div>
            <p className="text-sm text-orange-800 dark:text-orange-300">Cardápio variado com opções para todos os gostos</p>
          </div>
          <div className="p-3 bg-indigo-50 dark:bg-indigo-950/20 rounded-lg border border-indigo-200 dark:border-indigo-800">
            <div className="flex items-center gap-2">
              <span className="text-xl">🎵</span>
              <p className="text-sm text-indigo-900 dark:text-indigo-200">Música ao vivo aos finais de semana</p>
            </div>
            <p className="text-xs text-indigo-700 dark:text-indigo-300 mt-1">Voz e violão para tornar sua experiência ainda mais especial</p>
          </div>
          <div className="p-4 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-lg shadow-lg">
            <div className="text-center">
              <p className="text-2xl font-bold text-white mb-1">20% OFF</p>
              <p className="text-sm text-white/90">Desconto exclusivo para hóspedes</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'frigobar',
      title: 'Frigobar - Tabela de Preços',
      icon: <Icons.Fridge />,
      content: (
        <div className="space-y-4">
          <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <div className="flex items-center gap-2">
                  <span className="text-lg">💧</span>
                  <span className="text-sm font-medium">Agua sem gás</span>
                </div>
                <span className="text-lg font-bold text-emerald-600 dark:text-emerald-400">R$ 7</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white dark:bg-gray-900/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🧘</span>
                  <span className="text-sm font-medium">Água com gás</span>
                </div>
                <span className="text-lg font-bold text-emerald-600 dark:text-emerald-400">R$ 9</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🥤</span>
                  <span className="text-sm font-medium">Refrigerante</span>
                </div>
                <span className="text-lg font-bold text-emerald-600 dark:text-emerald-400">R$ 10</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white dark:bg-gray-900/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🍺</span>
                  <span className="text-sm font-medium">Cerveja</span>
                </div>
                <span className="text-lg font-bold text-emerald-600 dark:text-emerald-400">R$ 16</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <div className="flex items-center gap-2">
                  <span className="text-lg">☕</span>
                  <span className="text-sm font-medium">Cápsula de Café</span>
                </div>
                <span className="text-lg font-bold text-emerald-600 dark:text-emerald-400">R$ 12</span>
              </div>
            </div>
          </div>
          <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <div className="flex items-start gap-2">
              <span className="text-lg flex-shrink-0">💳</span>
              <p className="text-sm text-blue-900 dark:text-blue-200">Consumo lançado automaticamente na conta e cobrado no <strong>check-out</strong></p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'objetos-esquecidos',
      title: 'Objetos Esquecidos',
      icon: <Icons.Security />,
      content: (
        <div className="space-y-3">
          <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🔍</span>
              <div>
                <p className="font-semibold text-blue-900 dark:text-blue-200 mb-1">Não encontra algo?</p>
                <p className="text-sm text-blue-800 dark:text-blue-300">Entre em contato conosco imediatamente!</p>
              </div>
            </div>
          </div>
          <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-lg border border-green-200 dark:border-green-800">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">📦</span>
              <p className="font-semibold text-green-900 dark:text-green-200">Devolução via Correio</p>
            </div>
            <p className="text-xs text-green-800 dark:text-green-300">Solicite pelo WhatsApp</p>
          </div>
          <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <p className="text-xs text-gray-700 dark:text-gray-300">💵 <strong>Custo:</strong> R$ 150,00 (serviço) + frete</p>
          </div>
        </div>
      )
    }
  ];

  if (!showContent) {
    return (
      <div className="min-h-screen relative flex items-center justify-center overflow-hidden bg-brand-olive">
        {/* Image Carousel */}
        <div className="absolute inset-0 z-0">
          {/* Carousel Images */}
          <div className="relative w-full h-full">
            {images.map((img, idx) => (
              <img 
                key={idx}
                src={img} 
                alt={`Villa ${idx + 1}`} 
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  idx === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
          </div>
          
          {/* Minimal Overlay - only at edges */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />

          {/* Carousel Indicators */}
          <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-20">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentImageIndex 
                    ? 'bg-white w-6' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-lg animate-[fadeIn_1s_ease-out]">
          <div className="mb-8 flex justify-center">
             <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                <img 
                  src="/assets/logo.webp" 
                  alt="Villa Monte Verde Logo" 
                  className="w-16 h-16 object-contain"
                />
             </div>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl text-white mb-4 tracking-tighter">
            Villa <br/> Monte Verde
          </h1>
          <p className="text-white/80 text-lg mb-12 font-light tracking-wide">
            Seja bem-vindo ao seu refúgio nas montanhas. Explore as informações da sua estadia.
          </p>
          <button 
            onClick={() => setShowContent(true)}
            className="group relative px-10 py-5 bg-white text-brand-olive font-bold rounded-full overflow-hidden shadow-2xl transition-all hover:scale-105 active:scale-95"
          >
            <span className="relative z-10">VER INFORMAÇÕES</span>
            <div className="absolute inset-0 bg-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-32">
      {/* Header */}
      <header className="sticky top-0 z-50 glass-card border-b border-black/5 dark:border-white/5 px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => setShowContent(false)}
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <img 
            src="/assets/logo.webp" 
            alt="Villa Monte Verde" 
            className="w-10 h-10"
          />
          <h2 className="font-serif text-xl leading-none dark:text-zinc-100">Villa Monte Verde</h2>
        </button>
        <button 
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
        >
          {isDarkMode ? (
            <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 9h-1m15.364-6.364l-.707.707M6.343 17.657l-.707.707M16.05 16.05l.707.707M7.636 7.636l.707-.707M12 8a4 4 0 110 8 4 4 0 010-8z" /></svg>
          ) : (
            <svg className="w-6 h-6 text-brand-earth" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
          )}
        </button>
      </header>

      {/* Hero Section */}
      <div className="px-6 pt-12 pb-8 max-w-4xl mx-auto">
        <span className="text-brand-gold font-bold text-xs uppercase tracking-[0.3em]">Instruções de Check-in</span>
        <h1 className="font-serif text-4xl md:text-5xl mt-2 dark:text-zinc-100">Tudo o que você <br/> precisa saber.</h1>
        <p className="text-gray-500 dark:text-zinc-400 mt-4 max-w-md font-light leading-relaxed">
          Preparamos este guia para tornar sua experiência o mais fluida e prazerosa possível. Sinta-se em casa.
        </p>
      </div>

      {/* Info Cards Grid */}
      <main className="px-6 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {cards.map((card) => (
          <InfoSection key={card.id} card={card} />
        ))}
      </main>

      {/* Location Section */}
      <section className="px-6 mt-12 max-w-4xl mx-auto mb-12">
        <div className="bg-gradient-to-br from-slate-100 to-gray-100 dark:from-slate-800 dark:to-gray-800 rounded-2xl p-8 space-y-6 border border-gray-200 dark:border-gray-700 shadow-lg">
          {/* Title */}
          <h2 className="font-serif text-3xl text-gray-800 dark:text-white flex items-center gap-3">
            <span className="text-amber-500 text-2xl">📍</span> Localização
          </h2>
          
          {/* Address Info */}
          <p className="text-gray-600 dark:text-gray-300">Pousada Villa Monte Verde, Av. Sol Nascente, 150</p>
          
          {/* Map Preview */}
          <div className="rounded-xl overflow-hidden w-full border border-gray-600 shadow-lg">
            <div className="relative bg-gray-600 h-56">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.3320625621443!2d-46.0353229!3d-22.864205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc07779f729227%3A0x6734151a6603a7a9!2sMonte%20Verde%2C%20Camanducaia%20-%20MG!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
              />
            </div>
            <div className="bg-white dark:bg-gray-900 p-3 text-gray-800 dark:text-gray-200 text-sm font-semibold flex items-center gap-2">
              <span>22°51'16.6"S 46°04'43.0"W</span>
              <button className="ml-auto text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-500 font-semibold">Ver mapa ampliado</button>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="space-y-3">
            <a 
              href="https://www.google.com/maps/dir//Pousada+Villa+Monte+Verde+Av.+Sol+Nascente,+150+-+WhatsApp+(35)+3438-2399+-+Monte+Verde+Camanducaia+-+MG+37653-000/@-22.862283,-46.043664,14z/data=!4m5!4m4!1m0!1m2!1m1!1s0x94cc10111c695e25:0xdd32e4eb2fdb5dd0"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 bg-yellow-600 hover:bg-yellow-700 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Abrir no Google Maps
            </a>
            <a 
              href="https://waze.com/ul?ll=-22.862283,-46.043664&navigate=yes"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 bg-gray-600 hover:bg-gray-700 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
              </svg>
              Ir para Villa Barril (Navegação)
            </a>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/553534382399" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-xl shadow-green-900/20 hover:scale-105 transition-all duration-300 active:scale-95 group border-2 border-white hover:bg-[#20BA58]"
        aria-label="Contato via WhatsApp"
        title="(35) 3438-2399"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="text-white w-7 h-7 sm:w-8 sm:h-8" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
        </svg>
      </a>

      <footer className="mt-20 px-6 py-12 text-center text-gray-400 text-sm">
        <p>© 2024 Pousada Villa Monte Verde</p>
        <p className="mt-2 text-xs uppercase tracking-widest">Experiência & Refúgio</p>
      </footer>
    </div>
  );
};

export default App;
