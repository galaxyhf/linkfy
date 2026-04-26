import { Briefcase, Instagram, Linkedin, Github, Mail } from "lucide-react";
import LinkCard from "./components/LinkCard";
import AnimatedBackground from "./components/AnimatedBackground";
import LoadingScreen from "./components/LoadingScreen";
import TypewriterText from "./components/TypewriterText";
import fotoProfile from "./assets/caio.png";
import "./App.css";

function App() {
  const profile = {
    name: "Caio Silva",
  };

  const links = [
    {
      title: "Portfólio",
      url: "https://caiosilva.vercel.app",
      icon: Briefcase,
    },
    { title: "GitHub", 
      url: "https://github.com/galaxyhf", 
      icon: Github 
    },
    {
      title: "LinkedIn",
      url: "https://linkedin.com/in/caio-silva-472498266",
      icon: Linkedin,
    },
    {
      title: "Instagram",
      url: "https://www.instagram.com/cai0_gs/",
      icon: Instagram,
    },
    {
      title: "Email",
      url: "mailto:caiogsilva2005@gmail.com",
      icon: Mail,
    },
  ];

  return (
    <>
      <LoadingScreen />
      <div className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
        {/* Fundo Animado */}
        <AnimatedBackground />

        {/* Conteúdo */}
        <div className="relative z-10 w-full max-w-md mx-auto">
          {/* Perfil */}
          <div className="flex flex-col items-center mb-8 animate-fade-in">
            {/* Avatar */}
            <div
              className="w-20 h-20 sm:w-24 sm:h-24 mb-4 bg-yellow-400/10 backdrop-blur-md
                          border border-yellow-400/40 rounded-full overflow-hidden flex items-center justify-center"
            >
              <img
                src={fotoProfile}
                alt="Caio Silva"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Nome */}
            <h1 className="text-2xl sm:text-3xl font-semibold text-white mb-1 text-center">
              {profile.name}
            </h1>

            {/* Descrição com Typewriter */}
            <TypewriterText
              words={["Desenvolvedor Web", "Front-End"]}
              className="text-yellow-100 text-sm sm:text-base text-center mb-6 h-6"
            />
          </div>

          {/* Links principais */}
          <div className="flex flex-col items-center w-full px-4 mb-8">
            {links.map((link, index) => (
              <LinkCard
                key={index}
                title={link.title}
                url={link.url}
                icon={link.icon}
              />
            ))}
          </div>

          {/* Footer */}
          <div className="text-center text-white/40 text-xs mt-4">
            <p>© 2026 - Caio Silva - Todos os direitos reservados</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
