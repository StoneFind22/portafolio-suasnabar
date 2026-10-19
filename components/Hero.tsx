"use client";

import React from "react";
import Image from "next/image";
import { GraduationCap, Code2, Sparkles, CheckCircle2, ArrowDown, FolderGit2, ShieldCheck } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F8FAFC] to-[#F1F5F9] border-b border-[#AEA5A1]/20 py-14 lg:py-20">
      
      {/* Background subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#306A7E 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Presentation */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Academic pill header */}
            <div className="inline-flex flex-wrap items-center gap-2 p-1.5 pr-4 bg-white border border-[#AEA5A1]/35 rounded-full shadow-xs">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide bg-[#265255] text-white">
                <GraduationCap className="w-3.5 h-3.5" />
                UNCP · FIS
              </span>
              <span className="text-xs font-medium text-[#4B5320] flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                Docente: <strong className="font-semibold text-[#265255]">Dr. Jaime Suasnabar Terrel</strong>
              </span>
            </div>

            {/* Title */}
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#265255] leading-tight">
                Portafolio de Desarrollo Web
                <span className="block text-[#306A7E] font-bold mt-1">
                  Laboratorios, Proyectos & Arquitectura
                </span>
              </h1>
              <p className="mt-4 text-base sm:text-lg text-[#475569] max-w-3xl leading-relaxed">
                Compilación académica y técnica de las prácticas de laboratorio, evaluaciones y comparativas de arquitectura frontend para el curso de <strong>Desarrollo de Aplicaciones Web</strong>, complementado con el ecosistema de <strong>54 repositorios</strong> de producción e ingeniería de software.
              </p>
            </div>

            {/* Profile Bar */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="relative">
                <Image
                  src="/assets/jose-osorio.webp"
                  alt="José Pablo Osorio Mallqui"
                  width={56}
                  height={56}
                  className="rounded-full ring-3 ring-[#306A7E]/30 object-cover shadow-sm"
                />
                <span 
                  className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full" 
                  title="Disponible y sincronizado con GitHub"
                />
              </div>
              <div>
                <p className="text-sm font-bold text-[#265255] flex items-center gap-2">
                  José Pablo Osorio Mallqui
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-[#4B5320]/10 text-[#4B5320]">
                    9no Semestre
                  </span>
                </p>
                <p className="text-xs text-[#64748B]">
                  Tech Lead & Fullstack Engineer · UNCP Ingeniería de Sistemas · @StoneFind22
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href="#suasnabar"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#306A7E] hover:bg-[#265255] text-white text-sm font-semibold shadow-md shadow-[#306A7E]/20 transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                <GraduationCap className="w-4 h-4" />
                Explorar Entregas Suasnabar
                <ArrowDown className="w-4 h-4" />
              </a>
              <a
                href="#repos"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-[#F8FAFC] text-[#265255] border border-[#AEA5A1]/40 text-sm font-semibold shadow-xs transition-all hover:border-[#306A7E]/50"
              >
                <FolderGit2 className="w-4 h-4 text-[#4B5320]" />
                Ver Todos los Repositorios GitHub
              </a>
            </div>

          </div>

          {/* Quick Metrics & Pillars Panel */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-[#AEA5A1]/35 shadow-sm space-y-5">
              
              <div className="flex items-center justify-between border-b border-[#AEA5A1]/20 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#306A7E]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#265255]">
                    Estado de Sincronización
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  100% en GitHub
                </span>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#F8FAFC] p-3.5 rounded-xl border border-[#AEA5A1]/20">
                  <span className="text-2xl font-black text-[#306A7E] block">5</span>
                  <span className="text-xs font-medium text-[#475569]">Entregas Suasnabar</span>
                </div>
                <div className="bg-[#F8FAFC] p-3.5 rounded-xl border border-[#AEA5A1]/20">
                  <span className="text-2xl font-black text-[#265255] block">54</span>
                  <span className="text-xs font-medium text-[#475569]">Repositorios Globales</span>
                </div>
                <div className="bg-[#F8FAFC] p-3.5 rounded-xl border border-[#AEA5A1]/20">
                  <span className="text-base font-bold text-[#4B5320] block">React 19</span>
                  <span className="text-xs font-medium text-[#475569]">Tailwind v4 + Vite</span>
                </div>
                <div className="bg-[#F8FAFC] p-3.5 rounded-xl border border-[#AEA5A1]/20">
                  <span className="text-base font-bold text-[#306A7E] block">Next.js 16</span>
                  <span className="text-xs font-medium text-[#475569]">Vercel Staging</span>
                </div>
              </div>

              {/* Methodology banner (DreamDev / DreamDesign) */}
              <div className="p-3 bg-[#4B5320]/5 rounded-xl border border-[#4B5320]/20 flex items-start gap-2.5 text-xs text-[#265255]">
                <Sparkles className="w-4 h-4 text-[#4B5320] shrink-0 mt-0.5" />
                <div>
                  <strong className="font-semibold block text-[#4B5320]">Metodología DreamDev & DreamDesign</strong>
                  <span>Trazabilidad por fases, mediciones verificadas y diseño con sistema visual gobernado por tokens.</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
