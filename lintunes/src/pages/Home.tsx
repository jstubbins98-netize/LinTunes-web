import { Button } from "@/components/ui/button";
import { 
  Disc3, 
  Smartphone, 
  HardDrive, 
  Radio, 
  Ban, 
  TerminalSquare, 
  Github, 
  ArrowRight,
  ShieldAlert,
  PlaySquare,
  Library,
  Flame,
  CheckCircle2,
  XCircle
} from "lucide-react";
import { useState } from "react";

function InstallBlock() {
  const [copied, setCopied] = useState(false);
  
  const code = `git clone https://github.com/jstubbins98-netize/LinTunes.git
cd LinTunes
chmod +x buildPod.sh
./buildPod.sh

# Launch it:
./build/lintunes`;

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative bg-black border-4 border-primary rounded-sm p-6 md:p-8 font-mono text-sm md:text-base leading-relaxed overflow-x-auto shadow-[8px_8px_0_0_hsl(var(--primary))] group">
      <button 
        onClick={handleCopy}
        className="absolute top-4 right-4 bg-primary text-primary-foreground font-bold px-3 py-1 text-sm border-2 border-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary/90"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
      <div className="text-green-500 mb-4"># The easiest way to install LinTunes is with the included build script.</div>
      <div className="text-green-500 mb-2"># It detects your distro (Ubuntu/Debian, Fedora/RHEL, Arch) and compiles it.</div>
      
      <div className="text-blue-400 inline">git clone</div> <span className="text-white">https://github.com/jstubbins98-netize/LinTunes.git</span><br/>
      <div className="text-blue-400 inline">cd</div> <span className="text-white">LinTunes</span><br/>
      <div className="text-blue-400 inline">chmod</div> <span className="text-white">+x buildPod.sh</span><br/>
      <div className="text-blue-400 inline">./buildPod.sh</div><br/><br/>
      
      <div className="text-green-500 mb-2"># Launch it:</div>
      <div className="text-white">./build/lintunes</div>
    </div>
  );
}

