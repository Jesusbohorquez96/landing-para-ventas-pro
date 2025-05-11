import React, { useState } from 'react';
import { Gamepad2, BarChart3, Sparkles, Brain, ListChecks, Trophy } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  isHovered: boolean;
  onHover: (isHovered: boolean) => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, 
  title, 
  description, 
  color,
  isHovered,
  onHover
}) => (
  <div 
    className={`p-6 rounded-xl ${
      isHovered 
        ? `${color} text-white` 
        : 'bg-white'
    } shadow-lg hover:shadow-xl transition-all duration-300`}
    onMouseEnter={() => onHover(true)}
    onMouseLeave={() => onHover(false)}
  >
    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
      isHovered 
        ? 'bg-white/20' 
        : 'bg-purple-100'
    }`}>
      <div className={isHovered ? 'text-white' : 'text-purple-600'}>
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className={isHovered ? 'text-white/90' : 'text-gray-600'}>
      {description}
    </p>
  </div>
);

const Features: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const features = [
    {
      icon: <Trophy size={24} />,
      title: "Sistema de Niveles",
      description: "Progresa a través de diferentes niveles de dificultad, desde conceptos básicos hasta técnicas avanzadas.",
      color: "bg-blue-600"
    },
    {
      icon: <Brain size={24} />,
      title: "Análisis de Objeciones",
      description: "Aprende a manejar objeciones comunes y practica con diferentes escenarios y tipos de clientes.",
      color: "bg-purple-600"
    },
    {
      icon: <Gamepad2 size={24} />,
      title: "Entrenamiento Gamificado",
      description: "Practica en un entorno simulado con diferentes niveles de dificultad y escenarios realistas.",
      color: "bg-green-600"
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Análisis de Rendimiento",
      description: "Recibe informes detallados de tu progreso y áreas de mejora con métricas específicas.",
      color: "bg-orange-600"
    },
    {
      icon: <Sparkles size={24} />,
      title: "Simulación de Clientes",
      description: "Entrena con perfiles de clientes que reflejan situaciones y personalidades reales.",
      color: "bg-red-600"
    },
    {
      icon: <ListChecks size={24} />,
      title: "Escenarios Personalizados",
      description: "Practica con casos específicos de tu industria y producto para un aprendizaje más efectivo.",
      color: "bg-indigo-600"
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-sm font-semibold bg-purple-100 text-purple-700 rounded-full mb-4">
            Sistema de Entrenamiento
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Mejora tus Habilidades de Venta
          </h2>
          <p className="text-lg text-gray-700">
            Entrena y mejora tus habilidades con nuestro sistema gamificado de aprendizaje y seguimiento de progreso.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
              isHovered={hoveredIndex === index}
              onHover={(isHovered) => setHoveredIndex(isHovered ? index : null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;