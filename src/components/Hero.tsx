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
      <div className="container relative z-10 px-4 md:px-6 py-20">
        <div className="max-w-3xl">
          <div className="flex items-center mb-6 animate-fade-in">
            <img src={logo} alt="Ayfa Seguros" className="h-16 md:h-20" />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in">
            Proteção Completa para seus Eventos
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in">
            Especialistas em seguros para eventos, garantindo segurança e tranquilidade 
            para organizadores e seus clientes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-6 text-lg"
              onClick={scrollToContact}
            >
              Solicitar Cotação
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm font-semibold px-8 py-6 text-lg"
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
