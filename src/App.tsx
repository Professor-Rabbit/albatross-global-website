import React, { useEffect, useState } from 'react';
import { ArrowRight, Menu, X, ArrowUpRight, Globe2, Layers, CheckCircle2 } from 'lucide-react';
import logoAsset from '@/imports/WhatsApp_Image_2026-08-28_at_6.34.03_PM.jpeg';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredService, setHoveredService] = useState<number | null>(0);
  const [hoveredIndustry, setHoveredIndustry] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent/20">
      {/* 01 — NAVIGATION */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass-nav border-b border-border/50 py-4' : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="flex items-center gap-4 cursor-pointer group">
            <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg overflow-hidden bg-primary flex-shrink-0">
              <img src={logoAsset} alt="Albatross Global" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <span className="font-display font-bold text-xl md:text-2xl tracking-tight text-primary">Albatross Global</span>
          </div>

          <div className="hidden lg:flex items-center gap-12 text-sm font-medium tracking-wide">
            <a href="#services" className="text-foreground/80 hover:text-accent transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-accent hover:after:w-full after:transition-all after:duration-300">Services</a>
            <a href="#industries" className="text-foreground/80 hover:text-accent transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-accent hover:after:w-full after:transition-all after:duration-300">Industries</a>
            <a href="#about" className="text-foreground/80 hover:text-accent transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-accent hover:after:w-full after:transition-all after:duration-300">About</a>
            <a href="#insights" className="text-foreground/80 hover:text-accent transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-accent hover:after:w-full after:transition-all after:duration-300">Insights</a>
          </div>

          <div className="hidden lg:flex">
            <button className="group flex items-center gap-3 text-sm font-semibold tracking-wide bg-primary text-background px-7 py-3.5 rounded-full hover:bg-accent hover:text-white transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-accent/20">
              Book a Consultation 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <button 
            className="lg:hidden text-primary p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background pt-32 px-6 flex flex-col gap-8 lg:hidden h-screen overflow-y-auto border-t border-border">
           <a href="#services" className="font-display text-4xl text-primary font-medium" onClick={() => setMobileMenuOpen(false)}>Services</a>
           <a href="#industries" className="font-display text-4xl text-primary font-medium" onClick={() => setMobileMenuOpen(false)}>Industries</a>
           <a href="#about" className="font-display text-4xl text-primary font-medium" onClick={() => setMobileMenuOpen(false)}>About</a>
           <a href="#insights" className="font-display text-4xl text-primary font-medium" onClick={() => setMobileMenuOpen(false)}>Insights</a>
           <button className="flex items-center justify-center gap-2 mt-8 text-lg font-medium bg-primary text-background px-6 py-5 rounded-full w-full active:bg-accent transition-colors">
              Book a Consultation 
           </button>
        </div>
      )}

      {/* 02 — HERO */}
      <section className="relative pt-48 pb-32 md:pt-56 md:pb-40 px-6 md:px-12 max-w-[90rem] mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
          <div className="lg:col-span-7 max-w-3xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 border border-border/80 bg-secondary/30 rounded-full text-[11px] font-bold tracking-widest text-primary uppercase mb-10">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              Finance & Accounting Outsourcing
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] tracking-tight text-primary font-semibold mb-8">
              Your Finance Function.<br />
              <span className="text-primary/70">Handled With Precision.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl leading-relaxed mb-12">
              Albatross Global provides dependable finance and accounting support for businesses across the United States and Canada — helping teams operate with greater clarity, control and confidence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
              <button className="group flex items-center gap-3 text-base font-semibold bg-accent text-white px-8 py-4.5 rounded-full hover:bg-primary transition-colors w-full sm:w-auto justify-center shadow-lg shadow-accent/20">
                Book a Consultation 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group flex items-center gap-3 text-base font-semibold bg-transparent text-primary border-2 border-border/80 px-8 py-4.5 rounded-full hover:border-primary hover:bg-secondary/50 transition-all w-full sm:w-auto justify-center">
                Explore Services
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-[400px] lg:h-[600px] w-full hidden md:block">
             {/* Abstract Electric Blue Flight Path Graphic */}
             <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 600" fill="none">
               <path d="M50,600 C50,400 350,300 350,100" stroke="#4F8A8B" strokeWidth="2" className="animate-path" />
               <path d="M50,600 C50,400 350,300 350,100" stroke="#4F8A8B" strokeWidth="8" opacity="0.1" className="animate-path" />
               <circle cx="350" cy="100" r="4" fill="#4F8A8B" />
               <circle cx="350" cy="100" r="12" stroke="#4F8A8B" strokeWidth="1" opacity="0.4" className="animate-ping" />
               
               {/* Grid / Navigation lines */}
               <path d="M0,100 L400,100 M0,200 L400,200 M0,300 L400,300 M0,400 L400,400 M0,500 L400,500" stroke="#172A45" strokeWidth="1" opacity="0.05" />
               <path d="M100,0 L100,600 M200,0 L200,600 M300,0 L300,600" stroke="#172A45" strokeWidth="1" opacity="0.05" />
               
               {/* Secondary connections */}
               <path d="M150,500 C150,350 250,350 250,200" stroke="#172A45" strokeWidth="1" strokeDasharray="4 4" opacity="0.2" />
               <circle cx="250" cy="200" r="3" fill="#172A45" opacity="0.3" />
             </svg>
          </div>
        </div>
      </section>

      {/* 03 — BRAND STATEMENT */}
      <section className="py-32 md:py-48 px-6 md:px-12 bg-secondary/50 border-y border-border/50 relative overflow-hidden">
        <div className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <div className="lg:col-span-8">
            <h2 className="font-display text-4xl md:text-5xl lg:text-7xl leading-[1.1] font-semibold text-primary">
              Financial operations should create clarity — <span className="text-primary/40 italic font-normal">not complexity.</span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <div className="h-px w-12 bg-accent mb-8"></div>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed font-medium">
              We replace uncertainty with deep financial visibility, empowering you to make strategic decisions with absolute confidence.
            </p>
          </div>
        </div>
      </section>

      {/* 04 — SERVICES EDITORIAL */}
      <section id="services" className="py-32 md:py-48 px-6 md:px-12 max-w-[90rem] mx-auto">
        <div className="max-w-4xl mb-24">
          <h2 className="font-display text-5xl md:text-6xl font-semibold tracking-tight mb-8 text-primary">Everything your finance function needs.</h2>
          <p className="text-xl text-foreground/70 leading-relaxed max-w-2xl">
            From day-to-day bookkeeping to broader financial operations, Albatross Global provides flexible, precise support designed around your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          {/* Service List Navigation */}
          <div className="lg:col-span-5 flex flex-col border-t border-border">
            {[
              { num: '01', title: 'Bookkeeping', desc: 'Flawless daily transaction management.' },
              { num: '02', title: 'Accounting & Reporting', desc: 'Clear, accurate month-end visibility.' },
              { num: '03', title: 'Accounts Payable', desc: 'Efficient vendor payment processing.' },
              { num: '04', title: 'Accounts Receivable', desc: 'Streamlined collections workflows.' },
              { num: '05', title: 'Finance Operations', desc: 'Optimizing systems that power your team.' },
              { num: '06', title: 'Virtual Finance Support', desc: 'Dedicated offshore customized support.' }
            ].map((service, i) => (
              <div 
                key={service.num}
                className="group relative border-b border-border py-8 pr-8 cursor-pointer overflow-hidden"
                onMouseEnter={() => setHoveredService(i)}
              >
                <div className={`absolute inset-0 bg-secondary/40 transition-transform duration-500 origin-left ${hoveredService === i ? 'scale-x-100' : 'scale-x-0'}`}></div>
                <div className="relative z-10 flex items-start gap-8">
                  <span className={`text-sm font-bold tracking-widest transition-colors duration-300 ${hoveredService === i ? 'text-accent' : 'text-primary/40'}`}>
                    {service.num}
                  </span>
                  <div>
                    <h3 className={`font-display text-2xl md:text-3xl font-semibold mb-3 transition-colors duration-300 ${hoveredService === i ? 'text-primary' : 'text-primary/80'}`}>
                      {service.title}
                    </h3>
                    <p className={`text-base transition-colors duration-300 ${hoveredService === i ? 'text-foreground' : 'text-foreground/50'}`}>
                      {service.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Featured Service Visual Area */}
          <div className="lg:col-span-7">
            <div className="sticky top-40 bg-secondary rounded-3xl p-12 lg:p-16 h-[600px] flex flex-col justify-between border border-border/50 relative overflow-hidden group">
              {/* Decorative Accent Graphic depending on active service */}
              <div className="absolute top-0 right-0 p-12 opacity-10 transition-transform duration-1000 group-hover:scale-110">
                <Globe2 className="w-64 h-64 text-primary" strokeWidth={1} />
              </div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center mb-12 shadow-sm border border-border/50">
                  <ArrowUpRight className="w-6 h-6 text-accent" />
                </div>
                <div className="inline-block px-4 py-1.5 bg-background rounded-full text-xs font-bold text-accent tracking-widest uppercase mb-6 border border-border/50 shadow-sm">
                  Service 0{hoveredService !== null ? hoveredService + 1 : 1}
                </div>
                <h3 className="font-display text-4xl lg:text-5xl font-semibold text-primary mb-6 leading-tight">
                  {hoveredService === 0 && "Maintaining flawless financial records."}
                  {hoveredService === 1 && "Clear, accurate, and timely month-end reporting."}
                  {hoveredService === 2 && "Efficient vendor management and payment processing."}
                  {hoveredService === 3 && "Streamlined invoicing and collections workflows."}
                  {hoveredService === 4 && "Optimizing the systems that power your finance team."}
                  {hoveredService === 5 && "Dedicated offshore support customized for your firm."}
                </h3>
              </div>
              
              <button className="relative z-10 flex items-center gap-3 text-lg font-semibold text-primary hover:text-accent transition-colors w-fit group/btn">
                Learn more about this service
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 05 — BRAND MOMENT */}
      <section className="bg-primary text-background py-32 md:py-48 px-6 md:px-12 relative overflow-hidden">
        {/* Abstract Electric Blue Paths */}
        <div className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
           <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 500" fill="none">
             <path d="M -100 400 Q 300 500 500 250 T 1100 100" stroke="#4F8A8B" strokeWidth="2" className="animate-path" />
             <path d="M 0 450 Q 400 550 600 300 T 1200 150" stroke="#4F8A8B" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
           </svg>
        </div>

        <div className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative z-10 items-center">
          <div>
            <h2 className="font-display text-5xl md:text-7xl lg:text-[6rem] font-semibold leading-[1.05] tracking-tight mb-12">
              Built for the<br />
              <span className="text-accent italic font-normal">long haul.</span>
            </h2>
            <div className="h-px w-24 bg-accent/50 mb-12"></div>
            <p className="text-xl md:text-2xl text-background/70 leading-relaxed max-w-xl font-light">
              The Albatross represents immense distance, precise navigation and enduring stamina — the exact qualities reflected in our approach to supporting international businesses through their most critical growth phases.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
            {[
              { title: 'Precision', desc: 'Financial details deserve careful attention and zero compromises.' },
              { title: 'Partnership', desc: 'Working directly as a seamless extension of your internal team.' },
              { title: 'Transparency', desc: 'Clear communication and highly organized operational processes.' },
              { title: 'Global', desc: 'Supporting fast-growing businesses across international markets.' }
            ].map((feature, i) => (
              <div key={i} className="bg-background/5 border border-white/10 p-8 rounded-2xl hover:bg-background/10 transition-colors">
                <h4 className="font-display text-2xl font-semibold mb-4 text-white flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                  {feature.title}
                </h4>
                <p className="text-white/60 leading-relaxed font-light">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06 — HOW IT WORKS */}
      <section className="py-32 md:py-48 px-6 md:px-12 max-w-[90rem] mx-auto border-b border-border/50">
        <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
          <h2 className="font-display text-5xl md:text-6xl font-semibold tracking-tight text-primary max-w-2xl">A simpler way to manage finance.</h2>
          <button className="flex items-center gap-3 text-lg font-semibold text-accent hover:text-primary transition-colors">
            See our process in detail <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-px bg-border">
            <div className="absolute top-0 left-0 h-full w-1/3 bg-accent"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8">
            {[
              { step: '01', title: 'Understand', desc: 'We deeply learn about your business and financial requirements.' },
              { step: '02', title: 'Structure', desc: 'We establish clear workflows and automated processes.' },
              { step: '03', title: 'Operate', desc: 'Our team consistently manages the agreed operations.' },
              { step: '04', title: 'Improve', desc: 'We identify opportunities to improve efficiency and visibility.' },
            ].map((item, i) => (
              <div key={i} className="relative z-10 lg:pt-6 flex flex-col items-start">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold tracking-wider mb-8 ring-8 ring-background ${i === 0 ? 'bg-accent text-white' : 'bg-secondary text-primary'}`}>
                  {item.step}
                </div>
                <h3 className="font-display text-2xl font-semibold text-primary mb-4">{item.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 07 — INDUSTRIES */}
      <section id="industries" className="py-32 md:py-48 px-6 md:px-12 max-w-[90rem] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-5 relative">
            <div className="sticky top-40">
              <h2 className="font-display text-5xl md:text-6xl font-semibold tracking-tight text-primary mb-8">
                Finance support that adapts to you.
              </h2>
              <p className="text-xl text-foreground/70 leading-relaxed mb-12">
                We bring specialized operational knowledge across a range of complex, fast-moving industries.
              </p>
              
              {/* Abstract North America/Global hint */}
              <div className="p-8 bg-secondary/50 rounded-3xl border border-border/50">
                <Globe2 className="w-10 h-10 text-accent mb-6" />
                <h4 className="font-display text-2xl font-semibold text-primary mb-3">Built for North America.</h4>
                <p className="text-foreground/70">Providing seamless support for businesses operating across the United States and Canada.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col border-t border-border">
            {[
              'Professional Services',
              'Technology & SaaS',
              'E-commerce & Retail',
              'Healthcare & Medical',
              'Real Estate',
              'Manufacturing'
            ].map((industry, i) => (
              <div 
                key={industry}
                className="group flex flex-col md:flex-row md:items-center justify-between py-10 md:py-12 border-b border-border cursor-pointer overflow-hidden relative"
                onMouseEnter={() => setHoveredIndustry(i)}
                onMouseLeave={() => setHoveredIndustry(null)}
              >
                <div className="absolute inset-0 bg-accent/5 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 z-0"></div>
                <h3 className={`relative z-10 font-display text-3xl md:text-4xl font-semibold transition-all duration-500 ${
                  hoveredIndustry === i ? 'text-accent translate-x-6' : 'text-primary/70'
                }`}>
                  {industry}
                </h3>
                <div className={`relative z-10 mt-6 md:mt-0 transition-all duration-500 flex items-center gap-4 ${
                  hoveredIndustry === i ? 'opacity-100 translate-x-0 text-accent' : 'opacity-0 -translate-x-4 text-primary/0'
                }`}>
                  <span className="font-semibold tracking-wide text-sm uppercase">Explore</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 08 — FINAL CTA */}
      <section className="bg-secondary py-32 md:py-48 px-6 md:px-12 relative overflow-hidden">
        {/* Circle Accents */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

        <div className="max-w-4xl mx-auto text-center flex flex-col items-center relative z-10">
          <h2 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-semibold tracking-tight text-primary mb-8 leading-[1.05]">
            Let's build a stronger<br />finance function.
          </h2>
          <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mb-12 leading-relaxed">
            Tell us about your business and what you're looking to improve. We'll start with a conversation.
          </p>
          <button className="group flex items-center gap-4 text-lg font-semibold bg-accent text-white px-10 py-5 rounded-full hover:bg-primary transition-colors shadow-xl shadow-accent/20">
            Book a Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* 09 — FOOTER */}
      <footer className="bg-primary text-white pt-24 pb-12 px-6 md:px-12">
        <div className="max-w-[90rem] mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-24 mb-24">
          <div className="md:col-span-5 lg:col-span-4">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-10 w-10 rounded-lg overflow-hidden bg-background">
                <img src={logoAsset} alt="Albatross Global" className="h-full w-full object-cover grayscale opacity-90" />
              </div>
              <span className="font-display font-semibold text-xl tracking-tight">Albatross Global</span>
            </div>
            <p className="text-lg text-white/60 leading-relaxed max-w-sm font-light">
              Premium finance and accounting outsourcing for businesses that value accuracy, clarity and confidence.
            </p>
          </div>
          
          <div className="md:col-span-3 lg:col-span-2 lg:col-start-7 flex flex-col gap-6">
            <h4 className="text-white font-semibold tracking-wider text-sm uppercase mb-2">Navigation</h4>
            <a href="#services" className="text-white/60 hover:text-accent transition-colors font-light">Services</a>
            <a href="#industries" className="text-white/60 hover:text-accent transition-colors font-light">Industries</a>
            <a href="#about" className="text-white/60 hover:text-accent transition-colors font-light">About Us</a>
            <a href="#insights" className="text-white/60 hover:text-accent transition-colors font-light">Insights</a>
          </div>

          <div className="md:col-span-4 lg:col-span-3 flex flex-col gap-6">
            <h4 className="text-white font-semibold tracking-wider text-sm uppercase mb-2">Contact</h4>
            <a href="mailto:hello@albatrossglobal.com" className="text-white/60 hover:text-accent transition-colors font-light">hello@albatrossglobal.com</a>
            <p className="text-white/60 font-light mt-4">Supporting businesses across<br/>the United States & Canada</p>
          </div>
        </div>

        <div className="max-w-[90rem] mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/40 font-light">
          <p>© {new Date().getFullYear()} Albatross Global. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
