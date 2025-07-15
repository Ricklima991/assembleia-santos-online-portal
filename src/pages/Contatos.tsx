import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, User, Crown } from "lucide-react";

const Contatos = () => {
  const lideranca = [
    {
      nome: "Pastor João Silva",
      cargo: "Pastor Presidente",
      telefone: "(11) 99999-1234",
      email: "pastor.joao@assembleiadedeus.com",
      icon: <Crown className="h-6 w-6" />
    },
    {
      nome: "Presbítero Carlos Santos",
      cargo: "Presbítero",
      telefone: "(11) 99999-5678",
      email: "presbitero.carlos@assembleiadedeus.com",
      icon: <User className="h-6 w-6" />
    },
    {
      nome: "Presbítero José Oliveira",
      cargo: "Presbítero",
      telefone: "(11) 99999-9012",
      email: "presbitero.jose@assembleiadedeus.com",
      icon: <User className="h-6 w-6" />
    }
  ];

  return (
    <Layout>
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
              Entre em Contato
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
              Estamos aqui para você! Entre em contato conosco através dos canais abaixo.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <MapPin className="h-6 w-6 text-primary" />
                    <span>Localização</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Rua da Fé, 123 - Centro<br />
                    São Paulo - SP<br />
                    CEP: 01234-567
                  </p>
                  <Button variant="outline" size="sm">
                    Ver no Mapa
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <Phone className="h-6 w-6 text-primary" />
                    <span>Telefone</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    <strong>Igreja:</strong> (11) 1234-5678<br />
                    <strong>WhatsApp:</strong> (11) 99999-0000
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <Mail className="h-6 w-6 text-primary" />
                    <span>E-mail</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    <strong>Geral:</strong> contato@assembleiadedeus.com<br />
                    <strong>Oração:</strong> oracao@assembleiadedeus.com
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <Clock className="h-6 w-6 text-primary" />
                    <span>Horário de Atendimento</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    <strong>Segunda a Sexta:</strong> 9h às 18h<br />
                    <strong>Sábado:</strong> 9h às 12h<br />
                    <strong>Domingo:</strong> Conforme programação
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Leadership */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Nossa Liderança
              </h2>
              
              <div className="space-y-6">
                {lideranca.map((lider, index) => (
                  <Card key={index} className="group hover:shadow-glow transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="text-primary group-hover:scale-110 transition-transform">
                          {lider.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-foreground mb-2">
                            {lider.nome}
                          </h3>
                          <p className="text-muted-foreground mb-3">{lider.cargo}</p>
                          
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <Phone className="h-4 w-4 text-primary" />
                              <span className="text-sm text-muted-foreground">
                                {lider.telefone}
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Mail className="h-4 w-4 text-primary" />
                              <span className="text-sm text-muted-foreground">
                                {lider.email}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Prayer Request */}
              <Card className="mt-8 bg-gradient-primary text-primary-foreground border-0">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-4">Pedido de Oração</h3>
                  <p className="mb-4 opacity-90">
                    Tem um pedido de oração? Nossa equipe está pronta para orar por você.
                  </p>
                  <Button variant="secondary">
                    Enviar Pedido
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contatos;