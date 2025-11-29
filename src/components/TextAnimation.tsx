"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useLenis } from "lenis/react";

gsap.registerPlugin(SplitText, ScrollTrigger);

interface TextAnimationProps {
  children: React.ReactElement;
  animateOnScroll?: boolean;
  delay?: number;
}

export default function TextAnimation({
  children,
  animateOnScroll = true,
  delay = 0,
}: TextAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementRef = useRef<HTMLElement[]>([]);
  const splitRef = useRef<SplitText[]>([]);
  const lines = useRef<HTMLElement[]>([]);
  const lenis = useLenis();

  // Integrar ScrollTrigger con Lenis (solo si hay Lenis disponible)
  useEffect(() => {
    if (!lenis) return;

    // Actualizar ScrollTrigger cuando Lenis hace scroll
    const updateScrollTrigger = () => {
      ScrollTrigger.update();
    };

    lenis.on("scroll", updateScrollTrigger);

    // Configurar ScrollTrigger para usar Lenis como scroller
    ScrollTrigger.scrollerProxy(window, {
      scrollTop(value?: number) {
        if (value !== undefined) {
          lenis.scrollTo(value, { immediate: true });
        }
        return lenis.scroll;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: "transform",
    });

    // Cleanup
    return () => {
      lenis.off("scroll", updateScrollTrigger);
      ScrollTrigger.scrollerProxy(window);
    };
  }, [lenis]);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      splitRef.current = [];
      lines.current = [];
      elementRef.current = [];

      let elements: HTMLElement[] = [];
      if (containerRef.current.hasAttribute("data-copy-wrapper")) {
        elements = Array.from(containerRef.current.children) as HTMLElement[];
      } else {
        elements = [containerRef.current];
      }

      elements.forEach((element) => {
        elementRef.current.push(element);
        const split = SplitText.create(element, {
          type: "lines",
          linesClass: "line++",
          mask: "lines",
        });
        splitRef.current.push(split);
        const computedStyles = window.getComputedStyle(element);
        const textIndent = computedStyles.textIndent;

        if (textIndent && textIndent !== "0px") {
          if (split.lines.length > 0) {
            (split.lines[0] as HTMLElement).style.paddingLeft = textIndent;
          }
          element.style.textIndent = "0";
        }

        lines.current.push(...(split.lines as HTMLElement[]));
      });

      gsap.set(lines.current, { y: "100%" });

      const animationProps = {
        y: "0%",
        duration: 1,
        ease: "expo.out",
        stagger: 0,
        delay: delay,
      };

      if (animateOnScroll) {
        gsap.to(lines.current, {
          ...animationProps,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            end: "bottom center",
            once: true,
            markers: false, // Cambia a true para debug
          },
        });
      } else {
        gsap.to(lines.current, animationProps);
      }

      // Refrescar ScrollTrigger después de crear las animaciones
      ScrollTrigger.refresh();

      return () => {
        splitRef.current.forEach((split) => {
          if (split) {
            split.revert();
          }
        });
      };
    },
    {
      scope: containerRef,
      dependencies: [animateOnScroll, delay],
    }
  );

  if (React.Children.count(children) === 1) {
    return React.cloneElement(children, {
      ref: containerRef,
    } as React.HTMLAttributes<HTMLElement>);
  }

  return (
    <div ref={containerRef} data-copy-wrapper="true">
      {children}
    </div>
  );
}
