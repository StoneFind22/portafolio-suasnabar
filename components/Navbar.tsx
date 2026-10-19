"use client";

import React from "react";
import Image from "next/image";
import { ExternalLink, GraduationCap, FolderGit2 } from "lucide-react";
import { GithubIcon } from "./Icons";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#AEA5A1]/30 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 flex items-center justify-center bg-white rounded-lg p-1 shadow-sm border border-[#AEA5A1]/20">
                <Image
                  src="/assets/logo-uncp.png"
                  alt="Logo UNCP"
                  width={44}
                  height={44}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="relative w-12 h-12 flex items-center justify-center bg-white rounded-lg p-1 shadow-sm border border-[#AEA5A1]/20">
                <Image
                  src="/assets/logo-fis.png"
                  alt="Logo FIS"
                  width={44}
                  height={44}
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            <div className="hidden sm:block border-l border-[#AEA5A1]/40 pl-4 py-0.5">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#4B5320] block">
                UNCP · FIS · 2026-II
              </span>
              <span className="text-sm font-bold text-[#265255] tracking-tight block">
                Desarrollo de Aplicaciones Web
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href="#suasnabar"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold text-[#265255] hover:bg-[#306A7E]/10 transition-colors"
            >
              <GraduationCap className="w-4 h-4 text-[#306A7E]" />
              <span>Proyectos Suasnabar</span>
            </a>

            <a
              href="#repos"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold text-[#4A5860] hover:bg-[#AEA5A1]/15 transition-colors"
            >
              <FolderGit2 className="w-4 h-4 text-[#4B5320]" />
              <span className="hidden sm:inline">Ecosistema</span> GitHub
            </a>

            <a
              href="https://github.com/StoneFind22"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium bg-[#306A7E] text-white hover:bg-[#265255] shadow-sm transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              <span className="hidden md:inline">@StoneFind22</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
