import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import Coverage from "@/components/Coverage";
import Portfolio from "@/components/Portfolio"; // Principais Jobs (Letreiro/Marquee)
import Clients from "@/components/Clients";     // Nossos Clientes (Grade de Logos)
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm"; // Certifique-se que o nome do arquivo é este ou "Contact"
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton"; // Certifique-se que o nome é este ou "FloatingWhatsApp"

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <AboutUs />
      <Services />
      <Coverage />
      <Portfolio />
      <Clients />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;