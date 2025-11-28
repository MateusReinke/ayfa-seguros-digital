import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
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
    <section id="contato" className="py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Solicite sua Cotação
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Preencha o formulário e nossa equipe entrará em contato em até 6 horas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="border-0 bg-gradient-card shadow-elegant">
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
                    className="border-border h-14 text-base"
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    placeholder="Seu Email *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="border-border h-14 text-base"
                  />
                </div>
                
                <div>
                  <Input
                    type="tel"
                    placeholder="Seu Telefone *"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="border-border h-14 text-base"
                  />
                </div>
                
                <div>
                  <Input
                    placeholder="Tipo de Evento *"
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    required
                    className="border-border h-14 text-base"
                  />
                </div>
                
                <div>
                  <Textarea
                    placeholder="Conte-nos mais sobre seu evento *"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="min-h-[160px] border-border text-base"
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-white h-14 text-lg font-semibold shadow-glow hover:scale-105 transition-all duration-300"
                  size="lg"
                >
                  Enviar Solicitação
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="border-0 bg-gradient-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="pt-8 pb-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 shadow-card">
                    <Mail className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-4 text-xl">Email</h3>
                    <p className="text-muted-foreground mb-2 font-medium">Contato Geral:</p>
                    <a href="mailto:eventos@ayfa.com.br" className="text-accent hover:text-primary transition-colors text-lg font-semibold">
                      eventos@ayfa.com.br
                    </a>
                    <p className="text-muted-foreground mt-4 mb-2 font-medium">Marcela Gorgone:</p>
                    <a href="mailto:marcela@ayfa.com.br" className="text-accent hover:text-primary transition-colors text-lg font-semibold">
                      marcela@ayfa.com.br
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="pt-8 pb-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0 shadow-card">
                    <Phone className="w-8 h-8 text-accent" />
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

            <Card className="border-0 bg-gradient-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="pt-8 pb-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 shadow-card">
                    <MapPin className="w-8 h-8 text-primary" />
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
