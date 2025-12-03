import { useScrollReveal } from "@/hooks/use-scroll-reveal";

// Importa automaticamente todas as imagens da pasta partners
const partnerImages = import.meta.glob<{ default: string }>('/src/assets/partners/*.{png,jpg,jpeg,svg,webp}', { eager: true });

const PartnersLogos = () => {
  const { ref, isVisible } = useScrollReveal();
  
  const logos = Object.entries(partnerImages).map(([path, module]) => ({
    src: module.default,
    name: path.split('/').pop()?.replace(/\.[^/.]+$/, '') || 'partner'
  }));

  if (logos.length === 0) {
    return null;
  }

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div 
          ref={ref}
          className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos Parceiros
          </h2>
        </div>
        
        <div 
          className={`flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: '200ms' }}
        >
          {logos.map((logo, index) => (
            <div 
              key={index}
              className="grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
            >
              <img 
                src={logo.src} 
                alt={logo.name}
                className="h-12 md:h-16 lg:h-20 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersLogos;
