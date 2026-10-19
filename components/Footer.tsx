"use client";

import React from "react";
import Image from "next/image";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export function Footer() {
  return (
    <footer className="bg-white border-t border-[#AEA5A1]/30 py-12 text-sm text-[#475569]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-[#AEA5A1]/20">
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-lg p-1 border border-[#AEA5A1]/20 shadow-xs flex items-center justify-center">
                <Image
                  src="/assets/logo-uncp.png"
                  alt="UNCP"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <div className="w-10 h-10 bg-white rounded-lg p-1 border border-[#AEA5A1]/20 shadow-xs flex items-center justify-center">
                <Image
                  src="/assets/logo-fis.png"
                  alt="FIS"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#265255]">
                  Universidad Nacional del Centro del Perú
                </h4>
                <p className="text-xs text-[#4B5320] font-semibold">
                  Facultad de Ingeniería de Sistemas · 2026
                </p>
              </div>
            </div>

            <p className="text-xs text-[#64748B] max-w-md leading-relaxed">
              Portafolio académico y catálogo técnico oficial de la asignatura <strong>Desarrollo de Aplicaciones Web</strong>. Cátedra impartida por el <strong>Dr. Jaime Suasnabar Terrel</strong>.
            </p>
          </div>

          <div className="md:col-span-3 space-y-2">
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#265255]">
              Navegación Rápida
            </h5>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="#suasnabar" className="hover:text-[#306A7E] transition-colors">
                  Laboratorios de Suasnabar
                </a>
              </li>
              <li>
                <a href="#repos" className="hover:text-[#306A7E] transition-colors">
                  Ecosistema GitHub (26 Repos Públicos)
                </a>
              </li>
              <li>
                <a href="https://github.com/Desarrollo-web-9no/parcial" target="_blank" rel="noopener noreferrer" className="hover:text-[#306A7E] transition-colors">
                  Evaluación Parcial (Biblioteca)
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#265255]">
              Estudiante / Autor
            </h5>
            <p className="text-xs font-semibold text-[#0F172A]">
              José Pablo Osorio Mallqui
            </p>
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/StoneFind22"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#F8FAFC] border border-[#AEA5A1]/30 hover:bg-[#306A7E] hover:text-white transition-colors"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/jos%C3%A9-osorio-mallqui-719166397"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#F8FAFC] border border-[#AEA5A1]/30 hover:bg-[#306A7E] hover:text-white transition-colors"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:jose@sudolabs.space"
                className="p-2 rounded-lg bg-[#F8FAFC] border border-[#AEA5A1]/30 hover:bg-[#306A7E] hover:text-white transition-colors"
                title="Correo"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <p>© 2026 UNCP - FIS. Desarrollado con Next.js 16, React 19 y Tailwind CSS v4.</p>
          <p className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#306A7E]" />
            Diseñado bajo el sistema visual <strong>DreamDesign</strong> & trazabilidad <strong>DreamDev</strong>
          </p>
        </div>
      </div>
    </footer>
  );
}
