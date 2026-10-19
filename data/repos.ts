import rawRepos from "./repos.json";

export interface RepoItem {
  id: string;
  name: string;
  fullName: string;
  owner: string;
  url: string;
  isPrivate: boolean;
  diskUsage: number;
  sizeFormatted: string;
  primaryLanguage: string;
  languageColor: string;
  pushedAt: string;
  category: "enterprise" | "academic" | "tooling" | "personal";
  categoryLabel: string;
  description: string;
  icon?: string;
  tags: string[];
}

export const ALL_REPOS: RepoItem[] = rawRepos as RepoItem[];

export const REPO_CATEGORIES = [
  { id: "all", label: "Todos los Repositorios", count: ALL_REPOS.length },
  { id: "academic", label: "UNCP & Academia", count: ALL_REPOS.filter(r => r.category === "academic").length },
  { id: "enterprise", label: "Producción & Clientes", count: ALL_REPOS.filter(r => r.category === "enterprise").length },
  { id: "tooling", label: "Herramientas & IA", count: ALL_REPOS.filter(r => r.category === "tooling").length },
  { id: "personal", label: "Personal & MVPs", count: ALL_REPOS.filter(r => r.category === "personal").length }
];
