import { siteConfig } from "@/config/site";
import Link from "next/link";
import Image from "next/image";

export function WhatsAppButton() {
  return (
    <Link
      href={siteConfig.whatsapp.link}
      target="_blank"
      className="fixed bottom-8 right-8 z-50 flex h-16 w-16 items-center justify-center rounded-full shadow-2xl transition-transform hover:scale-110 active:scale-95 animate-pulse-glow overflow-hidden bg-white"
      aria-label="Fale conosco no WhatsApp"
    >
      <div className="relative w-full h-full p-2">
        <Image 
          src="/images/whats.png" 
          alt="WhatsApp" 
          fill 
          className="object-contain"
        />
      </div>
    </Link>
  );
}
