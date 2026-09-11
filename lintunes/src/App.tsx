import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import Home from '@/pages/Home';
import FAQ from '@/pages/FAQ';
import UserGuide from '@/pages/UserGuide';

const queryClient = new QueryClient();

function App() {
  const currentPage = window.location.pathname.toLowerCase();
  const isFaqPage = currentPage.endsWith('/faq') || currentPage.endsWith('/faq.html');
  const isGuidePage =
    currentPage.endsWith('/guide') || currentPage.endsWith('/guide.html');

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {isFaqPage ? <FAQ /> : isGuidePage ? <UserGuide /> : <Home />}
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
