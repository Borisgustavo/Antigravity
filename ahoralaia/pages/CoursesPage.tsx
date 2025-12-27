
import React from 'react';

const CoursesPage: React.FC = () => {
  const courseCategories = [
    {
      title: "Principiantes",
      icon: "rocket_launch",
      color: "text-blue-500",
      courses: [
        {
          name: "Líder de IA generativa (Generative AI Leader)",
          provider: "Google Cloud (Coursera)",
          link: "https://www.coursera.org/specializations/generative-ai-leader",
          tag: "Especialización"
        },
        {
          name: "Apps de IA generativa: transforma tu trabajo (Español)",
          provider: "Google Cloud (Coursera)",
          link: "https://www.coursera.org/learn/gen-ai-apps-transform-your-work-es",
          tag: "Básico"
        },
        {
          name: "IA generativa: más allá del chatbot (Español)",
          provider: "Google Cloud (Coursera)",
          link: "https://www.coursera.org/learn/generative-ai-beyond-the-chatbot-es",
          tag: "Práctico"
        }
      ]
    },
    {
      title: "Programadores / Técnicos",
      icon: "code",
      color: "text-emerald-500",
      courses: [
        {
          name: "Generative AI Software Engineering",
          provider: "Vanderbilt University / Jules White",
          link: "https://www.coursera.org/specializations/generative-ai-software-engineering",
          tag: "Avanzado"
        },
        {
          name: "Retrieval Augmented Generation (RAG)",
          provider: "DeepLearning.AI / Zain Hasan",
          link: "https://www.coursera.org/learn/retrieval-augmented-generation-rag",
          tag: "Especializado"
        },
        {
          name: "Building with the Claude API",
          provider: "Anthropic (Coursera)",
          link: "https://www.coursera.org/learn/building-with-the-claude-api",
          tag: "API"
        }
      ]
    },
    {
      title: "Expertos",
      icon: "psychology_alt",
      color: "text-purple-500",
      courses: [
        {
          name: "LLM Operations (LLMOps)",
          provider: "Duke University (Coursera)",
          link: "https://www.coursera.org/specializations/large-language-model-operations",
          tag: "Infraestructura"
        },
        {
          name: "LLM Fine-Tuning and Customization Training",
          provider: "Simplilearn (Coursera)",
          link: "https://www.coursera.org/learn/llm-fine-tuning-and-customization-training",
          tag: "Modelos"
        },
        {
          name: "Finetuning Large Language Models (Guided Project)",
          provider: "DeepLearning.AI / Sharon Zhou",
          link: "https://www.coursera.org/projects/finetuning-large-language-models-project",
          tag: "Hands-on"
        }
      ]
    }
  ];

  const learningPaths = [
    {
      name: "Ruta Principiante",
      duration: "4 semanas",
      steps: [
        { week: "1-2", title: "Líder de IA generativa" },
        { week: "3", title: "Apps de IA generativa" },
        { week: "4", title: "IA generativa: más allá del chatbot" }
      ]
    },
    {
      name: "Ruta Programador/Técnico",
      duration: "5-6 semanas",
      steps: [
        { week: "1-3", title: "Generative AI Software Engineering" },
        { week: "4", title: "RAG (Retrieval Augmented Generation)" },
        { week: "5-6", title: "Building with Claude API (+ Proyecto RAG)" }
      ]
    },
    {
      name: "Ruta Experto",
      duration: "6 semanas",
      steps: [
        { week: "1-3", title: "LLMOps (Duke University)" },
        { week: "4-5", title: "Fine-Tuning & Customization" },
        { week: "6", title: "Guided Project: Finetuning LLMs" }
      ]
    }
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen">
      {/* Hero Header */}
      <section className="relative py-16 px-4 md:px-10 bg-[#0f172a] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
        <div className="max-w-[1200px] mx-auto text-center relative z-10 flex flex-col items-center gap-6">
          <div className="bg-primary/20 text-primary px-4 py-1.5 rounded-full border border-primary/30 text-xs font-black uppercase tracking-widest">
            Academia AHORALAIA
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white font-display leading-tight">
            Domina la Era de la <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Inteligencia Artificial</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-body">
            Selección curada de los mejores cursos de la industria, desde fundamentos estratégicos hasta el entrenamiento avanzado de modelos.
          </p>
        </div>
      </section>

      <main className="max-w-[1200px] mx-auto py-16 px-4 md:px-10">
        {/* Course Grid */}
        <div className="flex flex-col gap-20">
          {courseCategories.map((category, catIdx) => (
            <section key={catIdx} className="animate-in fade-in slide-in-from-bottom duration-700" style={{ animationDelay: `${catIdx * 150}ms` }}>
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-3 rounded-2xl bg-white dark:bg-[#1c2229] border border-gray-100 dark:border-[#283039] shadow-sm ${category.color}`}>
                  <span className="material-symbols-outlined text-[32px]">{category.icon}</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-display">{category.title}</h2>
                  <p className="text-sm text-gray-500">Top 3 cursos recomendados</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {category.courses.map((course, idx) => (
                  <div key={idx} className="bg-white dark:bg-[#1c2127] border border-gray-200 dark:border-[#283039] rounded-2xl p-6 flex flex-col hover:border-primary/50 transition-all hover:shadow-xl group">
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-3">{course.tag}</span>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 leading-tight group-hover:text-primary transition-colors">{course.name}</h3>
                    <p className="text-sm text-gray-500 mb-6">{course.provider}</p>
                    <a 
                      href={course.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="mt-auto flex items-center justify-center gap-2 bg-gray-100 dark:bg-[#283039] hover:bg-primary hover:text-white dark:hover:bg-primary py-3 rounded-xl text-sm font-bold transition-all text-gray-700 dark:text-gray-300"
                    >
                      Ir al curso
                      <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                    </a>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Learning Paths Section */}
        <section className="mt-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900 dark:text-white font-display mb-4">Rutas de Aprendizaje Sugeridas</h2>
            <p className="text-gray-500">Programas intensivos diseñados para una transformación completa.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {learningPaths.map((path, pIdx) => (
              <div key={pIdx} className="bg-white dark:bg-[#0b0f14] border border-gray-200 dark:border-[#1e242b] rounded-3xl p-8 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <span className="material-symbols-outlined text-6xl text-primary">route</span>
                </div>
                
                <h3 className="text-xl font-black text-primary mb-1 uppercase tracking-tighter">{path.name}</h3>
                <p className="text-xs text-gray-500 font-bold mb-8 flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">schedule</span>
                  Duración: {path.duration}
                </p>

                <div className="space-y-6">
                  {path.steps.map((step, sIdx) => (
                    <div key={sIdx} className="flex gap-4 relative">
                      {sIdx < path.steps.length - 1 && (
                        <div className="absolute left-[15px] top-8 bottom-[-24px] w-0.5 bg-gray-100 dark:bg-gray-800"></div>
                      )}
                      <div className="size-8 rounded-full bg-primary/10 border border-primary/20 text-primary flex items-center justify-center text-[10px] font-black shrink-0 relative z-10">
                        {step.week}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-bold text-gray-800 dark:text-white leading-tight">{step.title}</h4>
                        <p className="text-[10px] text-gray-400 mt-1 uppercase">Semana {step.week}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 pt-6 border-t border-gray-100 dark:border-gray-800">
                  <button className="w-full text-xs font-black uppercase text-gray-400 hover:text-primary transition-colors tracking-widest flex items-center justify-center gap-2">
                    Descargar Guía en PDF
                    <span className="material-symbols-outlined text-sm">download</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-32 p-12 bg-primary rounded-[2.5rem] text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <div className="relative z-10 flex flex-col items-center gap-6">
            <span className="material-symbols-outlined text-[64px]">verified_user</span>
            <h2 className="text-3xl md:text-4xl font-black font-display">¿Buscas algo más específico?</h2>
            <p className="text-blue-100 max-w-xl">
              Nuestros analistas revisan nuevos programas cada semana. Suscríbete para recibir alertas de cursos premium gratuitos y becas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full max-w-md">
               <input className="bg-white/10 border border-white/20 px-6 py-4 rounded-2xl w-full text-white placeholder:text-blue-200 outline-none focus:ring-2 focus:ring-white/50" placeholder="tu@email.com" />
               <button className="bg-white text-primary font-black px-8 py-4 rounded-2xl whitespace-nowrap hover:bg-blue-50 transition-colors">
                 Unirme
               </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CoursesPage;
