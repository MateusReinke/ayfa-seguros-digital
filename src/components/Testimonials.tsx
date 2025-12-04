import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const Testimonials = () => {
  const { ref, isVisible } = useScrollReveal();
  const testimonials = [
    {
      name: "Roberto Silva",
      role: "Organizador de Eventos",
      company: "Mega Produções",
      text: "A Ayfa transformou a forma como gerenciamos riscos em nossos eventos. A agilidade no atendimento e a expertise da equipe nos dão total segurança.",
      rating: 5,
      color: "bg-cyan"
    },
    {
      name: "Ana Carolina",
      role: "Diretora de Marketing",
      company: "Premium Events",
      text: "Trabalhamos com a Ayfa há 3 anos e a parceria só cresce. O suporte na pré-produção e a flexibilidade nos pagamentos fazem toda diferença.",
      rating: 5,
      color: "bg-purple"
    },
    {
      name: "Fernando Costa",
      role: "Produtor Executivo",
      company: "Show Time",
      text: "Profissionalismo incomparável! A Ayfa nos atende em eventos de todos os portes com o mesmo comprometimento e qualidade.",
      rating: 5,
      color: "bg-accent"
    }
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background relative overflow-hidden" ref={ref}>
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 md:w-64 h-32 md:h-64 bg-purple/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-40 md:w-72 h-40 md:h-72 bg-cyan/10 rounded-full blur-3xl" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className={`text-center mb-12 md:mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            <span className="text-gradient">O Que Nossos Clientes Dizem</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
            Depoimentos de quem confia na Ayfa para proteger seus eventos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`hover:shadow-elegant transition-all duration-700 border border-border/50 bg-card hover:-translate-y-2 group overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={`h-1.5 ${testimonial.color}`} />
              <CardContent className="pt-6 md:pt-10 pb-6 md:pb-8 px-5 md:px-8 relative">
                <Quote className={`absolute top-4 md:top-6 right-4 md:right-6 w-8 md:w-10 h-8 md:h-10 ${testimonial.color === 'bg-cyan' ? 'text-cyan' : testimonial.color === 'bg-purple' ? 'text-purple' : 'text-accent'} opacity-20`} />
                <div className="flex gap-1 mb-4 md:mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 md:w-6 h-4 md:h-6 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-foreground/80 mb-6 md:mb-8 italic text-sm md:text-base lg:text-lg leading-relaxed">"{testimonial.text}"</p>
                <div className="border-t border-border pt-4 md:pt-6">
                  <p className="font-bold text-foreground text-base md:text-lg mb-1">{testimonial.name}</p>
                  <p className="text-xs md:text-sm text-muted-foreground mb-1">{testimonial.role}</p>
                  <p className={`text-xs md:text-sm font-semibold ${testimonial.color === 'bg-cyan' ? 'text-cyan' : testimonial.color === 'bg-purple' ? 'text-purple' : 'text-accent'}`}>{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
