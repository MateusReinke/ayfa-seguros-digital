import logo from "@/assets/ayfa-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.08),transparent)] pointer-events-none" />
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <img src={logo} alt="Ayfa Seguros" className="h-14" />
            </div>
            <p className="text-white/90 leading-relaxed text-lg">
              Especialistas em seguros para eventos, garantindo proteção e tranquilidade há mais de 15 anos.
            </p>
          </div>

          <div>
            <h3 className="font-display text-2xl font-bold mb-6">Serviços</h3>
            <ul className="space-y-3 text-white/90">
              <li className="hover:text-accent transition-colors cursor-pointer">Seguros de Eventos</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Responsabilidade Civil</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Seguros de Pessoas</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Consultoria Especializada</li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-2xl font-bold mb-6">Contato</h3>
            <ul className="space-y-3 text-white/90">
              <li>
                <a href="mailto:eventos@ayfa.com.br" className="hover:text-accent transition-colors">
                  eventos@ayfa.com.br
                </a>
              </li>
              <li>
                <a href="tel:+551130681200" className="hover:text-accent transition-colors font-semibold text-xl">
                  (11) 3068-1200
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-white/70">
          <p className="text-base">&copy; {new Date().getFullYear()} Ayfa Seguros. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
