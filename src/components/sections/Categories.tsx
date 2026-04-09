import { siteConfig } from "@/config/site";
import { Hammer, Scale, Home, Store } from "lucide-react";

const icons = [Hammer, Scale, Home, Store];

export function Categories() {
  return (
    <section id="servicos" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 px-4">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 tracking-tight">O que você precisa <span className="text-primary italic">legalizar?</span></h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Atendemos todas as categorias de reboques com conformidade técnica e agilidade administrativa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.categories.map((category, index) => {
            const Icon = icons[index];
            return (
              <div 
                key={category.id} 
                className="group relative h-full p-8 rounded-2xl glass hover:border-primary/50 transition-all duration-300 flex flex-col items-start"
              >
                <div className="mb-6 p-4 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">{category.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed mb-6">
                  {category.description}
                </p>
                <div className="mt-auto">
                  <span className="text-primary text-xs font-bold uppercase tracking-widest border-b border-primary/20 pb-1 group-hover:border-primary transition-all">
                    Saber mais
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
