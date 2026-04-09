import { ShieldCheck, Zap, Award } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Rapidez Recorde",
    description: "Sua documentação pronta no menor tempo do mercado. Sem esperas desnecessárias."
  },
  {
    icon: ShieldCheck,
    title: "Total Segurança",
    description: "Assessoria técnica e jurídica para garantir que sua carretinha esteja 100% legal."
  },
  {
    icon: Award,
    title: "Especialistas em Reboques",
    description: "Conhecimento profundo das normas do CONTRAN e processos de homologação."
  }
];

export function Benefits() {
  return (
    <section className="py-24 bg-background border-t border-white/5">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight tracking-tighter">
              Por que escolher a <br />
              <span className="text-primary italic">GT Legalizações?</span>
            </h2>
            <div className="space-y-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0 h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <benefit.icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{benefit.title}</h4>
                    <p className="text-white/50 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden glass border border-white/10 p-4">
              <div className="relative h-full w-full rounded-2xl overflow-hidden">
                <img 
                  src="/images/trailer-3.jpg" 
                  alt="Quality Assurance" 
                  className="object-cover h-full w-full brightness-75 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-x-4 bottom-4 p-6 glass rounded-xl">
                  <p className="text-xl font-bold italic mb-1">"Qualidade e confiança em cada processo."</p>
                  <p className="text-xs text-primary font-bold uppercase tracking-widest">— GT Team</p>
                </div>
              </div>
            </div>
            {/* Decals */}
            <div className="absolute -top-6 -right-6 h-32 w-32 bg-primary/20 blur-3xl rounded-full" />
            <div className="absolute -bottom-6 -left-6 h-40 w-40 bg-primary/10 blur-3xl rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
