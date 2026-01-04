
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { NEWS_MOCKS } from '../constants';
import { getAISummary } from '../services/geminiService';

const ArticlePage: React.FC = () => {
  const { id } = useParams();
  const [aiSummary, setAiSummary] = useState<string | null>(null);
  const [isLoadingSummary, setIsLoadingSummary] = useState(false);

  // Use the first mockup article by default for demo
  const news = NEWS_MOCKS.find(n => n.id === id) || NEWS_MOCKS[0];

  useEffect(() => {
    setIsLoadingSummary(true);
    getAISummary(news.title).then(summary => {
      setAiSummary(summary);
      setIsLoadingSummary(false);
    });
  }, [news.title]);

  return (
    <main className="flex-1 w-full max-w-[960px] mx-auto px-4 md:px-6 py-8 animate-in fade-in duration-500">
      {/* Breadcrumbs */}
      <div className="flex flex-wrap items-center gap-2 mb-6 text-sm">
        <Link className="text-[#637588] dark:text-[#9dabb9] hover:text-primary transition-colors" to="/">Inicio</Link>
        <span className="material-symbols-outlined text-[12px] text-[#637588] dark:text-[#9dabb9]">chevron_right</span>
        <span className="text-[#637588] dark:text-[#9dabb9]">IA Generativa</span>
        <span className="material-symbols-outlined text-[12px] text-[#637588] dark:text-[#9dabb9]">chevron_right</span>
        <span className="text-[#111418] dark:text-white font-medium">Análisis Detallado</span>
      </div>

      <article className="flex flex-col gap-6">
        {/* Attribution */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-white dark:bg-[#283039] border border-[#e5e7eb] dark:border-[#283039]">
          <div className="flex items-center gap-4">
            <div className="size-12 rounded-full bg-white flex items-center justify-center overflow-hidden border border-gray-200 dark:border-gray-700 p-1">
              <div className="w-full h-full bg-black rounded-full flex items-center justify-center text-white text-[10px] font-bold">AHO</div>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold tracking-wider text-[#637588] dark:text-[#9dabb9] uppercase mb-0.5">Autor de AHORALAIA</span>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-[#111418] dark:text-white leading-none">{news.source}</h3>
                <span className="text-[#637588] dark:text-[#9dabb9] text-sm">• Actualizado 2025</span>
              </div>
            </div>
          </div>
          <button className="text-primary flex items-center gap-2 text-sm font-bold">
            <span className="material-symbols-outlined text-lg">share</span>
            Compartir
          </button>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight text-[#111418] dark:text-white font-display">
            {news.title}
          </h1>
          <p className="text-lg md:text-xl text-[#637588] dark:text-[#9dabb9] leading-relaxed max-w-3xl">
            {news.excerpt}
          </p>
        </div>

        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 group">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
          <div className="w-full h-full bg-cover bg-center transform transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: `url("${news.imageUrl}")`}}></div>
          <div className="absolute bottom-4 left-4 z-20 flex gap-2">
            <span className="px-3 py-1 rounded-full bg-primary/90 text-white text-xs font-medium backdrop-blur-sm">{news.category}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-4">
          <div className="lg:col-span-8 flex flex-col gap-8">
            {/* AI Summary Section */}
            <div className="bg-blue-50/50 dark:bg-[#1c2632]/50 rounded-xl p-6 border border-blue-100 dark:border-[#283039] shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <span className="material-symbols-outlined">auto_awesome</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#111418] dark:text-white">Resumen de AHORALAIA</h3>
                  <p className="text-sm text-[#637588] dark:text-[#9dabb9] uppercase tracking-wider font-semibold mt-1">Generado por Gemini</p>
                </div>
              </div>
              
              {isLoadingSummary ? (
                <div className="flex items-center gap-3 text-primary animate-pulse py-4">
                  <span className="material-symbols-outlined animate-spin">refresh</span>
                  <span className="text-sm font-medium">Analizando contexto...</span>
                </div>
              ) : (
                <div className="prose prose-sm dark:prose-invert max-w-none">
                  <p className="text-[#334155] dark:text-[#cbd5e1] leading-relaxed font-body whitespace-pre-wrap">
                    {aiSummary}
                  </p>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-6 text-[#334155] dark:text-[#cbd5e1] leading-loose text-lg font-body">
              <p>
                {news.content || `A medida que avanzamos en el despliegue de modelos avanzados, la integración de sistemas agénticos se ha vuelto la prioridad absoluta. AHORALAIA analiza el impacto de estas tecnologías en el ecosistema actual.`}
              </p>
              <p>
                Las últimas filtraciones y lanzamientos oficiales confirman que la competencia ya no es solo por el tamaño del modelo, sino por la capacidad de razonamiento profundo y la eficiencia energética en tareas de ciberseguridad y desarrollo.
              </p>
            </div>

            <div className="mt-4 p-8 rounded-2xl bg-[#1c2632] dark:bg-[#0d1218] border border-[#283039] text-center flex flex-col items-center gap-4 relative overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
              <h3 className="text-2xl font-bold text-white relative z-10">¿Quieres profundizar más?</h3>
              <p className="text-[#9dabb9] relative z-10 max-w-md">Accede al reporte técnico completo y los benchmarks realizados por el equipo de AHORALAIA.</p>
              <button className="mt-2 relative z-10 group inline-flex items-center justify-center gap-3 bg-primary hover:bg-blue-600 text-white text-lg font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 w-full sm:w-auto transform hover:-translate-y-0.5">
                <span>Leer Fuente Original</span>
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_outward</span>
              </button>
            </div>
          </div>

          <aside className="lg:col-span-4 flex flex-col gap-6">
            <div className="sticky top-24">
              <h3 className="text-lg font-bold text-[#111418] dark:text-white mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">auto_awesome</span>
                Relacionado
              </h3>
              <div className="flex flex-col gap-4">
                {NEWS_MOCKS.filter(n => n.id !== news.id).slice(0, 4).map(n => (
                  <Link key={n.id} to={`/article/${n.id}`} className="group flex gap-3 p-3 rounded-lg hover:bg-[#f0f2f4] dark:hover:bg-[#1e242b] transition-colors">
                    <div className="w-20 h-20 shrink-0 rounded-lg bg-cover bg-center overflow-hidden relative" style={{backgroundImage: `url("${n.imageUrl}")`}}></div>
                    <div className="flex flex-col justify-center">
                      <span className="text-xs text-primary font-bold mb-1 uppercase">{n.category}</span>
                      <h4 className="text-sm font-bold text-[#111418] dark:text-white leading-snug group-hover:text-primary transition-colors line-clamp-2">{n.title}</h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </article>
    </main>
  );
};

export default ArticlePage;
