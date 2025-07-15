import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Music, Baby, GraduationCap, Heart, Handshake } from "lucide-react";

const Ministerios = () => {
  const ministerios = [
    {
      nome: "Ministério de Louvor",
      descricao: "Grupo responsável pela adoração musical durante os cultos e eventos especiais.",
      responsavel: "Ministro João Santos",
      horario: "Ensaios: Terça e Quinta às 19h",
      icon: <Music className="h-8 w-8" />
    },
    {
      nome: "Ministério Infantil",
      descricao: "Dedicado ao ensino bíblico e cuidado das crianças durante os cultos.",
      responsavel: "Ministra Maria Silva",
      horario: "Domingos durante os cultos",
      icon: <Baby className="h-8 w-8" />
    },
    {
      nome: "Ministério de Jovens",
      descricao: "Focado no desenvolvimento espiritual e social dos jovens da igreja.",
      responsavel: "Pastor José Oliveira",
      horario: "Sábados às 19h",
      icon: <GraduationCap className="h-8 w-8" />
    },
    {
      nome: "Ministério de Casais",
      descricao: "Fortalecimento dos relacionamentos matrimoniais através da Palavra de Deus.",
      responsavel: "Casal Paulo e Ana Costa",
      horario: "2º Sábado do mês às 19h",
      icon: <Heart className="h-8 w-8" />
    },
    {
      nome: "Ministério de Visitação",
      descricao: "Cuidado pastoral através de visitas a membros e visitantes.",
      responsavel: "Presbítero Carlos Santos",
      horario: "Conforme necessidade",
      icon: <Handshake className="h-8 w-8" />
    },
    {
      nome: "Ministério de Intercessão",
      descricao: "Grupo dedicado à oração pela igreja, liderança e necessidades especiais.",
      responsavel: "Irmã Rosa Lima",
      horario: "Diariamente às 6h",
      icon: <Users className="h-8 w-8" />
    }
  ];

  return (
    <Layout>
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
              Ministérios da Igreja
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
              Descubra como você pode servir a Deus e fazer a diferença na vida das pessoas através dos nossos ministérios.
            </p>
          </div>

          {/* Ministries Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {ministerios.map((ministerio, index) => (
              <Card key={index} className="group hover:shadow-glow transition-all duration-300 border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="text-primary group-hover:scale-110 transition-transform">
                      {ministerio.icon}
                    </div>
                    <CardTitle className="text-xl">{ministerio.nome}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{ministerio.descricao}</p>
                  
                  <div className="space-y-2">
                    <p className="text-sm">
                      <strong>Responsável:</strong> {ministerio.responsavel}
                    </p>
                    <p className="text-sm">
                      <strong>Horário:</strong> {ministerio.horario}
                    </p>
                  </div>

                  <Button variant="outline" size="sm" className="w-full">
                    Participar
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-primary text-primary-foreground rounded-lg p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Tem o Desejo de Servir?
            </h2>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
              Acreditamos que Deus tem um chamado especial para cada pessoa. Se você sente o desejo de servir, 
              venha conversar conosco para descobrir onde você pode fazer a diferença.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Falar com um Líder
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Saber Mais
              </Button>
            </div>
          </div>

          {/* Requirements */}
          <div className="mt-12 bg-muted rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Como Participar dos Ministérios
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  1
                </div>
                <h4 className="font-semibold mb-2">Compromisso com Cristo</h4>
                <p className="text-sm text-muted-foreground">
                  Ter um relacionamento pessoal com Jesus Cristo e testemunho cristão.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  2
                </div>
                <h4 className="font-semibold mb-2">Frequência Assídua</h4>
                <p className="text-sm text-muted-foreground">
                  Participar regularmente dos cultos e atividades da igreja.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  3
                </div>
                <h4 className="font-semibold mb-2">Coração Servil</h4>
                <p className="text-sm text-muted-foreground">
                  Disposição para servir com amor e dedicação no Reino de Deus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Ministerios;