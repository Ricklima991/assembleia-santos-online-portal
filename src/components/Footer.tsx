import { Heart, Church, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e descrição */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Church className="h-8 w-8" />
              <span className="text-xl font-bold">Assembleia de Deus</span>
            </div>
            <p className="text-primary-foreground/80">
              Um lugar onde a fé cresce, a comunidade prospera e os corações são transformados pelo amor de Deus.
            </p>
          </div>

          {/* Links rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><Link to="/horarios" className="hover:text-secondary transition-colors">Horários dos Cultos</Link></li>
              <li><Link to="/ministerios" className="hover:text-secondary transition-colors">Ministérios</Link></li>
              <li><Link to="/eventos" className="hover:text-secondary transition-colors">Eventos</Link></li>
              <li><Link to="/estudos" className="hover:text-secondary transition-colors">Estudos Bíblicos</Link></li>
            </ul>
          </div>

          {/* Ministérios */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Ministérios</h3>
            <ul className="space-y-2">
              <li><Link to="/crescimento" className="hover:text-secondary transition-colors">Crescimento Espiritual</Link></li>
              <li><Link to="/musica" className="hover:text-secondary transition-colors">Música e Louvor</Link></li>
              <li><Link to="/familia" className="hover:text-secondary transition-colors">Família</Link></li>
              <li><Link to="/servico" className="hover:text-secondary transition-colors">Serviço Comunitário</Link></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Rua da Fé, 123 - Centro</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">(11) 1234-5678</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">contato@assembleiadedeus.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="flex items-center justify-center space-x-1 text-primary-foreground/80">
            <span>Feito com</span>
            <Heart className="h-4 w-4 text-secondary" />
            <span>pela Igreja Assembleia de Deus</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;