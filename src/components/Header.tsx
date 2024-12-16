import React, { useState } from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import './Skills.tsx'; // Certifique-se de que o arquivo CSS está corretamente referenciado

import htmlLogo from '../img/html-1.svg';
import cssLogo from '../img/css-3.svg';
import jsLogo from '../img/javascript-1.svg';
import reactLogo from '../img/react-2.svg';
import twLogo from '../img/tailwind-css-2.svg';
import nodeLogo from '../img/nodejs-3.svg';
import pyLogo from '../img/python-5.svg';
import nextLogo from '../img/next-js.svg';

const skills = [
    { name: 'HTML', logo: htmlLogo },
    { name: 'CSS', logo: cssLogo },
    { name: 'JavaScript', logo: jsLogo },
    { name: 'React', logo: reactLogo },
    { name: 'Tailwind CSS', logo: twLogo },
    { name: 'Node.js', logo: nodeLogo },
    { name: 'Python', logo: pyLogo },
    { name: 'Next.js', logo: nextLogo }
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-slate-900/90 backdrop-blur-sm z-50">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold text-white">
          Vitor Hugo
        </h1>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#sobre" className="text-slate-300 hover:text-white transition-colors">
            Sobre
          </a>
          <a href="#skills" className="text-slate-300 hover:text-white transition-colors">
            Skills
          </a>
          <a href="#projetos" className="text-slate-300 hover:text-white transition-colors">
            Projetos
          </a>
          <a href="#contato" className="text-slate-300 hover:text-white transition-colors">
            Contato
          </a>
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          <a href="https://github.com/vitorhugoo2" target="_blank" rel="noopener noreferrer" 
             className="text-slate-300 hover:text-white transition-colors">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/vitor-hugodev/" target="_blank" rel="noopener noreferrer"
             className="text-slate-300 hover:text-white transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="mailto:vitorhugomkt1@gmail.com"
             className="text-slate-300 hover:text-white transition-colors">
            <Mail size={20} />
          </a>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-slate-900/95 md:hidden">
            <nav className="flex flex-col p-4">
              <a href="#sobre" 
                 className="text-slate-300 hover:text-white py-2 transition-colors"
                 onClick={() => setIsMenuOpen(false)}>
                Sobre
              </a>
              <a href="#projetos" 
                 className="text-slate-300 hover:text-white py-2 transition-colors"
                 onClick={() => setIsMenuOpen(false)}>
                Projetos
              </a>
              <a href="#contato" 
                 className="text-slate-300 hover:text-white py-2 transition-colors"
                 onClick={() => setIsMenuOpen(false)}>
                Contato
              </a>
              <div className="flex gap-4 pt-4">
                <a href="https://github.com/vitorhugoo2" target="_blank" rel="noopener noreferrer" 
                   className="text-slate-300 hover:text-white transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/vitor-hugodev/" target="_blank" rel="noopener noreferrer"
                   className="text-slate-300 hover:text-white transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:vitorhugomkt1@gmail.com"
                   className="text-slate-300 hover:text-white transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

const Skills: React.FC = () => {
    return (
        <section id="skills" className="py-20 bg-slate-900">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
                    Skills
                </h2>
                <div className="flex flex-wrap justify-center gap-8">
                    {skills.map((skill) => (
                        <div key={skill.name} className="flex flex-col items-center">
                            <img src={skill.logo} alt={`${skill.name} logo`} className="w-16 h-16 md:w-24 md:h-24" />
                            <p className="text-white mt-2">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;