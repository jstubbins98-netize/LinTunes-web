import { useEffect } from "react";
import { ArrowLeft, Disc3, Github, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const questions = [
  {
    question: "Will this program come to Windows or macOS?",
    answer:
      "Yes. A port of the LinTunes code for Windows and macOS is currently in progress and will be ready soon.",
  },
  {
    question: "Is LinTunes free?",
    answer:
      "Yes. LinTunes is free and open source, with no subscription, advertising, telemetry, or paid tier.",
  },
  {
    question: "What audio formats does LinTunes support?",
    answer:
      "LinTunes supports music you own, including MP3, FLAC, and OGG collections.",
  },
  {
    question: "Can LinTunes rip my CDs?",
    answer:
      "Yes. LinTunes can rip CDs to formats including FLAC, MP3, and OGG and retrieve metadata for your library.",
  },
  {
    question: "Does LinTunes work with classic iPods?",
    answer:
      "Yes. LinTunes supports classic iPods through libgpod, including iPod classic, mini, nano, photo, and supported iPod touch models.",
  },
  {
    question: "Does LinTunes require an internet connection?",
    answer:
      "No. Local library management and playback work offline. Internet access is only needed for features such as Internet Radio or metadata retrieval.",
  },
];

export default function FAQ() {
  const homeUrl =
    window.location.protocol === "file:" ? "OPEN LinTunes Website.html" : "./";
  const guideUrl = window.location.protocol === "file:" ? "guide.html" : "guide";

  useEffect(() => {
    document.title = "LinTunes FAQ — Own It. Play It.";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        "Answers to common questions about LinTunes, Linux support, Windows and macOS ports, CD ripping, offline playback, and classic iPod sync.",
      );
  }, []);

  return (
    <div className="min-h-[100dvh] flex flex-col font-sans">
      <div
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
        }}
      />

      <header className="sticky top-0 z-40 w-full border-b-4 border-foreground bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <a href={homeUrl} className="flex items-center gap-2">
            <Disc3 className="w-8 h-8 text-primary" strokeWidth={2.5} />
            <span className="font-serif font-bold text-2xl tracking-tight">LinTunes</span>
          </a>
          <div className="flex items-center gap-4">
            <a href={guideUrl} className="hidden md:block font-bold hover:text-primary transition-colors">
              How to Use
            </a>
            <a
              href="https://github.com/jstubbins98-netize/LinTunes"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-2 font-bold hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
              Source
            </a>
            <Button asChild>
              <a href={homeUrl}>
                <ArrowLeft className="mr-2 w-4 h-4" />
                Home
              </a>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative py-20 md:py-28 border-b-4 border-foreground overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(var(--color-border)_1px,transparent_1px)] [background-size:24px_24px] opacity-50" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 border-2 border-foreground bg-white font-bold text-sm uppercase tracking-wider shadow-sm -rotate-2">
                <HelpCircle className="w-4 h-4 text-primary" />
                Questions, answered
              </div>
              <h1 className="mt-8 text-6xl md:text-8xl font-serif font-black uppercase leading-[.9] tracking-tighter">
                LinTunes <span className="text-primary">FAQ</span>
              </h1>
              <p className="mt-8 text-xl md:text-2xl text-muted-foreground font-medium">
                Everything you need to know about owning, playing, ripping, and syncing your music.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl space-y-5">
            {questions.map((item, index) => (
              <details
                key={item.question}
                className="group bg-white border-4 border-foreground shadow-[6px_6px_0_0_hsl(var(--primary))]"
                open={index === 0}
              >
                <summary className="cursor-pointer list-none flex items-center justify-between gap-6 p-6 md:p-8 font-serif font-bold text-xl md:text-2xl">
                  <span>{item.question}</span>
                  <span className="shrink-0 text-primary text-3xl leading-none group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <div className="border-t-4 border-foreground p-6 md:p-8 text-lg md:text-xl text-muted-foreground font-medium leading-relaxed">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-foreground text-background border-t-4 border-foreground py-10">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-2">
            <Disc3 className="w-6 h-6 text-primary" />
            <span className="font-serif font-bold text-xl">LinTunes</span>
          </div>
          <p className="text-zinc-400 font-mono text-sm text-center">
            Own your music. Play it your way.
          </p>
          <a href={homeUrl} className="font-bold text-primary hover:text-white transition-colors">
            Back to home
          </a>
        </div>
      </footer>
    </div>
  );
}