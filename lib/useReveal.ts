"use client";

import { useEffect, useRef } from "react";

/**
 * بيضيف visibleClass لأي عنصر عليه data-reveal أول ما يظهر في الشاشة
 * (أنيميشن دخول خفيف). لو المستخدم مفعّل تقليل الحركة، العناصر بتظهر مباشرة.
 *
 * dep: أي قيمة لما تتغير (زي اللغة أو التبويب المختار) بنراقب العناصر الجديدة
 * اللي React عملها، عشان ما تفضلش مخفية.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  visibleClass: string,
  dep?: unknown
) {
  const rootRef = useRef<T>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const items = root.querySelectorAll<HTMLElement>(`[data-reveal]:not(.${visibleClass})`);

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add(visibleClass));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(visibleClass);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [visibleClass, dep]);

  return rootRef;
}
