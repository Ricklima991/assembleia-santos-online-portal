import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import churchExterior from "@/assets/church-exterior.jpg";
import churchInterior from "@/assets/church-interior.jpg";
import worshipService from "@/assets/worship-service.jpg";

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: churchExterior,
      alt: "Fachada da Igreja Assembleia de Deus",
      title: "Nossa Igreja",
      description: "Um lugar acolhedor para toda a família"
    },
    {
      src: churchInterior,
      alt: "Interior da Igreja",
      title: "Ambiente de Adoração",
      description: "Espaço dedicado à oração e louvor"
    },
    {
      src: worshipService,
      alt: "Culto de Adoração",
      title: "Comunhão em Cristo",
      description: "Unidos em fé e adoração"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden rounded-lg shadow-elegant">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
            index === currentIndex ? "translate-x-0" : 
            index < currentIndex ? "-translate-x-full" : "translate-x-full"
          }`}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-transparent" />
          
          {/* Text overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 text-white">
            <h3 className="text-2xl md:text-4xl font-bold mb-2 animate-fade-in">
              {image.title}
            </h3>
            <p className="text-lg md:text-xl animate-fade-in">
              {image.description}
            </p>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <Button
        variant="ghost"
        size="sm"
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white border-0"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      
      <Button
        variant="ghost"
        size="sm"
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white border-0"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;