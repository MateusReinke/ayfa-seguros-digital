import { Award, Users, Calendar, Shield } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const Stats = () => {
  const { ref, isVisible } = useScrollReveal();
  const stats = [
    {
      icon: Calendar,
      value: "500+",
      label: "Eventos Segurados",
      color: "bg-cyan",
      glow: "shadow-cyan"
    },
    {
      icon: Users,
      value: "200+",
      label: "Clientes Ativos",
      color: "bg-purple",
      glow: "shadow-purple"
    },
    {
      icon: Award,
      value: "15+",
      label: "Anos de Experiência",
      color: "bg-accent",
      glow: "shadow-glow"
    },
    {
      icon: Shield,
      value: "99%",
      label: "Satisfação de Clientes",
      color: "bg-lime",
      glow: "shadow-elegant"
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-muted via-background to-muted relative overflow-hidden" ref={ref}>
      {/* Colorful gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple/5 to-cyan/5" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-16">
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
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl ${stat.color} flex items-center justify-center group-hover:${stat.glow} transition-all duration-500`}>
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <p className="font-display text-5xl md:text-6xl font-bold text-foreground mb-3">{stat.value}</p>
                <p className="text-muted-foreground font-medium text-lg">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
