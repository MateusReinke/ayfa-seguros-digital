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
    <section className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Depoimentos de quem confia na Ayfa para proteger seus eventos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 border-border bg-card relative"
            >
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-sm text-accent font-medium">{testimonial.company}</p>
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
