import economicaLogo from "@/assets/economica-logo.png";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-secondary to-primary shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <a href="/" className="flex items-center">
            <img 
              src={economicaLogo} 
              alt="ECONOMICA - Consultoria Empresarial" 
              className="h-12 md:h-16 w-auto"
            />
          </a>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a 
              href="#sobre" 
              className="text-white hover:text-accent-foreground transition-colors font-medium"
            >
              Sobre
            </a>
            <a 
              href="#beneficios" 
              className="text-white hover:text-accent-foreground transition-colors font-medium"
            >
              Benefícios
            </a>
            <a 
              href="#contato" 
              className="text-white hover:text-accent-foreground transition-colors font-medium"
            >
              Contato
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
