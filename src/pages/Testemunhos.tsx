import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, Heart, Star } from "lucide-react";

const Testemunhos = () => {
  const testemunhos = [
    {
      nome: "Maria Santos",
      idade: 45,
      testemunho: "Minha vida foi completamente transformada quando conheci Jesus nesta igreja. Eu estava passando por uma depressão profunda e não via sentido na vida. Através das orações e do amor desta comunidade, encontrei paz e propósito. Hoje sou uma nova criatura!",
      tempo: "Há 3 anos na igreja"
    },
    {
      nome: "João Silva",
      idade: 32,
      testemunho: "Era viciado em drogas há mais de 10 anos. Quando chegei aqui estava destruído, sem família e sem esperança. Deus usou esta igreja para me restaurar completamente. Hoje sou casado, tenho uma família abençoada e sirvo no ministério de jovens.",
      tempo: "Há 5 anos na igreja"
    },
    {
      nome: "Ana Oliveira",
      idade: 28,
      testemunho: "Cresci em uma família cristã, mas me afastei de Deus na adolescência. Quando voltei para a igreja, encontrei aqui um ambiente acolhedor onde pude reconstruir minha fé. Hoje sou líder do ministério de louvor e vejo como Deus restaura vidas diariamente.",
      tempo: "Há 2 anos na igreja"
    },
    {
      nome: "Carlos Souza",
      idade: 50,
      testemunho: "Depois de 25 anos de casamento, minha esposa e eu estávamos à beira do divórcio. Chegamos aqui como última tentativa. Através do ministério de casais e das orações da igreja, Deus restaurou nosso casamento. Hoje somos mais unidos que nunca!",
      tempo: "Há 4 anos na igreja"
    },
    {
      nome: "Luciana Costa",
      idade: 35,
      testemunho: "Era uma pessoa muito ansiosa e sempre preocupada com o futuro. Nas reuniões de oração aprendi a entregar tudo nas mãos de Deus. A paz que hoje tenho em meu coração é sobrenatural. Deus cuidou de todos os meus problemas financeiros e familiares.",
      tempo: "Há 1 ano na igreja"
    },
    {
      nome: "Pedro Lima",
      idade: 60,
      testemunho: "Após me aposentar, me sentia inútil e sem propósito. Na igreja descobri que Deus ainda tinha planos para minha vida. Hoje trabalho na área social da igreja, ajudando famílias carentes. Nunca me senti tão realizado em toda minha vida!",
      tempo: "Há 6 anos na igreja"
    }
  ];

  return (
    <Layout>
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
              Testemunhos
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
              Conheça histórias reais de vidas transformadas pelo poder de Deus em nossa igreja.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {testemunhos.map((testemunho, index) => (
              <Card key={index} className="group hover:shadow-glow transition-all duration-300 relative overflow-hidden">
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 text-primary mb-4 opacity-50" />
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{testemunho.testemunho}"
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-foreground">{testemunho.nome}</h3>
                      <p className="text-sm text-muted-foreground">{testemunho.idade} anos</p>
                      <p className="text-sm text-primary font-medium">{testemunho.tempo}</p>
                    </div>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-secondary fill-current" />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Share */}
          <div className="text-center mb-12">
            <div className="bg-gradient-primary text-primary-foreground rounded-lg p-8">
              <Heart className="h-12 w-12 mx-auto mb-4 opacity-80" />
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Você Tem um Testemunho?
              </h2>
              <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
                Se Deus fez algo especial em sua vida, queremos ouvir! Compartilhe seu testemunho 
                conosco e inspire outras pessoas com a obra de Deus em sua vida.
              </p>
              <Button variant="secondary" size="lg">
                Compartilhar Testemunho
              </Button>
            </div>
          </div>

          {/* Impact Statistics */}
          <div className="bg-muted rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              O Impacto da Nossa Igreja
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <p className="text-muted-foreground">Vidas Transformadas</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">200+</div>
                <p className="text-muted-foreground">Famílias Restauradas</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">150+</div>
                <p className="text-muted-foreground">Libertações</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">15</div>
                <p className="text-muted-foreground">Anos Impactando</p>
              </div>
            </div>
          </div>

          {/* Scripture */}
          <div className="text-center mt-12 p-6 border-l-4 border-l-primary bg-card">
            <Quote className="h-8 w-8 text-primary mx-auto mb-4 opacity-50" />
            <p className="text-lg text-muted-foreground italic mb-4">
              "Assim que, se alguém está em Cristo, nova criatura é; as coisas velhas já passaram; eis que tudo se fez novo."
            </p>
            <p className="text-sm font-semibold text-primary">2 Coríntios 5:17</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Testemunhos;