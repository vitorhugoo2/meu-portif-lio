import React from 'react';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="flex flex-col md:flex-row items-center text-center md:text-left space-y-8 md:space-y-0 md:space-x-8 px-4">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="inline-block hover:scale-110 transition-transform duration-300">O</span>
            <span className="inline-block hover:scale-110 transition-transform duration-300">l</span>
            <span className="inline-block hover:scale-110 transition-transform duration-300">á</span>
            <span className="inline-block hover:scale-110 transition-transform duration-300">,</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-slate-300 bg-clip-text text-transparent">
              Eu sou Vitor Hugo
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto md:mx-0">
            Estudante de Análise e Desenvolvimento de Software na Newton Paiva e participante do programa Oracle Next Education (ONE), da Oracle.
            Este portfólio é um espaço para compartilhar minha jornada, projetos e habilidades adquiridas ao longo da minha formação.
          </p>
        </div>
        <img 
          src="src/foto.png" 
          alt="Minha Foto" 
          className="w-32 h-32 md:w-64 md:h-64 rounded-full object-cover border border-slate-700 shadow-2xl transition-transform duration-300 hover:scale-105 hover:rotate-3 hover:shadow-3xl" 
        />
      </div>
      <div className="animate-bounce mt-16">
        <ArrowDown className="text-slate-300" size={32} />
      </div>
    </section>
  );
}

