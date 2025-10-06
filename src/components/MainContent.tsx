import { CheckCircle2, TrendingUp, Users, Target, Award, DollarSign } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ContactForm from "./ContactForm";

const MainContent = () => {
  const benefits = [
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Análise de Mercado Profissional",
      description: "Estudo detalhado do mercado de panificação, concorrência e oportunidades na sua região."
    },
    {
      icon: <DollarSign className="h-8 w-8 text-primary" />,
      title: "Planejamento Financeiro Completo",
      description: "Projeções financeiras, análise de investimento, capital de giro e ponto de equilíbrio."
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Estratégias de Marketing",
      description: "Plano de marketing direcionado para atrair e fidelizar clientes da sua padaria."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Estrutura Operacional",
      description: "Definição de processos, equipe necessária e fornecedores estratégicos."
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Consultores UNICAMP",
      description: "Equipe com mais de 30 anos de experiência em consultoria empresarial."
    },
  ];

  const risks = [
    "Fechamento precoce do negócio por falta de planejamento adequado",
    "Perda de capital investido devido a erros evitáveis",
    "Dificuldade em obter financiamento ou investimento",
    "Produtos ou serviços que não atendem às demandas do mercado",
    "Problemas de fluxo de caixa e gestão financeira",
  ];

  return (
    <main className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <article className="md:col-span-2 space-y-8">
            <section id="sobre">
              <h2 className="text-3xl font-bold mb-6 text-secondary">
                Por Que Sua Padaria Precisa de um Plano de Negócios Profissional?
              </h2>
              
              <div className="prose max-w-none space-y-4 text-foreground">
                <p className="text-lg leading-relaxed">
                  O mercado de panificação é altamente competitivo e exige muito mais do que apenas saber fazer bons pães. 
                  <strong className="text-secondary"> Um plano de negócios bem estruturado é essencial</strong> para garantir que sua padaria 
                  tenha todas as condições de crescer de forma sustentável e lucrativa.
                </p>

                <p className="text-lg leading-relaxed">
                  A <strong className="text-primary">ECONOMICA</strong>, com sua expertise de mais de 30 anos e consultores formados pela UNICAMP, 
                  oferece um plano de negócios completo e personalizado para padarias, cobrindo desde a análise de mercado até 
                  projeções financeiras detalhadas.
                </p>
              </div>

              <div className="mt-8 p-6 bg-destructive/10 border-l-4 border-destructive rounded-r-lg">
                <h3 className="text-xl font-bold mb-4 text-destructive">
                  ⚠️ Riscos de Começar Sem um Plano de Negócios
                </h3>
                <ul className="space-y-3">
                  {risks.map((risk, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-destructive mr-2 mt-1">•</span>
                      <span className="text-foreground">{risk}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section id="beneficios">
              <h2 className="text-3xl font-bold mb-6 text-secondary">
                O Que Está Incluído no Plano de Negócios
              </h2>

              <div className="grid sm:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="border-primary/20 hover:border-primary transition-colors">
                    <CardHeader>
                      <div className="mb-2">{benefit.icon}</div>
                      <CardTitle className="text-xl">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {benefit.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-6 text-secondary">
                Diferenciais da ECONOMICA
              </h2>
              
              <ul className="space-y-4">
                {[
                  "Mais de 30 anos de experiência em consultoria empresarial",
                  "Consultores formados pela UNICAMP com especialização em gestão",
                  "Planos personalizados para o setor de panificação",
                  "Análise detalhada de viabilidade e retorno do investimento",
                  "Suporte durante todo o processo de implementação",
                  "Metodologia comprovada com centenas de clientes atendidos"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-secondary">
                Para Quem é Este Serviço?
              </h2>
              
              <div className="space-y-4 text-lg text-foreground">
                <p>O Plano de Negócios para Padarias da ECONOMICA é ideal para:</p>
                
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Empreendedores que desejam abrir sua primeira padaria
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Padarias já estabelecidas que precisam de reestruturação
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Investidores buscando oportunidades no setor de panificação
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Empresários que precisam de um plano para buscar financiamento
                  </li>
                </ul>
              </div>
            </section>
          </article>

          {/* Sidebar with Contact Form */}
          <aside className="md:col-span-1">
            <div className="sticky top-24">
              <Card className="shadow-lg border-primary/30">
                <CardHeader className="bg-gradient-to-br from-primary to-secondary text-white">
                  <CardTitle className="text-2xl">Solicite seu Diagnóstico Gratuito</CardTitle>
                  <CardDescription className="text-white/90">
                    Entre em contato e receba uma análise inicial sem compromisso
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6" id="contato">
                  <div className="text-sm text-muted-foreground mb-4">
                    Preencha o formulário abaixo e nossa equipe entrará em contato via WhatsApp
                  </div>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
