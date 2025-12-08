import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";
import logo from "@/assets/ayfa-logo.png";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      {/* Background Image with Solid Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-primary" style={{ opacity: 0.92 }} />
      </div>

      {/* Decorative shapes */}
      <div className="absolute top-20 right-10 md:right-20 w-48 md:w-96 h-48 md:h-96 bg-cyan rounded-full blur-3xl" style={{ opacity: 0.15 }} />
      <div className="absolute bottom-20 left-10 md:left-20 w-40 md:w-80 h-40 md:h-80 bg-accent rounded-full blur-3xl" style={{ opacity: 0.15 }} />

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6 py-16 md:py-24 lg:py-40">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex justify-center items-center mb-6 md:mb-10 animate-fade-in opacity-0" style={{animationDelay: '0.1s', animationFillMode: 'forwards'}}>
            <img src={logo} alt="Ayfa Seguros" className="h-14 md:h-20 lg:h-24 xl:h-28 drop-shadow-2xl" />
          </div>
          
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground mb-4 md:mb-6 leading-[1.1] animate-fade-in opacity-0 tracking-tight" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
            Sua Corretora de Seguros<br />
            <span className="text-gradient-warm">Proteção Completa</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-foreground/90 mb-8 md:mb-12 font-light leading-relaxed animate-fade-in opacity-0 max-w-3xl mx-auto px-2" style={{animationDelay: '0.5s', animationFillMode: 'forwards'}}>
            Soluções personalizadas em seguros para você, sua família e seu negócio. 
            Proteção e tranquilidade com atendimento especializado.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 md:gap-5 justify-center animate-fade-in opacity-0 px-4" style={{animationDelay: '0.7s', animationFillMode: 'forwards'}}>
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 md:px-10 py-5 md:py-7 text-base md:text-lg shadow-glow hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              onClick={scrollToContact}
            >
              Solicitar Cotação
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground border-2 border-primary-foreground/30 hover:border-primary-foreground/50 font-semibold px-6 md:px-10 py-5 md:py-7 text-base md:text-lg transition-all duration-300 w-full sm:w-auto"
              onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Conheça Nossos Serviços
            </Button>
          </div>

          {/* Client types */}
          <div className="mt-10 md:mt-16 animate-fade-in opacity-0" style={{animationDelay: '0.9s', animationFillMode: 'forwards'}}>
            <p className="text-primary-foreground/70 text-sm md:text-base mb-4">Seguros para:</p>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 px-2">
              {['Pessoas', 'Empresas', 'Veículos', 'Patrimônio', 'Eventos'].map((client, idx) => (
                <span key={idx} className="px-3 md:px-4 py-1.5 md:py-2 bg-primary-foreground/10 rounded-full text-primary-foreground/90 text-xs md:text-sm border border-primary-foreground/20">
                  {client}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;