import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, MapPin } from "lucide-react";

const Eventos = () => {
  const eventos = [
    {
      titulo: "Conferência de Avivamento",
      data: "15-17 de Dezembro",
      horario: "19h30",
      local: "Templo Principal",
      descricao: "Três noites de adoração e mensagens poderosas para renovação espiritual."
    },
    {
      titulo: "Acampamento de Jovens",
      data: "20-22 de Janeiro",
      horario: "Sexta 18h - Domingo 17h",
      local: "Sítio da Igreja",
      descricao: "Final de semana especial para jovens com atividades, ensinos e muito louvor."
    },
    {
      titulo: "Jantar dos Casais",
      data: "10 de Fevereiro",
      horario: "19h",
      local: "Salão Social",
      descricao: "Noite especial para casais com jantar e palavra edificante sobre relacionamentos."
    }
  ];

  return (
    <Layout>
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Eventos da Igreja
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Participe dos nossos eventos especiais e fortaleça sua fé em comunidade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventos.map((evento, index) => (
              <Card key={index} className="group hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <CardTitle>{evento.titulo}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="text-sm">{evento.data}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="text-sm">{evento.horario}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="text-sm">{evento.local}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{evento.descricao}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Eventos;