export default function Home() {
  const faqUrl = window.location.protocol === "file:" ? "faq.html" : "faq";
  const guideUrl = window.location.protocol === "file:" ? "guide.html" : "guide";
  const assetUrl = (path: string) =>
    path.startsWith("data:")
      ? path
      : `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

  return (
    <div className="min-h-[100dvh] flex flex-col font-sans overflow-hidden">
      {/* Noise overlay for tactile feel */}
      <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>

      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b-4 border-foreground bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Disc3 className="w-8 h-8 text-primary" strokeWidth={2.5} />
            <span className="font-serif font-bold text-2xl tracking-tight">LinTunes</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 font-bold">
            <a href="#features" className="hover:text-primary transition-colors">Features</a>
            <a href="#ipod" className="hover:text-primary transition-colors">iPod Sync</a>
            <a href="#install" className="hover:text-primary transition-colors">Install</a>
            <a href={guideUrl} className="hover:text-primary transition-colors">How to Use</a>
            <a href={faqUrl} className="hover:text-primary transition-colors">FAQ</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href="https://github.com/jstubbins98-netize/LinTunes" target="_blank" rel="noreferrer" className="hidden sm:flex items-center gap-2 font-bold hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
              <span>Source</span>
            </a>
            <Button asChild className="hidden sm:inline-flex">
              <a href="#install">Download Free</a>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-24 pb-32 md:pt-32 md:pb-48 border-b-4 border-foreground overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(var(--color-border)_1px,transparent_1px)] [background-size:24px_24px] opacity-50"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 border-2 border-foreground bg-white font-bold text-sm uppercase tracking-wider shadow-sm transform -rotate-2 animate-in fade-in zoom-in-95 duration-500">
                <Flame className="w-4 h-4 text-primary" />
                No subscriptions. No tracking.
              </div>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-black leading-[0.9] tracking-tighter uppercase animate-in fade-in slide-in-from-bottom-8 duration-700">
                Own It.<br />
                <span className="text-primary">Play It.</span>
              </h1>
              <p className="text-xl md:text-2xl font-medium max-w-2xl mx-auto text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150 fill-mode-both">
                You don't own a single song on your streaming app. LinTunes plays the music you actually own—MP3s, FLACs, ripped CDs—with zero subscription, zero ads, and zero risk of your library vanishing overnight.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 fill-mode-both">
                <Button size="lg" className="w-full sm:w-auto text-lg group" asChild>
                  <a href="#install">
                    Install for Linux
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg" asChild>
                  <a href="https://github.com/jstubbins98-netize/LinTunes" target="_blank" rel="noreferrer">
                    <Github className="mr-2 w-5 h-5" />
                    View Source
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* The Math / Comparison Section */}
        <section className="py-24 bg-foreground text-background border-b-4 border-foreground">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
                  $180/year to rent music.<br />
                  <span className="text-primary">$0/year to own it.</span>
                </h2>
                <p className="text-xl text-gray-400 font-medium">
                  Streaming adds up fast. Every track you "have" is one licensing dispute away from disappearing. LinTunes is free, open, and plays the files already sitting on your hard drive.
                </p>
              </div>
              
              <div className="bg-background text-foreground border-4 border-primary p-6 md:p-8 shadow-[12px_12px_0_0_hsl(var(--primary))] transform md:rotate-1">
                <div className="grid grid-cols-3 gap-4 font-bold border-b-2 border-border pb-4 mb-4 uppercase tracking-wider text-sm">
                  <div>Feature</div>
                  <div className="text-center text-muted-foreground">Streaming</div>
                  <div className="text-center text-primary">LinTunes</div>
                </div>
                
                <div className="space-y-4 text-lg">
                  <div className="grid grid-cols-3 gap-4 items-center py-2 border-b border-border/50 hover:bg-foreground/5 transition-colors px-2 -mx-2 rounded">
                    <div className="font-semibold">Yearly Cost</div>
                    <div className="text-center text-muted-foreground">~$180+</div>
                    <div className="text-center font-bold text-primary">$0</div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 items-center py-2 border-b border-border/50 hover:bg-foreground/5 transition-colors px-2 -mx-2 rounded">
                    <div className="font-semibold">Ownership</div>
                    <div className="text-center flex justify-center text-red-500"><XCircle className="w-6 h-6" /></div>
                    <div className="text-center flex justify-center text-green-600"><CheckCircle2 className="w-6 h-6" /></div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 items-center py-2 border-b border-border/50 hover:bg-foreground/5 transition-colors px-2 -mx-2 rounded">
                    <div className="font-semibold">Offline Ready</div>
                    <div className="text-center flex justify-center text-red-500"><XCircle className="w-6 h-6" /></div>
                    <div className="text-center flex justify-center text-green-600"><CheckCircle2 className="w-6 h-6" /></div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 items-center py-2 border-b border-border/50 hover:bg-foreground/5 transition-colors px-2 -mx-2 rounded">
                    <div className="font-semibold">Algorithm Free</div>
                    <div className="text-center flex justify-center text-red-500"><XCircle className="w-6 h-6" /></div>
                    <div className="text-center flex justify-center text-green-600"><CheckCircle2 className="w-6 h-6" /></div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 items-center py-2 hover:bg-foreground/5 transition-colors px-2 -mx-2 rounded">
                    <div className="font-semibold">Classic iPod Sync</div>
                    <div className="text-center flex justify-center text-red-500"><XCircle className="w-6 h-6" /></div>
                    <div className="text-center flex justify-center text-green-600"><CheckCircle2 className="w-6 h-6" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product UI Presentation */}
        <section id="features" className="py-24 border-b-4 border-foreground bg-[#F3F2EF]">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
              <h2 className="text-5xl font-serif font-black uppercase tracking-tight">The Library That Can't Be Cancelled</h2>
              <p className="text-xl font-medium text-muted-foreground">
                An iTunes-grade manager built natively for Linux. Bit-perfect playback, instant search across huge libraries, and your folder structures respected.
              </p>
            </div>
            
            <div className="relative mx-auto max-w-6xl">
              <div className="absolute -inset-4 bg-primary transform -rotate-1 rounded-sm border-4 border-foreground shadow-xl"></div>
              <div className="relative bg-black rounded-sm border-4 border-foreground overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.01] hover:-translate-y-1">
                {/* Simulated Window Chrome */}
                <div className="h-8 bg-zinc-900 border-b border-zinc-800 flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="mx-auto text-xs text-zinc-400 font-medium">LinTunes – Want You Gone</div>
                </div>
                <img 
                  src={assetUrl("images/main_screen.jpg")}
                  alt="LinTunes Main Library Interface showing music tracks and sidebar" 
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Grid */}
        <section className="py-24 border-b-4 border-foreground">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-white border-4 border-foreground p-8 shadow-sm hover:shadow-md transition-shadow">
                <Disc3 className="w-12 h-12 text-primary mb-6" strokeWidth={1.5} />
                <h3 className="text-2xl font-serif font-bold mb-4 uppercase">Bring Back Ripping</h3>
                <p className="text-lg text-muted-foreground font-medium">
                  Rip once. Own it forever. LinTunes rips your CDs into bit-perfect FLAC, MP3, or OGG files with automatic metadata—no scratches, no re-buying.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white border-4 border-foreground p-8 shadow-sm hover:shadow-md transition-shadow">
                <Smartphone className="w-12 h-12 text-primary mb-6" strokeWidth={1.5} />
                <h3 className="text-2xl font-serif font-bold mb-4 uppercase">The iPod Lives</h3>
                <p className="text-lg text-muted-foreground font-medium">
                  Your classic iPod isn't a museum piece. Plug it into Linux, open LinTunes, hit sync. No iTunes. No Apple ID. No cloud.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white border-4 border-foreground p-8 shadow-sm hover:shadow-md transition-shadow">
                <Ban className="w-12 h-12 text-primary mb-6" strokeWidth={1.5} />
                <h3 className="text-2xl font-serif font-bold mb-4 uppercase">No Algorithm</h3>
                <p className="text-lg text-muted-foreground font-medium">
                  Nobody is recommending anything to you here. No sign-up. No "for you" feed. Just your library, sorted your way, played on your terms.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Radio Section */}
        <section className="py-24 bg-primary border-b-4 border-foreground">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="absolute -inset-4 bg-background border-4 border-foreground transform rotate-2"></div>
                <img 
                  src={assetUrl("images/radio.jpg")}
                  alt="LinTunes Internet Radio Interface" 
                  className="relative z-10 w-full border-4 border-foreground shadow-lg object-cover transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
              <div className="order-1 lg:order-2 space-y-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-background border-4 border-foreground rounded-full mb-2">
                  <Radio className="w-8 h-8 text-foreground" />
                </div>
                <h2 className="text-4xl md:text-5xl font-serif font-black uppercase text-foreground leading-tight">
                  Global Radio.<br />Zero Middlemen.
                </h2>
                <p className="text-xl font-medium text-foreground/90">
                  When you don't know what to play, tune in directly. Stream HTTP, Icecast, or Shoutcast URLs directly through libVLC integration. We included the classics: KEXP, SomaFM, and KQED.
                </p>
                <ul className="space-y-4 pt-4 font-bold text-lg">
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-6 h-6" /> Direct stream URL support</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-6 h-6" /> Zero audio ads injected</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-6 h-6" /> Integrated volume control</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* iPod Section Details */}
        <section id="ipod" className="py-24 border-b-4 border-foreground bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8 mb-16">
              <h2 className="text-5xl font-serif font-black uppercase tracking-tight">Sync It Like It's 2006</h2>
              <p className="text-xl font-medium text-muted-foreground">
                LinTunes supports all classic iPods via libgpod. Just plug in via USB and let your Linux box handle the rest.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white border-4 border-foreground p-8">
                <h4 className="font-serif font-bold text-xl mb-4 border-b-2 border-border pb-2">Supported Devices</h4>
                <ul className="space-y-3 font-medium text-muted-foreground">
                  <li className="flex items-start gap-2"><Smartphone className="w-5 h-5 shrink-0 text-primary" /> iPod classic (all generations)</li>
                  <li className="flex items-start gap-2"><Smartphone className="w-5 h-5 shrink-0 text-primary" /> iPod mini</li>
                  <li className="flex items-start gap-2"><Smartphone className="w-5 h-5 shrink-0 text-primary" /> iPod nano (1st – 6th generation)</li>
                  <li className="flex items-start gap-2"><Smartphone className="w-5 h-5 shrink-0 text-primary" /> iPod photo</li>
                  <li className="flex items-start gap-2"><Smartphone className="w-5 h-5 shrink-0 text-primary" /> iPod touch (requires ifuse)</li>
                </ul>
              </div>
              <div className="bg-white border-4 border-foreground p-8">
                <h4 className="font-serif font-bold text-xl mb-4 border-b-2 border-border pb-2">Hardware Integration</h4>
                <ul className="space-y-3 font-medium text-muted-foreground">
                  <li className="flex items-start gap-2"><HardDrive className="w-5 h-5 shrink-0 text-primary" /> Erase & Reset database natively</li>
                  <li className="flex items-start gap-2"><ShieldAlert className="w-5 h-5 shrink-0 text-primary" /> Firmware restore for iPod Touch</li>
                  <li className="flex items-start gap-2"><Disc3 className="w-5 h-5 shrink-0 text-primary" /> Apple SuperDrive automatic unlock</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Installation / CLI */}
        <section id="install" className="py-24 bg-foreground text-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex items-center gap-4 mb-8">
              <TerminalSquare className="w-10 h-10 text-primary" />
              <h2 className="text-4xl font-serif font-black uppercase">Get LinTunes</h2>
            </div>
            
            <InstallBlock />
            
            <div className="mt-12 pt-12 border-t border-zinc-800 grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-serif font-bold text-xl mb-2 text-white">Dependencies</h4>
                <p className="text-zinc-400 font-medium">Built on GTK 3, GStreamer 1.0, TagLib, and SQLite 3. Relies on standard Linux tools like lame, flac, ffmpeg, and wodim.</p>
              </div>
              <div>
                <h4 className="font-serif font-bold text-xl mb-2 text-white">Lightweight</h4>
                <p className="text-zinc-400 font-medium">No Electron. No web views. Native C/C++ performance that sips RAM and handles massive libraries effortlessly.</p>
              </div>
              <div>
                <h4 className="font-serif font-bold text-xl mb-2 text-white">Privacy First</h4>
                <p className="text-zinc-400 font-medium">Library database lives at <code className="text-primary bg-zinc-900 px-1 py-0.5 rounded">~/.local/share/lintunes/</code>. No telemetry, no cloud sync, no tracking.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background border-t-4 border-foreground py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Disc3 className="w-6 h-6 text-foreground" />
            <span className="font-serif font-bold text-xl tracking-tight">LinTunes</span>
          </div>
          <div className="text-muted-foreground font-medium font-mono text-sm text-center md:text-left">
            "The music manager for people who are done renting their own record collection."
          </div>
          <div className="flex items-center gap-6 font-bold">
            <a href={guideUrl} className="hover:text-primary transition-colors">How to Use</a>
            <a href={faqUrl} className="hover:text-primary transition-colors">FAQ</a>
            <a href="https://github.com/jstubbins98-netize/LinTunes" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">GitHub</a>
            <a href="#install" className="hover:text-primary transition-colors">Download</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
