"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PHRASE = "it's me nate";
const CHAR_DELAY = 80;
const JITTER = 20;
const HOLD_AFTER_TYPE = 800;
const EXIT_DURATION = 0.6;

interface IntroSequenceProps {
  onComplete: () => void;
}

export function IntroSequence({ onComplete }: IntroSequenceProps) {
  const [displayedChars, setDisplayedChars] = useState(0);
  const [phase, setPhase] = useState<
    "typing" | "holding" | "exiting" | "done"
  >("typing");
  const [visible, setVisible] = useState(true);

  // Check sessionStorage for repeat visits / reduced motion
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const hasSeenIntro = sessionStorage.getItem("hasSeenIntro");
    if (hasSeenIntro || prefersReduced) {
      setVisible(false);
      setPhase("done");
      onComplete();
    }
  }, [onComplete]);

  // Typewriter effect
  useEffect(() => {
    if (phase !== "typing") return;
    if (displayedChars >= PHRASE.length) {
      setPhase("holding");
      return;
    }
    const jitter = Math.random() * JITTER * 2 - JITTER;
    const t = setTimeout(
      () => setDisplayedChars((c) => c + 1),
      CHAR_DELAY + jitter
    );
    return () => clearTimeout(t);
  }, [displayedChars, phase]);

  // Hold → exit transition (separate effect so cleanup doesn't kill the timeout)
  useEffect(() => {
    if (phase !== "holding") return;
    const t = setTimeout(() => setPhase("exiting"), HOLD_AFTER_TYPE);
    return () => clearTimeout(t);
  }, [phase]);

  // Auto-close: when phase becomes "exiting", trigger exit animation
  useEffect(() => {
    if (phase === "exiting") {
      setVisible(false);
    }
  }, [phase]);

  // Safety net: force completion if AnimatePresence onExitComplete doesn't fire
  useEffect(() => {
    if (phase === "exiting") {
      const t = setTimeout(() => {
        setPhase("done");
        sessionStorage.setItem("hasSeenIntro", "1");
        onComplete();
      }, (EXIT_DURATION + 0.2) * 1000);
      return () => clearTimeout(t);
    }
  }, [phase, onComplete]);

  const handleExitComplete = useCallback(() => {
    setPhase("done");
    sessionStorage.setItem("hasSeenIntro", "1");
    onComplete();
  }, [onComplete]);

  const handleSkip = useCallback(() => {
    if (phase === "exiting" || phase === "done") return;
    setPhase("exiting");
  }, [phase]);

  if (phase === "done" && !visible) return null;

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {visible && (
        <motion.div
          key="intro"
          initial={{ y: 0 }}
          exit={{ y: "100vh" }}
          transition={{ duration: EXIT_DURATION, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#2C2825]"
          aria-hidden="true"
        >
          <span className="font-display text-4xl md:text-6xl lg:text-7xl text-[#FAF7F2] select-none italic">
            {PHRASE.slice(0, displayedChars)}
            {phase === "typing" && (
              <span className="animate-blink ml-0.5">|</span>
            )}
          </span>

          <button
            onClick={handleSkip}
            className="absolute bottom-8 right-8 text-white/40 hover:text-white/70 text-sm font-mono transition-colors"
            aria-label="Skip intro animation"
          >
            skip intro
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
