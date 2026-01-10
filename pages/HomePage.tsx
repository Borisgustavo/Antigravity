
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NEWS_MOCKS, TOOLS_MOCKS } from '../constants';
import { getAITrendInsight, searchLiveNews } from '../services/geminiService';

const HomePage: React.FC = () => {
  const [tickerText, setTickerText] = useState("Cargando pulso de IA...");
  const [activeFilter, setActiveFilter] = useState('Todo');
  const [liveNews, setLiveNews] = useState<any>(null);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    getAITrendInsight().then(setTickerText);
  }, []);

  const handleLiveRadar = async () => {
    setIsSearching(true);
    const results = await searchLiveNews("Inteligencia Artificial en España");
    setLiveNews(results);
    setIsSearching(false);
  };

  const filteredNews = activeFilter === 'Todo'
    ? NEWS_MOCKS.filter(n => !n.isFeatured)
    : NEWS_MOCKS.filter(n => !n.isFeatured && (n.category === activeFilter || n.source === activeFilter));

  const categories = ['Todo', 'LLMs', 'Hardware', 'Regulación', 'Empresas'];

  const handleVisitTool = (url?: string) => {
    if (url) window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Business & Investment Dashboard Component
  const BusinessInsightDashboard = () => (
    <div className="mb-10 animate-in slide-in-from-top duration-500">
      <div className="bg-[#0b0f14] border border-emerald-500/30 rounded-2xl overflow-hidden shadow-2xl">
        <div className="bg-emerald-500/10 px-6 py-4 border-b border-emerald-500/20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-emerald-400">payments</span>
            <h3 className="text-white font-bold font-display text-lg">Inteligencia de Mercado & Capital IA</h3>
          </div>
          <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest bg-emerald-500/10 px-2 py-1 rounded">Fiscal 2025-2026</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-800">

          {/* 1. Infraestructura (Capex Gigantes) */}
          <div className="p-5 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-emerald-400">
              <span className="material-symbols-outlined text-sm">apartment</span>
              <h4 className="text-xs font-bold uppercase tracking-tight">Capex: Inversión en Fierro</h4>
            </div>
            <div className="flex flex-col gap-3 mt-2">
              {[
                { name: "Amazon (AWS)", amount: "US$125B", desc: "Datacenters, redes y energía." },
                { name: "Google (Alphabet)", amount: "US$91-93B", desc: "Cloud IA + Adquisición Intersect." },
                { name: "Microsoft", amount: "US$80B", desc: "Despliegue de Azure AI a escala." },
                { name: "Meta", amount: "US$70-72B", desc: "Infraestructura de entrenamiento." }
              ].map((item, i) => (
                <div key={i} className="flex flex-col">
                  <div className="flex justify-between items-baseline">
                    <span className="text-[11px] font-bold text-white">{item.name}</span>
                    <span className="text-[10px] text-emerald-400 font-mono font-bold">{item.amount}</span>
                  </div>
                  <p className="text-[9px] text-gray-500 leading-tight">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Rondas AI-Native (Funding) */}
          <div className="p-5 flex flex-col gap-3 bg-white/5">
            <div className="flex items-center gap-2 text-cyan-400">
              <span className="material-symbols-outlined text-sm">rocket_launch</span>
              <h4 className="text-xs font-bold uppercase tracking-tight">Megarrondas Startups</h4>
            </div>
            <div className="flex flex-col gap-4 mt-2">
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <p className="text-[11px] font-bold text-white">OpenAI (Serie F)</p>
                  <span className="text-[10px] text-cyan-400 font-bold">~$40B</span>
                </div>
                <p className="text-[9px] text-gray-400">SoftBank lidera compromiso de US$22.5B.</p>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <p className="text-[11px] font-bold text-white">Anthropic (Serie F)</p>
                  <span className="text-[10px] text-cyan-400 font-bold">US$13B</span>
                </div>
                <p className="text-[9px] text-gray-400">Valoración post-money US$183B.</p>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <p className="text-[11px] font-bold text-white">Databricks (Serie L)</p>
                  <span className="text-[10px] text-cyan-400 font-bold">{'>'}US$4B</span>
                </div>
                <p className="text-[9px] text-gray-400">Data + IA. Valoración US$134B.</p>
              </div>
            </div>
          </div>

          {/* 3. M&A & Estratégico */}
          <div className="p-5 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-amber-400">
              <span className="material-symbols-outlined text-sm">handshake</span>
              <h4 className="text-xs font-bold uppercase tracking-tight">Movimientos Estratégicos</h4>
            </div>
            <div className="flex flex-col gap-3 mt-2">
              <div className="p-2 bg-amber-500/5 border border-amber-500/10 rounded">
                <p className="text-[10px] font-bold text-white">Meta x Scale AI</p>
                <p className="text-[9px] text-gray-400 leading-tight">Stake del 49% por ~US$14.8B para control de labeling.</p>
              </div>
              <div className="p-2 bg-blue-500/5 border border-blue-500/10 rounded">
                <p className="text-[10px] font-bold text-white">Mistral AI (Serie C)</p>
                <p className="text-[9px] text-gray-400 leading-tight">€1.7B captados. Líder indiscutible del Frontier LLM europeo.</p>
              </div>
              <div className="p-2 bg-green-500/5 border border-green-500/10 rounded">
                <p className="text-[10px] font-bold text-white">NVIDIA: Licencias & xAI</p>
                <p className="text-[9px] text-gray-400 leading-tight">Acuerdo con Groq + Esquema de financiamiento para GPUs en xAI.</p>
              </div>
            </div>
          </div>

          {/* 4. Resumen Ejecutivo */}
          <div className="p-5 flex flex-col gap-3 bg-white/5">
            <div className="flex items-center gap-2 text-indigo-400">
              <span className="material-symbols-outlined text-sm">trending_up</span>
              <h4 className="text-xs font-bold uppercase tracking-tight">Análisis AhoraIA</h4>
            </div>
            <div className="flex flex-col gap-3">
              <div className="bg-indigo-500/10 p-3 rounded-lg border border-indigo-500/20">
                <h5 className="text-[10px] font-black uppercase text-indigo-300 mb-1">Tendencia Clave:</h5>
                <p className="text-[10px] text-gray-300 leading-relaxed italic">
                  "El capital está mutando de inversión pura a asegurar el suministro de chips y energía. 2026 será el año de la consolidación de infraestructuras soberanas."
                </p>
              </div>
              <div className="mt-2 space-y-1.5">
                <p className="text-[9px] text-gray-500 font-bold uppercase tracking-widest">Fuentes Verificadas:</p>
                <div className="flex flex-wrap gap-1">
                  {['Reuters', 'Tracxn', 'CB Insights', 'SEC Filings'].map(s => (
                    <span key={s} className="text-[8px] bg-gray-800 text-gray-400 px-1.5 py-0.5 rounded">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );

  // Regulation Information Dashboard Component (Existing)
  const RegulationInsightDashboard = () => (
    <div className="mb-10 animate-in slide-in-from-top duration-500">
      <div className="bg-[#111418] border border-indigo-500/30 rounded-2xl overflow-hidden shadow-2xl">
        <div className="bg-indigo-500/10 px-6 py-4 border-b border-indigo-500/20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-indigo-400">gavel</span>
            <h3 className="text-white font-bold font-display text-lg">Gobernanza & Regulación Global</h3>
          </div>
          <span className="text-[10px] text-indigo-400 font-bold uppercase tracking-widest bg-indigo-500/10 px-2 py-1 rounded">Compliance 2025-2027</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-800">
          <div className="p-5 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-indigo-400"><span className="material-symbols-outlined text-sm">balance</span><h4 className="text-xs font-bold uppercase tracking-tight">Unión Europea (EU AI Act)</h4></div>
            <p className="text-[10px] text-gray-500 leading-tight">Reglamento (UE) 2024/1689. Aplicación por niveles de riesgo.</p>
            <div className="flex flex-col gap-2 mt-2">
              <div className="text-[10px] space-y-1.5">
                <div className="flex gap-2"><span className="font-bold text-white shrink-0">02 FEB 25:</span><span className="text-gray-400">Prohibiciones.</span></div>
                <div className="flex gap-2"><span className="font-bold text-white shrink-0">02 AGO 25:</span><span className="text-gray-400">GPAI & Gobernanza.</span></div>
                <div className="flex gap-2"><span className="font-bold text-indigo-300 shrink-0">02 AGO 26:</span><span className="text-gray-300">Aplicación general.</span></div>
              </div>
            </div>
          </div>
          <div className="p-5 flex flex-col gap-3 bg-white/5">
            <div className="flex items-center gap-2 text-blue-400"><span className="material-symbols-outlined text-sm">flag</span><h4 className="text-xs font-bold uppercase tracking-tight">EE.UU. (Federal & Estados)</h4></div>
            <div className="flex flex-col gap-3 mt-2">
              <p className="text-[9px] text-gray-400">NIST RMF 1.0 + Leyes Estatales (CO/CA/NY 2026+). FTC Operation AI Comply.</p>
            </div>
          </div>
          <div className="p-5 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-amber-400"><span className="material-symbols-outlined text-sm">public</span><h4 className="text-xs font-bold uppercase tracking-tight">LatAm & Global</h4></div>
            <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-[10px] mt-2">
              <span className="text-white">Brasil:</span> <span className="text-gray-400">PL 2338/2023</span>
              <span className="text-white">Chile:</span> <span className="text-gray-400">Marco MinCiencia</span>
            </div>
          </div>
          <div className="p-5 flex flex-col gap-3 bg-white/5">
            <div className="flex items-center gap-2 text-emerald-400"><span className="material-symbols-outlined text-sm">fact_check</span><h4 className="text-xs font-bold uppercase tracking-tight">Compliance Checklist</h4></div>
            <p className="text-[9px] text-gray-400 leading-tight">Inventario, Clasificación, Gobernanza, Transparencia y Sesgos.</p>
          </div>
        </div>
      </div>
    </div>
  );

  // Hardware Information Dashboard Component (Existing)
  const HardwareInsightDashboard = () => (
    <div className="mb-10 animate-in slide-in-from-top duration-500">
      <div className="bg-[#0d1117] border border-green-500/30 rounded-2xl overflow-hidden shadow-2xl">
        <div className="bg-green-500/10 px-6 py-4 border-b border-green-500/20 flex items-center justify-between">
          <div className="flex items-center gap-3"><span className="material-symbols-outlined text-green-400">memory</span><h3 className="text-white font-bold font-display text-lg">Infraestructura & Hardware</h3></div>
          <span className="text-[10px] text-green-400 font-bold uppercase tracking-widest bg-green-500/10 px-2 py-1 rounded">Specs 2025/2026</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-800">
          <div className="p-5 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-green-400"><span className="material-symbols-outlined text-sm">settings_input_component</span><h4 className="text-xs font-bold uppercase tracking-tight">Aceleradores</h4></div>
            <p className="text-[10px] text-gray-400 leading-tight">NVIDIA Blackwell (GB200), AMD Instinct (MI350), Intel Gaudi 3.</p>
          </div>
          <div className="p-5 flex flex-col gap-3 bg-white/5">
            <div className="flex items-center gap-2 text-cyan-400"><span className="material-symbols-outlined text-sm">cloud</span><h4 className="text-xs font-bold uppercase tracking-tight">Chips de Nube</h4></div>
            <p className="text-[10px] text-gray-400 leading-tight">Google TPU v5p, AWS Trainium2, Microsoft Maia 100.</p>
          </div>
          <div className="p-5 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-orange-400"><span className="material-symbols-outlined text-sm">hub</span><h4 className="text-xs font-bold uppercase tracking-tight">Memoria</h4></div>
            <p className="text-[10px] text-gray-400 leading-tight">SK hynix HBM3E (12 capas/36GB) -{'>'} HBM4.</p>
          </div>
          <div className="p-5 flex flex-col gap-3 bg-white/5">
            <div className="flex items-center gap-2 text-pink-400"><span className="material-symbols-outlined text-sm">laptop_mac</span><h4 className="text-xs font-bold uppercase tracking-tight">Edge AI</h4></div>
            <p className="text-[10px] text-gray-300 font-mono space-y-1">Apple M4 (Neural Engine 3x) & Snapdragon X Elite (45 TOPS).</p>
          </div>
        </div>
      </div>
    </div>
  );

  // LLM Information Dashboard Component (Existing)
  const LLMInsightDashboard = () => (
    <div className="mb-10 animate-in slide-in-from-top duration-500">
      <div className="bg-[#1c2229] border border-primary/30 rounded-2xl overflow-hidden shadow-2xl">
        <div className="bg-primary/10 px-6 py-4 border-b border-primary/20 flex items-center justify-between">
          <div className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">analytics</span><h3 className="text-white font-bold font-display text-lg">Guía de Vanguardia: Mejores LLMs</h3></div>
          <span className="text-[10px] text-primary font-bold uppercase tracking-widest bg-primary/10 px-2 py-1 rounded">Actualizado 2025</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-800">
          <div className="p-5 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-blue-400"><span className="material-symbols-outlined text-sm">forum</span><h4 className="text-xs font-bold uppercase tracking-tight">Chat General</h4></div>
            <div className="flex flex-col gap-1 mt-2 text-[11px] font-mono text-gray-400">
              <p className="text-blue-300">1. Gemini-3-pro</p><p>2. Gemini-3-flash</p><p>3. Grok-4.1-thinking</p>
            </div>
          </div>
          <div className="p-5 flex flex-col gap-3 bg-white/5">
            <div className="flex items-center gap-2 text-green-400"><span className="material-symbols-outlined text-sm">terminal</span><h4 className="text-xs font-bold uppercase tracking-tight">Programación</h4></div>
            <p className="text-[10px] text-gray-500">Claude 3.7 Sonnet (52.80% SWE-bench).</p>
          </div>
          <div className="p-5 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-purple-400"><span className="material-symbols-outlined text-sm">language</span><h4 className="text-xs font-bold uppercase tracking-tight">WebDev</h4></div>
            <p className="text-[10px] text-gray-500">Claude Opus 4.5 (thinking) lidera UI frontal.</p>
          </div>
          <div className="p-5 flex flex-col gap-3 bg-white/5">
            <div className="flex items-center gap-2 text-yellow-400"><span className="material-symbols-outlined text-sm">inventory_2</span><h4 className="text-xs font-bold uppercase tracking-tight">Contexto Largo</h4></div>
            <p className="text-[10px] text-gray-400 italic">GPT-4.1 maneja hasta 10M tokens (HELM score: 0.588).</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="layout-container flex flex-col items-center py-5">
      <div className="layout-content-container flex flex-col max-w-[1200px] flex-1 px-4 md:px-10">

        {/* Breaking News Ticker */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-8">
          <div className="flex items-center gap-2 animate-pulse shrink-0">
            <span className="material-symbols-outlined text-red-500 fill-1">circle</span>
            <h3 className="text-gray-900 dark:text-white tracking-light text-lg font-bold font-display leading-tight">ÚLTIMA HORA</h3>
          </div>
          <div className="flex-1 w-full md:w-auto overflow-hidden">
            <div className="flex items-center gap-4 bg-white dark:bg-[#1c2229] px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm group">
              <div className="text-primary hidden sm:flex items-center justify-center rounded-lg bg-blue-50 dark:bg-[#283039] shrink-0 size-8">
                <span className="material-symbols-outlined text-sm">bolt</span>
              </div>
              <p className="text-gray-900 dark:text-white text-sm md:text-base font-medium leading-normal flex-1 truncate">
                {tickerText}
              </p>

            </div>
          </div>
        </div>

        {/* Live News Results Overlay */}
        {liveNews && (
          <div className="mb-8 p-6 bg-blue-900/10 border border-primary/30 rounded-xl animate-in slide-in-from-top duration-300">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-primary font-bold flex items-center gap-2">
                <span className="material-symbols-outlined">radar</span>
                Hallazgos en Tiempo Real de AHORALAIA
              </h3>
              <button onClick={() => setLiveNews(null)} className="text-gray-400 hover:text-white">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <p className="text-gray-200 text-sm whitespace-pre-wrap leading-relaxed mb-4">{liveNews.text}</p>
            {liveNews.sources.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {liveNews.sources.map((s: any, i: number) => (
                  <a key={i} href={s.uri} target="_blank" rel="noopener noreferrer" className="text-[10px] bg-blue-500/20 text-blue-300 px-2 py-1 rounded hover:bg-blue-500/40 truncate max-w-[200px]">
                    {s.title || 'Fuente externa'}
                  </a>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Hero Grid */}
        {activeFilter === 'Todo' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 min-h-[400px]">
            {/* BIG CARD: GPT-5.2 */}
            <Link to="/article/openai-gpt-5-2" className="md:col-span-2 relative group overflow-hidden rounded-xl bg-[#1c2229]">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0) 100%), url("/images/gpt-5-2-cover.png")' }}></div>
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                <span className="bg-primary text-white text-xs font-bold px-2 py-1 rounded w-fit mb-3 uppercase tracking-wider">Destacado</span>
                <h2 className="text-white font-display text-2xl md:text-4xl font-bold leading-tight mb-2">GPT-5.2: "Code Red" y la Nueva Era</h2>
                <p className="text-gray-300 text-sm md:text-base line-clamp-2 max-w-xl">La respuesta de OpenAI: mejoras drásticas en contexto largo y agentes autónomos para trabajo real.</p>
              </div>
            </Link>
            <div className="flex flex-col gap-4 h-full">
              {/* SMALL CARD 1: Gemini 3 */}
              <Link to="/article/google-gemini-3" className="flex-1 relative group overflow-hidden rounded-xl bg-[#1c2229]">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 100%), url("https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=600")' }}></div>
                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <span className="text-blue-300 text-xs font-bold mb-1 uppercase tracking-wider">Multimodal</span>
                  <h3 className="text-white font-display text-lg font-bold leading-tight">Google lanza Gemini 3</h3>
                </div>
              </Link>
              {/* SMALL CARD 2: NVIDIA (Kept as context) */}
              <div className="flex-1 relative group overflow-hidden rounded-xl bg-[#1c2229]">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 100%), url("https://images.unsplash.com/photo-1591453089816-0fbb971b454c?auto=format&fit=crop&q=80&w=600")' }}></div>
                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <span className="text-green-400 text-xs font-bold mb-1 uppercase tracking-wider">Hardware</span>
                  <h3 className="text-white font-display text-lg font-bold leading-tight">NVIDIA Blackwell: El futuro ya está aquí</h3>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Filters */}
        <div className="overflow-x-auto pb-6 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
          <div className="flex gap-3">
            {categories.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full border px-5 transition-all focus:ring-2 focus:ring-primary ${activeFilter === filter ? 'bg-primary border-primary text-white' : 'bg-white dark:bg-[#283039] border-gray-200 dark:border-transparent text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-[#3d4650]'}`}
              >
                <span className="text-sm font-medium">{filter}</span>
              </button>
            ))}
            <Link
              to="/proximamente"
              className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full border border-gray-200 dark:border-transparent bg-white dark:bg-[#283039] px-5 transition-all focus:ring-2 focus:ring-primary text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-[#3d4650]"
            >
              <span className="text-sm font-medium">Próximamente</span>
            </Link>
          </div>
        </div>

        {/* Dynamic Contextual Dashboards */}
        {activeFilter === 'LLMs' && <LLMInsightDashboard />}
        {activeFilter === 'Hardware' && <HardwareInsightDashboard />}
        {activeFilter === 'Regulación' && <RegulationInsightDashboard />}
        {activeFilter === 'Empresas' && <BusinessInsightDashboard />}

        {/* Main Layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* News Feed */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="flex items-center justify-between pb-2 border-b border-gray-200 dark:border-[#283039]">
              <h3 className="text-gray-900 dark:text-white text-xl font-bold font-display flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">feed</span>
                Feed AHORALAIA: {activeFilter}
              </h3>
            </div>

            {filteredNews.length > 0 ? filteredNews.map(news => (
              news.externalUrl ? (
                <a key={news.id} href={news.externalUrl} target="_blank" rel="noopener noreferrer" className="group flex flex-col sm:flex-row gap-5 bg-white dark:bg-transparent p-0 sm:p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-[#1c2229] transition-colors cursor-pointer">
                  <div className="w-full sm:w-48 h-48 sm:h-32 shrink-0 rounded-lg overflow-hidden bg-gray-200 dark:bg-[#283039]">
                    <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={news.imageUrl} alt={news.title} />
                  </div>
                  <div className="flex flex-col flex-1 px-4 sm:px-0 pb-4 sm:pb-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 text-[10px] font-bold px-2 py-0.5 rounded uppercase">{news.category}</span>
                      <span className="text-gray-500 dark:text-[#9dabb9] text-xs">{news.source}</span>
                      <span className="material-symbols-outlined text-[10px] text-gray-400">open_in_new</span>
                    </div>
                    <h4 className="text-gray-900 dark:text-white text-lg font-bold font-display leading-tight mb-2 group-hover:text-primary transition-colors">{news.title}</h4>
                    <p className="text-gray-600 dark:text-[#9dabb9] text-sm line-clamp-2 mb-3">{news.excerpt}</p>
                  </div>
                </a>
              ) : (
                <Link key={news.id} to={`/article/${news.id}`} className="group flex flex-col sm:flex-row gap-5 bg-white dark:bg-transparent p-0 sm:p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-[#1c2229] transition-colors cursor-pointer">
                  <div className="w-full sm:w-48 h-48 sm:h-32 shrink-0 rounded-lg overflow-hidden bg-gray-200 dark:bg-[#283039]">
                    <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={news.imageUrl} alt={news.title} />
                  </div>
                  <div className="flex flex-col flex-1 px-4 sm:px-0 pb-4 sm:pb-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 text-[10px] font-bold px-2 py-0.5 rounded uppercase">{news.category}</span>
                      <span className="text-gray-500 dark:text-[#9dabb9] text-xs">{news.source}</span>
                    </div>
                    <h4 className="text-gray-900 dark:text-white text-lg font-bold font-display leading-tight mb-2 group-hover:text-primary transition-colors">{news.title}</h4>
                    <p className="text-gray-600 dark:text-[#9dabb9] text-sm line-clamp-2 mb-3">{news.excerpt}</p>
                  </div>
                </Link>
              )
            )) : (
              <div className="py-20 text-center text-gray-500">No hay noticias en esta categoría por el momento.</div>
            )}
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-[340px] flex flex-col gap-8 shrink-0">
            <div className="flex flex-col gap-6 bg-white dark:bg-[#1c2229] p-6 rounded-xl border border-gray-100 dark:border-[#283039] shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="text-gray-900 dark:text-white font-bold font-display flex items-center gap-2">
                  <span className="material-symbols-outlined text-yellow-500 fill-1">handyman</span>
                  Herramientas curadas
                </h3>
              </div>
              <p className="text-[10px] text-gray-400 -mt-3 italic">Mejores del mes basadas en changelogs oficiales</p>

              <div className="flex flex-col gap-4">
                {TOOLS_MOCKS.map(tool => (
                  <div
                    key={tool.id}
                    onClick={() => handleVisitTool(tool.url)}
                    className="flex gap-4 items-start group cursor-pointer p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-[#283039] transition-all border border-transparent hover:border-primary/20"
                  >
                    <div className="size-10 rounded-lg bg-yellow-500/10 flex items-center justify-center text-yellow-500 group-hover:bg-yellow-500 group-hover:text-white transition-all shrink-0">
                      <span className="material-symbols-outlined">{tool.icon}</span>
                    </div>
                    <div className="flex-1 flex flex-col gap-0.5">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">{tool.name}</h4>
                        {tool.verified && (
                          <span className="material-symbols-outlined text-primary text-[14px] fill-1" title="Fuente Oficial Verificada">verified</span>
                        )}
                      </div>
                      <p className="text-[10px] text-primary font-bold uppercase tracking-wider">{tool.category}</p>
                      <p className="text-[11px] text-gray-500 leading-tight line-clamp-2">{tool.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-2 pt-4 border-t border-gray-100 dark:border-gray-800">
                <button className="w-full py-2 bg-gray-100 dark:bg-[#283039] text-gray-600 dark:text-gray-300 text-[10px] font-bold rounded-lg hover:bg-gray-200 dark:hover:bg-[#3d4650] transition-colors flex items-center justify-center gap-2">
                  VER RANKING DICIEMBRE 2026
                  <span className="material-symbols-outlined text-[14px]">history_edu</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
