import React from 'react';
import Button from './common/Button';
import { Check, ChevronRight } from 'lucide-react';

const plans = [
  {
    name: 'Básico',
    price: '29',
    interval: 'mes',
    description: 'Ideal para vendedores individuales o equipos pequeños que buscan mejorar sus habilidades.',
    features: [
      'Modo de entrenamiento con 20 escenarios',
      'Acceso a los primeros 5 niveles',
      'Análisis básico de desempeño',
      'Actualizaciones mensuales'
    ],
    cta: 'Empezar Gratis',
    popular: false
  },
  {
    name: 'Profesional',
    price: '79',
    interval: 'mes',
    description: 'Perfecto para equipos de ventas que buscan mejorar sus resultados de forma consistente.',
    features: [
      'Modo de entrenamiento ilimitado',
      'Acceso a todos los niveles y certificaciones',
      'Asistente en tiempo real (copiloto)',
      'Análisis detallado de desempeño',
      'Actualizaciones semanales',
      'Soporte prioritario'
    ],
    cta: 'Comenzar Ahora',
    popular: true
  },
  {
    name: 'Empresarial',
    price: 'Personalizado',
    interval: '',
    description: 'Solución completa para grandes equipos con necesidades específicas de la industria.',
    features: [
      'Todo lo incluido en Profesional',
      'Escenarios personalizados para tu industria',
      'Integración con tu CRM',
      'Formación y soporte dedicado',
      'Reportes a nivel de equipo y organización',
      'SLA garantizado'
    ],
    cta: 'Contactar Ventas',
    popular: false
  }
];

const CTASection: React.FC = () => {
  return (
    <section id="planes" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Planes que se Adaptan a tus Necesidades</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Elige el plan que mejor se ajuste a tu equipo de ventas y comienza a mejorar tus resultados desde el primer día.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                plan.popular 
                  ? 'relative bg-white shadow-xl transform md:-translate-y-4' 
                  : 'bg-white shadow-lg hover:shadow-xl'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-orange-500 text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
                  Más Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold text-gray-900">{plan.price.startsWith('Personalizado') ? '' : '€'}{plan.price}</span>
                  {plan.interval && <span className="text-gray-600 ml-2">/{plan.interval}</span>}
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <Check size={16} className={plan.popular ? 'text-blue-600' : 'text-green-600'} />
                      </div>
                      <span className="ml-3 text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant={plan.popular ? 'primary' : 'outline'} 
                  fullWidth
                  size="lg"
                >
                  {plan.cta}
                  {plan.cta !== 'Contactar Ventas' && <ChevronRight size={16} className="ml-1" />}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="bg-blue-600 rounded-2xl p-12 max-w-4xl mx-auto text-white">
            <h3 className="text-3xl font-bold mb-4">¿Listo para revolucionar tus ventas?</h3>
            <p className="text-xl mb-8 opacity-90">
              Únete a cientos de empresas que ya están mejorando sus resultados con nuestro copiloto de ventas.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="secondary" size="lg">
                Comenzar Prueba Gratuita
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-blue-700">
                Ver Demostración
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;