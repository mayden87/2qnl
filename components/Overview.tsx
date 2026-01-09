
import React from 'react';
import { SectionTag, Stage, Reveal, SectionBackground } from './ui/Shared';
import { Layers, Maximize, Home, FileCheck, ArrowUpRight } from 'lucide-react';

const Overview: React.FC = () => {
  return (
    <section id="overview" className="relative py-24 md:py-40 bg-[#050505]">
      {/* Background */}
      <SectionBackground 
        src="https://whhy.de/wp-content/uploads/2026/01/2.png" 
        opacity={0.2} 
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header - Aligned with Thesis style */}
        <Reveal>
            <div className="mb-16 md:mb-24">
                <SectionTag>01. Eckdaten</SectionTag>
                <div className="flex flex-col md:flex-row gap-12 mt-8 md:items-end">
                    <h2 className="text-4xl md:text-7xl font-serif text-white leading-[0.95] max-w-3xl">
                        Das Projekt <br />
                        <span className="text-[#C5A028] italic">im Detail</span>
                    </h2>
                    <p className="text-white/55 text-lg leading-relaxed max-w-xl md:pl-10 md:border-l border-white/10">
                        Eine kuratierte Zusammenstellung der wichtigsten Projektparameter. 
                        Entworfen für höchste Ansprüche an Wohnqualität und Wirtschaftlichkeit. 
                        Jedes Detail geprüft.
                    </p>
                </div>
            </div>
        </Reveal>

        {/* DATA STAGE */}
        <Stage className="mb-24">
            <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-white/10">
                
                {/* COL 1: Key Metrics (Span 4) */}
                <div className="md:col-span-4 p-8 md:p-12 flex flex-col justify-between gap-12 bg-white/[0.02]">
                    <div>
                        <div className="flex items-center gap-3 mb-6 text-[#C5A028]">
                            <Maximize className="w-5 h-5" />
                            <span className="text-xs font-bold uppercase tracking-widest text-white/40">Flächen</span>
                        </div>
                        <div className="space-y-6">
                            <div>
                                <div className="flex justify-between items-baseline mb-1">
                                    <span className="text-white/60 text-sm">Grundstück (Gesamt)</span>
                                    <span className="text-white font-serif text-xl">7.398 m²</span>
                                </div>
                                <div className="w-full h-px bg-white/10" />
                            </div>
                            <div>
                                <div className="flex justify-between items-baseline mb-1">
                                    <span className="text-white/60 text-sm">Nettobauland</span>
                                    <span className="text-white font-serif text-xl">6.317 m²</span>
                                </div>
                                <div className="w-full h-px bg-white/10" />
                            </div>
                            <div>
                                <div className="flex justify-between items-baseline mb-1">
                                    <span className="text-[#C5A028] text-sm font-medium">Netto-Wohnfläche</span>
                                    <span className="text-[#C5A028] font-serif text-2xl">3.250 m²</span>
                                </div>
                                <div className="w-full h-px bg-[#C5A028]/20" />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                         <div className="text-center p-3 rounded-lg bg-white/5 border border-white/5">
                            <span className="block text-[10px] uppercase tracking-widest text-white/40 mb-1">GRZ I</span>
                            <span className="block text-white font-serif text-lg">0,27</span>
                         </div>
                         <div className="text-center p-3 rounded-lg bg-white/5 border border-white/5">
                            <span className="block text-[10px] uppercase tracking-widest text-white/40 mb-1">GRZ II</span>
                            <span className="block text-white font-serif text-lg">0,38</span>
                         </div>
                         <div className="text-center p-3 rounded-lg bg-[#C5A028]/10 border border-[#C5A028]/20">
                            <span className="block text-[10px] uppercase tracking-widest text-[#C5A028]/60 mb-1">GFZ</span>
                            <span className="block text-[#C5A028] font-serif text-lg">0,48</span>
                         </div>
                    </div>
                </div>

                {/* COL 2: Status & Legal (Span 4) */}
                <div className="md:col-span-4 p-8 md:p-12 flex flex-col justify-between gap-12 bg-white/[0.02]">
                    <div>
                        <div className="flex items-center gap-3 mb-6 text-[#C5A028]">
                            <FileCheck className="w-5 h-5" />
                            <span className="text-xs font-bold uppercase tracking-widest text-white/40">Baurecht</span>
                        </div>
                        <h3 className="text-2xl font-serif text-white mb-4">
                            §34 BauGB <br />
                            <span className="text-white/50">Genehmigungsfähig</span>
                        </h3>
                        <p className="text-sm text-white/60 leading-relaxed mb-8">
                            Rechtsgültiger Bauvorbescheid liegt vor (gültig bis 12/2026). 
                            Positives Votum des Arbeitskreises AK34 bestätigt die Planungssicherheit ohne B-Plan Verfahren.
                        </p>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 rounded-xl bg-green-500/5 border border-green-500/10">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-xs font-bold uppercase tracking-wider text-green-400">Status</span>
                        </div>
                        <span className="text-white text-sm font-medium">Secured</span>
                    </div>
                </div>

                {/* COL 3: Mix (Span 4) */}
                <div className="md:col-span-4 p-8 md:p-12 flex flex-col justify-between gap-12 bg-[#C5A028]/5 relative overflow-hidden">
                     {/* Background Pattern */}
                     <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                     
                     <div>
                        <div className="flex items-center gap-3 mb-6 text-[#C5A028]">
                            <Home className="w-5 h-5" />
                            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A028]/60">Wohnungsmix</span>
                        </div>
                        
                        <ul className="space-y-6 relative z-10">
                            <li className="flex items-center justify-between group">
                                <div className="flex items-center gap-4">
                                    <span className="text-3xl font-serif text-white group-hover:text-[#C5A028] transition-colors">9</span>
                                    <div className="flex flex-col">
                                        <span className="text-sm text-white font-medium">Doppelhaushälften</span>
                                        <span className="text-[10px] text-white/40 uppercase tracking-wider">~ 140 m² Wfl.</span>
                                    </div>
                                </div>
                            </li>
                            <li className="flex items-center justify-between group">
                                <div className="flex items-center gap-4">
                                    <span className="text-3xl font-serif text-white group-hover:text-[#C5A028] transition-colors">7</span>
                                    <div className="flex flex-col">
                                        <span className="text-sm text-white font-medium">Reihenhäuser</span>
                                        <span className="text-[10px] text-white/40 uppercase tracking-wider">~ 120 m² Wfl.</span>
                                    </div>
                                </div>
                            </li>
                            <li className="flex items-center justify-between group">
                                <div className="flex items-center gap-4">
                                    <span className="text-3xl font-serif text-white group-hover:text-[#C5A028] transition-colors">16</span>
                                    <div className="flex flex-col">
                                        <span className="text-sm text-white font-medium">Eigentumswohnungen</span>
                                        <span className="text-[10px] text-white/40 uppercase tracking-wider">85 - 110 m² Wfl.</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                     </div>

                     <div className="relative z-10">
                        <div className="w-full h-1.5 bg-white/10 rounded-full flex overflow-hidden">
                            <div className="h-full bg-[#C5A028] w-[28%]" />
                            <div className="h-full bg-white/40 w-[22%]" />
                            <div className="h-full bg-white/20 w-[50%]" />
                        </div>
                        <div className="flex justify-between mt-2 text-[9px] uppercase tracking-widest text-white/30">
                            <span>DHH</span>
                            <span>RH</span>
                            <span>ETW</span>
                        </div>
                     </div>
                </div>

            </div>
        </Stage>

        {/* IMAGE */}
        <Reveal delay={200}>
            <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden rounded-[32px] group border border-white/10 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10 opacity-90" />
                
                <img
                    src="https://whhy.de/wp-content/uploads/2026/01/2.png"
                    alt="Moderne Architektur – Quartier Niederdonk Living"
                    className="w-full h-full object-cover transition-transform duration-[20s] ease-linear group-hover:scale-105"
                    loading="lazy"
                />
                
                <div className="absolute bottom-0 left-0 p-8 md:p-16 z-20 max-w-3xl">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-[1px] w-12 bg-[#C5A028]"></div>
                        <p className="text-[11px] text-[#C5A028] uppercase tracking-[0.3em] font-bold">Die Vision</p>
                    </div>
                    <p className="text-white text-3xl md:text-5xl font-serif italic leading-[1.1] drop-shadow-md mb-10">
                        "Architektur, die nicht nur Raum schafft, sondern Atmosphäre atmet."
                    </p>
                    
                    <button className="flex items-center gap-4 px-8 py-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all group/btn">
                        <span className="text-xs text-white uppercase tracking-widest font-bold">Galerie öffnen</span>
                        <ArrowUpRight className="w-4 h-4 text-[#C5A028] group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </button>
                </div>
            </div>
        </Reveal>

      </div>
    </section>
  );
};

export default Overview;
