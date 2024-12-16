import React from 'react';
import './Skills.tsx';

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

const Skills: React.FC = () => {
    return (
        <section id="skills" className="py-20 bg-slate-900">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
                    Skills
                </h2>
                <div className="flex justify-center gap-16">
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