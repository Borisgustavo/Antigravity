import React from 'react';
import { Link } from 'react-router-dom';

const TermsPage: React.FC = () => {
    return (
        <div className="layout-container flex flex-col items-center py-12 px-4 md:px-10">
            <div className="layout-content-container max-w-[900px] w-full bg-white dark:bg-[#1c2229] p-8 md:p-12 rounded-2xl shadow-sm border border-gray-200 dark:border-[#283039]">
                <div className="mb-8 border-b border-gray-100 dark:border-gray-800 pb-8">
                    <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
                        Términos y Condiciones
                    </h1>
                    <p className="text-gray-500 dark:text-[#9dabb9] text-sm">
                        Última actualización: Diciembre 2024
                    </p>
                </div>

                <div className="prose prose-blue dark:prose-invert max-w-none">
                    <p className="text-gray-600 dark:text-[#9dabb9] leading-relaxed mb-6">
                        Bienvenido a AHORALAIA. Al acceder y utilizar este sitio web, aceptas cumplir con los siguientes términos y condiciones de uso, que junto con nuestra política de privacidad rigen la relación de AHORALAIA contigo en relación con este sitio web.
                    </p>

                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">1. Uso del Sitio</h2>
                    <p className="text-gray-600 dark:text-[#9dabb9] leading-relaxed mb-4">
                        El contenido de las páginas de este sitio web es para tu información general y uso exclusivo. Está sujeto a cambios sin previo aviso. Ni nosotros ni terceros ofrecemos ninguna garantía en cuanto a la exactitud, puntualidad, rendimiento, integridad o idoneidad de la información y los materiales encontrados u ofrecidos en este sitio web para cualquier propósito particular.
                    </p>

                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">2. Propiedad Intelectual</h2>
                    <p className="text-gray-600 dark:text-[#9dabb9] leading-relaxed mb-4">
                        Este sitio web contiene material que es propiedad nuestra o licenciado a nosotros. Este material incluye, pero no se limita a, el diseño, la disposición, la apariencia y los gráficos. La reproducción está prohibida salvo de conformidad con el aviso de copyright, que forma parte de estos términos y condiciones.
                    </p>

                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">3. Enlaces a Terceros</h2>
                    <p className="text-gray-600 dark:text-[#9dabb9] leading-relaxed mb-4">
                        De vez en cuando, este sitio web también puede incluir enlaces a otros sitios web. Estos enlaces se proporcionan para tu conveniencia para proporcionar más información. No significan que respaldamos el sitio web(s). No tenemos ninguna responsabilidad por el contenido del sitio web vinculado.
                    </p>

                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">4. Limitación de Responsabilidad</h2>
                    <p className="text-gray-600 dark:text-[#9dabb9] leading-relaxed mb-6">
                        El uso de cualquier información o material en este sitio web es bajo tu propio riesgo, por lo cual no seremos responsables. Será tu propia responsabilidad asegurarte de que cualquier producto, servicio o información disponible a través de este sitio web cumpla con tus requisitos específicos.
                    </p>

                    <div className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-800 flex justify-center">
                        <Link
                            to="/"
                            className="text-primary font-bold hover:text-blue-600 transition-colors flex items-center gap-2"
                        >
                            <span className="material-symbols-outlined">arrow_back</span>
                            Volver al Inicio
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsPage;
