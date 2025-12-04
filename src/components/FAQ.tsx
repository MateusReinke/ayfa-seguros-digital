import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const FAQ = () => {
  const { ref, isVisible } = useScrollReveal();
  const faqs = [
    {
      question: "Qual o prazo para emissão da apólice?",
      answer: "A emissão da apólice ou certificado de seguro é realizada em até 24 horas após a aprovação da proposta."
    },
    {
      question: "Quanto tempo leva para receber um orçamento?",
      answer: "Nosso compromisso é retornar orçamentos em até 6 horas após o recebimento de todas as informações necessárias."
    },
    {
      question: "Quais tipos de eventos são cobertos?",
      answer: "Cobrimos feiras, exposições, shows, musicais, eventos corporativos, congressos, convenções, eventos esportivos, culturais, formaturas, casamentos e muito mais."
    },
    {
      question: "É possível parcelar o pagamento?",
      answer: "Sim! Oferecemos flexibilidade para pagamentos a faturar, com diversas opções conforme análise de cada caso."
    },
    {
      question: "O que é coberto pelo seguro de cancelamento?",
      answer: "O seguro cobre prejuízos causados por cancelamento, adiamento ou interrupção do evento, incluindo no-show de artistas, condições climáticas adversas, entre outros motivos cobertos pela apólice."
    },
    {
      question: "Quem são os clientes típicos?",
      answer: "Agências de eventos, marketing promocional e publicidade, organizadores, promotores, centros de convenções e exposições, patrocinadores e produtoras."
    },
    {
      question: "Como funciona a cobertura de Responsabilidade Civil?",
      answer: "A RC cobre danos materiais e corporais causados a terceiros durante o evento, desde sua concepção até a desmontagem, incluindo RC Equipamentos, Empregador, Restaurantes, Artistas e Danos Morais."
    },
    {
      question: "A Ayfa oferece consultoria para grandes eventos?",
      answer: "Sim! Temos experiência no ramo de entretenimento e oferecemos consultoria especializada para eventos de grande porte, com análise técnica e sugestão de garantias adequadas."
    }
  ];

  const colors = ['border-l-cyan', 'border-l-purple', 'border-l-accent', 'border-l-magenta', 'border-l-lime', 'border-l-gold', 'border-l-primary', 'border-l-teal'];

  return (
    <section id="faq" className="py-16 md:py-24 lg:py-32 bg-background relative overflow-hidden" ref={ref}>
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 md:w-64 h-32 md:h-64 bg-cyan/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 md:w-72 h-40 md:h-72 bg-purple/10 rounded-full blur-3xl" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className={`text-center mb-12 md:mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            <span className="text-gradient">Perguntas Frequentes</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
            Tire suas dúvidas sobre nossos serviços e coberturas
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3 md:space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className={`bg-card border border-border/50 ${colors[index % colors.length]} border-l-4 rounded-xl md:rounded-2xl px-4 md:px-8 hover:shadow-elegant transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-4 md:py-6 text-sm md:text-base lg:text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4 md:pb-6 text-sm md:text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
