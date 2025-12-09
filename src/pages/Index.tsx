import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import OperationalServices from "@/components/OperationalServices";
import Stats from "@/components/Stats";
import Coverage from "@/components/Coverage";
import Differentials from "@/components/Differentials";
import Clients from "@/components/Clients";
import PartnersLogos from "@/components/PartnersLogos";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <AboutUs />
      <Services />
      <OperationalServices />
      <Stats />
      <Coverage />
      <Differentials />
      <Clients />
      <PartnersLogos />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
