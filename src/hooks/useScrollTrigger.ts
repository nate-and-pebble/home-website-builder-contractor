"use client";
import { useEffect, useRef, type RefObject } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

interface ScrollTriggerOptions {
  trigger?: string | Element;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  pin?: boolean | string | Element;
  markers?: boolean;
  toggleActions?: string;
  once?: boolean;
  onEnter?: () => void;
  onLeave?: () => void;
  onEnterBack?: () => void;
  onLeaveBack?: () => void;
}

interface AnimationConfig {
  from?: gsap.TweenVars;
  to: gsap.TweenVars;
  target?: string; // selector scoped to the ref element
}

export function useScrollTrigger(
  ref: RefObject<HTMLElement | null>,
  animationConfig: AnimationConfig,
  scrollTriggerOptions: ScrollTriggerOptions = {}
) {
  const ctxRef = useRef<gsap.Context | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      const target = animationConfig.target
        ? element.querySelector(animationConfig.target) ?? element
        : element;

      const triggerConfig: ScrollTrigger.Vars = {
        trigger: element,
        start: "top 80%",
        end: "bottom 20%",
        ...scrollTriggerOptions,
      };

      if (animationConfig.from) {
        gsap.fromTo(target, animationConfig.from, {
          ...animationConfig.to,
          scrollTrigger: triggerConfig,
        });
      } else {
        gsap.to(target, {
          ...animationConfig.to,
          scrollTrigger: triggerConfig,
        });
      }
    }, element);

    ctxRef.current = ctx;

    return () => {
      ctx.revert();
      ctxRef.current = null;
    };
  }, [ref, animationConfig, scrollTriggerOptions]);

  return () => {
    ctxRef.current?.revert();
  };
}
