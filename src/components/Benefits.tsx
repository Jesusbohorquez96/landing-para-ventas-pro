import React from 'react';
import { TrendingUp, ShieldCheck, Clock, Users, BookOpen, Zap } from 'lucide-react';

const Benefits: React.FC = () => {
  return (
    <section id="beneficios" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Beneficios para tu Equipo de Ventas</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nuestra plataforma transforma la forma en que entrenas y asistes a tu equipo comercial, generando resultados medibles desde el primer día.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <BenefitCard 
            icon={<TrendingUp className="text-blue-600" size={28} />}
            title="Incremento en Conversiones"
            description="Aumenta tus tasas de cierre hasta un 35% con asistencia en tiempo real y mejores prácticas durante cada llamada."
          />
          <BenefitCard 
            icon={<ShieldCheck className="text-green-600" size={28} />}
            title="Reducción de Tiempo de Formación"
            description="Acelera la curva de aprendizaje de nuevos vendedores con simulaciones realistas y feedback inmediato."
          />
          <BenefitCard 
            icon={<Clock className="text-orange-600" size={28} />}
            title="Optimización del Tiempo"
            description="Reduce el tiempo medio de cierre con respuestas más efectivas y manejo profesional de objeciones."
          />
          <BenefitCard 
            icon={<Users className="text-purple-600" size={28} />}
            title="Unificación de Mensajes"
            description="Asegura que todo tu equipo utilice los argumentos y respuestas más efectivas probadas con datos reales."
          />
          <BenefitCard 
            icon={<BookOpen className="text-indigo-600" size={28} />}
            title="Aprendizaje Continuo"
            description="Mejora constante con nuevos escenarios de entrenamiento basados en situaciones reales de tu industria."
          />
          <BenefitCard 
            icon={<Zap className="text-yellow-600" size={28} />}
            title="Reducción de Estrés"
            description="Mayor confianza y menos estrés para tus vendedores al tener asistencia experta siempre disponible."
          />
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-10 text-white">
              <h3 className="text-2xl font-bold mb-4">Resultados Comprobados</h3>
              <p className="mb-8 opacity-90">
                Nuestros clientes reportan mejoras significativas en métricas clave de ventas después de implementar VentasPro AI.
              </p>
              
              <div className="space-y-6">
                <div className="relative">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Tasa de conversión</span>
                    <span>+35%</span>
                  </div>
                  <div className="w-full h-3 bg-blue-300 bg-opacity-40 rounded-full">
                    <div className="h-full bg-white rounded-full" style={{ width: '35%' }}></div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Reducción de tiempo de entrenamiento</span>
                    <span>-45%</span>
                  </div>
                  <div className="w-full h-3 bg-blue-300 bg-opacity-40 rounded-full">
                    <div className="h-full bg-white rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Satisfacción del equipo de ventas</span>
                    <span>+60%</span>
                  </div>
                  <div className="w-full h-3 bg-blue-300 bg-opacity-40 rounded-full">
                    <div className="h-full bg-white rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Lo que dicen nuestros clientes</h3>
              
              <div className="space-y-6">
                <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700">
                  "Después de tres meses usando VentasPro AI, nuestro equipo de ventas aumentó sus conversiones en un 32%. El sistema de entrenamiento por niveles ha sido clave para mejorar las habilidades de respuesta a objeciones."
                  <footer className="mt-2 text-gray-600 font-medium not-italic">
                    — Carlos Ruiz, Director de Ventas en TechSolutions
                  </footer>
                </blockquote>
                
                <blockquote className="border-l-4 border-orange-500 pl-4 italic text-gray-700">
                  "La asistencia en tiempo real nos ha permitido estandarizar las mejores prácticas en todo el equipo. Los nuevos vendedores alcanzan el nivel de los experimentados en la mitad del tiempo."
                  <footer className="mt-2 text-gray-600 font-medium not-italic">
                    — María López, VP de Ventas en InnovaSoft
                  </footer>
                </blockquote>
              </div>
              
              <div className="mt-8 flex space-x-2">
                <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
                <span className="w-3 h-3 bg-blue-300 rounded-full"></span>
                <span className="w-3 h-3 bg-blue-300 rounded-full"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Benefits;