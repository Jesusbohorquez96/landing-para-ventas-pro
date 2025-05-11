import React from 'react';
import { Headphones, BookOpen, BarChart, Award } from 'lucide-react';

const steps = [
  {
    icon: <Headphones size={24} />,
    title: 'Asistencia en tiempo real',
    description: 'Activa el modo copiloto durante tus llamadas de venta reales. La IA escucha y analiza la conversación, sugiriendo respuestas, datos y argumentos de venta efectivos.',
    color: 'blue'
  },
  {
    icon: <BookOpen size={24} />,
    title: 'Entrenamiento personalizado',
    description: 'Practica en modo entrenamiento con escenarios que simulan clientes reales. Comienza con niveles básicos y avanza a situaciones más desafiantes a medida que mejoras.',
    color: 'orange'
  },
  {
    icon: <BarChart size={24} />,
    title: 'Análisis y retroalimentación',
    description: 'Recibe evaluaciones detalladas de tu desempeño con métricas clave y recomendaciones específicas para mejorar tus puntos débiles.',
    color: 'green'
  },
  {
    icon: <Award size={24} />,
    title: 'Progreso y certificación',
    description: 'Desbloquea nuevos niveles y certificaciones a medida que demuestras dominio en diferentes aspectos del proceso de venta.',
    color: 'purple'
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="como-funciona" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Cómo Funciona</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nuestra plataforma combina tecnología de punta con metodologías probadas de ventas para ofrecerte una experiencia completa de mejora continua.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-1 bg-gradient-to-b from-blue-600 to-purple-600 transform -translate-x-1/2"></div>
          
          {/* Steps */}
          <div className="space-y-12 lg:space-y-24 relative">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center relative`}>
                {/* Step icon (center on large screens) */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className={`w-16 h-16 rounded-full bg-${step.color}-100 text-${step.color}-600 flex items-center justify-center shadow-md`}>
                    {step.icon}
                  </div>
                </div>
                
                {/* Left side */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:pl-16'}`}>
                  <div className="flex lg:hidden items-center mb-4">
                    <div className={`w-12 h-12 rounded-full bg-${step.color}-100 text-${step.color}-600 flex items-center justify-center mr-4`}>
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                  </div>
                  <h3 className="hidden lg:block text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                
                {/* Right side - Visual */}
                <div className="lg:w-1/2">
                  <div className={`bg-gray-100 rounded-xl p-6 shadow-md ${index % 2 === 0 ? 'lg:ml-16' : 'lg:mr-16'}`}>
                    {index === 0 && (
                      <div className="h-48 bg-white rounded-lg p-4 flex flex-col border border-gray-200">
                        <div className="mb-auto">
                          <div className="bg-blue-50 text-blue-800 p-3 rounded-lg mb-3">
                            <div className="text-sm font-medium mb-1">Cliente:</div>
                            <div>"No estoy seguro si este producto se ajusta a nuestro presupuesto actual."</div>
                          </div>
                          <div className="bg-green-50 text-green-800 p-3 rounded-lg">
                            <div className="text-sm font-medium mb-1">Sugerencia:</div>
                            <div>"Entiendo su preocupación por el presupuesto. ¿Podría compartirle cómo otras empresas similares a la suya han logrado un ROI positivo en menos de 3 meses?"</div>
                          </div>
                        </div>
                        <div className="text-sm text-gray-500 mt-2">Modo Copiloto • Asistencia en tiempo real</div>
                      </div>
                    )}
                    {index === 1 && (
                      <div className="h-48 bg-white rounded-lg p-4 flex flex-col border border-gray-200">
                        <div className="mb-3 flex justify-between">
                          <span className="text-sm font-medium">Nivel 5: Cliente técnico</span>
                          <span className="text-sm bg-orange-100 text-orange-800 px-2 py-0.5 rounded">Intermedio</span>
                        </div>
                        <div className="flex justify-between space-x-4 mb-3">
                          <div className="w-1/2 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-green-500 w-3/4 rounded-full"></div>
                          </div>
                          <div className="text-sm text-gray-600">75% completado</div>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg mb-auto">
                          <div className="text-sm mb-2">Desafío actual:</div>
                          <div className="font-medium">Explica las especificaciones técnicas del producto y su integración con sistemas existentes.</div>
                        </div>
                        <div className="text-sm text-gray-500 mt-2">Modo Entrenamiento • 10 escenarios restantes</div>
                      </div>
                    )}
                    {index === 2 && (
                      <div className="h-48 bg-white rounded-lg p-4 flex flex-col border border-gray-200">
                        <div className="text-lg font-medium mb-3">Resumen de Rendimiento</div>
                        <div className="grid grid-cols-2 gap-3 mb-auto">
                          <div className="bg-blue-50 p-3 rounded-lg">
                            <div className="text-sm text-gray-600">Tasa de cierre</div>
                            <div className="flex items-end justify-between">
                              <div className="text-xl font-bold text-blue-700">68%</div>
                              <div className="text-green-600 text-xs flex items-center">
                                <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                </svg>
                                <span>+8%</span>
                              </div>
                            </div>
                          </div>
                          <div className="bg-green-50 p-3 rounded-lg">
                            <div className="text-sm text-gray-600">Calidad respuestas</div>
                            <div className="flex items-end justify-between">
                              <div className="text-xl font-bold text-green-700">85%</div>
                              <div className="text-green-600 text-xs flex items-center">
                                <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                </svg>
                                <span>+12%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="text-sm text-gray-500 mt-2">Análisis • Últimos 30 días</div>
                      </div>
                    )}
                    {index === 3 && (
                      <div className="h-48 bg-white rounded-lg p-4 flex flex-col border border-gray-200">
                        <div className="text-lg font-medium mb-3">Certificaciones Desbloqueadas</div>
                        <div className="flex space-x-3 overflow-x-auto pb-2 mb-auto">
                          <div className="flex-shrink-0 w-20 h-20 bg-blue-100 rounded-lg flex flex-col items-center justify-center p-2">
                            <Award size={24} className="text-blue-600 mb-1" />
                            <div className="text-xs text-center font-medium text-blue-800">Básico</div>
                          </div>
                          <div className="flex-shrink-0 w-20 h-20 bg-green-100 rounded-lg flex flex-col items-center justify-center p-2">
                            <Award size={24} className="text-green-600 mb-1" />
                            <div className="text-xs text-center font-medium text-green-800">Intermedio</div>
                          </div>
                          <div className="flex-shrink-0 w-20 h-20 bg-gray-100 rounded-lg flex flex-col items-center justify-center p-2 relative">
                            <Award size={24} className="text-gray-400 mb-1" />
                            <div className="text-xs text-center font-medium text-gray-500">Avanzado</div>
                            <div className="absolute -top-1 -right-1 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs">
                              80%
                            </div>
                          </div>
                        </div>
                        <div className="text-sm text-gray-500 mt-2">Progreso • 2 de 3 certificaciones completadas</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;