import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Fokus - Pomodoro Timer',
    description: 'Fokus é um aplicativo de gerenciamento de tarefas simples e eficiente',
    image: './src/img/fokus.png',
    tech: ['Html', 'CSS', 'JavaScript'],
    github: 'https://github.com/vitorhugoo2/fokus',
    live: 'https://exemplo.com'
  },
  {
    title: 'Decodificador de Mensagens',
    description: 'Decodificador de mensagens secretas com criptografia de consoantes',
    image: './src/img/decodificador.png',
    tech: ['Html ', 'CSS', 'JavaScript'],
    github: 'https://github.com/vitorhugoo2/decodificador-one',
    live: 'https://exemplo.com'
  },
  {
    title: 'Alura Books',
    description: 'Alura Books é um aplicativo de leitura de livros online',
    image: './src/img/alura-books.png',
    tech: ['API', 'JavaScript'],
    github: 'https://github.com',
    live: 'https://exemplo.com'
  }
];

export function Projects() {
  return (
    <section id="projetos" className="py-20 bg-slate-100">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800">
          Meus Projetos
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 transition-transform duration-300">
              <div className="aspect-video w-full">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-slate-800">{project.title}</h3>
                <p className="text-slate-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a href={project.github} 
                     className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
                     target="_blank" 
                     rel="noopener noreferrer">
                    <Github size={20} />
                    <span>Código</span>
                  </a>
                  <a href={project.live}
                     className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
                     target="_blank"
                     rel="noopener noreferrer">
                    <ExternalLink size={20} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}