"use client";

import React, { useEffect } from "react";
import { SuasnabarProject } from "@/data/suasnabar";
import { X, ExternalLink, GitBranch, Calendar, CheckCircle, Code, Layers } from "lucide-react";
import { GithubIcon } from "./Icons";

interface ProjectModalProps {
  project: SuasnabarProject;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-150">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-[#AEA5A1]/40 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-[#265255] to-[#306A7E] text-white flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-white/20 text-white">
                {project.semana}
              </span>
              <span className="text-xs font-medium text-white/80">
                {project.badge}
              </span>
            </div>
            <h3 className="text-xl font-bold leading-snug">
              {project.title}
            </h3>
            <p className="text-xs text-white/90 mt-1">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
            title="Cerrar modal (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-5 text-sm">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#265255] mb-2 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-[#306A7E]" />
              Descripción Académica y Objetivos
            </h4>
            <p className="text-[#475569] leading-relaxed">
              {project.description}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#265255] mb-2 flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-[#4B5320]" />
              Implementaciones & Hitos Técnicos
            </h4>
            <ul className="space-y-2">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-[#334155] bg-[#F8FAFC] p-2.5 rounded-lg border border-[#AEA5A1]/20">
                  <span className="w-2 h-2 rounded-full bg-[#306A7E] shrink-0 mt-1" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#265255] mb-2 flex items-center gap-1.5">
              <Code className="w-4 h-4 text-[#306A7E]" />
              Tecnologías y Estándares
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-md bg-[#F1F5F9] border border-[#AEA5A1]/30 text-xs font-medium text-[#265255]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Metadata bar */}
          <div className="grid grid-cols-2 gap-3 p-3 bg-[#F8FAFC] rounded-xl border border-[#AEA5A1]/30 text-xs text-[#475569]">
            <div className="flex items-center gap-2">
              <GitBranch className="w-4 h-4 text-[#306A7E]" />
              <span>Rama activa: <strong className="font-mono text-[#265255]">{project.branch}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#4B5320]" />
              <span>Fecha: <strong className="text-[#265255]">{project.date}</strong></span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#F8FAFC] border-t border-[#AEA5A1]/20 flex items-center justify-between">
          <span className="text-xs font-mono text-[#64748B]">
            {project.repoOwner}/{project.repoName}
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold rounded-lg text-[#475569] hover:bg-[#AEA5A1]/20 transition-colors"
            >
              Cerrar
            </button>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#306A7E] hover:bg-[#265255] text-white text-xs font-semibold shadow-xs transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Ir al Repositorio</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
