
import React from 'react';
import { TIMELINE_MOCKS } from '../constants';

const TimelinePage: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col">
      <main className="flex flex-col flex-1">
        {/* Hero Header */}
        <section className="relative w-full py-12 sm:py-24 px-4 sm:px-10 flex flex-col items-center justify-center bg-cover bg-center overflow-hidden" style={{backgroundImage: 'linear-gradient(to bottom, rgba(16, 25, 34, 0.9), rgba(16, 25, 34, 1)), url("https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=1200")'}}>
          <div className="max-w-4xl w-full text-center z-10 flex flex-col gap-6">
            <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary w-fit mx-auto">
              <span className="material-symbols-outlined text-[18px]">history</span>
              <span className="text-xs font-bold uppercase tracking-wide">Línea de Tiempo 1945-2025</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-white leading-tight tracking-tight font-display">
              80 Años de <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-300">Inteligencia Artificial</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed font-body">Un recorrido por los hitos, los "inviernos" y los saltos tecnológicos que nos trajeron a la era de la IA generativa.</p>
          </div>
        </section>

        {/* Timeline Body */}
        <section className="flex-1 py-16 px-4 sm:px-10">
          <div className="max-w-[1000px] mx-auto relative">
            {/* The actual line behind events */}
            <div className="absolute left-[20px] top-0 bottom-0 w-1 bg-gray-200 dark:bg-[#283039] z-0 hidden sm:block"></div>
            
            {/* Events Loop */}
            <div className="flex flex-col gap-12">
              {TIMELINE_MOCKS.map((event, index) => {
                const isWinter = event.category === 'Invierno';
                return (
                  <div key={event.id} className="relative grid grid-cols-[1fr] sm:grid-cols-[40px_1fr] gap-x-8 group animate-in slide-in-from-bottom duration-500" style={{ animationDelay: `${index * 100}ms` }}>
                    {/* Visual Marker */}
                    <div className="hidden sm:flex flex-col items-center h-full relative">
                      <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 ring-background-light dark:ring-background-dark z-10 transition-all duration-300 ${isWinter ? 'bg-blue-900 text-blue-200 border-blue-400/30 group-hover:bg-blue-700' : 'bg-[#283039] text-primary border-transparent group-hover:bg-primary group-hover:text-white'}`}>
                        <span className="material-symbols-outlined text-[20px]">{event.icon}</span>
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className="bg-white dark:bg-[#1c2127] border border-gray-200 dark:border-[#283039] rounded-2xl overflow-hidden hover:border-primary/50 transition-all shadow-sm group-hover:shadow-xl transform group-hover:-translate-y-1">
                      <div className="flex flex-col md:flex-row h-full">
                        {/* Image Container with fix for absolute positioning */}
                        <div className="relative w-full md:w-64 h-48 md:h-auto bg-cover bg-center shrink-0" style={{backgroundImage: `url("${event.imageUrl}")`}}>
                          {isWinter && (
                            <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply backdrop-blur-[1px]"></div>
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden"></div>
                        </div>
                        
                        <div className="p-6 flex flex-col flex-1">
                          <div className="flex items-center justify-between mb-3">
                            <span className={`text-sm font-black tracking-tighter ${isWinter ? 'text-blue-400' : 'text-primary'}`}>{event.date}</span>
                            <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest ${isWinter ? 'bg-blue-900/30 text-blue-300 border border-blue-500/20' : 'bg-gray-100 dark:bg-[#283039] text-gray-400'}`}>
                              {event.category}
                            </span>
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 font-display group-hover:text-primary transition-colors">{event.title}</h3>
                          <p className="text-gray-600 dark:text-[#9dabb9] text-sm leading-relaxed mb-4">
                            {event.description}
                          </p>
                          <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center gap-2">
                            <span className="material-symbols-outlined text-gray-400 text-[18px]">lightbulb</span>
                            <span className="text-[11px] text-gray-400 uppercase font-bold tracking-widest">Hito Clave: {event.id.toUpperCase().replace('-', ' ')}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Analysis Section */}
            <div className="mt-24 p-8 sm:p-12 bg-primary/5 border border-primary/20 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1 flex flex-col gap-4">
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white font-display">La Constante de la IA</h3>
                  <p className="text-gray-600 dark:text-[#9dabb9] text-lg leading-relaxed">
                    La historia de la IA se repite en ciclos. Cada renacimiento ocurre cuando tres factores convergen en escala brutal: 
                    <span className="text-primary font-bold"> Algoritmos + Datos + Hardware</span>.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
                    <div className="p-3 bg-white dark:bg-[#1c2127] rounded-xl border border-gray-100 dark:border-[#283039] text-center">
                      <p className="text-xs font-black text-primary uppercase">Algoritmos</p>
                      <p className="text-[10px] text-gray-500">De reglas lógicas a Transformers.</p>
                    </div>
                    <div className="p-3 bg-white dark:bg-[#1c2127] rounded-xl border border-gray-100 dark:border-[#283039] text-center">
                      <p className="text-xs font-black text-primary uppercase">Datos</p>
                      <p className="text-[10px] text-gray-500">De manuales a la web completa.</p>
                    </div>
                    <div className="p-3 bg-white dark:bg-[#1c2127] rounded-xl border border-gray-100 dark:border-[#283039] text-center">
                      <p className="text-xs font-black text-primary uppercase">Hardware</p>
                      <p className="text-[10px] text-gray-500">De tubos de vacío a GPUs H100.</p>
                    </div>
                  </div>
                </div>
                <div className="size-48 bg-primary rounded-2xl flex items-center justify-center rotate-3 shadow-2xl shrink-0">
                  <span className="material-symbols-outlined text-white text-[80px]">auto_graph</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default TimelinePage;
