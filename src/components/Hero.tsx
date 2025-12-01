import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";
import logo from "@/assets/ayfa-logo.png";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6 py-24 lg:py-40">
        <div className="max-w-5xl mx-auto text-center lg:text-left">
          <div className="flex justify-center lg:justify-start items-center mb-10 animate-fade-in opacity-0" style={{animationDelay: '0.1s', animationFillMode: 'forwards'}}>
            <img src={logo} alt="Ayfa Seguros" className="h-16 md:h-20 lg:h-24 drop-shadow-2xl" />
          </div>
          
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-[1.1] animate-fade-in opacity-0 tracking-tight" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
            Proteção Completa<br />
            <span className="text-accent">para seus Eventos</span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-white/95 mb-12 font-light leading-relaxed animate-fade-in opacity-0 max-w-2xl" style={{animationDelay: '0.5s', animationFillMode: 'forwards'}}>
            Especialistas em seguros para eventos, garantindo segurança e tranquilidade 
            para organizadores e seus clientes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 animate-fade-in opacity-0" style={{animationDelay: '0.7s', animationFillMode: 'forwards'}}>
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white font-semibold px-10 py-7 text-lg shadow-glow hover:scale-105 transition-all duration-300"
              onClick={scrollToContact}
            >
              Solicitar Cotação
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/40 hover:border-white/60 backdrop-blur-md font-semibold px-10 py-7 text-lg transition-all duration-300"
              onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Conheça Nossos Serviços
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
