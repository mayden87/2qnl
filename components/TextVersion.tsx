
import React, { useState } from 'react';
import { SectionTag, Reveal, Stage } from './ui/Shared';
import { Copy, Check, MapPin, ShieldCheck, Scale, HardHat, Banknote, ScrollText, ArrowRight, ArrowUpRight } from 'lucide-react';

const TextVersion: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const fullRawText = `1. PROJEKTÜBERBLICK
Auf einem ca. 7.398 m² großen Grundstück (6.317 m² Nettobauland) in einer der exklusivsten Lagen von Meerbusch-Büderich entsteht ein hochwertiges Wohnquartier. Das Konzept sieht eine Mischung aus 16 Einfamilienhäusern und 2 Mehrfamilienhäusern vor, eingebettet in ein nahezu autofreies, grünes Umfeld.

Wohneinheiten: 32 (9 DHH, 7 RH, 16 Wohnungen)
Bruttogeschossfläche (BGF): 4.069 m²
Netto-Wohnfläche: 3.250 m²
Planwerte: GRZ I: 0,27 | GRZ II: 0,38 | GFZ: 0,48

2. PLANUNGSSTAND & GENEHMIGUNGSSICHERHEIT
Bauvorbescheid: Ein rechtsgültiger Bauvorbescheid liegt vor (verlängert bis Dezember 2026).
Konzept-Bestätigung: Die aktuelle Entwurfsplanung wurde am 21.07.2025 dem Arbeitskreis 34 (AK 34) der Stadt vorgestellt.
Votum: Die Planung erhielt ein positives Votum. Es wurde bestätigt, dass auf dieser Basis direkt der Bauantrag gestellt werden kann (keine erneute Voranfrage nötig).
Baurecht: Realisierung nach § 34 BauGB.

3. STÄDTEBAULICHES & MOBILITÄTSKONZEPT
Infrastruktur: 6 m breiter interner Wohnweg für Anlieferung und Notdienste. Die Feuerwehr nutzt das Drehleiter-Konzept von außen.
Stellplatz-Optimierung: Durch die Lagegunst (ÖPNV < 350 m) und zusätzliche Fahrradstellplätze wurde der Bedarf von 56 auf 42 Stellplätze reduziert.
Tiefgarage: 40 Plätze in einer zentralen Mittelgarage, 2 Ablösungen sowie 6 oberirdische Besucherplätze.
Ökologie: Extensive Dachbegrünung aller Staffelgeschosse zur Verbesserung des Mikroklimas und der Regenwasserrückhaltung.

4. BEBAUUNG & TECHNIK
Einfamilienhäuser: 9 DHH (ca. 140 m², Maße 5,5 m x 11,5 m) und 7 RH (ca. 120 m², Maße 5,5 m x 10 m).
Baugrund: 12 Sondierungspunkte wurden bereits zur Bewertung von Tragfähigkeit und Grundwasser.
Spezialtiefbau: Die Kosten für die Wasserhaltung sowie die notwendige Unterfangung der Nachbarbebauung sind in der Kalkulation voll berücksichtigt.

5. INVESTITIONSMODELL (KALKULATION)
Kalkulationsbasis: 2.800 € Baukosten/m² Wohnfläche | Verkaufserlös 6.500 €/m²

Anlagekosten (Investition)
Grundstückskaufpreis (ca. 1.044 €/m² BGF): 4.250.000 €
Erwerbsnebenkosten (ca. 10%): 425.000 €
Baukosten (KG 300+400): 9.100.000 €
Spezialtiefbau (Wasserhaltung/Unterfangung): 450.000 €
Baunebenkosten & Außenanlagen (ca. 18%): 1.719.000 €
Finanzierungskosten (Zinsen/Gebühren): ca. 600.000 €
GESAMTINVESTITIONSKOSTEN (GKI): ca. 16.544.000 €

Ertragserwartung (Verkauf)
Verkaufserlöse Wohnflächen (3.250 m² × 6.500 €/m²): 21.125.000 €
Verkauf Stellplätze (TG): 1.200.000 €
GESAMTERLÖS (EXIT): ca. 22.325.000 €

Ergebnisrechnung
PROJEKTGEWINN (EBT): ca. 5.781.000 €
PROJEKTRENDITE: ca. 34,9 %

6. KONDITIONEN
Kaufpreis: 4.250.000 €
Courtage: 3% des Kaufpreises zzgl. gesetzl. MwSt.`;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullRawText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="textversion" className="relative py-24 md:py-40 bg-[#050505]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header - Editorial Style */}
        <Reveal>
          <div className="mb-16 md:mb-24 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
            <div>
              <SectionTag>Memorandum</SectionTag>
              <h2 className="text-4xl md:text-7xl font-serif text-white leading-[0.95] mt-8 text-left">
                Executive <br />
                <span className="text-[#C5A028] italic">Summary</span>
              </h2>
            </div>
            <div className="max-w-xl lg:pl-10 lg:border-l border-white/10 text-left">
              <p className="text-white/55 text-lg leading-relaxed mb-8">
                Die Essenz des Projekts. Komprimiert für Ihre Unterlagen und direkte Weiterverarbeitung. 
                Alle relevanten Kennzahlen auf einer Intelligence-Fläche zusammengefasst.
              </p>
              <button 
                onClick={handleCopy}
                className={`flex items-center gap-3 px-8 py-4 rounded-full border transition-all duration-500 group ${
                  copied 
                    ? 'bg-green-500/10 border-green-500/50 text-green-400' 
                    : 'bg-white/5 border-white/10 hover:bg-[#C5A028] hover:text-black hover:border-[#C5A028]'
                }`}
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4 group-hover:scale-110 transition-transform" />}
                <span className="text-[10px] uppercase tracking-widest font-bold">
                  {copied ? 'In Zwischenablage kopiert' : 'Memorandum-Text kopieren'}
                </span>
              </button>
            </div>
          </div>
        </Reveal>

        {/* IMAGE COLLAGE GRID - 4 Images, different sizes, aligned block */}
        <Reveal delay={200} className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[500px] md:h-[650px]">
            {/* Main Image - Large (Spans 2 columns, 2 rows) */}
            <div className="col-span-2 row-span-2 relative group overflow-hidden rounded-[24px] border border-white/10 shadow-2xl">
              <img 
                src="https://whhy.de/wp-content/uploads/2026/01/1.png" 
                alt="Architecture Detail 1" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-left">
                <span className="text-[9px] uppercase tracking-widest text-[#C5A028] font-bold">Perspektive A</span>
              </div>
            </div>

            {/* Top Right - Wide (Spans 2 columns, 1 row) */}
            <div className="col-span-2 row-span-1 relative group overflow-hidden rounded-[24px] border border-white/10 shadow-xl">
              <img 
                src="https://whhy.de/wp-content/uploads/2026/01/2.png" 
                alt="Architecture Detail 2" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-left">
                <span className="text-[9px] uppercase tracking-widest text-white/50 font-bold">Fassade</span>
              </div>
            </div>

            {/* Bottom Mid-Right - Square (1x1) */}
            <div className="col-span-1 row-span-1 relative group overflow-hidden rounded-[24px] border border-white/10 shadow-xl">
              <img 
                src="https://whhy.de/wp-content/uploads/2026/01/4.png" 
                alt="Interior Detail" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-left">
                <span className="text-[9px] uppercase tracking-widest text-white/50 font-bold">Licht</span>
              </div>
            </div>

            {/* Bottom Far-Right - Square (1x1) */}
            <div className="col-span-1 row-span-1 relative group overflow-hidden rounded-[24px] border border-white/10 shadow-xl">
              <img 
                src="https://whhy.de/wp-content/uploads/2026/01/1.png" 
                alt="Concept Detail" 
                className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-left">
                <span className="text-[9px] uppercase tracking-widest text-white/50 font-bold">Konzept</span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Intelligence Grid Stage */}
        <Stage>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y divide-white/10 md:divide-y-0 md:grid-rows-2">
            
            {/* Card 1: Projektüberblick */}
            <div className="p-8 md:p-12 group hover:bg-white/[0.02] transition-colors duration-500 flex flex-col text-left">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[#C5A028]">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">01. Überblick</span>
              </div>
              <h3 className="text-xl font-serif text-white mb-6">Lage & Substanz</h3>
              <div className="space-y-4 text-sm text-white/50 leading-relaxed font-light">
                <p><span className="text-white">Standort:</span> Meerbusch-Büderich</p>
                <p><span className="text-white">Fläche:</span> 7.398 m² (Gesamt)</p>
                <p><span className="text-white">Einheiten:</span> 32 (9 DHH, 7 RH, 16 ETW)</p>
                <div className="pt-4 border-t border-white/5 text-xs font-mono">
                   GRZ I: 0,27 | GFZ: 0,48
                </div>
              </div>
            </div>

            {/* Card 2: Genehmigung */}
            <div className="p-8 md:p-12 group hover:bg-white/[0.02] transition-colors duration-500 md:border-x border-white/10 text-left">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[#C5A028]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">02. Sicherheit</span>
              </div>
              <h3 className="text-xl font-serif text-white mb-6">Recht & Status</h3>
              <div className="space-y-4 text-sm text-white/50 leading-relaxed font-light">
                <div className="p-3 rounded-lg bg-[#C5A028]/10 border border-[#C5A028]/20">
                  <p className="text-[#C5A028] font-bold text-xs uppercase mb-1">Bauvorbescheid</p>
                  <p className="text-white">Positiv bis 12/2026</p>
                </div>
                <p><span className="text-white">Baurecht:</span> § 34 BauGB (Bestätigt)</p>
                <p><span className="text-white">AK 34 Votum:</span> Positiv (21.07.2025)</p>
              </div>
            </div>

            {/* Card 3: Städtebau */}
            <div className="p-8 md:p-12 group hover:bg-white/[0.02] transition-colors duration-500 text-left">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[#C5A028]">
                  <Scale className="w-4 h-4" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">03. Städtebau</span>
              </div>
              <h3 className="text-xl font-serif text-white mb-6">Konzept & Mobilität</h3>
              <div className="space-y-4 text-sm text-white/50 leading-relaxed font-light">
                <p><span className="text-white">Zufahrt:</span> Interner Wohnweg (6m)</p>
                <p><span className="text-white">TG:</span> 40 Plätze (Zentralgarage)</p>
                <p><span className="text-white">Ökologie:</span> Extensive Dachbegrünung</p>
              </div>
            </div>

            {/* Card 4: Technik */}
            <div className="p-8 md:p-12 group hover:bg-white/[0.02] transition-colors duration-500 border-t border-white/10 text-left">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[#C5A028]">
                  <HardHat className="w-4 h-4" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">04. Technik</span>
              </div>
              <h3 className="text-xl font-serif text-white mb-6">Bau & Boden</h3>
              <div className="space-y-4 text-sm text-white/50 leading-relaxed font-light">
                <p><span className="text-white">Boden:</span> 12 Sondierungspunkte (OK)</p>
                <p><span className="text-white">Tiefbau:</span> Inkl. Wasserhaltung</p>
                <p><span className="text-white">Nachbar:</span> Unterfangung kalkuliert</p>
              </div>
            </div>

            {/* Card 5: Finance (CORE) */}
            <div className="p-8 md:p-12 bg-[#C5A028]/10 group hover:bg-[#C5A028]/20 transition-all duration-700 border-t md:border-x border-white/10 text-left">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-full border border-[#C5A028]/30 bg-[#C5A028]/20 flex items-center justify-center text-[#C5A028]">
                  <Banknote className="w-4 h-4" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A028] font-bold">06. Investment</span>
              </div>
              <h3 className="text-xl font-serif text-white mb-6">Performance Matrix</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-end border-b border-white/10 pb-2">
                   <span className="text-xs text-white/50 uppercase tracking-widest">Gesamtinvest (GKI)</span>
                   <span className="text-white font-serif text-lg">16,54 Mio. €</span>
                </div>
                <div className="flex justify-between items-end border-b border-white/10 pb-2">
                   <span className="text-xs text-white/50 uppercase tracking-widest">Erlös (Exit)</span>
                   <span className="text-white font-serif text-lg">22,32 Mio. €</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                   <span className="text-[#C5A028] text-[10px] font-bold uppercase tracking-widest">Rendite</span>
                   <span className="text-4xl font-serif text-white tracking-tighter">34,9%</span>
                </div>
              </div>
            </div>

            {/* Card 6: Konditionen */}
            <div className="p-8 md:p-12 group hover:bg-white/[0.02] transition-colors duration-500 border-t border-white/10 text-left">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[#C5A028]">
                  <ScrollText className="w-4 h-4" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">09. Konditionen</span>
              </div>
              <h3 className="text-xl font-serif text-white mb-6">Transaktion</h3>
              <div className="space-y-4 text-sm text-white/50 leading-relaxed font-light">
                <p><span className="text-white">Kaufpreis Asset:</span> 4,25 Mio. €</p>
                <p><span className="text-white">Courtage:</span> 3% (netto)</p>
                <p className="text-[10px] italic mt-4 opacity-40">Irrtümer und Zwischenverkauf vorbehalten.</p>
              </div>
            </div>

          </div>
        </Stage>

        {/* Footer Signature */}
        <Reveal delay={400}>
          <div className="mt-16 flex flex-col md:flex-row justify-between items-center gap-8 opacity-30 group-hover:opacity-60 transition-opacity">
            <div className="flex items-center gap-4">
              <div className="w-px h-12 bg-white/20" />
              <p className="text-[10px] uppercase tracking-[0.4em] text-white font-bold text-left">
                Quartier Niederdonk Living <br />
                Investment Memorandum 2026
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[9px] uppercase tracking-widest text-white/60">Vertrauliches Dokument Nr.</span>
              <span className="text-xs font-mono text-white">QNL-2026-081-SEC</span>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default TextVersion;
