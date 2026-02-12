
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
      name: "Ruta Principiante (negocio / productividad / no-code)",
      description: "Ideal para líderes y profesionales que buscan impacto inmediato sin código.",
      steps: [
        {
          title: "Líder de IA generativa (estrategia + adopción)",
          courses: [
            { name: "Líder de IA generativa (Generative AI Leader)", provider: "Google Cloud (Coursera)", link: "https://www.coursera.org/specializations/genaileader-es" },
            { name: "AI for Everyone", provider: "DeepLearning.AI (Coursera)", link: "https://www.coursera.org/learn/ai-for-everyone-es" }
          ]
        },
        {
          title: "Apps de IA generativa: transforma tu trabajo",
          courses: [
            { name: "Apps de IA generativa: transforma tu trabajo", provider: "Google Cloud (Coursera)", link: "https://www.coursera.org/learn/gen-ai-apps-transform-your-work-es" },
            { name: "Explorar los conceptos básicos de la IA generativa", provider: "Microsoft Learn", link: "https://learn.microsoft.com/es-es/training/modules/intro-generative-ai-explore-basics/" }
          ]
        },
        {
          title: "IA generativa: más allá del chatbot",
          courses: [
            { name: "IA generativa: más allá del chatbot", provider: "Google Cloud (Coursera)", link: "https://www.coursera.org/learn/gen-ai-beyond-the-chatbot-es" }
          ]
        }
      ]
    },
    {
      name: "Ruta Programador/Técnico (apps con LLMs, RAG, APIs)",
      description: "Para desarrolladores que construyen la próxima generación de apps inteligentes.",
      steps: [
        {
          title: "Generative AI Software Engineering",
          courses: [
            { name: "Generative AI Software Engineering Specialization", provider: "Vanderbilt (Coursera)", link: "https://www.coursera.org/specializations/generative-ai-software-engineering" },
            { name: "Generative AI for Software Developers", provider: "Coursera", link: "https://www.coursera.org/specializations/generative-ai-for-software-developers" }
          ]
        },
        {
          title: "RAG (Retrieval Augmented Generation)",
          courses: [
            { name: "Retrieval Augmented Generation (RAG)", provider: "DeepLearning.AI", link: "https://www.coursera.org/learn/retrieval-augmented-generation-rag" },
            { name: "Crea embeddings y RAG con BigQuery", provider: "Google Cloud", link: "https://www.coursera.org/learn/crea-embeddings-bsqueda-de-vectores-y-rag-con-bigquery" },
            { name: "Curso de IA: Aplicaciones RAG", provider: "Platzi", link: "https://platzi.com/cursos/rag-microsoft-azure/" }
          ]
        },
        {
          title: "Building with the Claude API",
          courses: [
            { name: "Building with the Claude API", provider: "Anthropic (Coursera)", link: "https://www.coursera.org/learn/building-with-the-claude-api" },
            { name: "Anthropic Academy: Build with Claude", provider: "Anthropic", link: "https://www.anthropic.com/learn/build-with-claude" }
          ]
        }
      ]
    },
    {
      name: "Ruta Experto (LLMOps, producción, fine-tuning)",
      description: "El camino hacia la maestría técnica y la operación a escala.",
      steps: [
        {
          title: "LLMOps (Operación en producción)",
          courses: [
            { name: "Large Language Model Operations (LLMOps)", provider: "Duke (Coursera)", link: "https://www.coursera.org/specializations/large-language-model-operations" }
          ]
        },
        {
          title: "Fine-Tuning & Customization",
          courses: [
            { name: "LLM Fine-Tuning and Customization Training", provider: "Simplilearn (Coursera)", link: "https://www.coursera.org/learn/llm-fine-tuning-and-customization-training" }
          ]
        },
        {
          title: "Guided Project: Finetuning LLMs",
          courses: [
            { name: "Finetuning Large Language Models", provider: "DeepLearning.AI", link: "https://www.coursera.org/projects/finetuning-large-language-models" }
          ]
        }
      ]
    }
  ];

  const udemyCourses = [
    { title: "AI Engineer Agentic Track: The Complete Agent & MCP Course (EN)", link: "https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/", rating: 4.9, students: "5k+" },
    { title: "LangChain – Develop AI Agents with LangChain & LangGraph (EN)", link: "https://www.udemy.com/course/langchain/", rating: 4.8, students: "20k+" },
    { title: "AI Engineer MLOps Track: Deploy Gen AI & Agentic AI at Scale (EN)", link: "https://www.udemy.com/course/generative-and-agentic-ai-in-production/", rating: 4.8, students: "8k+" },
    { title: "AI Engineer Core Track: LLM Engineering, RAG, QLoRA, Agents (EN)", link: "https://www.udemy.com/course/llm-engineering-master-ai-and-large-language-models/", rating: 4.7, students: "10k+" },
    { title: "Curso Completo de IA Generativa: ChatGPT, Midjourney y más! (ES)", link: "https://www.udemy.com/course/inteligencia-artificial-generativa-llms-chatgpt-dall-e-3/", rating: 4.7, students: "30k+" },
    { title: "Master RAG: Building Intelligent RAG Systems [NEW] (EN)", link: "https://www.udemy.com/course/master-rag-building-intelligent-rag-systems/", rating: 4.7, students: "2k+" },
    { title: "The Data Science Course: Complete Data Science Bootcamp 2026 (EN)", link: "https://www.udemy.com/course/the-data-science-course-complete-data-science-bootcamp/", rating: 4.6, students: "500k+" },
    { title: "Machine Learning A-Z: AI, Python & R + ChatGPT Prize [2025] (EN)", link: "https://www.udemy.com/course/machinelearning/", rating: 4.6, students: "1M+" },
    { title: "Deep Learning A-Z 2025: Neural Networks, AI & ChatGPT Prize (EN)", link: "https://www.udemy.com/course/deeplearning/", rating: 4.6, students: "350k+" },
    { title: "Python para Data Science & Machine Learning en 18 Días (ES)", link: "https://www.udemy.com/course/python-para-data-science/", rating: 4.6, students: "40k+" },
    { title: "Inteligencia Artificial y Deep Learning desde cero en Python (ES)", link: "https://www.udemy.com/course/deep-learning-desde-cero-en-python/", rating: 4.6, students: "25k+" },
    { title: "Machine Learning de A a la Z: R y Python para Data Science (ES)", link: "https://www.udemy.com/course/machinelearning-es/", rating: 4.6, students: "60k+" },
    { title: "Complete Data Science, Machine Learning, DL, NLP Bootcamp (EN)", link: "https://www.udemy.com/course/complete-machine-learning-nlp-bootcamp-mlops-deployment/", rating: 4.5, students: "50k+" },
    { title: "LLM & Generative AI Masterclass: Langchain, HuggingFace (EN)", link: "https://www.udemy.com/course/complete-natural-language-processing-nlp-with-spacy-nltk/", rating: 4.5, students: "15k+" },
    { title: "Artificial Intelligence A-Z 2025: Agentic AI, Gen AI, and RL (EN)", link: "https://www.udemy.com/course/artificial-intelligence-az/", rating: 4.4, students: "300k+" }
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen">
      {/* Hero Header */}
      <section className="relative py-16 px-4 md:px-10 bg-[#0f172a] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        <div className="max-w-[1200px] mx-auto text-center relative z-10 flex flex-col items-center gap-6">
          <div className="bg-primary/20 text-primary px-4 py-1.5 rounded-full border border-primary/30 text-xs font-black uppercase tracking-widest">
            RECOMENDACIONES DE AHORALAIA
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white font-display leading-tight">
            Domina la Era de la <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Inteligencia Artificial</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-body">
            Selección curada de los mejores cursos de la industria, desde fundamentos estratégicos hasta el entrenamiento avanzado de modelos.
          </p>
        </div>
      </section>

      <main className="max-w-[1400px] mx-auto py-16 px-4 md:px-10">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Left Column: Udemy Ranking */}
          <aside className="lg:w-1/4 shrink-0">
            <div className="sticky top-24 bg-white dark:bg-[#1c2229] border border-gray-200 dark:border-[#283039] rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-6 border-b border-gray-100 dark:border-[#283039] pb-4">
                <span className="material-symbols-outlined text-purple-600 text-3xl">trophy</span>
                <h2 className="text-lg font-black text-gray-900 dark:text-white leading-tight">Ranking “top 15” de cursos de IA en Udemy</h2>
              </div>

              <div className="space-y-4">
                {udemyCourses.map((course, idx) => (
                  <div key={idx} className="flex gap-3 group items-start">
                    <span className="font-black text-gray-300 dark:text-gray-600 text-xl font-mono min-w-[24px]">{idx + 1}.</span>
                    <div>
                      <a href={course.link} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-gray-700 dark:text-gray-200 group-hover:text-primary transition-colors line-clamp-2 hover:underline" title={course.title}>
                        {course.title}
                      </a>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex text-yellow-500 text-[10px]">
                          {"★".repeat(Math.round(course.rating))}
                        </div>
                        <span className="text-[10px] text-gray-400 font-medium">{course.rating}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-4 border-t border-gray-100 dark:border-[#283039]">
                <a href="https://www.udemy.com/" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-primary flex items-center gap-1 hover:underline">
                  Ver todos en Udemy
                  <span className="material-symbols-outlined text-[14px]">arrow_outward</span>
                </a>
              </div>
            </div>
          </aside>

          {/* Right Column: Main Content */}
          <div className="flex-1 min-w-0">
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

                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
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

              <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                {learningPaths.map((path, pIdx) => (
                  <div key={pIdx} className="bg-white dark:bg-[#0b0f14] border border-gray-200 dark:border-[#1e242b] rounded-3xl p-8 relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                      <span className="material-symbols-outlined text-6xl text-primary">route</span>
                    </div>

                    <h3 className="text-xl font-black text-primary mb-2 uppercase tracking-tighter leading-tight">{path.name}</h3>
                    <p className="text-xs text-gray-500 mb-8 leading-relaxed h-[40px] text-balance">
                      {path.description}
                    </p>

                    <div className="space-y-8">
                      {path.steps.map((step, sIdx) => (
                        <div key={sIdx} className="relative">
                          {sIdx < path.steps.length - 1 && (
                            <div className="absolute left-[15px] top-8 bottom-[-45px] w-0.5 bg-gray-100 dark:bg-gray-800"></div>
                          )}
                          <div className="flex gap-4">
                            <div className="size-8 rounded-full bg-primary/10 border border-primary/20 text-primary flex items-center justify-center text-[10px] font-black shrink-0 relative z-10">
                              {sIdx + 1}
                            </div>
                            <div className="flex-1">
                              <h4 className="text-sm font-bold text-gray-800 dark:text-white leading-tight mb-3">{step.title}</h4>
                              <div className="flex flex-col gap-2">
                                {step.courses.map((c, cIdx) => (
                                  <a
                                    key={cIdx}
                                    href={c.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group/link flex items-start gap-2 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-[#151a21] transition-colors border border-transparent hover:border-gray-100 dark:hover:border-[#283039]"
                                  >
                                    <span className="material-symbols-outlined text-[14px] text-primary mt-0.5 group-hover/link:scale-110 transition-transform">school</span>
                                    <div>
                                      <p className="text-xs font-bold text-gray-700 dark:text-gray-300 decoration-primary/50 group-hover/link:underline">{c.name}</p>
                                      <p className="text-[10px] text-gray-400 mt-0.5">{c.provider}</p>
                                    </div>
                                  </a>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>


                  </div>
                ))}
              </div>
            </section>

            {/* Call to Action */}
            <section className="mt-32 p-12 bg-[#a435f0] rounded-[2.5rem] text-center text-white relative overflow-hidden shadow-2xl shadow-purple-900/20">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
              <div className="relative z-10 flex flex-col items-center gap-6">
                <span className="material-symbols-outlined text-[64px]">search_check</span>
                <h2 className="text-3xl md:text-4xl font-black font-display">Encuentra tu curso ideal en Udemy</h2>
                <p className="text-purple-100 max-w-xl text-lg">
                  ¿No encuentras lo que buscas? Explora el catálogo más grande del mundo con más de 200,000 cursos de IA, Python y Data Science.
                </p>
                <form
                  action="https://www.udemy.com/courses/search/"
                  method="get"
                  target="_blank"
                  className="flex flex-col sm:flex-row gap-4 mt-4 w-full max-w-2xl"
                >
                  <input type="hidden" name="src" value="ukw" />
                  <div className="relative flex-1">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">search</span>
                    <input
                      name="q"
                      className="bg-white text-gray-900 border-2 border-transparent focus:border-white px-6 py-4 pl-12 rounded-2xl w-full placeholder:text-gray-400 outline-none font-medium shadow-lg"
                      placeholder="Ej: Agentes IA, RAG, Python Avanzado..."
                      required
                    />
                  </div>
                  <button type="submit" className="bg-[#2d2f31] text-white font-black px-8 py-4 rounded-2xl whitespace-nowrap hover:bg-black transition-all hover:scale-105 shadow-xl flex items-center justify-center gap-2">
                    Buscar en Udemy
                    <span className="material-symbols-outlined text-[20px]">arrow_outward</span>
                  </button>
                </form>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CoursesPage;
