import React, { useState } from 'react';
import { Trophy, Users, FileQuestion, AlertCircle, PenTool, Frown, Briefcase } from 'lucide-react';

interface Level {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  hoverColor: string;
  textColor: string;
  difficulty: string;
  skills: string[];
}

const levels: Level[] = [
  {
    id: 1,
    title: "Descubrimiento Básico",
    description: "Aprende a hacer preguntas efectivas y calificar prospectos.",
    icon: <FileQuestion size={24} />,
    color: "bg-green-100",
    hoverColor: "hover:bg-green-600",
    textColor: "text-green-700",
    difficulty: "Principiante",
    skills: ["Evaluación de necesidades", "Escucha activa", "Calificación básica"]
  },
  {
    id: 2,
    title: "Propuesta de Valor",
    description: "Domina la articulación del valor de tu producto según las necesidades del cliente.",
    icon: <PenTool size={24} />,
    color: "bg-blue-100",
    hoverColor: "hover:bg-blue-600",
    textColor: "text-blue-700",
    difficulty: "Principiante",
    skills: ["Articulación de valor", "Conversión de características a beneficios", "Discusiones de ROI"]
  },
  {
    id: 3,
    title: "Manejo de Objeciones",
    description: "Aprende a manejar objeciones comunes de manera efectiva y sin ser defensivo.",
    icon: <AlertCircle size={24} />,
    color: "bg-yellow-100",
    hoverColor: "hover:bg-yellow-600",
    textColor: "text-yellow-700",
    difficulty: "Intermedio",
    skills: ["Reformulación de objeciones", "Demostración de valor", "Posicionamiento competitivo"]
  },
  {
    id: 4,
    title: "Personalidades Difíciles",
    description: "Navega escenarios desafiantes y diferentes tipos de personalidades.",
    icon: <Frown size={24} />,
    color: "bg-red-100",
    hoverColor: "hover:bg-red-600",
    textColor: "text-red-700",
    difficulty: "Avanzado",
    skills: ["Desescalamiento", "Inteligencia emocional", "Adaptación a personalidades"]
  },
  {
    id: 5,
    title: "Negociaciones Empresariales",
    description: "Maneja comités de compra complejos y negociaciones multinivel.",
    icon: <Briefcase size={24} />,
    color: "bg-purple-100",
    hoverColor: "hover:bg-purple-600",
    textColor: "text-purple-700",
    difficulty: "Experto",
    skills: ["Mapeo de stakeholders", "Comunicación ejecutiva", "Negociaciones complejas"]
  },
];

const LevelProgression: React.FC = () => {
  const [activeLevel, setActiveLevel] = useState<number>(1);
  
  return (
    <section id="levels" className="py-16 md:py-24 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-sm font-semibold bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full mb-4">
            Mejora tus Habilidades
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-100 mb-4">
            Domina las Ventas con Niveles Progresivos
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Nuestro modo de entrenamiento se adapta a tu nivel, proporcionando escenarios
            cada vez más desafiantes que construyen tu confianza y competencia.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/3">
            <div className="sticky top-24 space-y-2">
              {levels.map((level) => (
                <button
                  key={level.id}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-300 flex items-center ${
                    activeLevel === level.id
                      ? `${level.color.replace('100', '600')} text-white shadow-lg`
                      : `bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 ${level.hoverColor} hover:text-white`
                  }`}
                  onClick={() => setActiveLevel(level.id)}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                    activeLevel === level.id 
                      ? 'bg-white/20 text-white' 
                      : `${level.color} ${level.textColor}`
                  }`}>
                    {level.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold">{level.title}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      activeLevel === level.id 
                        ? 'bg-white/20 text-white' 
                        : `${level.color} ${level.textColor}`
                    }`}>
                      {level.difficulty}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
          
          <div className="lg:w-2/3 bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 md:p-8 shadow-lg">
            {levels.map((level) => (
              <div key={level.id} className={activeLevel === level.id ? 'block' : 'hidden'}>
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mr-4 ${level.color} ${level.textColor} dark:bg-opacity-30`}>
                    {level.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-200">{level.title}</h3>
                    <span className={`text-sm px-2 py-0.5 rounded-full ${level.color} ${level.textColor} dark:bg-opacity-40 dark:text-opacity-90`}>
                      {level.difficulty}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-8">
                  {level.description}
                </p>
                
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-200 mb-3">Habilidades que Dominarás</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {level.skills.map((skill, index) => (
                      <div key={index} className="flex items-center bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm dark:text-gray-200">
                        <Trophy size={16} className={level.textColor + " dark:text-blue-400 mr-2"} />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-200 mb-3">Escenario de Ejemplo</h4>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                    <div className="flex items-start space-x-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center mt-1">
                        <Users size={16} className="text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <span className="text-sm text-gray-500 dark:text-gray-400 block">Cliente Simulado:</span>
                        <p className="text-gray-700 dark:text-gray-300">{getScenarioForLevel(level.id)}</p>
                      </div>
                    </div>
                    <div className="flex space-x-3 mb-2">
                      <button className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
                        <span>¿Cómo responderías?</span>
                      </button>
                    </div>
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

function getScenarioForLevel(levelId: number): string {
  switch (levelId) {
    case 1:
      return "Me interesa tu producto, pero no estoy seguro si es adecuado para mi equipo. ¿Podrías contarme más al respecto?";
    case 2:
      return "El precio de tu competencia es 15% menor. ¿Por qué debería elegir tu solución?";
    case 3:
      return "Hemos tenido malas experiencias con soluciones similares en el pasado. ¿Qué hace a la tuya diferente?";
    case 4:
      return "Esto es una pérdida de tiempo. Tu producto no aborda ninguna de nuestras necesidades según lo que he visto.";
    case 5:
      return "Nuestro proceso de compra requiere aprobación de tres departamentos. Necesitamos ver proyecciones detalladas de ROI antes de avanzar.";
    default:
      return "Cuéntame más sobre tu producto y cómo puede ayudar a mi negocio.";
  }
}

export default LevelProgression;