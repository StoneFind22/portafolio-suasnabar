"use client";

import React, { useState } from "react";
import { SUASNABAR_PROJECTS, SuasnabarProject } from "@/data/suasnabar";
import { ExternalLink, GraduationCap, CheckCircle2, GitBranch, Layers, BookOpen, Sparkles, Code2 } from "lucide-react";
import { GithubIcon } from "./Icons";
import { ProjectModal } from "./ProjectModal";

export function SuasnabarSection() {
  const [selectedProject, setSelectedProject] = useState<SuasnabarProject | null>(null);

  return (
    <section id="suasnabar" className="py-16 sm:py-24 bg-white border-b border-[#AEA5A1]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-[#306A7E]/10 text-[#306A7E] mb-3">
              <GraduationCap className="w-3.5 h-3.5" />
              Sección Principal · Asignatura
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#265255] tracking-tight">
              Entregas y Laboratorios de Suasnabar
            </h2>
            <p className="mt-2 text-base text-[#475569] max-w-3xl leading-relaxed">
              Proyectos desarrollados para el curso impartido por el <strong>Dr. Jaime Suasnabar Terrel</strong>. Todos los entregables están auditados, catalogados y sincronizados en repositorios de GitHub con sus respectivas ramas y código fuente.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold px-3 py-2 bg-[#4B5320]/10 text-[#4B5320] rounded-lg shrink-0">
            <CheckCircle2 className="w-4 h-4" />
            <span>5 de 5 Entregas Conectadas a GitHub</span>
          </div>
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {SUASNABAR_PROJECTS.map((project, index) => {
            const isParcial = project.id === "suasnabar-parcial";
            return (
              <div
                key={project.id}
                className={`group relative bg-[#F8FAFC] rounded-2xl border transition-all duration-300 card-hover flex flex-col justify-between overflow-hidden ${
                  isParcial 
                    ? "lg:col-span-2 border-[#306A7E]/40 bg-gradient-to-br from-white via-[#F8FAFC] to-[#306A7E]/5 shadow-sm"
                    : "border-[#AEA5A1]/30 hover:border-[#306A7E]/50"
                }`}
              >
                {/* Top Badge Banner */}
                <div className="p-6 sm:p-8 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                        isParcial 
                          ? "bg-[#265255] text-white" 
                          : "bg-[#306A7E] text-white"
                      }`}>
                        {project.semana}
                      </span>
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-white border border-[#AEA5A1]/30 text-[#4B5320]">
                        {project.badge}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-[#64748B]">
                      <GitBranch className="w-3.5 h-3.5 text-[#306A7E]" />
                      <span className="font-mono font-medium">{project.branch}</span>
                      <span>· {project.date}</span>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#265255] group-hover:text-[#306A7E] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-[#4B5320]">
                    {project.subtitle}
                  </p>

                  {/* Description */}
                  <p className="mt-4 text-sm text-[#475569] leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="mt-5 space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#265255] block">
                      Hitos y Requisitos Implementados:
                    </span>
                    <ul className="space-y-1.5 text-xs text-[#334155]">
                      {project.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#306A7E] shrink-0 mt-1.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack badges */}
                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-1 rounded-md bg-white border border-[#AEA5A1]/30 font-medium text-[#265255]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Metrics bar */}
                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2 pt-4 border-t border-[#AEA5A1]/20">
                    {project.metrics.map((m, idx) => (
                      <div key={idx} className="bg-white/80 p-2.5 rounded-lg border border-[#AEA5A1]/20 text-center">
                        <span className="text-xs text-[#64748B] block truncate">{m.label}</span>
                        <span className="text-xs font-bold text-[#265255] block truncate mt-0.5">{m.value}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Bottom Action Footer */}
                <div className="px-6 py-4 bg-white border-t border-[#AEA5A1]/20 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-[#64748B] font-mono">
                      {project.repoOwner}/<strong>{project.repoName}</strong>
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-3.5 py-1.5 text-xs font-semibold rounded-lg text-[#265255] hover:bg-[#AEA5A1]/15 transition-colors border border-[#AEA5A1]/40"
                    >
                      Ver Ficha Técnica
                    </button>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-[#306A7E] hover:bg-[#265255] text-white text-xs font-semibold shadow-xs transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Abrir en GitHub</span>
                      <ExternalLink className="w-3 h-3 opacity-80" />
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Modal for detailed technical report */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
