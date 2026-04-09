"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/trailer-4.jpg" 
          alt="Technical Trailer Legalization" 
          fill 
          className="object-cover opacity-20 scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-transparent" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6 border border-primary/20">
              Homologação Especializada
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
              Legalize sua <span className="text-primary italic">Carretinha</span> sem Burocracia
            </h1>
            <p className="text-xl text-white/70 mb-10 max-w-2xl leading-relaxed">
              Resgate a tranquilidade de rodar com seu reboque 100% regularizado. 
              Processos rápidos para Asa Delta, Carretão, Fazendinha e Food Trucks.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link 
                href={siteConfig.whatsapp.link}
                target="_blank"
                className="btn-primary text-lg px-8 py-4 group"
              >
                Solicitar Regularização Agora
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="#servicos"
                className="flex items-center justify-center gap-2 text-sm font-semibold hover:text-primary transition-colors border border-white/10 rounded-lg px-8 py-4 bg-white/5"
              >
                Ver Categorias
              </Link>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-4">
              {["100% Legalizado", "Suporte Total", "Rapidez Recorde"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-white/50">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hero Visual Element */}
      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-[60%] border-l border-y border-white/10 rounded-l-3xl overflow-hidden glass shadow-2xl"
      >
         <Image 
          src="/images/trailer-1.jpg" 
          alt="Premium Trailer" 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
      </motion.div>
    </section>
  );
}
