import React from 'react';
import { Link } from 'react-router-dom';

const TermsPage: React.FC = () => {
    const sections = [
        {
            title: "1. Aceptación de los Términos",
            content: "Al acceder y utilizar el sitio web AHORALAIA (ahoralaia.com), usted acepta estar legalmente vinculado por estos Términos y Condiciones, junto con nuestra Política de Privacidad. Si no está de acuerdo con alguno de estos términos, por favor, absténgase de usar nuestro sitio. El acceso y uso continuo del sitio después de la publicación de cambios constituirá su aceptación de dichos cambios."
        },
        {
            title: "2. Descripción del Servicio",
            content: "AHORALAIA es una plataforma de información y divulgación sobre Inteligencia Artificial en español. Ofrecemos noticias, análisis de tendencias, guías de cursos, directorios de herramientas y recursos educativos relacionados con el ecosistema de la IA. El contenido es de carácter informativo y editorial, y no constituye asesoramiento profesional de ningún tipo."
        },
        {
            title: "3. Uso Aceptable del Sitio",
            content: "Usted se compromete a utilizar este sitio únicamente para fines lícitos y de manera que no infrinja los derechos de terceros ni restrinja o inhiba el uso y disfrute del sitio por parte de terceros. Está prohibido: (a) usar el sitio para transmitir cualquier contenido ilegal, difamatorio o fraudulento; (b) intentar obtener acceso no autorizado a cualquier parte de nuestros sistemas informáticos; (c) realizar scraping masivo o automatizado del contenido sin autorización expresa; (d) reproducir, duplicar, copiar, vender o revender cualquier parte del sitio sin nuestro permiso expreso por escrito."
        },
        {
            title: "4. Propiedad Intelectual",
            content: "Todo el contenido presente en AHORALAIA, incluyendo textos, gráficos, logotipos, iconos, imágenes, clips de audio, descargas digitales y compilaciones de datos, es propiedad de AHORALAIA o de sus proveedores de contenido y está protegido por las leyes de propiedad intelectual aplicables. La recopilación, selección y disposición de todo el contenido del sitio web es propiedad exclusiva de AHORALAIA. AHORALAIA™ y el logotipo de AHORALAIA son marcas comerciales registradas. La reproducción parcial o total de cualquier contenido está estrictamente prohibida sin autorización previa y por escrito."
        },
        {
            title: "5. Política de Privacidad y Datos Personales",
            content: "Respetamos su privacidad y nos comprometemos a proteger sus datos personales de acuerdo con el Reglamento General de Protección de Datos (RGPD) de la UE y la legislación aplicable. Los datos que recopilamos (como dirección IP, tipo de navegador y páginas visitadas) se utilizan exclusivamente para mejorar la experiencia del usuario y generar estadísticas de uso anónimas. No vendemos, transferimos ni divulgamos su información a terceros, salvo a nuestros socios de análisis web (como Google Analytics) bajo acuerdos de confidencialidad estrictos. Puede ejercer sus derechos de acceso, rectificación, supresión y portabilidad contactándonos en nuestro correo electrónico oficial."
        },
        {
            title: "6. Política de Cookies",
            content: "AHORALAIA utiliza cookies para mejorar la experiencia de navegación. Las cookies son pequeños archivos de texto que se almacenan en su dispositivo. Utilizamos: (a) Cookies esenciales: necesarias para el funcionamiento del sitio; (b) Cookies de análisis: Google Analytics para entender cómo los usuarios interactúan con el sitio; (c) Cookies de publicidad: Google AdSense para mostrar anuncios relevantes. Puede gestionar sus preferencias de cookies a través de la configuración de su navegador o usando nuestro panel de consentimiento de cookies. Tenga en cuenta que deshabilitar ciertas cookies puede afectar la funcionalidad del sitio."
        },
        {
            title: "7. Publicidad de Terceros (Google AdSense)",
            content: "AHORALAIA utiliza Google AdSense para mostrar anuncios en el sitio. Google, como proveedor externo, utiliza cookies para mostrar anuncios basados en las visitas anteriores de un usuario a este sitio web y a otros. El uso por parte de Google de la cookie de publicidad permite a Google y a sus socios mostrar anuncios basados en su visita a nuestro sitio web y/o a otros sitios de Internet. Los usuarios pueden inhabilitar la publicidad personalizada visitando los Controles de anuncios de Google (adssettings.google.com). Las ganancias generadas por la publicidad nos permiten mantener el servicio gratuito para todos los usuarios."
        },
        {
            title: "8. Descargo de Responsabilidad (Disclaimer)",
            content: "El contenido publicado en AHORALAIA tiene fines informativos y educativos. Si bien nos esforzamos por proporcionar información precisa y actualizada, no garantizamos la exactitud, integridad, actualización o idoneidad de la información para ningún propósito específico. El uso de cualquier información es bajo su propio riesgo. AHORALAIA no se hace responsable de las decisiones tomadas basándose en el contenido de este sitio. Recomendamos siempre verificar la información con fuentes primarias y, cuando corresponda, consultar con profesionales calificados."
        },
        {
            title: "9. Enlaces a Sitios de Terceros",
            content: "Nuestro sitio puede contener enlaces a sitios web o plataformas de terceros (como Coursera, Udemy, YouTube, etc.) que no son operados por nosotros. Si hace clic en un enlace de un tercero, será dirigido al sitio de ese tercero. Le recomendamos encarecidamente que revise la Política de Privacidad y los Términos de cada sitio que visite. No tenemos control sobre el contenido, las políticas de privacidad o las prácticas de sitios o servicios de terceros, y no asumimos ninguna responsabilidad por ellos. La inclusión de cualquier enlace no implica necesariamente un respaldo o asociación con los sitios enlazados."
        },
        {
            title: "10. Modificaciones de los Términos y Legislación Aplicable",
            content: "AHORALAIA se reserva el derecho de revisar y actualizar estos Términos y Condiciones en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en el sitio. Le recomendamos revisar esta página periódicamente. Estos Términos y Condiciones se rigen por las leyes de España y la Unión Europea. Cualquier disputa relacionada con estos términos estará sujeta a la jurisdicción exclusiva de los tribunales de España. Si alguna disposición de estos términos se considera inválida o inaplicable, las demás disposiciones seguirán en plena vigencia y efecto."
        }
    ];

    return (
        <div className="layout-container flex flex-col items-center py-12 px-4 md:px-10">
            <div className="layout-content-container max-w-[900px] w-full">

                {/* Header */}
                <div className="mb-10 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary mb-4">
                        <span className="material-symbols-outlined text-[18px]">gavel</span>
                        <span className="text-xs font-bold uppercase tracking-wide">Documento Legal</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
                        Términos y Condiciones
                    </h1>
                    <p className="text-gray-500 dark:text-[#9dabb9] text-sm">
                        Última actualización: <strong>Febrero 2025</strong> · Versión 2.0 · Aplicable a todos los usuarios de AHORALAIA.
                    </p>
                </div>

                {/* Intro Banner */}
                <div className="bg-blue-50 dark:bg-primary/5 border border-blue-200 dark:border-primary/20 rounded-2xl p-6 mb-10 flex gap-4 items-start">
                    <span className="material-symbols-outlined text-primary text-3xl shrink-0 mt-0.5">info</span>
                    <div>
                        <h2 className="text-gray-900 dark:text-white font-bold mb-1">Resumen ejecutivo</h2>
                        <p className="text-gray-600 dark:text-[#9dabb9] text-sm leading-relaxed">
                            AHORALAIA es un portal de información sobre Inteligencia Artificial. El contenido es editorial e informativo. El sitio es gratuito y se sostiene mediante publicidad de Google AdSense. Respetamos tu privacidad y cumplimos con el RGPD. Al usar el sitio, aceptas estos términos.
                        </p>
                    </div>
                </div>

                {/* Sections */}
                <div className="flex flex-col gap-8 bg-white dark:bg-[#1c2229] p-8 md:p-12 rounded-2xl shadow-sm border border-gray-200 dark:border-[#283039]">
                    {sections.map((section, i) => (
                        <div key={i} className={`${i < sections.length - 1 ? 'pb-8 border-b border-gray-100 dark:border-gray-800' : ''}`}>
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                                <span className="size-7 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-black shrink-0">{i + 1}</span>
                                <span>{section.title.replace(/^\d+\.\s/, '')}</span>
                            </h2>
                            <p className="text-gray-600 dark:text-[#9dabb9] leading-relaxed text-[15px]">
                                {section.content}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Contact Section */}
                <div className="mt-10 p-8 bg-gray-50 dark:bg-[#111418] border border-gray-200 dark:border-[#283039] rounded-2xl text-center">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">¿Tienes preguntas sobre nuestros términos?</h3>
                    <p className="text-gray-500 dark:text-[#9dabb9] text-sm mb-4">
                        Si tienes alguna consulta legal o sobre nuestra política de privacidad, no dudes en contactarnos.
                    </p>
                    <a
                        href="mailto:b.mejias15@gmail.com?subject=Consulta%20Legal%20AHORALAIA"
                        className="inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-xl hover:bg-blue-600 transition-all shadow-lg"
                    >
                        <span className="material-symbols-outlined text-sm">mail</span>
                        Contactar al equipo legal
                    </a>
                </div>

                {/* Back Link */}
                <div className="mt-8 flex justify-center">
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
    );
};

export default TermsPage;
