
import React from 'react';
import { SectionTag, Stage, Reveal, SectionBackground } from './ui/Shared';
import { HardHat, Home, Drill, ArrowUpRight } from 'lucide-react';

const Tech: React.FC = () => {
  return (
    <section id="tech" className="relative py-24 md:py-40 bg-[#050505] overflow-hidden">
      {/* ATMOSPHERIC BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/2 right-0 w-1/3 h-1/2 bg-[#C5A028]/5 blur-[120px] rounded-full opacity-20" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header - Editorial Style */}
        <Reveal>
          <div className="mb-16 md:mb-28">
            <SectionTag>04. Bebauung & Technik</SectionTag>
            <div className="flex flex-col md:flex-row gap-12 mt-8 md:items-end">
              <h2 className="text-4xl md:text-7xl font-serif text-white leading-[0.95] max-w-3xl text-left">
                Präzision in <br />
                <span className="text-[#C5A028] italic">Fundament & Form</span>
              </h2>
              <p className="text-white/55 text-lg leading-relaxed max-w-xl md:pl-10 md:border-l border-white/10 text-left">
                Die technische Umsetzung folgt höchsten Standards. Von der Baugrunduntersuchung 
                bis zur spezialisierten Gründung – jede Maßnahme ist präzise kalkuliert.
              </p>
            </div>
          </div>
        </Reveal>

        {/* TECH STAGE */}
        <Stage className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
            
            {/* Block 1: Einfamilienhäuser */}
            <div className="p-8 md:p-16 group hover:bg-white/[0.02] transition-colors duration-500 flex flex-col text-left">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[#C5A028] group-hover:scale-110 transition-transform">
                  <Home className="w-5 h-5" />
                </div>
                <span className="text-[11px] uppercase tracking-[0.25em] text-white/40 font-bold">Wohnformen</span>
              </div>
              
              <h3 className="text-3xl font-serif text-white mb-8">Einfamilienhäuser & <br/>Wohnungen</h3>
              
              <div className="space-y-8 flex-1">
                <div className="flex items-start gap-6">
                  <div className="text-4xl font-serif text-[#C5A028] opacity-50">09</div>
                  <div>
                    <p className="text-white font-medium mb-1">Doppelhaushälften</p>
                    <p className="text-sm text-white/50 leading-relaxed">ca. 140 m² Wohnfläche, Grundmaß ca. 5,5 m × 11,5 m.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="text-4xl font-serif text-[#C5A028] opacity-50">07</div>
                  <div>
                    <p className="text-white font-medium mb-1">Reihenhäuser</p>
                    <p className="text-sm text-white/50 leading-relaxed">ca. 120 m² Wohnfläche, Grundmaß ca. 5,5 m × 10 m.</p>
                  </div>
                </div>

                <div className="pt-8 border-t border-white/5 mt-auto">
                   <p className="text-xs text-white/40 uppercase tracking-widest font-bold mb-4">Ergänzt durch</p>
                   <p className="text-lg text-white font-serif">16 Wohnungen in zwei Mehrfamilienhäusern.</p>
                </div>
              </div>
            </div>

            {/* Block 2: Baugrund & Tiefbau */}
            <div className="p-8 md:p-16 bg-[#C5A028]/[0.02] group hover:bg-[#C5A028]/[0.04] transition-colors duration-500 text-left">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[#C5A028] group-hover:scale-110 transition-transform">
                  <Drill className="w-5 h-5" />
                </div>
                <span className="text-[11px] uppercase tracking-[0.25em] text-white/40 font-bold">Ingenieurwesen</span>
              </div>

              <h3 className="text-3xl font-serif text-white mb-8">Baugrund & <br/>Tiefbau</h3>

              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-black/40 border border-white/5">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-bold text-[#C5A028] uppercase tracking-widest">Untersuchung</span>
                    <span className="text-xs font-mono text-white/40">Status: Abgeschlossen</span>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">
                    <span className="text-white font-bold text-lg mr-2 italic">12</span> 
                    Sondierungspunkte zur präzisen Bewertung von Tragfähigkeit und Grundwasserverhältnissen.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C5A028]" />
                    <p className="text-sm text-white/60">Vollständige Wasserhaltung einkalkuliert.</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C5A028]" />
                    <p className="text-sm text-white/60">Erforderliche Unterfangungen der Nachbarbebauung berücksichtigt.</p>
                  </div>
                </div>

                <div className="mt-12 p-6 rounded-2xl border border-[#C5A028]/20 bg-[#C5A028]/5">
                  <p className="text-[10px] uppercase tracking-widest text-[#C5A028] font-bold mb-2">Kostensicherheit</p>
                  <p className="text-white font-serif italic text-lg leading-snug">
                    Alle Spezialtiefbau-Maßnahmen sind integraler Bestandteil der GKI-Kalkulation.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </Stage>

        {/* Cinematic Bottom Block */}
        <Reveal delay={200}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            <div className="relative group overflow-hidden rounded-[32px] border border-white/10 shadow-2xl aspect-video lg:aspect-[16/9]">
                <img
                    src="https://whhy.de/wp-content/uploads/2026/01/2.png"
                    alt="Technik und Qualität"
                    className="w-full h-full object-cover transition-transform duration-[15s] ease-linear group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                    <p className="text-white font-serif italic text-2xl drop-shadow-lg text-left">"Qualität entsteht dort, <br/> wo Detailtiefe auf Planung trifft."</p>
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                        <HardHat className="w-5 h-5 text-white" />
                    </div>
                </div>
            </div>

            <div className="text-left space-y-8">
                <div className="flex items-center gap-4">
                    <div className="h-[1px] w-12 bg-[#C5A028]"></div>
                    <p className="text-[11px] text-[#C5A028] uppercase tracking-[0.4em] font-bold">Bausubstanz</p>
                </div>
                <h3 className="text-4xl md:text-5xl font-serif text-white leading-tight">
                  Werte schaffen durch <br />
                  <span className="text-[#C5A028] italic">Ingenieurskunst.</span>
                </h3>
                <p className="text-lg text-white/50 leading-relaxed font-light">
                  Die Kombination aus moderner Skelettbauweise und massiven Elementen sichert 
                  Langlebigkeit und Flexibilität. Durch die bereits vorliegenden Sondierungsergebnisse 
                  konnten die Gründungskosten exakt fixiert werden.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <button className="flex items-center justify-center gap-4 px-10 py-5 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white hover:text-black transition-all group/btn font-bold text-[10px] uppercase tracking-widest shadow-2xl">
                    Bodengutachten laden <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                  </button>
                </div>
            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default Tech;
