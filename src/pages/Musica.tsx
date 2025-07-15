import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Musica = () => {
  return (
    <Layout>
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Música e Louvor</h1>
            <p className="text-xl text-muted-foreground">Conheça nossos grupos musicais e playlists recomendadas.</p>
          </div>
          <Card><CardContent className="p-8"><p>Conteúdo em desenvolvimento...</p></CardContent></Card>
        </div>
      </div>
    </Layout>
  );
};

export default Musica;