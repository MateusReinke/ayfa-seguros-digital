import { useEffect, useRef, useState } from 'react';

export const useScrollReveal = (options?: IntersectionObserverInit) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      // ATENÇÃO: Esta linha é o segredo.
      // Se estiver na tela (true), mostra. Se sair (false), esconde.
      setIsVisible(entry.isIntersecting);
    }, {
      threshold: 0.1, // Ativa quando 10% do elemento aparece
      ...options,
    });

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options]); // Removido array vazio para reagir a mudanças de options se necessário

  return { ref, isVisible };
};