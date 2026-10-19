"use client";

import React, { useState, useMemo } from "react";
import { ALL_REPOS, REPO_CATEGORIES, RepoItem } from "@/data/repos";
import { Search, X, ExternalLink, HardDrive, Tag, FolderGit2, Sparkles, Filter } from "lucide-react";
import { GithubIcon } from "./Icons";

export function GlobalReposSection() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredRepos = useMemo(() => {
    return ALL_REPOS.filter((repo) => {
      const matchesCategory = selectedCategory === "all" || repo.category === selectedCategory;
      const term = search.toLowerCase().trim();
      const matchesSearch =
        term === "" ||
        repo.name.toLowerCase().includes(term) ||
        repo.description.toLowerCase().includes(term) ||
        (repo.primaryLanguage && repo.primaryLanguage.toLowerCase().includes(term)) ||
        repo.tags.some((t) => t.toLowerCase().includes(term)) ||
        repo.owner.toLowerCase().includes(term);

      return matchesCategory && matchesSearch;
    });
  }, [search, selectedCategory]);

  return (
    <section id="repos" className="py-16 sm:py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-[#4B5320]/10 text-[#4B5320] mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              Sección Secundaria · Ecosistema Completo
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#265255] tracking-tight">
              Ecosistema Global de Repositorios en GitHub
            </h2>
            <p className="mt-2 text-base text-[#475569] max-w-3xl leading-relaxed">
              Catálogo de <strong>{ALL_REPOS.length} repositorios</strong> de producción, sistemas universitarios (UNCP / Aguilar / Tesis), plataformas empresariales en SudoLabs, herramientas de IA y librerías de contexto.
            </p>
          </div>

          <div className="text-xs font-semibold px-3 py-2 bg-white text-[#265255] border border-[#AEA5A1]/30 rounded-lg shrink-0 shadow-xs">
            Mostrando <strong>{filteredRepos.length}</strong> de {ALL_REPOS.length} repositorios
          </div>
        </div>

        {/* Toolbar: Search and Filter Pills */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#AEA5A1]/30 shadow-xs mb-8 space-y-4">
          
          {/* Search Box */}
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B]" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar por tecnología (TypeScript, Python, PHP, React), nombre del proyecto o palabra clave..."
              className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#AEA5A1]/35 text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#306A7E]/30 focus:border-[#306A7E] transition-all"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#64748B] hover:text-[#0F172A] rounded-md transition-colors"
                title="Limpiar búsqueda"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-[#AEA5A1]/15">
            <span className="text-xs font-bold uppercase tracking-wider text-[#64748B] mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" />
              Categorías:
            </span>
            {REPO_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    isActive
                      ? "bg-[#306A7E] text-white shadow-xs"
                      : "bg-[#F1F5F9] text-[#475569] hover:bg-[#AEA5A1]/20 hover:text-[#0F172A]"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                      isActive ? "bg-white/20 text-white" : "bg-[#AEA5A1]/30 text-[#475569]"
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

        </div>

        {/* Repos Grid */}
        {filteredRepos.length === 0 ? (
          <div className="bg-white rounded-2xl border border-[#AEA5A1]/30 p-12 text-center">
            <FolderGit2 className="w-10 h-10 text-[#AEA5A1] mx-auto mb-3" />
            <h3 className="text-base font-bold text-[#265255]">No se encontraron repositorios</h3>
            <p className="text-xs text-[#64748B] mt-1">Prueba ajustando el término de búsqueda o cambiando el filtro seleccionado.</p>
            <button
              onClick={() => {
                setSearch("");
                setSelectedCategory("all");
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold text-white bg-[#306A7E] rounded-lg hover:bg-[#265255] transition-colors"
            >
              Restablecer filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredRepos.map((repo) => (
              <div
                key={repo.id}
                className="group bg-white rounded-xl border border-[#AEA5A1]/30 hover:border-[#306A7E]/50 p-5 flex flex-col justify-between card-hover transition-all duration-200"
              >
                <div>
                  {/* Top Bar: Owner & Visibility */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-semibold text-[#4B5320] bg-[#4B5320]/10 px-2 py-0.5 rounded">
                      {repo.categoryLabel}
                    </span>
                    <span className="text-[11px] font-mono text-[#64748B] flex items-center gap-1">
                      <HardDrive className="w-3 h-3 text-[#AEA5A1]" />
                      {repo.sizeFormatted}
                    </span>
                  </div>

                  {/* Title & Organization */}
                  <div className="mb-2">
                    <span className="text-xs font-mono text-[#64748B] block truncate">
                      {repo.owner} /
                    </span>
                    <h3 className="text-base font-bold text-[#265255] group-hover:text-[#306A7E] transition-colors truncate">
                      {repo.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-[#475569] line-clamp-3 leading-relaxed mb-4">
                    {repo.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {repo.tags.slice(0, 3).map((tag, i) => (
                      <span
                        key={i}
                        className="text-[11px] px-2 py-0.5 rounded bg-[#F8FAFC] border border-[#AEA5A1]/25 text-[#475569] font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                    {repo.tags.length > 3 && (
                      <span className="text-[10px] text-[#64748B] self-center">
                        +{repo.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom Bar: Primary Language & Action Link */}
                <div className="pt-3 border-t border-[#AEA5A1]/20 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span
                      className="w-2.5 h-2.5 rounded-full shrink-0"
                      style={{ backgroundColor: repo.languageColor || "#306A7E" }}
                    />
                    <span className="text-xs font-medium text-[#265255]">
                      {repo.primaryLanguage || "Documentación"}
                    </span>
                  </div>

                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#306A7E] hover:text-[#265255] hover:underline transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Ver Repo</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
