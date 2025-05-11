import React from 'react';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  image: string;
  result: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sara Martínez",
    role: "Directora de Ventas",
    company: "TechVision España",
    quote: "La tasa de cierre de nuestro equipo mejoró un 32% en el primer mes. El sistema de entrenamiento es como tener un coach experto disponible 24/7.",
    rating: 5,
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
    result: "32% más conversiones"
  },
  {
    id: 2,
    name: "Miguel Rodríguez",
    role: "Director Comercial",
    company: "Soluciones Globales",
    quote: "El modo de entrenamiento es increíble para la incorporación. Los nuevos vendedores alcanzan su productividad máxima en la mitad del tiempo gracias a la práctica con escenarios realistas.",
    rating: 5,
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200",
    result: "50% menos tiempo de formación"
  },
  {
    id: 3,
    name: "Laura García",
    role: "Ejecutiva de Cuentas",
    company: "Innovate Partners",
    quote: "Tenía problemas con las objeciones técnicas y perdía ventas. Después de completar todos los niveles de entrenamiento, puedo manejar incluso las preguntas más difíciles con confianza.",
    rating: 5,
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200",
    result: "28% más ventas cerradas"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-sm font-semibold bg-orange-100 text-orange-700 rounded-full mb-4">
            Casos de Éxito
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Lo que Dicen Nuestros Usuarios
          </h2>
          <p className="text-lg text-gray-700">
            Descubre cómo VentasPro AI ha transformado equipos de ventas y vendedores individuales.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6 relative">
                <Quote className="absolute top-6 right-6 text-gray-200" size={40} />
                
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-orange-400 fill-orange-400" />
                  ))}
                </div>
                
                <blockquote className="text-gray-700 mb-6 relative z-10">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4" 
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-900 p-4">
                <div className="text-center text-white">
                  <span className="text-sm font-medium">Resultado: </span>
                  <span className="font-bold">{testimonial.result}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;