
import React, { useState, useEffect } from 'react';
import { SectionTag, Stage, Reveal } from './ui/Shared';
import { MapPin, ShieldCheck, TrendingUp, Layers, ArrowUpRight, Check, ChevronRight } from 'lucide-react';

const Thesis: React.FC = () => {
  const [activeImage, setActiveImage] = useState(0);
  const images = [
    "https://whhy.de/wp-content/uploads/2026/01/4.png",
    "https://whhy.de/wp-content/uploads/2026/01/1.png",
    "https://whhy.de/wp-content/uploads/2026/01/2.png"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const points = [
    {
      index: "01",
      title: "Prime Location",
      desc: "Meerbusch-Büderich zählt zu den begehrtesten Wohnlagen Deutschlands. Hohes Preisniveau und extrem begrenztes Angebot.",
      icon: <MapPin className="w-5 h-5" />
    },
    {
      index: "02",
      title: "Planungssicherheit",
      desc: "Rechtsgültiger Bauvorbescheid (bis 12/2026) und positives AK34-Votum. Realisierung nach §34 BauGB gesichert.",
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      index: "03",
      title: "Hybrider Produktmix",
      desc: "Optimale Diversifizierung durch 9 DHH, 7 RH und 16 ETW. Spricht Eigennutzer und Kapitalanleger gleichzeitig an.",
      icon: <Layers className="w-5 h-5" />
    },
    {
      index: "04",
      title: "Performance",
      desc: "Konservativ kalkuliert mit ~34,9% Projekt-Rendite und signifikantem Risikopuffer für maximale Sicherheit.",
      icon: <TrendingUp className="w-5 h-5" />
    }
  ];

  return (
    <section className="relative py-24 md:py-40 bg-[#050505] overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/4 w-1/2 h-full bg-[#C5A028]/5 blur-[160px] pointer-events-none opacity-40" />
        
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
            
            {/* Header Section */}
            <Reveal>
              <div className="mb-16 md:mb-28">
                  <SectionTag>Executive Summary</SectionTag>
                  <div className="flex flex-col lg:flex-row gap-12 mt-8 lg:items-end justify-between">
                      <h2 className="text-5xl md:text-8xl font-serif text-white leading-[0.9] max-w-4xl tracking-tighter text-left">
                          Warum dieses <br />
                          <span className="text-[#C5A028] italic">Investment?</span>
                      </h2>
                      <div className="max-w-md lg:pl-12 lg:border-l border-white/10">
                        <p className="text-white/60 text-lg md:text-xl leading-relaxed font-light text-left">
                            Einzigartige Marktchance in Bestlage. Wir kombinieren exzellente Architektur mit 
                            einer wasserfesten Genehmigungsbasis.
                        </p>
                      </div>
                  </div>
              </div>
            </Reveal>

            {/* Top Metrics Stage */}
            <Stage className="group/stage mb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 lg:divide-x divide-white/10">
                    {points.map((point, i) => (
                        <div 
                          key={i} 
                          className="relative p-8 md:p-12 lg:p-14 group hover:bg-white/[0.03] transition-all duration-700 flex flex-col h-full"
                        >
                            <div className="flex justify-between items-start mb-12">
                                <div className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[#C5A028] group-hover:scale-110 group-hover:bg-[#C5A028] group-hover:text-black transition-all duration-500 shadow-xl">
                                     {point.icon}
                                </div>
                                <span className="font-mono text-[10px] tracking-widest text-white/20 group-hover:text-[#C5A028]/60 transition-colors uppercase">
                                  {point.index}
                                </span>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl md:text-3xl font-serif text-white mb-6 group-hover:translate-x-1 transition-transform duration-500 text-left">
                                  {point.title}
                                </h3>
                                <p className="text-sm md:text-base leading-relaxed text-white/45 group-hover:text-white/70 transition-colors duration-500 font-light text-left">
                                    {point.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </Stage>

            {/* Split Content: Left Image/Gallery - Right Text */}
            <Reveal delay={200}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                
                {/* Left: Interactive Showcase */}
                <div className="relative group order-2 lg:order-1">
                  <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden border border-white/10 shadow-2xl">
                    {images.map((img, idx) => (
                      <div 
                        key={idx}
                        className={`absolute inset-0 transition-all duration-[1.5s] ease-in-out ${
                          activeImage === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                        }`}
                      >
                        <img 
                          src={img} 
                          alt={`Showcase ${idx}`} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                    
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Navigation Pills */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                      {images.map((_, idx) => (
                        <button 
                          key={idx}
                          onClick={() => setActiveImage(idx)}
                          className={`h-1 rounded-full transition-all duration-500 ${
                            activeImage === idx ? 'w-10 bg-[#C5A028]' : 'w-4 bg-white/30 hover:bg-white/60'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  
                  {/* Absolute Badge */}
                  <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#C5A028] rounded-full flex flex-col items-center justify-center text-black shadow-2xl transition-transform duration-700 group-hover:rotate-12 hidden md:flex">
                    <p className="text-[10px] font-bold uppercase tracking-widest leading-none mb-1">Status</p>
                    <p className="text-2xl font-serif font-bold italic leading-none">Secured</p>
                  </div>
                </div>

                {/* Right: Rich Editorial Content */}
                <div className="order-1 lg:order-2 text-left">
                  <div className="flex items-center gap-4 mb-8">
                      <div className="h-[1px] w-12 bg-[#C5A028]"></div>
                      <p className="text-[11px] text-[#C5A028] uppercase tracking-[0.4em] font-bold">Die Anlage-Theorie</p>
                  </div>
                  
                  <h3 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight tracking-tight">
                    Wo Substanz auf <br />
                    <span className="text-[#C5A028] italic">Exzellenz</span> trifft.
                  </h3>
                  
                  <div className="space-y-8 mb-12">
                    <p className="text-lg text-white/50 leading-relaxed font-light">
                      Quartier Niederdonk Living ist nicht nur ein Bauvorhaben, sondern die Antwort auf die 
                      strukturelle Knappheit in einem der stabilsten Immobilienmärkte Nordrhein-Westfalens. 
                      Während andere Projekte noch in B-Plan-Verfahren feststecken, haben wir das 
                      Baurecht bereits finalisiert.
                    </p>
                    
                    <ul className="grid grid-cols-1 gap-4">
                      {[
                        "Gesicherte Grundstückszufahrt nach §34",
                        "Nachgewiesene Stellplatzreduktion durch Lagegunst",
                        "Baugrunduntersuchung bereits vollständig erfolgt",
                        "Konservative Exit-Bewertung basierend auf Peer-Assets"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-4 group">
                          <div className="w-5 h-5 rounded-full bg-[#C5A028]/10 flex items-center justify-center border border-[#C5A028]/20 group-hover:bg-[#C5A028] group-hover:text-black transition-all">
                            <Check className="w-3 h-3" />
                          </div>
                          <span className="text-white/70 text-sm md:text-base font-light tracking-wide">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-6">
                    <button className="flex items-center justify-center gap-4 px-10 py-5 rounded-full bg-[#C5A028] text-black hover:bg-white transition-all group/btn font-bold text-[10px] uppercase tracking-widest shadow-xl shadow-[#C5A028]/10">
                      GKI-Modell öffnen <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                    <button className="flex items-center justify-center gap-4 px-10 py-5 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all font-bold text-[10px] uppercase tracking-widest">
                      Lageanalyse <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>
            </Reveal>

        </div>
    </section>
  );
};

export default Thesis;
