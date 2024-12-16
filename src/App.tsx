import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import Skills from './components/Skills';


function App() {
  return (
    <div className="bg-slate-900">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="bg-slate-950 py-8">
        <div className="max-w-5xl mx-auto px-4 text-center text-slate-400">
          <p>© {new Date().getFullYear()} Vitor Hugo. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;