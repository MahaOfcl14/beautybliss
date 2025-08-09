import Link from 'next/link';
import { Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex-1"></div>
          <div className="text-center text-sm text-muted-foreground flex-1">
            <p>2025 © BeautyBlissOfficial. All Rights Reserved.</p>
            <p>Your one stop solution for Hair related problems.</p>
          </div>
          <div className="flex flex-1 justify-end items-center gap-4">
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
