import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Coverage from "@/components/Coverage";
import Differentials from "@/components/Differentials";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Coverage />
      <Differentials />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
