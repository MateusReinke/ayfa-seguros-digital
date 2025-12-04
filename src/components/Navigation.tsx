import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import logo from "@/assets/ayfa-logo.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
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
        <div className="flex items-center justify-between h-16 md:h-20 lg:h-24">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection("hero")}>
            <img src={logo} alt="Ayfa Seguros" className="h-8 md:h-10 lg:h-12" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
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
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle className={isScrolled ? "" : "text-white hover:text-white hover:bg-white/10"} />
            <Button
              onClick={() => scrollToSection("contato")}
              className="bg-gradient-to-r from-accent to-gold hover:opacity-90 text-white font-bold px-5 py-4 shadow-glow"
              size="default"
            >
              Solicitar Cotação
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle className={`${isScrolled ? "" : "text-white hover:text-white hover:bg-white/10"} h-9 w-9`} />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className={`${isScrolled ? "" : "text-white hover:text-white"} h-9 w-9`}>
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[320px]">
                <div className="flex flex-col gap-2 mt-6">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="text-left text-base font-medium text-foreground hover:text-primary hover:bg-muted transition-colors py-3 px-3 rounded-lg"
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
