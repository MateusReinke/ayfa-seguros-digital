import logo from "@/assets/ayfa-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img src={logo} alt="Ayfa Seguros" className="h-12" />
            </div>
            <p className="text-white/80">
              Especialistas em seguros para eventos, garantindo proteção e tranquilidade.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-white/80">
              <li>Seguros de Eventos</li>
              <li>Responsabilidade Civil</li>
              <li>Seguros de Pessoas</li>
              <li>Consultoria Especializada</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-white/80">
              <li>Email: eventos@ayfa.com.br</li>
              <li>Telefone: (11) 3068-1200</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} Ayfa Seguros. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
