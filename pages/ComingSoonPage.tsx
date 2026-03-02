import React from 'react';
import { Link } from 'react-router-dom';

const ComingSoonPage: React.FC = () => {
    return (
        <div className="layout-container flex flex-col items-center py-12 px-4 md:px-10">
            <div className="flex flex-col items-center text-center mb-12 animate-in slide-in-from-top duration-700">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                    <span className="material-symbols-outlined text-4xl text-primary">hourglass_empty</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
                    Roadmap & Futuro 2026
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                    Análisis estratégico de los hitos regulatorios y tecnológicos confirmados que definirán el ecosistema de IA este año.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full mb-12">
                {/* Card 1: Regulación (UE) */}
                <div className="bg-white dark:bg-[#1c2229] border border-gray-200 dark:border-indigo-500/30 rounded-2xl p-6 shadow-xl flex flex-col gap-4 animate-in fade-in duration-700 delay-100">
                    <div className="flex items-center gap-3 border-b border-indigo-500/20 pb-4">
                        <span className="material-symbols-outlined text-indigo-400 text-3xl">gavel</span>
                        <h3 className="text-gray-900 dark:text-white font-bold font-display text-xl leading-tight">UE: AI Act "Modo Full"</h3>
                    </div>
                    <div className="flex-1 flex flex-col gap-4">
                        <div className="bg-indigo-500/10 p-3 rounded-lg border border-indigo-500/20">
                            <p className="text-xs font-bold text-indigo-300 uppercase tracking-wider mb-1">Hito 2026</p>
                            <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">La Ley de IA de la UE queda plenamente aplicable el <span className="text-indigo-400 font-bold">2 de agosto de 2026</span>.</p>
                        </div>
                        <div>
                            <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                                <span className="text-indigo-400">●</span> Qué se viene (Práctico)
                            </h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-2">Más presión de cumplimiento: documentación, transparencia y obligaciones por riesgo.</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Nuevos instrumentos de apoyo: guías sobre marcado de contenido AI.</p>
                        </div>
                    </div>
                    <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                        <p className="text-xs text-indigo-500 font-bold uppercase mb-1">Impacto</p>
                        <p className="text-xs text-gray-500 italic">De "IA como producto" a "IA como producto regulado".</p>
                    </div>
                </div>

                {/* Card 2: Hardware (NVIDIA) */}
                <div className="bg-white dark:bg-[#1c2229] border border-gray-200 dark:border-green-500/30 rounded-2xl p-6 shadow-xl flex flex-col gap-4 animate-in fade-in duration-700 delay-200">
                    <div className="flex items-center gap-3 border-b border-green-500/20 pb-4">
                        <span className="material-symbols-outlined text-green-400 text-3xl">memory</span>
                        <h3 className="text-gray-900 dark:text-white font-bold font-display text-xl leading-tight">Hardware: NVIDIA "Rubin"</h3>
                    </div>
                    <div className="flex-1 flex flex-col gap-4">
                        <div className="bg-green-500/10 p-3 rounded-lg border border-green-500/20">
                            <p className="text-xs font-bold text-green-400 uppercase tracking-wider mb-1">Hito 2026</p>
                            <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">Lanzamiento de plataforma <span className="text-green-400 font-bold">Vera Rubin (GPU Rubin CPX)</span> hacia fines de año.</p>
                        </div>
                        <div>
                            <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                                <span className="text-green-400">●</span> Qué cambia
                            </h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-2">Enfoque en inferencia de contexto masivo (millones de tokens) para agentes complejos.</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">Menor costo por respuesta y salto en "massive-context inference".</p>
                        </div>
                    </div>
                    <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                        <p className="text-xs text-green-500 font-bold uppercase mb-1">Impacto</p>
                        <p className="text-xs text-gray-500 italic">Apps con agentes robustos y video multimodal más barato.</p>
                    </div>
                </div>

                {/* Card 3: Modelos (Meta) */}
                <div className="bg-white dark:bg-[#1c2229] border border-gray-200 dark:border-blue-500/30 rounded-2xl p-6 shadow-xl flex flex-col gap-4 animate-in fade-in duration-700 delay-300">
                    <div className="flex items-center gap-3 border-b border-blue-500/20 pb-4">
                        <span className="material-symbols-outlined text-blue-400 text-3xl">psychology</span>
                        <h3 className="text-gray-900 dark:text-white font-bold font-display text-xl leading-tight">Modelos: Meta 1H 2026</h3>
                    </div>
                    <div className="flex-1 flex flex-col gap-4">
                        <div className="bg-blue-500/10 p-3 rounded-lg border border-blue-500/20">
                            <p className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-1">Hito 2026</p>
                            <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">Lanzamiento de nuevos modelos <span className="text-blue-400 font-bold">"Mango" y "Avocado"</span> en el primer semestre.</p>
                        </div>
                        <div>
                            <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                                <span className="text-blue-400">●</span> Qué esperar
                            </h4>
                            <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                <li><strong className="text-gray-800 dark:text-gray-200">Mango:</strong> Foco en Imagen/Video.</li>
                                <li><strong className="text-gray-800 dark:text-gray-200">Avocado:</strong> Texto con foco en código.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                        <p className="text-xs text-blue-500 font-bold uppercase mb-1">Impacto</p>
                        <p className="text-xs text-gray-500 italic">Batalla en generación visual, agentes y software.</p>
                    </div>
                </div>
            </div>

            {/* Why This Roadmap Matters */}
            <div className="max-w-4xl w-full mb-12 animate-in fade-in duration-700 delay-400">
                <div className="flex items-center gap-3 mb-6 justify-center">
                    <div className="p-2 bg-primary/10 rounded-xl border border-primary/20">
                        <span className="material-symbols-outlined text-primary">analytics</span>
                    </div>
                    <h2 className="text-2xl font-black text-gray-900 dark:text-white font-display">¿Por qué importa este roadmap?</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
                    {[
                        {
                            icon: 'gavel',
                            color: 'text-indigo-400',
                            bg: 'border-indigo-500/30',
                            title: 'La regulación ya no es teoría',
                            text: 'El AI Act europeo pasa a plena aplicación el 2 de agosto de 2026. Esto significa multas de hasta el 3% del volumen de negocio para incumplimientos en sistemas de riesgo alto. Las empresas que no hayan iniciado su adaptación enfrentarán consecuencias reales.'
                        },
                        {
                            icon: 'memory',
                            color: 'text-green-400',
                            bg: 'border-green-500/30',
                            title: 'El hardware define el techo',
                            text: 'La plataforma NVIDIA Vera Rubin reducirá el costo por inferencia de prompts de contexto masivo (millones de tokens). Esto no es una mejora incremental: hace económicamente viables nuevas categorías de productos inteligentes que hoy son inaccesibles.'
                        },
                        {
                            icon: 'psychology',
                            color: 'text-blue-400',
                            bg: 'border-blue-500/30',
                            title: 'Los modelos se especializan',
                            text: 'Meta apuesta por modelos especializados: Mango para imagen/video y Avocado para código. Esta tendencia marca el fin de los "modelos generales para todo" y el inicio de la era de los foundation models con propósito específico y mejor rendimiento.'
                        }
                    ].map((item, i) => (
                        <div key={i} className={`bg-white dark:bg-[#1c2229] border ${item.bg} rounded-2xl p-6 flex flex-col gap-4`}>
                            <span className={`material-symbols-outlined ${item.color} text-2xl`}>{item.icon}</span>
                            <h3 className={`font-bold ${item.color} text-base leading-snug`}>{item.title}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Glossary Section */}
            <div className="max-w-4xl w-full mb-14 animate-in fade-in duration-700 delay-500">
                <div className="flex items-center gap-3 mb-6 justify-center">
                    <div className="p-2 bg-amber-500/10 rounded-xl border border-amber-500/20">
                        <span className="material-symbols-outlined text-amber-400">menu_book</span>
                    </div>
                    <h2 className="text-2xl font-black text-gray-900 dark:text-white font-display">Glosario de Términos Clave</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                        { term: 'EU AI Act', def: 'Reglamento (UE) 2024/1689. Primera ley de IA a gran escala en el mundo, que clasifica sistemas por nivel de riesgo y establece obligaciones progresivas de cumplimiento.' },
                        { term: 'GPAI (General Purpose AI)', def: 'Modelos de IA de uso general como GPT o Gemini. Bajo el AI Act, los GPAI de impacto sistémico como GPT-4 tienen obligaciones adicionales de transparencia y seguridad.' },
                        { term: 'NVIDIA Vera Rubin (CPX)', def: 'Plataforma de nueva generación de NVIDIA, sucesora de Blackwell. Optimizada para inferencia de contextos masivos (millones de tokens), enfocada en reducir el costo por respuesta en agentes complejos.' },
                        { term: 'Inferencia de contexto masivo', def: 'Capacidad de un modelo de procesar y razonar sobre millones de tokens de texto en una sola solicitud. Permite analizar documentos completos, bases de código enteras o sesiones largas de agentes.' },
                        { term: 'Meta Mango', def: 'Nombre en código del próximo modelo de Meta para imagen y video generativo. Se espera su lanzamiento en el primer semestre de 2026, compitiendo directamente con Sora y Runway.' },
                        { term: 'Meta Avocado', def: 'Nombre en código del próximo modelo de Meta especializado en código y texto técnico. Diseñado para competir con Claude 3.7 Sonnet y o3 en benchmarks de programación (SWE-bench).' },
                    ].map((item, i) => (
                        <div key={i} className="bg-white dark:bg-[#1c2229] border border-gray-200 dark:border-[#283039] rounded-xl p-5 flex gap-4 items-start">
                            <div className="shrink-0 bg-primary/10 text-primary px-2 py-1 rounded-lg text-xs font-black border border-primary/20 mt-0.5">TÉRMINO</div>
                            <div>
                                <p className="font-bold text-gray-900 dark:text-white text-sm mb-1">{item.term}</p>
                                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{item.def}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Link
                to="/"
                className="px-8 py-3 bg-primary text-white font-bold rounded-full hover:bg-blue-600 transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
            >
                <span className="material-symbols-outlined">arrow_back</span>
                Volver al Inicio
            </Link>

        </div>
    );
};

export default ComingSoonPage;
