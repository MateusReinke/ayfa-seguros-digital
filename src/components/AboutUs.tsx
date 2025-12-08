import { Target, Eye, Heart, Shield, Users, Award } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const AboutUs = () => {
  const { ref, isVisible } = useScrollReveal();

  const values = [
    { icon: Shield, title: "Confiança", description: "Relações sólidas baseadas em transparência" },
    { icon: Users, title: "Compromisso", description: "Dedicação total aos nossos clientes" },
    { icon: Award, title: "Excelência", description: "Qualidade em cada atendimento" },
    { icon: Heart, title: "Ética", description: "Integridade em todas as ações" },
  ];

  return (
    <section id="quem-somos" className="py-16 md:py-24 lg:py-32 bg-secondary relative overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute top-20 left-0 w-48 md:w-80 h-48 md:h-80 bg-primary rounded-full blur-3xl" style={{ opacity: 0.05 }} />
      <div className="absolute bottom-20 right-0 w-40 md:w-72 h-40 md:h-72 bg-accent rounded-full blur-3xl" style={{ opacity: 0.05 }} />
      
      <div className="container px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            <span className="text-gradient">Quem Somos</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
            Somos uma corretora de seguros comprometida em oferecer as melhores soluções 
            de proteção para você, sua família e seu negócio.
          </p>
        </div>

        {/* About text */}
        <div className={`max-w-4xl mx-auto mb-12 md:mb-20 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-card border border-border rounded-2xl p-6 md:p-10 shadow-elegant">
            <p className="text-base md:text-lg text-card-foreground leading-relaxed mb-4">
              A <strong className="text-primary">AYFA Seguros</strong> é uma corretora de seguros especializada em oferecer 
              soluções personalizadas para diversos segmentos do mercado. Com uma equipe experiente e 
              comprometida, trabalhamos para garantir a melhor proteção para nossos clientes.
            </p>
            <p className="text-base md:text-lg text-card-foreground leading-relaxed">
              Atuamos com as principais seguradoras do mercado, oferecendo uma ampla gama de produtos 
              que incluem seguros pessoais, empresariais, patrimoniais e muito mais. Nossa missão é 
              proporcionar tranquilidade e segurança através de um atendimento personalizado e soluções 
              sob medida para cada necessidade.
            </p>
          </div>
        </div>

        {/* Mission and Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {/* Missão */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8 h-full shadow-card">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-primary rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 md:w-7 md:h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl md:text-2xl font-bold text-card-foreground">Missão</h3>
              </div>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                Oferecer soluções em seguros com excelência, proporcionando tranquilidade e segurança 
                aos nossos clientes através de um atendimento personalizado, transparente e comprometido 
                com a proteção do que é mais importante para você.
              </p>
            </div>
          </div>

          {/* Visão */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8 h-full shadow-card">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-purple rounded-xl flex items-center justify-center">
                  <Eye className="w-6 h-6 md:w-7 md:h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl md:text-2xl font-bold text-card-foreground">Visão</h3>
              </div>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                Ser reconhecida como uma corretora de seguros de referência no mercado, destacando-se 
                pela confiança, inovação e qualidade no atendimento, tornando-nos a primeira escolha 
                dos clientes quando o assunto é proteção e segurança.
              </p>
            </div>
          </div>
        </div>

        {/* Valores */}
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-center mb-8 md:mb-10">
            <span className="text-gradient-warm">Nossos Valores</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-xl p-4 md:p-6 text-center hover:border-primary hover:-translate-y-1 transition-all duration-300 group shadow-card"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-accent rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                  <value.icon className="w-6 h-6 md:w-7 md:h-7 text-accent-foreground" />
                </div>
                <h4 className="font-semibold text-card-foreground mb-1 md:mb-2 text-sm md:text-base">{value.title}</h4>
                <p className="text-muted-foreground text-xs md:text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;