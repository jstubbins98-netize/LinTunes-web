import { useEffect } from "react";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  Disc3,
  Github,
  HardDrive,
  Headphones,
  ListMusic,
  Search,
  Smartphone,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const sections = [
  {
    id: "first-launch",
    title: "First Launch",
    icon: BookOpen,
    content: (
      <>
        <p>On first launch, LinTunes creates an empty library database at:</p>
        <Code>~/.local/share/lintunes/library.db</Code>
        <p>Nothing is imported automatically. Click <strong>+ Add Music</strong> to choose the files and folders you want in your library.</p>
      </>
    ),
  },
  {
    id: "add-music",
    title: "Add Your Music",
    icon: ListMusic,
    content: (
      <>
        <p>Use <strong>+ Add Music</strong>, the File menu, or drag files and folders directly onto the track list.</p>
        <ul>
          <li><strong>Add Files</strong> imports one or more selected audio files.</li>
          <li><strong>Add Folder</strong> scans that folder and all subfolders.</li>
          <li>LinTunes reads tags, duration, bitrate, and file size in the background.</li>
        </ul>
        <Notice>LinTunes stores references to your files. It does not move or copy the originals.</Notice>
      </>
    ),
  },
  {
    id: "browse-search",
    title: "Browse and Search",
    icon: Search,
    content: (
      <>
        <p>Click a column heading to sort by track number, title, artist, album, genre, year, duration, bitrate, or iPod status. Click it again to reverse the order.</p>
        <p>The search box filters your library in real time across title, artist, album, and genre.</p>
        <ul>
          <li>Click to select one track.</li>
          <li>Shift+click selects a range.</li>
          <li>Ctrl+click adds or removes individual tracks from the selection.</li>
        </ul>
      </>
    ),
  },
  {
    id: "playback",
    title: "Play Music and Radio",
    icon: Headphones,
    content: (
      <>
        <p>Double-click a track to play it, or right-click and choose <strong>Play</strong>. Use the toolbar to pause, skip, shuffle, repeat, seek, and change volume.</p>
        <p>Choose <strong>Internet Radio</strong> to play KQED, KEXP, SomaFM Groove Salad, or a custom HTTP/HTTPS stream supported by libVLC.</p>
      </>
    ),
  },
  {
    id: "playlists",
    title: "Create Playlists",
    icon: ListMusic,
    content: (
      <>
        <p>Choose <strong>Library → New Playlist</strong>, enter a name, and click Create. Your playlist appears in the sidebar.</p>
        <p>Click <strong>Music Library</strong> to return to your complete collection. Connected iPods can receive playlists and their tracks.</p>
      </>
    ),
  },
  {
    id: "ipod",
    title: "Connect and Sync an iPod",
    icon: Smartphone,
    content: (
      <>
        <ol>
          <li>Connect your iPod by USB and make sure Linux mounts it.</li>
          <li>Choose <strong>Device → Connect iPod</strong>.</li>
          <li>Select tracks, then choose <strong>Device → Sync to iPod</strong> or right-click and choose Add to iPod.</li>
          <li>Wait for the status bar to confirm completion before ejecting.</li>
        </ol>
        <p>Classic, mini, nano, and photo models are supported through libgpod. iPod touch models require <strong>ifuse</strong>.</p>
        <Warning>Restoring or resetting an iPod erases data. Back up important files and verify the displayed device before confirming.</Warning>
      </>
    ),
  },
  {
    id: "rip-burn",
    title: "Rip or Burn a CD",
    icon: Disc3,
    content: (
      <>
        <p><strong>Rip:</strong> insert an audio CD, choose <strong>Device → Rip CD</strong>, select an output folder and format, then click Rip. Completed tracks are imported automatically.</p>
        <p><strong>Burn:</strong> insert a blank CD-R, select tracks, and choose <strong>Device → Burn Disc</strong>. A standard audio CD holds about 74 minutes.</p>
        <p>Ripping supports FLAC, MP3, OGG Vorbis, AAC, and WAV. CD metadata is retrieved from GnuDB when internet access is available.</p>
      </>
    ),
  },
  {
    id: "superdrive",
    title: "Use an Apple SuperDrive",
    icon: HardDrive,
    content: (
      <>
        <p>The Apple USB SuperDrive must be unlocked each time it is connected. Install <strong>sg3-utils</strong>, identify the drive, then run:</p>
        <Code>sudo sg_raw /dev/sr0 EA 00 00 00 00 00 01</Code>
        <p>Once unlocked, LinTunes detects it like any other optical drive. Replace <strong>/dev/sr0</strong> if your system assigns a different path.</p>
      </>
    ),
  },
  {
    id: "troubleshooting",
    title: "Quick Troubleshooting",
    icon: Wrench,
    content: (
      <ul>
        <li><strong>No sound:</strong> verify your PulseAudio or PipeWire output and GStreamer plugins.</li>
        <li><strong>No iPod detected:</strong> make sure it is mounted and contains an iPod_Control or iTunes_Control folder.</li>
        <li><strong>Sync fails:</strong> check free space and write access, and do not disconnect during sync.</li>
        <li><strong>CD rip fails:</strong> confirm libcdio sees the drive and unlock an Apple SuperDrive first.</li>
        <li><strong>CD burn fails:</strong> install wodim and ffmpeg, use a blank CD-R, and verify cdrom-group access.</li>
      </ul>
    ),
  },
];

