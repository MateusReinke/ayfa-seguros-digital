import { Award, Users, Calendar, Shield } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      icon: Calendar,
      value: "500+",
      label: "Eventos Segurados"
    },
    {
      icon: Users,
      value: "200+",
      label: "Clientes Ativos"
    },
    {
      icon: Award,
      value: "15+",
      label: "Anos de Experiência"
    },
    {
      icon: Shield,
      value: "99%",
      label: "Satisfação de Clientes"
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-gradient-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)] pointer-events-none" />
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center group hover:scale-110 transition-transform duration-500"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center group-hover:bg-white/25 group-hover:shadow-glow transition-all duration-500 border border-white/20">
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <p className="font-display text-5xl md:text-6xl font-bold text-white mb-3">{stat.value}</p>
                <p className="text-white/95 font-medium text-lg">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
