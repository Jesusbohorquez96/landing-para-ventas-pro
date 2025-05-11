import React from 'react';
import { Check, X } from 'lucide-react';
import { Button } from './ui/Button';

interface PricingPlan {
  id: string;
  name: string;
  price: string;
  description: string;
  features: {
    text: string;
    included: boolean;
  }[];
  cta: string;
  popular?: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Básico',
    price: '$29.99',
    description: 'Perfecto para vendedores individuales que buscan mejorar sus habilidades.',
    features: [
      { text: 'Niveles básicos (1-2)', included: true },
      { text: 'Análisis de rendimiento', included: true },
      { text: 'Escenarios predefinidos', included: true },
      { text: 'Niveles avanzados (3-5)', included: false },
      { text: 'Creación de escenarios', included: false },
      { text: 'Seguimiento de equipo', included: false },
    ],
    cta: 'Comenzar Prueba Gratis'
  },
  {
    id: 'professional',
    name: 'Profesional',
    price: '$69.99',
    description: 'Diseñado para profesionales de ventas que quieren dominar su oficio.',
    features: [
      { text: 'Todos los niveles (1-5)', included: true },
      { text: 'Análisis de rendimiento', included: true },
      { text: 'Escenarios predefinidos', included: true },
      { text: 'Creación de escenarios', included: true },
      { text: 'Seguimiento de equipo', included: false },
      { text: 'Integraciones API', included: false },
    ],
    cta: 'Comenzar Prueba Gratis',
    popular: true
  },
  {
    id: 'enterprise',
    name: 'Empresarial',
    price: '$119.99',
    description: 'Para equipos de ventas y organizaciones que buscan elevar toda su fuerza comercial.',
    features: [
      { text: 'Todos los niveles (1-5)', included: true },
      { text: 'Análisis de rendimiento', included: true },
      { text: 'Escenarios predefinidos', included: true },
      { text: 'Creación de escenarios', included: true },
      { text: 'Seguimiento de equipo', included: true },
      { text: 'Integraciones API', included: true },
    ],
    cta: 'Contactar Ventas'
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-sm font-semibold bg-blue-100 text-blue-700 rounded-full mb-4">
            Precios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Elige el Plan Perfecto para tus Necesidades
          </h2>
          <p className="text-lg text-gray-700">
            Todos los planes incluyen una prueba gratuita de 14 días. No se requiere tarjeta de crédito para comenzar.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan) => (
            <div 
              key={plan.id} 
              className={`rounded-xl overflow-hidden transition-all duration-300 ${
                plan.popular 
                  ? 'shadow-2xl ring-2 ring-purple-500 scale-105 bg-white z-10' 
                  : 'shadow-lg hover:shadow-xl bg-white'
              }`}
            >
              {plan.popular && (
                <div className="bg-purple-600 text-white text-center py-2">
                  <span className="text-sm font-semibold">MÁS POPULAR</span>
                </div>
              )}
              
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold text-blue-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                </div>
                <p className="text-gray-700 mb-6">{plan.description}</p>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      {feature.included ? (
                        <Check size={18} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      ) : (
                        <X size={18} className="text-gray-400 mt-0.5 mr-2 flex-shrink-0" />
                      )}
                      <span className={feature.included ? 'text-gray-800' : 'text-gray-500'}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.popular ? 'primary' : 'outline'} 
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center max-w-3xl mx-auto">
          <p className="text-gray-600 mb-4">
            ¿Necesitas una solución personalizada para tu empresa?
          </p>
          <Button variant="secondary">Contacta con nuestro Equipo de Ventas</Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;