import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const ContactForm = () => {
  const { toast } = useToast();
  const { ref, isVisible } = useScrollReveal();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(`Solicitação de Cotação - ${formData.eventType}`);
    const body = encodeURIComponent(
      `Nome: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Telefone: ${formData.phone}\n` +
      `Tipo de Evento: ${formData.eventType}\n\n` +
      `Mensagem:\n${formData.message}`
    );
    
    window.location.href = `mailto:eventos@ayfa.com.br?subject=${subject}&body=${body}`;
    
    toast({
      title: "Formulário enviado!",
      description: "Entraremos em contato em breve.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      eventType: "",
      message: ""
    });
  };

  return (
    <section id="contato" className="py-24 lg:py-32 relative overflow-hidden" ref={ref}>
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted to-background" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple/10 rounded-full blur-3xl" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient">Solicite sua Cotação</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Preencha o formulário e nossa equipe entrará em contato em até 6 horas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className={`border border-border/50 bg-card shadow-elegant transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="h-1.5 bg-gradient-to-r from-cyan via-purple to-magenta rounded-t-lg" />
            <CardHeader className="pb-6">
              <CardTitle className="font-display text-3xl font-bold text-foreground">Envie sua Mensagem</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Seu Nome *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="border-border h-14 text-base focus:border-primary focus:ring-primary"
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    placeholder="Seu Email *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="border-border h-14 text-base focus:border-primary focus:ring-primary"
                  />
                </div>
                
                <div>
                  <Input
                    type="tel"
                    placeholder="Seu Telefone *"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="border-border h-14 text-base focus:border-primary focus:ring-primary"
                  />
                </div>
                
                <div>
                  <Input
                    placeholder="Tipo de Evento *"
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    required
                    className="border-border h-14 text-base focus:border-primary focus:ring-primary"
                  />
                </div>
                
                <div>
                  <Textarea
                    placeholder="Conte-nos mais sobre seu evento *"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="min-h-[160px] border-border text-base focus:border-primary focus:ring-primary"
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-accent to-gold hover:opacity-90 text-white h-14 text-lg font-semibold shadow-glow hover:scale-105 transition-all duration-300"
                  size="lg"
                >
                  Enviar Solicitação
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: '200ms' }}>
            <Card className="border border-border/50 bg-card hover:shadow-elegant transition-all duration-300 overflow-hidden">
              <div className="h-1 bg-cyan" />
              <CardContent className="pt-8 pb-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-cyan flex items-center justify-center flex-shrink-0">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-4 text-xl">Email</h3>
                    <p className="text-muted-foreground mb-2 font-medium">Contato Geral:</p>
                    <a href="mailto:eventos@ayfa.com.br" className="text-cyan hover:text-primary transition-colors text-lg font-semibold">
                      eventos@ayfa.com.br
                    </a>
                    <p className="text-muted-foreground mt-4 mb-2 font-medium">Marcela Gorgone:</p>
                    <a href="mailto:marcela@ayfa.com.br" className="text-cyan hover:text-primary transition-colors text-lg font-semibold">
                      marcela@ayfa.com.br
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border/50 bg-card hover:shadow-elegant transition-all duration-300 overflow-hidden">
              <div className="h-1 bg-accent" />
              <CardContent className="pt-8 pb-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center flex-shrink-0">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-4 text-xl">Telefone</h3>
                    <a href="tel:+551130681200" className="text-accent hover:text-primary transition-colors text-2xl font-bold block mb-3">
                      (11) 3068-1200
                    </a>
                    <p className="text-muted-foreground font-medium leading-relaxed">
                      Atendimento de Segunda a Sexta<br />
                      das 9h às 18h
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border/50 bg-card hover:shadow-elegant transition-all duration-300 overflow-hidden">
              <div className="h-1 bg-purple" />
              <CardContent className="pt-8 pb-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-purple flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-4 text-xl">Localização</h3>
                    <p className="text-muted-foreground font-medium leading-relaxed">
                      São Paulo - SP<br />
                      Atendimento em todo Brasil
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
