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
                    Próximamente
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                    Estamos preparando un análisis profundo sobre los hitos que definirán el 2026. Aquí tienes un adelanto de lo que viene.
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
