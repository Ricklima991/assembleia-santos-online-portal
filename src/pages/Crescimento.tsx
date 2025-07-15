import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Heart, Target, Lightbulb } from "lucide-react";

const Crescimento = () => {
  const dicas = [
    {
      titulo: "Leitura Bíblica Diária",
      descricao: "Estabeleça um horário fixo para ler a Bíblia todos os dias, mesmo que sejam poucos versículos.",
      icon: <BookOpen className="h-6 w-6" />
    },
    {
      titulo: "Oração Constante",
      descricao: "Mantenha uma vida de oração regular, conversando com Deus em todos os momentos.",
      icon: <Heart className="h-6 w-6" />
    },
    {
      titulo: "Comunhão Cristã",
      descricao: "Participe ativamente da comunidade da igreja, cultivando relacionamentos cristãos.",
      icon: <Target className="h-6 w-6" />
    },
    {
      titulo: "Serviço ao Próximo",
      descricao: "Pratique o amor cristão servindo outras pessoas e ajudando quem precisa.",
      icon: <Lightbulb className="h-6 w-6" />
    }
  ];

  return (
    <Layout>
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Crescimento Espiritual
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Dicas práticas para fortalecer sua fé e crescer espiritualmente no Senhor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dicas.map((dica, index) => (
              <Card key={index} className="group hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="text-primary group-hover:scale-110 transition-transform">
                      {dica.icon}
                    </div>
                    <span>{dica.titulo}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{dica.descricao}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Crescimento;