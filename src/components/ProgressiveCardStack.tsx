import { useEffect, useRef, useState } from "react";

interface CardData {
  id: number;
  title: string;
  description: string;
  badge: string;
  backgroundImage: string;
}

const cardData: CardData[] = [
  {
    id: 1,
    title: "Tim Lokal Berpengalaman",
    description: "Lebih dari 50 website untuk bisnis di Makassar dengan tim yang memahami kebutuhan lokal",
    badge: "The Vision",
    backgroundImage: "/lovable-uploads/86329743-ee49-4f2e-96f7-50508436273d.png"
  },
  {
    id: 2,
    title: "Gratis Domain & Hosting",
    description: "Tahun pertama gratis untuk semua paket dengan dukungan 24/7 via WhatsApp dan Zoom",
    badge: "The Mission",
    backgroundImage: "/lovable-uploads/7335619d-58a9-41ad-a233-f7826f56f3e9.png"
  },
  {
    id: 3,
    title: "Optimasi SEO Lokal Makassar",
    description: "Optimasi khusus untuk Google Maps dan pencarian lokal di Makassar untuk pencarian Google Maps dan pencarian lokal di Makassar",
    badge: "The Impact",
    backgroundImage: "/lovable-uploads/b6436838-5c1a-419a-9cdc-1f9867df073d.png"
  }
];

const ProgressiveCardStack = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      requestAnimationFrame(() => {
        const rect = containerRef.current!.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementHeight = rect.height;
        
        // Calculate progress based on element position
        const progress = Math.max(0, Math.min(1, 
          (windowHeight - rect.top) / (windowHeight + elementHeight)
        ));
        
        setScrollProgress(progress);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getCardStyle = (cardIndex: number) => {
    const phase = cardIndex + 1;
    const phaseStart = (phase - 1) / 3;
    const phaseEnd = phase / 3;
    
    let progress = 0;
    if (scrollProgress >= phaseStart) {
      progress = Math.min(1, (scrollProgress - phaseStart) / (phaseEnd - phaseStart));
    }

    const translateY = cardIndex === 0 ? 90 * (1 - progress) : 
                     cardIndex === 1 ? 55 * (1 - progress) : 
                     15 * (1 - progress);
    
    const scale = cardIndex === 0 ? 0.9 + (0.1 * progress) :
                 cardIndex === 1 ? 0.95 + (0.05 * progress) :
                 1;
    
    const opacity = cardIndex === 0 ? 0.9 * progress : progress;
    const zIndex = 30 - (cardIndex * 10);

    return {
      transform: `translateY(${translateY}px) scale(${scale})`,
      opacity,
      zIndex,
      willChange: 'transform, opacity'
    };
  };

  return (
    <div 
      ref={containerRef}
      className="relative h-[300vh] w-full bg-white"
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="relative w-full max-w-4xl mx-auto px-4">
          {cardData.map((card, index) => (
            <div
              key={card.id}
              className="absolute inset-0 rounded-[20px] shadow-xl overflow-hidden"
              style={getCardStyle(index)}
            >
              <div 
                className="relative w-full h-full bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${card.backgroundImage})`
                }}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60" />
                
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-12">
                  {/* Badge */}
                  <div className="flex justify-end">
                    <div className="bg-white/20 backdrop-blur-lg rounded-full px-4 py-2">
                      <span className="text-white text-sm font-medium">
                        {card.badge}
                      </span>
                    </div>
                  </div>
                  
                  {/* Text Content */}
                  <div className="text-white">
                    <h2 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                      {card.title}
                    </h2>
                    <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressiveCardStack;