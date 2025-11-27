import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, User } from "lucide-react";

const Contact = () => {
  const contacts = [
    {
      name: "Marcela Gorgone",
      role: "Gerente",
      email: "marcela@ayfa.com.br",
      phone: "(11) 3068-1200"
    },
    {
      name: "Luana Tavares",
      role: "Assistente Comercial",
      email: "eventos@ayfa.com.br",
      phone: "(11) 3068-1200"
    }
  ];

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nossa equipe está pronta para atender suas necessidades
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {contacts.map((contact, index) => (
            <Card 
              key={index} 
              className="hover:shadow-xl transition-all duration-300 border-border bg-card"
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-foreground">{contact.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{contact.role}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a 
                      href={`mailto:${contact.email}`}
                      className="text-foreground hover:text-accent transition-colors font-medium"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Telefone</p>
                    <a 
                      href={`tel:${contact.phone.replace(/\D/g, '')}`}
                      className="text-foreground hover:text-accent transition-colors font-medium"
                    >
                      {contact.phone}
                    </a>
                  </div>
                </div>

                <Button 
                  className="w-full bg-accent hover:bg-accent/90 text-white mt-4"
                  onClick={() => window.location.href = `mailto:${contact.email}`}
                >
                  Enviar Email
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
