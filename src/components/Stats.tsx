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
    <section className="py-20 bg-gradient-accent">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <p className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-white/90 font-medium">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
