"use client";

import React from "react";
import { Link } from "react-router-dom";
import {
  Globe,
  Compass,
  Building2,
  Cpu,
  Lock,
  Shield,
  Layers,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Bot,
  Zap,
  TrendingUp,
  LayoutDashboard,
  CalendarDays,
  FileSpreadsheet
} from "lucide-react";

/**
 * DevHub - Índice Maestro de Navegación y Desarrollo para "All In One Hotels"
 * Permite a los desarrolladores y stakeholders acceder a todas las vistas,
 * funnels comerciales y dashboards del sistema.
 */
export const DevHub = () => {
  // Categoría 1: Páginas Públicas (Funnels)
  const publicFunnels = [
    {
      title: "Landing Principal",
      path: "/landing",
      description: "Página principal con Hero, Stack Invisible, Comparador, Calculadora de ROI y FAQ.",
      icon: Globe,
      badge: "Pública • General",
      badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/20"
    },
    {
      title: "Funnel Hoteles & Glampings",
      path: "/funnel-hotel",
      description: "Embudo comercial de alta conversión enfocado en 0% comisiones y cerraduras inteligentes.",
      icon: Compass,
      badge: "Sub-Funnel",
      badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20"
    },
    {
      title: "Funnel Property Managers",
      path: "/funnel-pm",
      description: "Embudo para administradores de departamentos y condominios turísticos multi-propietario.",
      icon: Building2,
      badge: "Sub-Funnel",
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
    },
    {
      title: "Funnel Plug & Play (Add-on)",
      path: "/funnel-plugplay",
      description: "Embudo corporativo para hoteles con software existente que solo buscan el bot de WhatsApp.",
      icon: Cpu,
      badge: "Sub-Funnel Enterprise",
      badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20"
    }
  ];

  // Categoría 2: Autenticación
  const authRoutes = [
    {
      title: "Página de Inicio de Sesión",
      path: "/login",
      description: "Split-screen design con Social Proof, formulario B2B y botones Single Sign-On (Google y Microsoft).",
      icon: Lock,
      badge: "Fase 1 • Auth",
      badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/20"
    }
  ];

  // Categoría 3: Dashboards Privados (B2B SaaS)
  const privateDashboards = [
    {
      title: "Super Admin Dashboard",
      path: "/admin",
      description: "Centro de mando interno: MRR ($4,250 USD), salud de servidores (n8n, Channex, Supabase) y gestión de Tenants.",
      icon: Shield,
      badge: "Fase 2 • Super Admin",
      badgeColor: "bg-red-500/10 text-red-400 border-red-500/20"
    },
    {
      title: "Property Managers Dashboard",
      path: "/property-manager",
      description: "Control de portafolio: Multi-calendario timeline Gantt, control de limpieza (Housekeeping) y liquidaciones n8n a dueños.",
      icon: FileSpreadsheet,
      badge: "Fase 3 • Managers",
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
    },
    {
      title: "Hoteles & Glampings Dashboard",
      path: "/hotel",
      description: "Operativa diaria: Llegadas/Salidas del día, Live Feed del bot de WhatsApp 24/7 y generación de links Wompi.",
      icon: Sparkles,
      badge: "Fase 4 • Boutique OS",
      badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20"
    },
    {
      title: "Plug & Play Enterprise Dashboard",
      path: "/plug-play",
      description: "Telemetría de ventas del bot: Radar de conversaciones en vivo, puente API/PMS (Cloudbeds/Opera) y reservas cerradas.",
      icon: Zap,
      badge: "Fase 5 • Telemetría IA",
      badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20"
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50 font-sans antialiased selection:bg-orange-500 selection:text-white relative overflow-x-hidden p-6 sm:p-10 lg:p-14">
      
      {/* Orbes de luz ambiental de fondo */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-orange-500/10 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="fixed bottom-10 right-0 w-[500px] h-[500px] bg-amber-500/8 blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* ===================================================================== */}
        {/* HEADER DEL DEV HUB */}
        {/* ===================================================================== */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-neutral-800/80">
          <div className="flex items-start gap-4">
            <img
              src="/ALL-IN-ONE-LOGO-07.png"
              alt="All In One Hotels"
              className="h-11 sm:h-12 w-auto object-contain invert brightness-110 contrast-125 shrink-0 mt-1"
            />
            <div>
              <div className="flex items-center gap-2.5">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  All In One Hotels - Índice de Desarrollo (Dev Hub)
                </h1>
                <span className="hidden sm:inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  SPA Router Active
                </span>
              </div>
              <p className="text-neutral-400 text-sm sm:text-base mt-1.5 max-w-3xl">
                Menú maestro de accesos rápidos. Haz clic en cualquiera de las tarjetas para navegar fluidamente sin recargas mediante <strong>React Router DOM</strong>.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-start md:self-center bg-neutral-900/80 border border-neutral-800 px-4 py-2 rounded-xl text-xs font-mono text-neutral-400">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span>8 Módulos Disponibles</span>
          </div>
        </header>

        {/* ===================================================================== */}
        {/* CATEGORÍA 1: PÁGINAS PÚBLICAS (FUNNELS) */}
        {/* ===================================================================== */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 border border-orange-500/20">
                <Globe className="w-4 h-4" />
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Categoría 1: Páginas Públicas & Funnels Comerciales
              </h2>
            </div>
            <span className="text-xs font-mono text-neutral-500">4 Enlaces</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {publicFunnels.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="group bg-neutral-900/60 backdrop-blur-sm border border-neutral-800 hover:border-orange-500/50 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,107,0,0.15)] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-neutral-800/80 group-hover:bg-orange-500/10 flex items-center justify-center text-neutral-300 group-hover:text-orange-400 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${item.badgeColor}`}>
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white group-hover:text-orange-400 transition-colors mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs">
                    <span className="font-mono text-orange-400/90 text-[11px] bg-orange-500/10 px-2 py-0.5 rounded">
                      {item.path}
                    </span>
                    <span className="text-neutral-400 group-hover:text-orange-400 transition-colors flex items-center gap-1 font-semibold text-xs">
                      <span>Ver vista</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* ===================================================================== */}
        {/* CATEGORÍA 2: AUTENTICACIÓN */}
        {/* ===================================================================== */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 border border-orange-500/20">
                <Lock className="w-4 h-4" />
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Categoría 2: Portal de Autenticación
              </h2>
            </div>
            <span className="text-xs font-mono text-neutral-500">1 Enlace</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {authRoutes.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="group bg-neutral-900/60 backdrop-blur-sm border border-neutral-800 hover:border-orange-500/50 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,107,0,0.15)] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-neutral-800/80 group-hover:bg-orange-500/10 flex items-center justify-center text-neutral-300 group-hover:text-orange-400 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${item.badgeColor}`}>
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white group-hover:text-orange-400 transition-colors mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs">
                    <span className="font-mono text-orange-400/90 text-[11px] bg-orange-500/10 px-2 py-0.5 rounded">
                      {item.path}
                    </span>
                    <span className="text-neutral-400 group-hover:text-orange-400 transition-colors flex items-center gap-1 font-semibold text-xs">
                      <span>Iniciar sesión</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* ===================================================================== */}
        {/* CATEGORÍA 3: DASHBOARDS PRIVADOS (B2B SAAS) */}
        {/* ===================================================================== */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 border border-orange-500/20">
                <Shield className="w-4 h-4" />
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Categoría 3: Dashboards Privados (B2B SaaS)
              </h2>
            </div>
            <span className="text-xs font-mono text-neutral-500">4 Enlaces</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {privateDashboards.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="group bg-neutral-900/60 backdrop-blur-sm border border-neutral-800 hover:border-orange-500/50 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,107,0,0.15)] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-neutral-800/80 group-hover:bg-orange-500/10 flex items-center justify-center text-neutral-300 group-hover:text-orange-400 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${item.badgeColor}`}>
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white group-hover:text-orange-400 transition-colors mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs">
                    <span className="font-mono text-orange-400/90 text-[11px] bg-orange-500/10 px-2 py-0.5 rounded">
                      {item.path}
                    </span>
                    <span className="text-neutral-400 group-hover:text-orange-400 transition-colors flex items-center gap-1 font-semibold text-xs">
                      <span>Abrir panel</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Footer del DevHub */}
        <footer className="pt-8 border-t border-neutral-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} All In One Hotels</span>
            <span>•</span>
            <span>Hospitality Intelligence Framework</span>
          </div>
          <div className="flex items-center gap-4 text-neutral-400">
            <Link to="/landing" className="hover:text-orange-400 transition-colors">
              Ir a Landing
            </Link>
            <span>•</span>
            <Link to="/login" className="hover:text-orange-400 transition-colors">
              Iniciar Sesión
            </Link>
            <span>•</span>
            <Link to="/admin" className="hover:text-orange-400 transition-colors">
              Super Admin
            </Link>
          </div>
        </footer>

      </div>

    </div>
  );
};

export default DevHub;
