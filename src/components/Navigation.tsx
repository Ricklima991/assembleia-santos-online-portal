import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Church } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Início", path: "/" },
    { name: "Horários", path: "/horarios" },
    { name: "Crescimento Espiritual", path: "/crescimento" },
    { name: "Testemunhos", path: "/testemunhos" },
    { name: "Eventos", path: "/eventos" },
    { name: "Estudos Bíblicos", path: "/estudos" },
    { name: "Serviço Comunitário", path: "/servico" },
    { name: "Música e Louvor", path: "/musica" },
    { name: "Família", path: "/familia" },
    { name: "Ministérios", path: "/ministerios" },
    { name: "Dúvidas", path: "/duvidas" },
    { name: "Contatos", path: "/contatos" },
    { name: "Cultura e Igreja", path: "/cultura" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 w-full border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Church className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">
                Assembleia de Deus
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            {navItems.slice(0, 6).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  location.pathname === item.path
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:text-primary hover:bg-muted"
                )}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Dropdown for more items */}
            <div className="relative group">
              <Button variant="ghost" className="px-3 py-2">
                Mais
              </Button>
              <div className="absolute top-full left-0 mt-1 w-48 bg-card border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {navItems.slice(6).map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={cn(
                      "block px-4 py-2 text-sm hover:bg-muted transition-colors",
                      location.pathname === item.path
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="grid grid-cols-1 gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "block px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    location.pathname === item.path
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:text-primary hover:bg-muted"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;