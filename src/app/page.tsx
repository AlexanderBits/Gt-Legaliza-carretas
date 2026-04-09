import { Hero } from "@/components/sections/Hero";
import { Categories } from "@/components/sections/Categories";
import { Gallery } from "@/components/sections/Gallery";
import { Benefits } from "@/components/sections/Benefits";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Categories />
      <Benefits />
      <Gallery />
      
      {/* Call to Action Section */}
      <section className="py-24 bg-primary text-background">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-6xl font-black mb-8 italic uppercase leading-none">
            Não rode na irregularidade
          </h2>
          <p className="text-xl font-bold mb-10 opacity-80 max-w-2xl mx-auto">
            Evite multas e apreensões. Regularize sua carretinha agora mesmo com quem entende do assunto.
          </p>
          <a 
            href="https://wa.me/5521996631808?text=Olá, preciso de ajuda para legalizar minha carretinha agora!"
            target="_blank"
            className="inline-flex items-center justify-center bg-background text-primary font-black py-6 px-12 rounded-full text-2xl hover:scale-105 transition-transform shadow-2xl uppercase tracking-tighter"
          >
            Falar com Especialista
          </a>
        </div>
      </section>
    </main>
  );
}
