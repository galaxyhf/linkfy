import {
  BriefcaseBusiness,
  Github,
  Instagram,
  Linkedin,
  Mail,
} from "lucide-react";
import AnimatedBackground from "./components/AnimatedBackground";
import LinkCard from "./components/LinkCard";
import LoadingScreen from "./components/LoadingScreen";
import TypewriterText from "./components/TypewriterText";
import fotoProfile from "./assets/caio-optimized.png";
import "./App.css";

const links = [
  {
    title: "Portfólio",
    description: "Projetos selecionados e estudos de caso",
    url: "https://caiosilva.vercel.app",
    icon: BriefcaseBusiness,
    featured: true,
  },
  {
    title: "GitHub",
    description: "Código, experimentos e projetos abertos",
    url: "https://github.com/galaxyhf",
    icon: Github,
  },
  {
    title: "LinkedIn",
    description: "Experiência e trajetória profissional",
    url: "https://linkedin.com/in/caio-silva-472498266",
    icon: Linkedin,
  },
  {
    title: "Instagram",
    description: "Bastidores, rotina e interesses",
    url: "https://www.instagram.com/cai0_gs/",
    icon: Instagram,
  },
  {
    title: "E-mail",
    description: "Vamos conversar sobre uma ideia",
    url: "mailto:caiogsilva2005@gmail.com",
    icon: Mail,
  },
];

function App() {
  return (
    <>
      <LoadingScreen />

      <main className="site-shell isolate">
        <AnimatedBackground />

        <div className="page-frame relative z-10 flex min-h-svh flex-col">
          <header className="topbar flex items-center justify-between" aria-label="Identificação do site">
            <a className="monogram" href="#inicio" aria-label="Voltar ao início">
              CS<span aria-hidden="true">.</span>
            </a>
            <p className="topbar-label">Desenvolvedor web · Brasil</p>
          </header>

          <section className="profile-layout" id="inicio" aria-labelledby="profile-name">
            <div className="profile-intro flex flex-col items-start">
              <div className="portrait-wrap relative aspect-square">
                <div className="portrait-ring" aria-hidden="true" />
                <img
                  src={fotoProfile}
                  alt="Retrato de Caio Silva"
                  className="portrait block size-full rounded-full object-cover"
                />
                <span className="portrait-marker" aria-hidden="true" />
              </div>

              <div className="profile-copy">
                <p className="role-label">Olá, eu sou</p>
                <h1 id="profile-name">Caio Silva</h1>
                <TypewriterText
                  words={["Desenvolvedor web", "Front-end", "Criador de experiências digitais"]}
                  className="typewriter"
                />
                <p className="profile-summary">
                  Transformo ideias em experiências digitais claras, rápidas e bem construídas.
                </p>
              </div>
            </div>

            <nav className="link-panel w-full" aria-label="Links de Caio Silva">
              <div className="link-heading flex items-center justify-between">
                <p>Onde me encontrar</p>
                <span>{String(links.length).padStart(2, "0")} destinos</span>
              </div>

              <div className="link-list">
                {links.map((link, index) => (
                  <LinkCard
                    key={link.title}
                    index={index + 1}
                    title={link.title}
                    description={link.description}
                    url={link.url}
                    icon={link.icon}
                    featured={link.featured}
                  />
                ))}
              </div>
            </nav>
          </section>

          <footer className="flex items-center justify-between">
            <p>© 2026 Caio Silva</p>
            <p>Projetado e desenvolvido com atenção aos detalhes.</p>
          </footer>
        </div>
      </main>
    </>
  );
}

export default App;
