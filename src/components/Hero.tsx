import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-secondary to-primary py-8 md:py-12">
      <div className="container mx-auto px-4">
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="flex flex-wrap items-center space-x-2 text-sm text-white/80">
            <li>
              <a href="https://planodenegocios.economica.org.br/" className="hover:text-white transition-colors">
                Home
              </a>
            </li>
            <ChevronRight className="h-4 w-4" />
            <li>
              <a href="https://planodenegocios.economica.org.br/" className="hover:text-white transition-colors">
                Serviços
              </a>
            </li>
            <ChevronRight className="h-4 w-4" />
            <li className="text-white font-medium" aria-current="page">
              Plano de Negócios para Padarias
            </li>
          </ol>
        </nav>

        <div className="text-white">
          <p className="text-lg md:text-xl mb-2 text-white/90">
            ECONOMICA - Consultoria Empresarial UNICAMP
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Plano de Negócios para Padarias
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl">
            Transforme sua ideia em um negócio de sucesso com consultoria especializada
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
