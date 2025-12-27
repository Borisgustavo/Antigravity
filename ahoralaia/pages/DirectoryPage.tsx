
import React, { useState } from 'react';
import { DIRECTORY_MOCKS } from '../constants';

const DirectoryPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'divulgadores' | 'fuentes'>('divulgadores');

  const filteredItems = DIRECTORY_MOCKS.filter(v => {
    const matchesSearch = v.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         v.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         v.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTab = activeTab === 'divulgadores' ? v.type === 'divulgador' : v.type === 'fuente_oficial';
    
    return matchesSearch && matchesTab;
  });

  const featured = DIRECTORY_MOCKS.find(v => v.tag === 'REFERENTE') || DIRECTORY_MOCKS[0];

  const handleVisit = (url?: string) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const rankings = [
    {
      title: "Chat General (LMArena Elo)",
      source: "LMArena",
      models: [
        "1. Gemini-3-pro",
        "2. Gemini-3-flash",
        "3. Grok-4.1-thinking",
        "4. Claude Opus 4.5 (thinking)",
        "5. Claude Opus 4.5",
        "6. Grok-4.1",
        "7. Gemini-3-flash (thinking)",
        "8. GPT-5.1-high",
        "9. Gemini-2.5-pro",
        "10. Claude Sonnet 4.5 (thinking)"
      ]
    },
    {
      title: "Programación (SWE-bench)",
      source: "Official Leaderboard",
      models: [
        "1. Claude 3.7 Sonnet (52.80%)",
        "2. o4-mini (45.00%)",
        "3. Kimi K2 Instruct (43.80%)",
        "4. GPT-4.1 (39.58%)"
      ]
    },
    {
      title: "WebDev (Frontend/UI)",
      source: "LMArena WebDev",
      models: [
        "1. Claude Opus 4.5 (thinking)",
        "2. GPT-5.2-high",
        "3. Claude Opus 4.5",
        "4. Gemini-3-pro",
        "5. Gemini-3-flash"
      ]
    },
    {
      title: "Contexto Largo (HELM)",
      source: "Stanford CRFM",
      models: [
        "Líder: GPT-4.1 (0.588 avg)",
        "Contextos: 300K - 10M tokens",
        "Mejor puntaje promedio global"
      ]
    }
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col items-center">
      <main className="flex flex-1 flex-col items-center px-4 py-5 md:px-10 w-full">
        <div className="flex flex-col max-w-[1200px] w-full gap-8">
          
          {/* Hero Search Section */}
          <div className="@container">
            <div className="flex min-h-[320px] md:min-h-[400px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-6 md:p-12 relative overflow-hidden" style={{backgroundImage: 'linear-gradient(rgba(17, 20, 24, 0.7) 0%, rgba(17, 20, 24, 0.9) 100%), url("https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200")'}}>
              <div className="flex flex-col gap-3 text-center max-w-2xl z-10">
                <h1 className="text-white text-3xl md:text-5xl font-black leading-tight tracking-[-0.033em] font-display">Hub de Conocimiento IA</h1>
                <h2 className="text-gray-300 text-sm md:text-lg font-normal leading-relaxed">Divulgadores, rankings y fuentes oficiales para estar al día.</h2>
              </div>
              <div className="w-full max-w-[560px] z-10 mt-4">
                <label className="flex h-12 md:h-14 w-full items-center rounded-lg bg-[#1c2127] border border-[#3b4754] focus-within:border-primary transition-colors overflow-hidden pl-4 pr-1 shadow-2xl">
                  <span className="material-symbols-outlined text-[#9dabb9]">search</span>
                  <input 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="flex-1 bg-transparent border-none text-white px-3 focus:ring-0 placeholder:text-[#9dabb9]" 
                    placeholder="Buscar recurso, blog o autor..."
                  />
                </label>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-gray-200 dark:border-gray-800">
            <button 
              onClick={() => setActiveTab('divulgadores')}
              className={`px-8 py-4 font-bold text-sm transition-all border-b-2 ${activeTab === 'divulgadores' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`}
            >
              Divulgadores (Personas)
            </button>
            <button 
              onClick={() => setActiveTab('fuentes')}
              className={`px-8 py-4 font-bold text-sm transition-all border-b-2 ${activeTab === 'fuentes' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`}
            >
              Fuentes Oficiales (Recursos)
            </button>
          </div>

          {/* LLM Benchmarks / Rankings Section (Only in Fuentes tab) */}
          {activeTab === 'fuentes' && !searchTerm && (
            <section className="animate-in slide-in-from-bottom duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-yellow-500/10 rounded-lg text-yellow-500 border border-yellow-500/20">
                  <span className="material-symbols-outlined fill-1">military_tech</span>
                </div>
                <h2 className="text-gray-900 dark:text-white text-xl md:text-2xl font-bold tracking-tight font-display">Leaderboards de Elite (Contexto 2025)</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {rankings.map((rank, i) => (
                  <div key={i} className="flex flex-col bg-white dark:bg-[#1c2127] rounded-xl p-5 border border-gray-200 dark:border-[#283039] shadow-sm hover:border-primary/40 transition-all group">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-sm font-bold text-gray-900 dark:text-white leading-tight pr-2">{rank.title}</h4>
                      <span className="text-[10px] font-bold text-primary bg-primary/10 px-1.5 py-0.5 rounded uppercase">{rank.source}</span>
                    </div>
                    <ul className="flex flex-col gap-1.5 flex-1">
                      {rank.models.map((m, idx) => (
                        <li key={idx} className={`text-xs ${idx === 0 ? 'text-primary font-bold' : 'text-gray-600 dark:text-gray-400'} flex items-center gap-2`}>
                          {idx === 0 && <span className="material-symbols-outlined text-[14px]">workspace_premium</span>}
                          {m}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          )}

          {activeTab === 'divulgadores' && !searchTerm && (
            <section className="animate-in fade-in duration-500">
              <div className="flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-yellow-500 fill-1">star</span>
                <h2 className="text-gray-900 dark:text-white text-xl md:text-2xl font-bold tracking-tight font-display">Divulgador Destacado</h2>
              </div>
              <div className="@container">
                <div className="flex flex-col md:flex-row items-stretch rounded-xl bg-white dark:bg-[#1c2127] border border-gray-200 dark:border-[#283039] hover:border-primary/50 transition-all overflow-hidden shadow-lg group">
                  <div className="w-full md:w-2/5 aspect-video md:aspect-auto bg-cover bg-center relative group-hover:scale-105 transition-transform duration-700" style={{backgroundImage: `url("${featured.imageUrl}")`}}>
                    <div className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded tracking-tighter uppercase">{featured.tag}</div>
                  </div>
                  <div className="flex flex-col justify-center p-6 md:p-8 flex-1 gap-4">
                    <div className="flex flex-col gap-1">
                      <h3 className="text-gray-900 dark:text-white text-2xl font-bold font-display">{featured.name}</h3>
                      <p className="text-primary font-medium text-sm">{featured.realName || featured.category}</p>
                    </div>
                    <p className="text-[#637588] dark:text-[#9dabb9] text-base leading-relaxed">
                      {featured.description}
                    </p>
                    <div className="flex gap-4">
                      <button 
                        onClick={() => handleVisit(featured.url)}
                        className="bg-primary hover:bg-blue-600 text-white text-sm font-bold px-4 py-2 rounded-lg transition-colors shadow-lg shadow-primary/20"
                      >
                        Visitar Canal
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          <section className="pb-10 animate-in fade-in duration-500">
            <div className="flex items-center justify-between mb-6 mt-4">
              <h2 className="text-gray-900 dark:text-white text-xl md:text-2xl font-bold tracking-tight font-display">
                {activeTab === 'divulgadores' ? 'Voces Influyentes' : 'Documentación y Blogs de Referencia'}
              </h2>
            </div>
            
            {filteredItems.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map(item => (
                  <div key={item.id} className="flex flex-col bg-white dark:bg-[#1c2127] rounded-xl overflow-hidden border border-gray-200 dark:border-[#283039] hover:border-primary/50 transition-all duration-200 group hover:-translate-y-1 shadow-sm">
                    <div className="h-40 bg-cover bg-center relative transition-transform duration-700 group-hover:scale-110" style={{backgroundImage: `url("${item.imageUrl}")`}}>
                      <div className={`absolute top-2 left-2 text-white text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-tighter ${item.type === 'fuente_oficial' ? 'bg-blue-600' : 'bg-primary/90'}`}>
                        {item.tag || item.category}
                      </div>
                    </div>
                    <div className="p-5 flex flex-col flex-1 gap-3 z-10 bg-white dark:bg-[#1c2127]">
                      <div>
                        <h3 className="text-gray-900 dark:text-white text-lg font-bold group-hover:text-primary transition-colors font-display">{item.name}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className={`size-2 rounded-full ${item.category === 'Hardware' ? 'bg-green-500' : item.category === 'Regulación' ? 'bg-red-500' : 'bg-primary'}`}></span>
                          <p className="text-[#9dabb9] text-[10px] uppercase tracking-wider font-bold">{item.category}</p>
                        </div>
                      </div>
                      <p className="text-[#637588] dark:text-[#9dabb9] text-sm line-clamp-3 mb-2">
                        {item.description}
                      </p>
                      <button 
                        onClick={() => handleVisit(item.url)}
                        className="mt-auto text-primary text-xs font-bold flex items-center gap-1 group/link hover:underline"
                      >
                        {item.type === 'fuente_oficial' ? 'Abrir Fuente' : 'Ir al perfil'}
                        <span className="material-symbols-outlined text-[14px] group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-gray-100 dark:bg-card-dark rounded-xl">
                <span className="material-symbols-outlined text-4xl text-gray-500 mb-4">search_off</span>
                <p className="text-gray-500">No encontramos resultados para esta sección.</p>
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
};

export default DirectoryPage;
