import { motion, useReducedMotion } from "framer-motion";

export default function AnimatedBackground() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="ambient" aria-hidden="true">
      <motion.div
        className="ambient-orb ambient-orb--yellow"
        animate={
          reduceMotion
            ? undefined
            : { x: [0, 70, -20, 0], y: [0, 36, 90, 0], scale: [1, 1.16, 0.94, 1] }
        }
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="ambient-orb ambient-orb--blue"
        animate={
          reduceMotion
            ? undefined
            : { x: [0, -60, 20, 0], y: [0, -80, -24, 0], scale: [1, 0.9, 1.12, 1] }
        }
        transition={{ duration: 23, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="ambient-beam" />
    </div>
  );
}
