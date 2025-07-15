import Layout from "@/components/Layout";
import ImageCarousel from "@/components/ImageCarousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, HandHeart, BookOpen, Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative">
        <ImageCarousel />
      </section>

      {/* Welcome Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Igreja Assembleia de Deus
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto animate-fade-in">
              Um lugar onde a fé cresce, a comunidade prospera e os corações são transformados pelo amor de Deus.
            </p>
          </div>

          {/* Call to Action Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center group hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                <Calendar className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2">Cultos e Horários</h3>
                <p className="text-muted-foreground mb-4">
                  Venha participar dos nossos cultos semanais
                </p>
                <Button asChild variant="outline">
                  <Link to="/horarios">Ver Horários</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                <Users className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2">Ministérios</h3>
                <p className="text-muted-foreground mb-4">
                  Descubra como você pode servir na obra de Deus
                </p>
                <Button asChild variant="outline">
                  <Link to="/ministerios">Conhecer Ministérios</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2">Testemunhos</h3>
                <p className="text-muted-foreground mb-4">
                  Conheça histórias de vidas transformadas
                </p>
                <Button asChild variant="outline">
                  <Link to="/testemunhos">Ver Testemunhos</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Sobre Nossa Igreja
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                A Igreja Assembleia de Deus é uma comunidade cristã comprometida com o ensino da Palavra de Deus, 
                a evangelização e o discipulado. Nossa missão é levar pessoas a conhecerem Jesus Cristo como 
                Salvador e Senhor de suas vidas.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Aqui você encontrará uma família que se importa, onde pode crescer espiritualmente e 
                descobrir o propósito que Deus tem para sua vida. Somos uma igreja acolhedora, onde 
                todas as pessoas são bem-vindas.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-gradient-primary border-0">
                  <Link to="/contatos">Entre em Contato</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/cultura">Nossa História</Link>
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <HandHeart className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Oração e Adoração</h3>
                  <p className="text-muted-foreground">
                    Momentos dedicados à comunhão com Deus através da oração e louvor.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <BookOpen className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Estudo da Palavra</h3>
                  <p className="text-muted-foreground">
                    Ensino bíblico sólido para crescimento espiritual e maturidade cristã.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Users className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Comunhão Cristã</h3>
                  <p className="text-muted-foreground">
                    Relacionamentos genuínos baseados no amor de Cristo.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Missões e Evangelismo</h3>
                  <p className="text-muted-foreground">
                    Levando o evangelho para nossa cidade e além.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Dê o Próximo Passo
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Seja você um visitante ou alguém que busca um novo lar espiritual, 
            temos um lugar para você em nossa família.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-primary border-0">
              <Link to="/horarios">Visite um Culto</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/contatos">Fale Conosco</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
