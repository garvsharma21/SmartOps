import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-5xl rounded-2xl border-2 border-[hsl(217,91%,60%)] bg-background shadow-lg overflow-hidden">
        {/* Header */}
        <div className="px-8 pt-6 pb-0">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[hsl(217,91%,60%)] flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20V10" /><path d="M18 20V4" /><path d="M6 20v-4" />
              </svg>
            </div>
            <span className="text-lg font-bold text-foreground">SmartOps</span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center gap-8 px-8 py-12 md:py-16">
          {/* Left */}
          <div className="flex-1 space-y-4">
            <h1 className="text-7xl md:text-8xl font-extrabold text-[hsl(217,91%,60%)]">404</h1>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Page not found</h2>
            <p className="text-muted-foreground max-w-md">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              <Button asChild className="bg-[hsl(217,91%,60%)] hover:bg-[hsl(217,91%,50%)] text-white">
                <Link to="/">Go to Dashboard</Link>
              </Button>
              <Button asChild variant="outline" className="border-[hsl(217,91%,60%)] text-[hsl(217,91%,60%)] hover:bg-[hsl(217,91%,60%)]/10">
                <a href="mailto:support@smartops.com">Contact Support</a>
              </Button>
            </div>
            <div className="pt-2">
              <Link to="/" className="text-sm text-[hsl(217,91%,60%)] hover:underline">
                ← Return to homepage
              </Link>
            </div>
          </div>

          {/* Right - Illustration */}
          <div className="flex-1 flex justify-center">
            <svg width="320" height="280" viewBox="0 0 320 280" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Desk */}
              <rect x="80" y="200" width="180" height="8" rx="4" fill="hsl(217,91%,60%)" opacity="0.2" />
              <rect x="110" y="208" width="8" height="50" rx="2" fill="hsl(217,91%,60%)" opacity="0.15" />
              <rect x="222" y="208" width="8" height="50" rx="2" fill="hsl(217,91%,60%)" opacity="0.15" />
              
              {/* Laptop */}
              <rect x="115" y="160" width="110" height="40" rx="6" fill="hsl(220,20%,90%)" stroke="hsl(217,91%,60%)" strokeWidth="2" />
              <rect x="125" y="168" width="90" height="24" rx="2" fill="hsl(217,91%,60%)" opacity="0.15" />
              <rect x="100" y="200" width="140" height="4" rx="2" fill="hsl(220,20%,85%)" />
              
              {/* Screen content - error */}
              <text x="155" y="184" textAnchor="middle" fontSize="12" fontWeight="bold" fill="hsl(217,91%,60%)" opacity="0.6">!</text>
              <text x="175" y="184" textAnchor="middle" fontSize="10" fill="hsl(217,91%,60%)" opacity="0.4">404</text>
              
              {/* Person body */}
              <circle cx="170" cy="105" r="28" fill="hsl(217,91%,60%)" opacity="0.15" />
              <circle cx="170" cy="105" r="28" stroke="hsl(217,91%,60%)" strokeWidth="2" fill="none" />
              
              {/* Face */}
              <circle cx="160" cy="100" r="3" fill="hsl(217,91%,60%)" />
              <circle cx="180" cy="100" r="3" fill="hsl(217,91%,60%)" />
              <path d="M162 115 Q170 110 178 115" stroke="hsl(217,91%,60%)" strokeWidth="2" fill="none" strokeLinecap="round" />
              
              {/* Arms */}
              <path d="M142 105 Q130 130 120 145" stroke="hsl(217,91%,60%)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              <path d="M198 105 Q210 130 215 145" stroke="hsl(217,91%,60%)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              
              {/* Hands up gesture */}
              <circle cx="118" cy="145" r="5" fill="hsl(217,91%,60%)" opacity="0.2" stroke="hsl(217,91%,60%)" strokeWidth="1.5" />
              <circle cx="217" cy="145" r="5" fill="hsl(217,91%,60%)" opacity="0.2" stroke="hsl(217,91%,60%)" strokeWidth="1.5" />
              
              {/* Body */}
              <path d="M155 133 Q170 155 185 133" stroke="hsl(217,91%,60%)" strokeWidth="2" fill="hsl(217,91%,60%)" opacity="0.1" />
              <line x1="170" y1="133" x2="170" y2="160" stroke="hsl(217,91%,60%)" strokeWidth="2.5" />
              
              {/* Question marks */}
              <text x="230" y="70" fontSize="28" fontWeight="bold" fill="hsl(217,91%,60%)" opacity="0.6">?</text>
              <text x="100" y="60" fontSize="22" fontWeight="bold" fill="hsl(217,91%,60%)" opacity="0.4">?</text>
              <text x="250" y="110" fontSize="18" fontWeight="bold" fill="hsl(217,91%,60%)" opacity="0.3">?</text>
              
              {/* Decorative dots */}
              <circle cx="85" cy="90" r="3" fill="hsl(217,91%,60%)" opacity="0.2" />
              <circle cx="255" cy="140" r="4" fill="hsl(217,91%,60%)" opacity="0.15" />
              <circle cx="75" cy="150" r="2" fill="hsl(217,91%,60%)" opacity="0.25" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
