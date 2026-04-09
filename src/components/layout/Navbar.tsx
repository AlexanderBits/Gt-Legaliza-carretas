import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Phone } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-12 w-12 overflow-hidden rounded-lg bg-primary/10 p-1">
             <Image 
              src="/images/logo.png" 
              alt={siteConfig.name} 
              fill 
              className="object-contain"
              priority
            />
          </div>
          <span className="text-xl font-bold tracking-tighter sm:text-2xl">
            GT <span className="text-primary tracking-normal font-light italic uppercase">Legalizações</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="#servicos" className="text-sm font-medium hover:text-primary transition-colors">Serviços</Link>
          <Link href="#galeria" className="text-sm font-medium hover:text-primary transition-colors">Galeria</Link>
          <Link href="#sobre" className="text-sm font-medium hover:text-primary transition-colors">Sobre</Link>
          <Link 
            href={siteConfig.whatsapp.link}
            target="_blank"
            className="btn-primary py-2 px-4 text-sm"
          >
            <Phone className="h-4 w-4" />
            (21) 99663-1808
          </Link>
        </nav>

        {/* Mobile Call Button */}
        <Link 
          href={siteConfig.whatsapp.link}
          target="_blank"
          className="md:hidden btn-primary p-2"
        >
          <Phone className="h-5 w-5" />
        </Link>
      </div>
    </header>
  );
}