function Code({ children }: { children: string }) {
  return (
    <code className="block bg-foreground text-primary border-l-4 border-primary px-4 py-3 font-mono text-sm overflow-x-auto">
      {children}
    </code>
  );
}

function Notice({ children }: { children: string }) {
  return (
    <div className="flex gap-3 border-2 border-foreground bg-primary/15 p-4 font-bold">
      <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
      <p>{children}</p>
    </div>
  );
}

function Warning({ children }: { children: string }) {
  return (
    <div className="border-4 border-foreground bg-primary p-4 font-bold">
      Warning: {children}
    </div>
  );
}

export default function UserGuide() {
  const localFile = window.location.protocol === "file:";
  const homeUrl = localFile ? "OPEN LinTunes Website.html" : "./";
  const faqUrl = localFile ? "faq.html" : "faq";

  useEffect(() => {
    document.title = "How to Use LinTunes — User Guide";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        "Learn how to use LinTunes: import and play music, create playlists, sync an iPod, rip and burn CDs, use Internet Radio, and troubleshoot common issues.",
      );
  }, []);

  return (
    <div className="min-h-[100dvh] font-sans">
      <header className="sticky top-0 z-40 border-b-4 border-foreground bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <a href={homeUrl} className="flex items-center gap-2">
            <Disc3 className="w-8 h-8 text-primary" strokeWidth={2.5} />
            <span className="font-serif font-bold text-2xl">LinTunes</span>
          </a>
          <div className="flex items-center gap-4 font-bold">
            <a href={faqUrl} className="hidden sm:block hover:text-primary">FAQ</a>
            <a href="https://github.com/jstubbins98-netize/LinTunes" target="_blank" rel="noreferrer" className="hidden md:flex items-center gap-2 hover:text-primary">
              <Github className="w-5 h-5" /> Source
            </a>
            <Button asChild><a href={homeUrl}><ArrowLeft className="mr-2 w-4 h-4" />Home</a></Button>
          </div>
        </div>
      </header>

      <main>
        <section className="relative py-20 md:py-28 border-b-4 border-foreground overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(var(--color-border)_1px,transparent_1px)] [background-size:24px_24px] opacity-50" />
          <div className="container mx-auto px-4 relative text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 border-2 border-foreground bg-white font-bold uppercase tracking-wider -rotate-2">
              <BookOpen className="w-4 h-4 text-primary" /> User Manual
            </div>
            <h1 className="mt-8 text-5xl md:text-8xl font-serif font-black uppercase leading-[.9]">
              How to Use <span className="text-primary">LinTunes</span>
            </h1>
            <p className="mt-8 max-w-3xl mx-auto text-xl md:text-2xl text-muted-foreground font-medium">
              A practical guide to building your library, playing music, syncing iPods, and working with CDs.
            </p>
          </div>
        </section>

        <section className="border-b-4 border-foreground bg-foreground text-background">
          <nav aria-label="Guide sections" className="container mx-auto px-4 py-6 flex gap-3 overflow-x-auto">
            {sections.map(({ id, title }) => (
              <a key={id} href={`#${id}`} className="shrink-0 border-2 border-zinc-600 px-3 py-2 font-bold hover:border-primary hover:text-primary">
                {title}
              </a>
            ))}
          </nav>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-5xl space-y-10">
            {sections.map(({ id, title, icon: Icon }, index) => (
              <article id={id} key={id} className="scroll-mt-28 grid md:grid-cols-[90px_1fr] border-4 border-foreground bg-white shadow-[8px_8px_0_0_hsl(var(--primary))]">
                <div className="p-6 bg-primary border-b-4 md:border-b-0 md:border-r-4 border-foreground flex md:flex-col items-center gap-3">
                  <span className="font-mono font-black text-xl">{String(index + 1).padStart(2, "0")}</span>
                  <Icon className="w-8 h-8" />
                </div>
                <div className="p-6 md:p-8">
                  <h2 className="text-3xl md:text-4xl font-serif font-black uppercase mb-5">{title}</h2>
                  <div className="space-y-4 text-lg text-muted-foreground font-medium leading-relaxed [&_ul]:list-disc [&_ol]:list-decimal [&_ul]:pl-6 [&_ol]:pl-6 [&_li]:mb-2">
                    {sections[index].content}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-foreground text-background border-t-4 border-foreground py-10">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-5">
          <span className="font-serif font-bold text-xl">LinTunes User Guide</span>
          <p className="text-zinc-400 font-mono text-sm">Your library. Your hardware. Your music.</p>
          <a href={homeUrl} className="font-bold text-primary hover:text-white">Back to home</a>
        </div>
      </footer>
    </div>
  );
}