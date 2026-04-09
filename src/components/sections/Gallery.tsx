import Image from "next/image";

const images = [
  { src: "/images/trailer-1.jpg", alt: "Motorcycle Trailer 3 Rails", title: "Asa Delta Profissional" },
  { src: "/images/trailer-2.jpg", alt: "Utility Trailer Wood", title: "Fazendinha Executiva" },
  { src: "/images/trailer-3.jpg", alt: "Black Trailer Detail", title: "Homologação de Eixo" },
  { src: "/images/trailer-4.jpg", alt: "Large Utility Trailer", title: "Carretão de Carga" },
];

export function Gallery() {
  return (
    <section id="galeria" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 tracking-tight">Galeria <span className="text-primary italic">Técnica</span></h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Veja alguns dos projetos que já passaram pela nossa homologação técnica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="relative aspect-square overflow-hidden rounded-2xl group border border-white/5"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-primary text-xs font-bold uppercase tracking-wider mb-1">Projeto Homologado</p>
                <h4 className="text-lg font-bold">{image.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
