import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Qual o prazo para emissão da apólice?",
      answer: "A emissão da apólice é realizada em até 24 horas após a aprovação da proposta e pagamento."
    },
    {
      question: "Quanto tempo leva para receber um orçamento?",
      answer: "Nosso compromisso é retornar orçamentos em até 6 horas úteis após o recebimento de todas as informações necessárias."
    },
    {
      question: "Quais tipos de eventos são cobertos?",
      answer: "Cobrimos todos os tipos de eventos: feiras, exposições, shows, eventos corporativos, esportivos, culturais e muito mais. Cada evento recebe análise personalizada."
    },
    {
      question: "É possível parcelar o pagamento?",
      answer: "Sim! Oferecemos flexibilidade para pagamentos com diversas opções de parcelamento conforme análise de cada caso."
    },
    {
      question: "O que é coberto pelo seguro de cancelamento?",
      answer: "O seguro cobre prejuízos causados por cancelamento, adiamento ou no-show do evento por motivos cobertos pela apólice, como condições climáticas adversas, problemas de saúde, entre outros."
    },
    {
      question: "Como funciona a consultoria na pré-produção?",
      answer: "Nossa equipe oferece apoio desde o planejamento, auxiliando na análise de riscos, sugestão de coberturas adequadas e orientações sobre prevenção de sinistros."
    },
    {
      question: "Qual a diferença entre RC Equipamentos e Seguros de Eventos?",
      answer: "RC Equipamentos cobre danos causados pelos equipamentos a terceiros, enquanto o Seguro de Eventos protege os próprios equipamentos e montagem do evento."
    },
    {
      question: "É necessário seguro para eventos pequenos?",
      answer: "Sim! Independente do porte, todo evento envolve riscos. Oferecemos soluções personalizadas para eventos de todos os tamanhos."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas sobre nossos serviços e coberturas
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-accent hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
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
