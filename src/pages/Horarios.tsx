import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, Users, Heart } from "lucide-react";

const Horarios = () => {
  const horarios = [
    {
      dia: "Domingo de Manhã",
      horario: "08:00",
      tipo: "Escola Bíblica Dominical",
      descricao: "Estudo sistemático da Palavra de Deus para todas as idades",
      icon: <Calendar className="h-6 w-6" />
    },
    {
      dia: "Domingo à Noite",
      horario: "18:30",
      tipo: "Culto de Adoração, da Família e Missões",
      descricao: "Momento de adoração, comunhão familiar e visão missionária",
      icon: <Heart className="h-6 w-6" />
    },
    {
      dia: "Quarta-feira",
      horario: "19:30",
      tipo: "Culto da Família",
      descricao: "Culto focado no fortalecimento dos laços familiares em Cristo",
      icon: <Users className="h-6 w-6" />
    },
    {
      dia: "Sexta-feira",
      horario: "19:30",
      tipo: "Culto de Ensino",
      descricao: "Aprofundamento no conhecimento bíblico e crescimento espiritual",
      icon: <Clock className="h-6 w-6" />
    }
  ];

  return (
    <Layout>
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
              Horários dos Cultos
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
              Venha adorar conosco! Temos programações especiais durante a semana para toda a família.
            </p>
          </div>

          {/* Schedule Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {horarios.map((culto, index) => (
              <Card key={index} className="group hover:shadow-glow transition-all duration-300 border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="text-primary group-hover:scale-110 transition-transform">
                      {culto.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{culto.tipo}</CardTitle>
                      <p className="text-muted-foreground">{culto.dia} às {culto.horario}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{culto.descricao}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="bg-muted rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Primeira Visita?
            </h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Se esta é sua primeira visita, saiba que você é muito bem-vindo! 
              Chegue alguns minutos antes para se familiarizar com o ambiente. 
              Nossa equipe de recepção estará disponível para ajudá-lo.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">Ambiente Acolhedor</h3>
                <p className="text-sm text-muted-foreground">
                  Comunidade calorosa e receptiva
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <Calendar className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">Programação Variada</h3>
                <p className="text-sm text-muted-foreground">
                  Atividades para toda a família
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">Adoração Genuína</h3>
                <p className="text-sm text-muted-foreground">
                  Momentos especiais com Deus
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Horarios;