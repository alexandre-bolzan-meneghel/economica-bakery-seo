import economicaLogo from "@/assets/economica-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img 
              src={economicaLogo} 
              alt="ECONOMICA" 
              className="h-16 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-white/80 leading-relaxed">
              Consultoria empresarial especializada com mais de 30 anos de experiência. 
              Transformamos ideias em negócios de sucesso.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <a 
                  href="https://wa.me/5511956909147" 
                  className="hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp: (11) 95690-9147
                </a>
              </li>
              <li>
                <a 
                  href="https://planodenegocios.economica.org.br/" 
                  className="hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  planodenegocios.economica.org.br
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Links Úteis</h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <a href="#sobre" className="hover:text-primary transition-colors">
                  Sobre o Serviço
                </a>
              </li>
              <li>
                <a href="#beneficios" className="hover:text-primary transition-colors">
                  Benefícios
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-white/70">
          <p>
            © {currentYear} ECONOMICA - Consultoria Empresarial Júnior. Todos os direitos reservados.
          </p>
          <p className="mt-2 text-sm">
            Desenvolvido com foco em SEO e conversão
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
