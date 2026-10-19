export interface SuasnabarProject {
  id: string;
  semana: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  githubUrl: string;
  branch: string;
  repoOwner: string;
  repoName: string;
  technologies: string[];
  highlights: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  date: string;
  deliverables?: string[];
}

export const SUASNABAR_PROJECTS: SuasnabarProject[] = [
  {
    id: "suasnabar-parcial",
    semana: "Evaluación Parcial",
    badge: "Examen Parcial",
    title: "Sistema Integral de Gestión de Biblioteca Universitaria UNCP",
    subtitle: "Plataforma React 19 + TypeScript + Vite + Tailwind v4 + Reportes PDF",
    description: "Sistema integral desarrollado para la evaluación parcial de la asignatura. Incluye catálogo interactivo, reservas en tiempo real, gestión de préstamos, validación de formularios y generación instantánea de comprobantes de préstamo en formato PDF con jsPDF.",
    githubUrl: "https://github.com/Desarrollo-web-9no/parcial",
    branch: "main",
    repoOwner: "Desarrollo-web-9no",
    repoName: "parcial",
    technologies: ["React 19", "TypeScript", "Vite 8", "Tailwind CSS v4", "jsPDF", "Oxlint"],
    highlights: [
      "Catálogo dinámico de libros con filtrado por categoría y búsqueda en tiempo real.",
      "Módulo de reservas y gestión de préstamos con cálculo automático de fechas límite.",
      "Exportación directa de comprobantes de reserva y fichas bibliográficas en PDF.",
      "Arquitectura por capas con validación de datos y cero advertencias de linter."
    ],
    metrics: [
      { label: "React Version", value: "19.2.8" },
      { label: "Tooling", value: "Vite + Oxlint" },
      { label: "Reportes", value: "jsPDF Engine" },
      { label: "Estado", value: "Aprobado / 100%" }
    ],
    date: "Octubre 2026"
  },
  {
    id: "suasnabar-sem6",
    semana: "Semana 06",
    badge: "Laboratorio 04",
    title: "Arquitectura de Componentes, Props Drilling y Lifting State Up",
    subtitle: "5 Ejercicios Modulares en React 19 + Vite + TypeScript",
    description: "Implementación práctica de los fundamentos de comunicación entre componentes: maquetación semántica de 7 componentes con media queries, transferencia unidireccional de objetos a través de 4 niveles jerárquicos (props drilling), y elevación de estado desde un componente hijo subordinado hacia el contenedor padre mediante callbacks.",
    githubUrl: "https://github.com/StoneFind22/suasnabar-6",
    branch: "master",
    repoOwner: "StoneFind22",
    repoName: "suasnabar-6",
    technologies: ["React 19", "TypeScript", "Vite", "Pure CSS / Flexbox", "State Lifting"],
    highlights: [
      "Ejercicio 1: Maquetación responsive con 7 componentes (Header, Nav, Main, Articles, Sidebar, Footer).",
      "Ejercicio 2: Comunicación unidireccional a 4 niveles concéntricos (Componente 1 a 4).",
      "Ejercicio 3: Comunicación de hijo a padre (Lifting State Up) con input reactivo.",
      "Ejercicios 4 y 5: Composición modular y manejo de estado tipado con interfaces TypeScript."
    ],
    metrics: [
      { label: "Ejercicios", value: "5 Implementados" },
      { label: "Componentes", value: "12+ Modulares" },
      { label: "Jerarquía", value: "4 Niveles Props" },
      { label: "Estado", value: "Completado" }
    ],
    date: "Octubre 2026"
  },
  {
    id: "suasnabar-sem5",
    semana: "Semana 05",
    badge: "Práctica Comparativa",
    title: "Benchmark de Herramientas Modernas: Next.js vs React vs Vite",
    subtitle: "Monorepo Tri-Arquitectura con Next.js 15, CRA y Vite",
    description: "Estudio empírico y desarrollo comparativo de las 3 alternativas principales en el ecosistema React: Next.js con Server Components y App Router, Create React App con empaquetado clásico Webpack, y Vite con servidor de desarrollo ultrarrápido impulsado por ES Modules nativos.",
    githubUrl: "https://github.com/StoneFind22/suasnabar-5",
    branch: "main",
    repoOwner: "StoneFind22",
    repoName: "suasnabar-5",
    technologies: ["Next.js 15", "React 19", "Vite", "Create React App", "Tailwind CSS"],
    highlights: [
      "Subproyecto 1: Implementación con Next.js 15 (App Router, Tailwind CSS, TypeScript).",
      "Subproyecto 2: Implementación con Create React App clásico.",
      "Subproyecto 3: Implementación con Vite + React TypeScript para comparación de HMR.",
      "Medición de tiempos de arranque, pesos de bundle y ergonomía de desarrollo."
    ],
    metrics: [
      { label: "Arquitecturas", value: "3 Proyectos" },
      { label: "Frameworks", value: "Next / React / Vite" },
      { label: "Enfoque", value: "Benchmark & DX" },
      { label: "Estado", value: "Completado" }
    ],
    date: "Octubre 2026"
  },
  {
    id: "suasnabar-sem4",
    semana: "Semana 04",
    badge: "Práctica Calificada 03",
    title: "Estructuración Web Semántica, Formularios y Validación Cliente",
    subtitle: "Manejo Dinámico de Datos y Eventos en el Navegador",
    description: "Desarrollo de formularios web complejos con reglas de validación en tiempo real, estructuras semánticas accesibles según estándares W3C, estilos CSS Grid y Flexbox responsivos, y procesamiento de entradas sin librerías externas.",
    githubUrl: "https://github.com/Desarrollo-web-9no/suasnabar-4",
    branch: "jose_osorio",
    repoOwner: "Desarrollo-web-9no",
    repoName: "suasnabar-4",
    technologies: ["HTML5 Semántico", "CSS3 Moderno", "JavaScript ES6+", "DOM API", "Form Validation"],
    highlights: [
      "Validación en tiempo real de campos obligatorios, patrones regex y rangos numéricos.",
      "Maquetación fluida y accesible con etiquetas semánticas (main, section, form, output).",
      "Captura y prevención de envíos defectuosos mediante preventDefault y feedback visual.",
      "Diseño adaptable a dispositivos móviles y escritorios."
    ],
    metrics: [
      { label: "Validaciones", value: "100% Cliente" },
      { label: "Semántica", value: "W3C Standards" },
      { label: "Branch", value: "jose_osorio" },
      { label: "Estado", value: "Completado" }
    ],
    date: "Septiembre 2026"
  },
  {
    id: "suasnabar-sem3",
    semana: "Semana 03",
    badge: "Práctica Calificada 02",
    title: "Maquetación Responsive, Componentes Dinámicos y DOM",
    subtitle: "Desarrollo Colaborativo con HTML5, Tailwind CSS y JavaScript",
    description: "Práctica enfocada en el diseño de interfaces web modernas y adaptables a cualquier resolución de pantalla, integrando animaciones sutiles, componentes visuales interactivos y manipulación directa del árbol DOM.",
    githubUrl: "https://github.com/taangel687-netizen/PracticaSemana3",
    branch: "Jos",
    repoOwner: "taangel687-netizen",
    repoName: "PracticaSemana3",
    technologies: ["HTML5", "Tailwind CSS", "JavaScript", "Responsive Design", "Git Flow"],
    highlights: [
      "Estructura responsiva con sistema de grillas de Tailwind CSS.",
      "Manipulación dinámica del DOM para actualización de vistas.",
      "Trabajo en equipo con gestión de ramas (rama personal 'Jos').",
      "Interactividad fluida con transiciones y animaciones CSS."
    ],
    metrics: [
      { label: "Estilos", value: "Tailwind CSS" },
      { label: "Modalidad", value: "Equipo Colaborativo" },
      { label: "Branch", value: "Jos" },
      { label: "Estado", value: "Completado" }
    ],
    date: "Septiembre 2026"
  }
];
