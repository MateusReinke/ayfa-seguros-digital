import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";
import logo from "@/assets/ayfa-logo.png";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Colorful Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple/90 via-primary/80 to-cyan/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--accent)/0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--cyan)/0.2),transparent_50%)]" />
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-cyan/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-magenta/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6 py-24 lg:py-40">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex justify-center items-center mb-10 animate-fade-in opacity-0" style={{animationDelay: '0.1s', animationFillMode: 'forwards'}}>
            <img src={logo} alt="Ayfa Seguros" className="h-20 md:h-24 lg:h-28 drop-shadow-2xl" />
          </div>
          
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-[1.1] animate-fade-in opacity-0 tracking-tight" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
            Proteção Completa<br />
            <span className="text-gradient-warm">para seus Eventos</span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-white/95 mb-12 font-light leading-relaxed animate-fade-in opacity-0 max-w-3xl mx-auto" style={{animationDelay: '0.5s', animationFillMode: 'forwards'}}>
            Especialistas em seguros para eventos, garantindo segurança e tranquilidade 
            para organizadores e seus clientes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center animate-fade-in opacity-0" style={{animationDelay: '0.7s', animationFillMode: 'forwards'}}>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-accent to-gold hover:opacity-90 text-white font-semibold px-10 py-7 text-lg shadow-glow hover:scale-105 transition-all duration-300"
              onClick={scrollToContact}
            >
              Solicitar Cotação
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-2 border-cyan/50 hover:border-cyan backdrop-blur-md font-semibold px-10 py-7 text-lg transition-all duration-300 hover:shadow-cyan"
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
