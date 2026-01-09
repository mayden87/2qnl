
import React from 'react';
import { SectionTag, Stage, Reveal, SectionBackground } from './ui/Shared';
import { FileText, Lock, ArrowRight, ShieldCheck, Download, Mail, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative py-24 md:py-40 bg-[#050505] overflow-hidden">
      {/* ATMOSPHERIC BACKGROUND - The Final "Grand" Image */}
      <SectionBackground 
         src="https://whhy.de/wp-content/uploads/2026/01/4.png" 
         opacity={0.3} 
         color="from-[#050505] via-transparent to-[#050505]" 
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header - Editorial Style */}
        <Reveal>
          <div className="mb-16 md:mb-24">
            <SectionTag>09. Angebotskonditionen</SectionTag>
            <div className="flex flex-col md:flex-row gap-12 mt-8 md:items-end">
              <h2 className="text-4xl md:text-7xl font-serif text-white leading-[0.95] max-w-3xl">
                Exklusiv <br />
                <span className="text-[#C5A028] italic">Mandat</span>
              </h2>
              <p className="text-white/55 text-lg leading-relaxed max-w-xl md:pl-10 md:border-l border-white/10">
                Sichern Sie sich dieses Premium-Asset in Bestlage. 
                Die Transaktion erfolgt im Rahmen eines strukturierten Verkaufsprozesses. 
                Vertraulichkeit und Diskretion sind Kernbestandteile dieses Angebots.
              </p>
            </div>
          </div>
        </Reveal>

        {/* TRANSACTION STAGE */}
        <Stage className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            
            {/* Column 1: The Primary Offer */}
            <div className="lg:col-span-7 p-8 md:p-16 flex flex-col justify-between bg-white/[0.01]">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A028]/10 border border-[#C5A028]/20 mb-10">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A028] animate-pulse" />
                  <span className="text-[10px] uppercase tracking-widest text-[#C5A028] font-bold">Asset Deal</span>
                </div>
                
                <p className="text-white/40 text-[11px] uppercase tracking-[0.25em] font-bold mb-4">Kaufpreis Grundstück</p>
                <div className="flex items-baseline gap-4 mb-12">
                  <h3 className="text-6xl md:text-9xl font-serif text-white tracking-tighter leading-none">
                    4.250.000
                  </h3>
                  <span className="text-3xl md:text-5xl text-[#C5A028] font-serif">€</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t border-white/5">
                  <div className="space-y-4">
                    <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Maklercourtage</p>
                    <div className="flex items-baseline gap-2">
                       <span className="text-3xl font-serif text-white">3,0</span>
                       <span className="text-[#C5A028] font-serif">%</span>
                    </div>
                    <p className="text-[10px] text-white/40 italic">zzgl. gesetzl. MwSt. des beurkundeten Kaufpreises</p>
                  </div>
                  <div className="space-y-4">
                    <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Verfügbarkeit</p>
                    <div className="flex items-center gap-3">
                       <ShieldCheck className="w-6 h-6 text-green-500/50" />
                       <span className="text-xl font-serif text-white">Sofort</span>
                    </div>
                    <p className="text-[10px] text-white/40 italic">Nach Prüfung der Bonität und Vertraulichkeit</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2: Data Room & Contact */}
            <div className="lg:col-span-5 flex flex-col divide-y divide-white/10">
              
              {/* Top: Secure Data Room Portal */}
              <div className="p-8 md:p-16 bg-black/40 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none transition-transform group-hover:scale-110 duration-700">
                  <Lock className="w-32 h-32 text-white" />
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[#C5A028]">
                      <Lock className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] uppercase tracking-[0.25em] text-white/40 font-bold">Sicherer Datenraum</span>
                  </div>

                  <p className="text-white font-serif text-xl mb-6">Detaillierte Projektdaten</p>
                  <p className="text-sm text-white/50 leading-relaxed mb-10">
                    Für qualifizierte Interessenten halten wir alle Unterlagen (Bauvorbescheid, DWG-Pläne, Baugrundgutachten) digital bereit.
                  </p>

                  <div className="space-y-3 mb-10">
                    {['Bauvorbescheid_2026.pdf', 'AK34_Protokoll.pdf'].map((doc, i) => (
                      <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 group/doc cursor-pointer hover:border-[#C5A028]/30 transition-all">
                        <div className="flex items-center gap-3">
                          <FileText className="w-4 h-4 text-[#C5A028]/60" />
                          <span className="text-[11px] text-white/60 font-mono group-hover/doc:text-white transition-colors">{doc}</span>
                        </div>
                        <Download className="w-3.5 h-3.5 text-white/20 group-hover/doc:text-[#C5A028] transition-colors" />
                      </div>
                    ))}
                  </div>

                  <button className="w-full py-5 bg-[#C5A028] text-black rounded-full font-bold uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 hover:bg-white transition-all shadow-[0_10px_40px_-10px_rgba(197,160,40,0.5)]">
                    Zugang anfordern <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Bottom: Direct Concierge */}
              <div className="p-8 md:p-16 bg-[#C5A028]/[0.02] flex-1 flex flex-col justify-center">
                <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-8">Kontakt & Beratung</p>
                <div className="space-y-8">
                  <a href="mailto:invest@qnl-meerbusch.de" className="flex items-center gap-6 group">
                    <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[#C5A028] group-hover:bg-[#C5A028] group-hover:text-black transition-all">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-white/40 text-[10px] uppercase tracking-widest mb-1">E-Mail</p>
                      <p className="text-white font-serif text-lg group-hover:text-[#C5A028] transition-colors">invest@qnl-meerbusch.de</p>
                    </div>
                  </a>
                  <a href="tel:+491234567890" className="flex items-center gap-6 group">
                    <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[#C5A028] group-hover:bg-[#C5A028] group-hover:text-black transition-all">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-white/40 text-[10px] uppercase tracking-widest mb-1">Direktkontakt</p>
                      <p className="text-white font-serif text-lg group-hover:text-[#C5A028] transition-colors">+49 (0) 123 4567 890</p>
                    </div>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </Stage>

        <Reveal delay={400}>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 opacity-40 hover:opacity-100 transition-opacity">
            <p className="text-[10px] font-mono text-white leading-relaxed max-w-2xl uppercase tracking-widest">
              Alle Angaben beruhen auf Informationen der Verkäuferseite. Irrtümer und Zwischenverkauf vorbehalten. 
              Die Kalkulationen stellen Prognosen dar und sind kein Garant für künftige Ergebnisse.
            </p>
            <div className="flex items-center gap-4 whitespace-nowrap">
              <span className="text-[9px] uppercase tracking-widest text-white/60">Asset ID:</span>
              <span className="text-xs font-mono text-white">QNL-MB-81-2026</span>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default Contact;
