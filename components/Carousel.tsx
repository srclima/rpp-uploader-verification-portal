import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  id: number;
  label: string;
  imageUrl: string;
}

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides: Slide[] = [
    {
      id: 1,
      label: "1. Botón de publicación en CMS",
      imageUrl: "https://picsum.photos/seed/cms1/800/450"
    },
    {
      id: 2,
      label: "2. Pantalla de Consentimiento Google",
      imageUrl: "https://picsum.photos/seed/googleauth/800/450"
    },
    {
      id: 3,
      label: "3. Formulario de Metadatos",
      imageUrl: "https://picsum.photos/seed/metaform/800/450"
    },
    {
      id: 4,
      label: "4. Confirmación de Carga Exitosa",
      imageUrl: "https://picsum.photos/seed/success/800/450"
    }
  ];

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="w-full relative group">
      {/* Main Image Container */}
      <div className="w-full h-64 md:h-96 rounded-xl bg-gray-100 relative overflow-hidden shadow-inner border border-gray-200">
        <div 
            className="w-full h-full bg-cover bg-center transition-all duration-500 ease-out transform"
            style={{ backgroundImage: `url(${slides[currentIndex].imageUrl})` }}
        >
            <div className="absolute bottom-0 w-full bg-black/60 backdrop-blur-sm text-white p-4 text-center">
                <span className="font-semibold text-sm md:text-base tracking-wide">
                    {slides[currentIndex].label}
                </span>
            </div>
        </div>
      </div>

      {/* Left Arrow */}
      <div 
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 hover:bg-black/40 text-white cursor-pointer transition-all"
        onClick={prevSlide}
      >
        <ChevronLeft size={30} />
      </div>

      {/* Right Arrow */}
      <div 
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 hover:bg-black/40 text-white cursor-pointer transition-all"
        onClick={nextSlide}
      >
        <ChevronRight size={30} />
      </div>

      {/* Dots */}
      <div className="flex top-4 justify-center py-2 gap-2 mt-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slide.id}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl cursor-pointer w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === slideIndex ? 'bg-brand-600 scale-110' : 'bg-gray-300'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;