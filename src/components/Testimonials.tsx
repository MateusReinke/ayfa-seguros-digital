import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Roberto Silva",
      role: "Organizador de Eventos",
      company: "Mega Produções",
      text: "A Ayfa transformou a forma como gerenciamos riscos em nossos eventos. A agilidade no atendimento e a expertise da equipe nos dão total segurança.",
      rating: 5
    },
    {
      name: "Ana Carolina",
      role: "Diretora de Marketing",
      company: "Premium Events",
      text: "Trabalhamos com a Ayfa há 3 anos e a parceria só cresce. O suporte na pré-produção e a flexibilidade nos pagamentos fazem toda diferença.",
      rating: 5
    },
    {
      name: "Fernando Costa",
      role: "Produtor Executivo",
      company: "Show Time",
      text: "Profissionalismo incomparável! A Ayfa nos atende em eventos de todos os portes com o mesmo comprometimento e qualidade.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-gradient-soft">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Depoimentos de quem confia na Ayfa para proteger seus eventos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover:shadow-elegant transition-all duration-500 border-0 bg-gradient-card hover:-translate-y-2 group"
            >
              <CardContent className="pt-10 pb-8 px-8">
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground/80 mb-8 italic text-lg leading-relaxed">"{testimonial.text}"</p>
                <div className="border-t border-border pt-6">
                  <p className="font-bold text-foreground text-lg mb-1">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground mb-1">{testimonial.role}</p>
                  <p className="text-sm text-accent font-semibold">{testimonial.company}</p>
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
