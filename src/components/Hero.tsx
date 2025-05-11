import React from 'react';
import { Trophy, Bot, Zap } from 'lucide-react';
import { Button } from './ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0 md:pr-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-900 mb-6">
              <Zap size={16} className="mr-2" />
              <span className="text-sm font-semibold">Entrenamiento en Ventas</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-blue-900 mb-6">
              Mejora tus Habilidades de Venta con IA
            </h1>
            
            <p className="text-lg text-gray-700 mb-8 max-w-lg">
              Entrena y mejora tus habilidades de venta con nuestro sistema de simulación
              y evaluación potenciado por inteligencia artificial.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button variant="primary" size="lg">
                Comenzar Gratis
              </Button>
              <Button variant="outline" size="lg">
                Ver Demo
              </Button>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4 max-w-md">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-3">
                  <span className="text-green-600 font-bold">40%</span>
                </div>
                <span className="text-sm text-gray-600">Mejora en conversiones</span>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                  <span className="text-orange-600 font-bold">50%</span>
                </div>
                <span className="text-sm text-gray-600">Menos tiempo de formación</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="relative z-10 bg-white rounded-xl shadow-xl p-6 md:p-8 max-w-md mx-auto">
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center">
                <Bot size={20} />
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-gray-800">Modo Entrenamiento</h3>
                  <span className="text-xs font-medium px-2 py-1 bg-green-100 text-green-700 rounded-full">Nivel 3</span>
                </div>
                
                <div className="p-3 bg-gray-100 rounded-lg text-gray-700 text-sm">
                  <span className="block font-semibold mb-1">Escenario: Manejo de Objeciones</span>
                  <span className="block italic">"El precio es muy alto comparado con otras soluciones"</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="p-3 bg-blue-50 rounded-lg text-blue-800 text-sm">
                  <span className="font-semibold block">Tu última respuesta:</span>
                  "Entiendo su preocupación por el precio. ¿Podría compartirme qué aspectos específicos está comparando?"
                </div>
                
                <div className="p-3 bg-green-50 rounded-lg text-green-800 text-sm">
                  <span className="font-semibold block">Evaluación:</span>
                  <ul className="mt-2 space-y-1">
                    <li>✓ Buena empatía inicial</li>
                    <li>✓ Pregunta exploratoria efectiva</li>
                    <li>⚠ Oportunidad para mencionar valor diferencial</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 flex space-x-2">
                <Button variant="outline" size="sm" className="flex-1">
                  Repetir
                </Button>
                <Button variant="primary" size="sm" className="flex-1">
                  Siguiente Nivel
                </Button>
              </div>
            </div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-lg rounded-full bg-gradient-to-r from-blue-600/10 to-orange-500/10 blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;