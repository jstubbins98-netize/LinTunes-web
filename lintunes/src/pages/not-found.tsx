import { AlertCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-[100dvh] w-full flex items-center justify-center bg-background border-4 border-foreground p-4">
      <div className="w-full max-w-md bg-white border-4 border-foreground shadow-[8px_8px_0_0_hsl(var(--foreground))] p-8 text-center space-y-6">
        <div className="flex justify-center">
          <AlertCircle className="h-16 w-16 text-primary" strokeWidth={1.5} />
        </div>
        <div className="space-y-2">
          <h1 className="text-4xl font-serif font-black uppercase">
            404 Not Found
          </h1>
          <p className="text-muted-foreground font-medium text-lg">
            This track seems to be missing from the library.
          </p>
        </div>
        <Button asChild size="lg" className="w-full">
          <Link href="/">
            <ArrowLeft className="mr-2 w-5 h-5" /> Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
