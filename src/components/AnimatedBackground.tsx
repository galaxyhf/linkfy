import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <>
      {/* Gradiente diagonal preto para cinza escuro */}
      <div className="absolute inset-0 bg-linear-to-br from-gray-950 via-black to-gray-900" />

      {/* Partículas flutuantes em amarelo */}
      <motion.div
        className="absolute top-20 left-[10%] w-2 h-2 bg-yellow-400 rounded-full opacity-60"
        animate={{
          y: [0, -100, 0],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-40 right-[15%] w-1.5 h-1.5 bg-yellow-300 rounded-full opacity-50"
        animate={{
          y: [0, -80, 0],
          opacity: [0.5, 0.9, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay: 0.5,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-32 left-[20%] w-2 h-2 bg-yellow-500 rounded-full opacity-40"
        animate={{
          y: [0, -70, 0],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          delay: 1,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-[60%] right-[25%] w-1 h-1 bg-yellow-400 rounded-full opacity-70"
        animate={{
          y: [0, -60, 0],
          x: [0, 20, 0],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          delay: 1.5,
          ease: "easeInOut",
        }}
      />

      {/* Linhas diagonais sutis */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 left-0 w-full h-full bg-[repeating-linear-gradient(45deg,transparent,transparent_30px,rgba(255,215,0,0.1)_30px,rgba(255,215,0,0.1)_32px)]" />
      </div>

      {/* Brilho sutil no canto */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/5 rounded-full filter blur-3xl"
        animate={{
          opacity: [0.05, 0.1, 0.05],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </>
  );
}
