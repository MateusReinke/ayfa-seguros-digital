import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import logo from "@/assets/ayfa-logo.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { label: "Início", id: "hero" },
    { label: "Serviços", id: "servicos" },
    { label: "Cobertura", id: "cobertura" },
    { label: "Diferenciais", id: "diferenciais" },
    { label: "Clientes", id: "clientes" },
    { label: "FAQ", id: "faq" },
    { label: "Contato", id: "contato" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-elegant border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="flex items-center justify-center h-20 md:h-24 relative">
          {/* Logo à esquerda */}
          <div className="absolute left-0 flex items-center cursor-pointer" onClick={() => scrollToSection("hero")}>
            <img src={logo} alt="Ayfa Seguros" className="h-10 md:h-12 lg:h-14" />
          </div>

          {/* Desktop Navigation - Centralizado */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-semibold transition-all hover:text-primary uppercase tracking-wide relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all ${
                  isScrolled ? "text-foreground" : "text-white hover:text-cyan"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Botão CTA e Theme Toggle à direita */}
          <div className="absolute right-0 hidden lg:flex items-center gap-3">
            <ThemeToggle className={isScrolled ? "" : "text-white hover:text-white hover:bg-white/10"} />
            <Button
              onClick={() => scrollToSection("contato")}
              className="bg-gradient-to-r from-accent to-gold hover:opacity-90 text-white font-bold px-6 py-5 shadow-glow"
              size="lg"
            >
              Solicitar Cotação
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden absolute right-0 flex items-center gap-2">
            <ThemeToggle className={isScrolled ? "" : "text-white hover:text-white hover:bg-white/10"} />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className={isScrolled ? "" : "text-white hover:text-white"}>
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                  >
                    {item.label}
                  </button>
                ))}
                <Button
                  onClick={() => scrollToSection("contato")}
                  className="bg-gradient-to-r from-accent to-gold text-white w-full mt-4"
                >
                  Solicitar Cotação
                </Button>
              </div>
            </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
