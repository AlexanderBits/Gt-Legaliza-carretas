import { siteConfig } from "@/config/site";
import { ShieldCheck, Truck, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-background pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Col */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">GT <span className="text-primary tracking-normal font-light italic uppercase">Legalizações</span></h3>
            <p className="text-sm text-white/60 leading-relaxed">
              Damos vida legal à sua carretinha. Homologação, regularização e assessoria técnica especializada para todos os tipos de reboques.
            </p>
          </div>

          {/* Contact Col */}
          <div className="space-y-4">
            <h4 className="font-semibold text-primary">Contato</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>Rio de Janeiro - RJ</li>
              <li>WhatsApp: (21) 99663-1808</li>
              <li>Atendimento: Seg à Sex, 09h às 18h</li>
            </ul>
          </div>

          {/* Links Col */}
          <div className="space-y-4">
            <h4 className="font-semibold text-primary">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><a href="#servicos" className="hover:text-primary transition-colors">Nossos Serviços</a></li>
              <li><a href="#galeria" className="hover:text-primary transition-colors">Galeria Técnica</a></li>
              <li><a href="#sobre" className="hover:text-primary transition-colors">Sobre Nós</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 grayscale opacity-40">
            <ShieldCheck className="h-5 w-5" />
            <Truck className="h-5 w-5" />
            <Clock className="h-5 w-5" />
          </div>
        </div>
      </div>
    </footer>
  );
}
