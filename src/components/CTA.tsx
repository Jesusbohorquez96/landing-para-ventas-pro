import React, { useState } from 'react';
import { ArrowUpRight, MessageSquare, Mail, Building2, Phone, User } from 'lucide-react';
import { Button } from './ui/Button';

const CTA: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section className="py-16 md:py-24 bg-blue-900 dark:bg-blue-950 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                ¿Listo para Mejorar tus Habilidades de Venta?
              </h2>
              <p className="text-blue-100 mb-8">
                Comienza tu prueba gratuita de 14 días y experimenta el poder del entrenamiento en ventas potenciado por IA.
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700"
                >
                  Comenzar Gratis
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-blue-800 dark:hover:bg-blue-900"
                >
                  Ver Demo
                  <ArrowUpRight size={16} className="ml-2" />
                </Button>
              </div>
            </div>
            
            <div className="bg-blue-800 dark:bg-blue-900 p-6 rounded-xl">
              <div className="flex items-center mb-6">
                <MessageSquare size={24} className="text-orange-500 mr-3" />
                <h3 className="text-xl font-semibold">Agenda una Demo Gratis</h3>
              </div>
              
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-blue-100 mb-1">
                    Nombre Completo
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User size={20} className="text-blue-300" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Juan Pérez"
                      className="w-full pl-10 pr-3 py-2 rounded-lg bg-blue-700 text-white placeholder-blue-300 border border-blue-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-blue-100 mb-1">
                    Email Corporativo
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail size={20} className="text-blue-300" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="juan@empresa.com"
                      className="w-full pl-10 pr-3 py-2 rounded-lg bg-blue-700 text-white placeholder-blue-300 border border-blue-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-blue-100 mb-1">
                    Empresa
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Building2 size={20} className="text-blue-300" />
                    </div>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Tu Empresa"
                      className="w-full pl-10 pr-3 py-2 rounded-lg bg-blue-700 text-white placeholder-blue-300 border border-blue-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-blue-100 mb-1">
                    Teléfono
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone size={20} className="text-blue-300" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+34 600 000 000"
                      className="w-full pl-10 pr-3 py-2 rounded-lg bg-blue-700 text-white placeholder-blue-300 border border-blue-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-blue-100 mb-1">
                    ¿Qué te gustaría conocer?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Cuéntanos sobre tus necesidades..."
                    className="w-full px-4 py-2 rounded-lg bg-blue-700 text-white placeholder-blue-300 border border-blue-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                
                <Button variant="primary" className="w-full bg-orange-500 hover:bg-orange-600" type="submit">
                  Agendar Demo
                </Button>
              </form>

              <p className="mt-4 text-sm text-blue-200 text-center">
                Te contactaremos dentro de las próximas 24 horas para coordinar la demo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;