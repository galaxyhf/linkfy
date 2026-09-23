import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const timer = window.setTimeout(() => setIsVisible(false), reduceMotion ? 120 : 850);
    return () => window.clearTimeout(timer);
  }, [reduceMotion]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0.08 : 0.45, ease: "easeOut" }}
          aria-hidden="true"
        >
          <motion.div
            className="loader-mark"
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            CS<span>.</span>
          </motion.div>
          <div className="loader-line">
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: reduceMotion ? 0.08 : 0.7, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
