import { Award, Users, Calendar, Shield } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const Stats = () => {
  const { ref, isVisible } = useScrollReveal();
  const stats = [
    {
      icon: Calendar,
      value: "500+",
      label: "Eventos Segurados",
      color: "bg-cyan"
    },
    {
      icon: Users,
      value: "200+",
      label: "Clientes Ativos",
      color: "bg-purple"
    },
    {
      icon: Award,
      value: "15+",
      label: "Anos de Experiência",
      color: "bg-accent"
    },
    {
      icon: Shield,
      value: "99%",
      label: "Satisfação",
      color: "bg-lime"
    }
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-muted relative overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-primary rounded-full blur-3xl" style={{ opacity: 0.05 }} />
      <div className="absolute bottom-0 right-1/4 w-40 md:w-80 h-40 md:h-80 bg-accent rounded-full blur-3xl" style={{ opacity: 0.05 }} />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 lg:gap-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`text-center group hover:scale-110 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`w-14 md:w-20 h-14 md:h-20 mx-auto mb-4 md:mb-6 rounded-xl md:rounded-2xl ${stat.color} flex items-center justify-center group-hover:shadow-elegant transition-all duration-500`}>
                  <Icon className="w-7 md:w-10 h-7 md:h-10 text-primary-foreground" />
                </div>
                <p className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-1 md:mb-3">{stat.value}</p>
                <p className="text-muted-foreground font-medium text-sm md:text-base lg:text-lg">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;