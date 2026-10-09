"use client";

import React, { useState } from "react";
import {
  LayoutDashboard,
  Building2,
  TrendingUp,
  Activity,
  Settings,
  LogOut,
  Plus,
  Search,
  Filter,
  MoreVertical,
  CheckCircle2,
  Clock,
  AlertTriangle,
  Bot,
  Zap,
  ArrowUpRight,
  ArrowDownRight,
  Menu,
  X,
  Database,
  Layers,
  Workflow,
  MessageSquare,
  ShieldCheck,
  RefreshCw,
  ExternalLink,
  Edit2,
  UserX,
  Check,
  ChevronRight,
  CreditCard,
  Server,
  Sliders,
  HardDrive,
  Cpu,
  Sparkles
} from "lucide-react";

/**
 * Sub-componente: VistaGeneral
 * Contiene los KPIs principales, el monitor de servicios core y la tabla de tenants.
 */
const VistaGeneral = ({
  tenants,
  filteredTenants,
  searchTerm,
  setSearchTerm,
  selectedPlanFilter,
  setSelectedPlanFilter,
  onOpenNewClientModal,
  openActionMenuId,
  setOpenActionMenuId,
  onToggleStatus
}) => {
  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* 1. Header del Dashboard */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-neutral-800/60">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Bienvenido, Leonardo - Centro de Mando
            </h1>
            <span className="hidden md:inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Live 24/7
            </span>
          </div>
          <p className="text-sm text-neutral-400 mt-1">
            Supervisión global de clientes (Tenants), sincronizaciones activas y salud de servidores en tiempo real.
          </p>
        </div>

        <button
          type="button"
          onClick={onOpenNewClientModal}
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-orange-500 hover:bg-orange-600 text-white shadow-[0_0_20px_rgba(255,107,0,0.3)] transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>+ Registrar Nuevo Cliente</span>
        </button>
      </div>

      {/* 2. Grid de Métricas Clave (KPIs Bento Box) */}
      <section aria-label="Métricas Clave">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5">
          {/* KPI 1: MRR */}
          <div className="bg-neutral-900/60 backdrop-blur-md border border-neutral-800 hover:border-neutral-700/80 rounded-2xl p-5 sm:p-6 transition-all relative overflow-hidden group">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                MRR Total
              </span>
              <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 border border-orange-500/20">
                <TrendingUp className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              $4,250 <span className="text-xs font-mono font-normal text-neutral-400">USD</span>
            </div>
            <div className="flex items-center gap-1.5 mt-2.5 text-xs text-emerald-400 font-medium">
              <ArrowUpRight className="w-4 h-4" />
              <span>+14.2%</span>
              <span className="text-neutral-500 font-normal">vs. mes anterior</span>
            </div>
          </div>

          {/* KPI 2: Tenants Activos */}
          <div className="bg-neutral-900/60 backdrop-blur-md border border-neutral-800 hover:border-neutral-700/80 rounded-2xl p-5 sm:p-6 transition-all relative overflow-hidden group">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                Clientes (Tenants)
              </span>
              <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 border border-orange-500/20">
                <Building2 className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              24 <span className="text-sm font-medium text-emerald-400">Activos</span>
            </div>
            <div className="flex items-center gap-1.5 mt-2.5 text-xs text-emerald-400 font-medium">
              <ArrowUpRight className="w-4 h-4" />
              <span>+3 clientes</span>
              <span className="text-neutral-500 font-normal">este mes</span>
            </div>
          </div>

          {/* KPI 3: Bots de WhatsApp */}
          <div className="bg-neutral-900/60 backdrop-blur-md border border-neutral-800 hover:border-neutral-700/80 rounded-2xl p-5 sm:p-6 transition-all relative overflow-hidden group">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                Bots WhatsApp IA
              </span>
              <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 border border-orange-500/20">
                <Bot className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              32 <span className="text-sm font-medium text-emerald-400">Conectados</span>
            </div>
            <div className="flex items-center gap-1.5 mt-2.5 text-xs text-neutral-400 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>99.8%</span>
              <span className="text-neutral-500 font-normal">uptime continuo</span>
            </div>
          </div>

          {/* KPI 4: Tasa de Intervención */}
          <div className="bg-neutral-900/60 backdrop-blur-md border border-neutral-800 hover:border-neutral-700/80 rounded-2xl p-5 sm:p-6 transition-all relative overflow-hidden group">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                Tasa de Intervención
              </span>
              <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 border border-orange-500/20">
                <Zap className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              1.2%
            </div>
            <div className="flex items-center gap-1.5 mt-2.5 text-xs text-emerald-400 font-medium">
              <ArrowDownRight className="w-4 h-4 text-emerald-400" />
              <span>98.8% Automatizado</span>
              <span className="text-neutral-500 font-normal">(Óptimo)</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Monitor de Salud del Sistema (Infraestructura) */}
      <section aria-label="Monitor de Infraestructura">
        <div className="flex items-center justify-between mb-3.5">
          <div className="flex items-center gap-2">
            <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
              Monitor de Salud del Sistema
            </h2>
            <span className="text-xs text-neutral-400 font-mono hidden sm:inline">
              • 4/4 Servicios Operativos
            </span>
          </div>
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Sistemas al 100%
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {/* n8n */}
          <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 flex items-start gap-3.5 hover:border-neutral-700 transition-colors">
            <div className="p-2 rounded-lg bg-neutral-800/80 text-orange-400 shrink-0">
              <Workflow className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-white truncate">Orquestador n8n</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              </div>
              <div className="text-xs text-neutral-400 mt-0.5">
                Estado: <span className="text-emerald-400 font-medium">Operativo</span>
              </div>
              <div className="text-[11px] font-mono text-neutral-400 mt-1">
                Ping 12ms • CPU 9%
              </div>
            </div>
          </div>

          {/* Channex */}
          <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 flex items-start gap-3.5 hover:border-neutral-700 transition-colors">
            <div className="p-2 rounded-lg bg-neutral-800/80 text-orange-400 shrink-0">
              <Layers className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-white truncate">Channex.io Sync</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
              </div>
              <div className="text-xs text-neutral-400 mt-0.5">
                Estado: <span className="text-emerald-400 font-medium">Sincronizando</span>
              </div>
              <div className="text-[11px] font-mono text-neutral-400 mt-1">
                142 Propiedades activas
              </div>
            </div>
          </div>

          {/* Supabase */}
          <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 flex items-start gap-3.5 hover:border-neutral-700 transition-colors">
            <div className="p-2 rounded-lg bg-neutral-800/80 text-orange-400 shrink-0">
              <Database className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-white truncate">Supabase DB</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
              </div>
              <div className="text-xs text-neutral-400 mt-0.5">
                Estado: <span className="text-emerald-400 font-medium">Operativo</span>
              </div>
              <div className="text-[11px] font-mono text-neutral-400 mt-1">
                PostgreSQL Multi-Tenant
              </div>
            </div>
          </div>

          {/* WhatsApp API */}
          <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 flex items-start gap-3.5 hover:border-neutral-700 transition-colors">
            <div className="p-2 rounded-lg bg-neutral-800/80 text-orange-400 shrink-0">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-white truncate">WhatsApp API</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
              </div>
              <div className="text-xs text-neutral-400 mt-0.5">
                Estado: <span className="text-emerald-400 font-medium">Operativo</span>
              </div>
              <div className="text-[11px] font-mono text-neutral-400 mt-1">
                Meta Cloud Webhooks OK
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Tabla de Gestión de Tenants (Últimos Clientes) */}
      <section aria-label="Gestión de Clientes" className="bg-neutral-900/70 border border-neutral-800 rounded-2xl overflow-hidden">
        {/* Barra superior de la tabla */}
        <div className="p-4 sm:p-5 border-b border-neutral-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
              Gestión de Tenants & Suscripciones
            </h2>
            <p className="text-xs text-neutral-400 mt-0.5">
              Mostrando {filteredTenants.length} de {tenants.length} clientes registrados
            </p>
          </div>

          {/* Controles de Búsqueda y Filtro */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar hotel o dueño..."
                className="pl-8 pr-3 py-1.5 text-xs bg-neutral-950 border border-neutral-800 rounded-xl text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-orange-500 w-full sm:w-48 transition-colors"
              />
            </div>

            <div className="flex items-center gap-1 bg-neutral-950 p-1 rounded-xl border border-neutral-800 text-xs">
              <button
                type="button"
                onClick={() => setSelectedPlanFilter("all")}
                className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                  selectedPlanFilter === "all"
                    ? "bg-neutral-800 text-white font-semibold"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                Todos
              </button>
              <button
                type="button"
                onClick={() => setSelectedPlanFilter("Hoteles & Glampings")}
                className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                  selectedPlanFilter === "Hoteles & Glampings"
                    ? "bg-orange-500/20 text-orange-400 font-semibold"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                Hoteles
              </button>
              <button
                type="button"
                onClick={() => setSelectedPlanFilter("Property Managers")}
                className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                  selectedPlanFilter === "Property Managers"
                    ? "bg-emerald-500/20 text-emerald-400 font-semibold"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                Managers
              </button>
              <button
                type="button"
                onClick={() => setSelectedPlanFilter("Plug & Play")}
                className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                  selectedPlanFilter === "Plug & Play"
                    ? "bg-blue-500/20 text-blue-400 font-semibold"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                Plug & Play
              </button>
            </div>
          </div>
        </div>

        {/* Tabla */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-neutral-950/60 text-neutral-400 border-b border-neutral-800 uppercase font-mono text-[11px] tracking-wider">
              <tr>
                <th scope="col" className="py-3 px-4 sm:px-6">Hotel / Empresa</th>
                <th scope="col" className="py-3 px-4">Plan Activo</th>
                <th scope="col" className="py-3 px-4">Unidades</th>
                <th scope="col" className="py-3 px-4">MRR</th>
                <th scope="col" className="py-3 px-4">Estado</th>
                <th scope="col" className="py-3 px-4 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800/80">
              {filteredTenants.length === 0 ? (
                <tr>
                  <td colSpan="6" className="py-8 text-center text-neutral-500">
                    No se encontraron clientes que coincidan con la búsqueda.
                  </td>
                </tr>
              ) : (
                filteredTenants.map((t) => (
                  <tr
                    key={t.id}
                    className="hover:bg-neutral-800/50 transition-colors group"
                  >
                    <td className="py-3.5 px-4 sm:px-6">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-xl bg-gradient-to-br ${t.avatarBg} flex items-center justify-center font-bold text-[11px] text-white shrink-0 shadow-sm`}
                        >
                          {t.name.slice(0, 2).toUpperCase()}
                        </div>
                        <div>
                          <div className="font-semibold text-white group-hover:text-orange-400 transition-colors">
                            {t.name}
                          </div>
                          <div className="text-[11px] text-neutral-400">
                            {t.owner} • {t.joined}
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="py-3.5 px-4">
                      <span
                        className={`inline-flex items-center px-2.5 py-1 rounded-md font-mono text-[11px] font-medium ${
                          t.plan === "Hoteles & Glampings"
                            ? "bg-orange-500/10 text-orange-400 border border-orange-500/20"
                            : t.plan === "Property Managers"
                            ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                            : "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                        }`}
                      >
                        {t.plan}
                      </span>
                    </td>

                    <td className="py-3.5 px-4 text-neutral-300 font-medium">
                      {t.units}
                    </td>

                    <td className="py-3.5 px-4 font-mono font-semibold text-white">
                      {t.mrr}
                    </td>

                    <td className="py-3.5 px-4">
                      {t.status === "Activo" && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          Activo
                        </span>
                      )}
                      {t.status === "Onboarding" && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-orange-500/10 text-orange-400 border border-orange-500/20">
                          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                          Onboarding
                        </span>
                      )}
                      {t.status === "Suspendido" && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-red-500/10 text-red-400 border border-red-500/20">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                          Suspendido
                        </span>
                      )}
                    </td>

                    <td className="py-3.5 px-4 text-right relative">
                      <button
                        type="button"
                        onClick={() =>
                          setOpenActionMenuId(openActionMenuId === t.id ? null : t.id)
                        }
                        className="p-1.5 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors cursor-pointer"
                        aria-label="Opciones de tenant"
                      >
                        <MoreVertical className="w-4 h-4" />
                      </button>

                      {openActionMenuId === t.id && (
                        <div className="absolute right-4 mt-1 w-44 rounded-xl bg-neutral-900 border border-neutral-700 shadow-2xl py-1 z-30 text-left">
                          <button
                            type="button"
                            onClick={() => {
                              alert(`Abriendo portal de: ${t.name}`);
                              setOpenActionMenuId(null);
                            }}
                            className="w-full flex items-center gap-2 px-3 py-2 text-xs text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
                          >
                            <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
                            <span>Ver Portal Tenant</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => onToggleStatus(t.id)}
                            className="w-full flex items-center gap-2 px-3 py-2 text-xs text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
                          >
                            {t.status === "Activo" ? (
                              <>
                                <UserX className="w-3.5 h-3.5 text-red-400" />
                                <span className="text-red-400">Suspender Tenant</span>
                              </>
                            ) : (
                              <>
                                <Check className="w-3.5 h-3.5 text-emerald-400" />
                                <span className="text-emerald-400">Reactivar Tenant</span>
                              </>
                            )}
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Footer de la tabla */}
        <div className="p-3.5 sm:px-6 bg-neutral-950/40 border-t border-neutral-800 flex items-center justify-between text-[11px] text-neutral-500">
          <span>Sincronización multi-tenant activa</span>
          <span className="font-mono text-neutral-400">AES-256 Cloud Infrastructure</span>
        </div>
      </section>
    </div>
  );
};

/**
 * Placeholder genérico para secciones secundarias
 */
const PlaceholderView = ({ title, subtitle, icon: Icon, onBackToOverview }) => {
  return (
    <div className="bg-neutral-950 min-h-[60vh] flex flex-col items-center justify-center text-center p-8 border border-neutral-800/80 rounded-2xl animate-in fade-in duration-300">
      <div className="w-24 h-24 rounded-3xl bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 shadow-inner">
        <Icon className="w-12 h-12 text-neutral-700" />
      </div>

      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-orange-500/10 text-orange-400 border border-orange-500/20 mb-3">
        <Sparkles className="w-3.5 h-3.5 text-orange-400" />
        <span>Módulo en construcción - Próximamente</span>
      </div>

      <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
        {title}
      </h2>

      <p className="text-sm text-neutral-400 max-w-md mb-8 leading-relaxed">
        {subtitle}
      </p>

      <button
        type="button"
        onClick={onBackToOverview}
        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-700 transition-colors cursor-pointer"
      >
        <span>← Volver a Vista General</span>
      </button>
    </div>
  );
};

// Sub-componentes Placeholder para cada pestaña requerida
const VistaTenants = ({ onBackToOverview }) => (
  <PlaceholderView
    title="Gestión de Tenants (Clientes)"
    subtitle="Aprovisionamiento automatizado de bases de datos aisladas, límites de propiedades y control de contratos de hoteles."
    icon={Building2}
    onBackToOverview={onBackToOverview}
  />
);

const VistaSuscripciones = ({ onBackToOverview }) => (
  <PlaceholderView
    title="Suscripciones & MRR"
    subtitle="Analítica detallada de ingresos recurrentes, estado de pasarelas de cobro Stripe/Wompi y facturación electrónica B2B."
    icon={TrendingUp}
    onBackToOverview={onBackToOverview}
  />
);

const VistaSalud = ({ onBackToOverview }) => (
  <PlaceholderView
    title="Salud del Sistema & Servidores"
    subtitle="Monitoreo de latencia en tiempo real, registro de webhooks de WhatsApp Cloud API, instancias n8n y clusters Supabase."
    icon={Activity}
    onBackToOverview={onBackToOverview}
  />
);

const VistaConfiguracion = ({ onBackToOverview }) => (
  <PlaceholderView
    title="Configuración de la Plataforma"
    subtitle="Gestión de credenciales maestras, llaves de API de Channex, variables de entorno globales y políticas de seguridad."
    icon={Settings}
    onBackToOverview={onBackToOverview}
  />
);

/**
 * SuperAdminDashboard - Componente Maestro Refactorizado
 * Navegación dinámica por pestañas utilizando el hook useState('vista-general')
 */
export const SuperAdminDashboard = ({ onLogout, onNavigateHome }) => {
  // 1. Estado para navegación interna de pestañas
  const [activeTab, setActiveTab] = useState("vista-general"); // 'vista-general' | 'tenants' | 'suscripciones' | 'salud' | 'configuracion'
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  // Estados para búsqueda, filtros y nuevo tenant
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPlanFilter, setSelectedPlanFilter] = useState("all");
  const [isNewClientModalOpen, setIsNewClientModalOpen] = useState(false);
  const [openActionMenuId, setOpenActionMenuId] = useState(null);

  // Formulario nuevo cliente
  const [newClient, setNewClient] = useState({
    name: "",
    plan: "Hoteles & Glampings",
    units: "8 Domos",
    mrr: "$199 USD",
    status: "Onboarding"
  });

  // Base de datos de Tenants
  const [tenants, setTenants] = useState([
    {
      id: "ten-01",
      name: "Glamping Bosque Sagrado",
      owner: "Carlos Restrepo",
      plan: "Hoteles & Glampings",
      units: "12 Domos Geodésicos",
      mrr: "$199 USD",
      status: "Activo",
      joined: "12 Mar 2026",
      avatarBg: "from-orange-500 to-amber-600"
    },
    {
      id: "ten-02",
      name: "Urbana Living Properties",
      owner: "Valentina Gómez",
      plan: "Property Managers",
      units: "34 Apartasuites",
      mrr: "$480 USD",
      status: "Activo",
      joined: "18 Feb 2026",
      avatarBg: "from-emerald-500 to-teal-600"
    },
    {
      id: "ten-03",
      name: "Boutique Hotel Santa Elena",
      owner: "Mauricio Vélez",
      plan: "Hoteles & Glampings",
      units: "18 Habitaciones",
      mrr: "$199 USD",
      status: "Activo",
      joined: "05 Ene 2026",
      avatarBg: "from-blue-500 to-indigo-600"
    },
    {
      id: "ten-04",
      name: "Andean Glamping Retreat",
      owner: "Camila Salcedo",
      plan: "Hoteles & Glampings",
      units: "8 Cabañas Luxury",
      mrr: "$199 USD",
      status: "Onboarding",
      joined: "02 Oct 2026",
      avatarBg: "from-amber-500 to-orange-600"
    },
    {
      id: "ten-05",
      name: "Grand Horizon Suites (PMS Opera)",
      owner: "Fernando Luque",
      plan: "Plug & Play",
      units: "65 Habitaciones",
      mrr: "$350 USD",
      status: "Activo",
      joined: "14 Sep 2026",
      avatarBg: "from-purple-500 to-violet-600"
    },
    {
      id: "ten-06",
      name: "EcoLodge Valle Paraíso",
      owner: "Andrés Cardona",
      plan: "Hoteles & Glampings",
      units: "10 Domos",
      mrr: "$199 USD",
      status: "Suspendido",
      joined: "20 Nov 2025",
      avatarBg: "from-rose-500 to-red-600"
    }
  ]);

  // Filtrado de tenants
  const filteredTenants = tenants.filter((tenant) => {
    const matchesSearch =
      tenant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tenant.owner.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPlan =
      selectedPlanFilter === "all" || tenant.plan === selectedPlanFilter;
    return matchesSearch && matchesPlan;
  });

  // Agregar nuevo tenant
  const handleCreateTenant = (e) => {
    e.preventDefault();
    if (!newClient.name) return;

    const created = {
      id: `ten-${Date.now().toString().slice(-4)}`,
      name: newClient.name,
      owner: "Administrador Asignado",
      plan: newClient.plan,
      units: newClient.units || "10 Unidades",
      mrr: newClient.mrr || "$199 USD",
      status: newClient.status,
      joined: "Hoy",
      avatarBg: "from-orange-500 to-amber-600"
    };

    setTenants([created, ...tenants]);
    setIsNewClientModalOpen(false);
    setNewClient({
      name: "",
      plan: "Hoteles & Glampings",
      units: "8 Domos",
      mrr: "$199 USD",
      status: "Onboarding"
    });
  };

  // Toggle estado de tenant
  const handleToggleStatus = (tenantId) => {
    setTenants((prev) =>
      prev.map((t) => {
        if (t.id === tenantId) {
          const nextStatus =
            t.status === "Activo"
              ? "Suspendido"
              : t.status === "Suspendido"
              ? "Activo"
              : "Activo";
          return { ...t, status: nextStatus };
        }
        return t;
      })
    );
    setOpenActionMenuId(null);
  };

  // 2. Definición del Menú Lateral con tabs requeridos
  const menuItems = [
    { id: "vista-general", label: "Vista General", icon: LayoutDashboard },
    { id: "tenants", label: "Tenants (Clientes)", icon: Building2 },
    { id: "suscripciones", label: "Suscripciones & MRR", icon: TrendingUp },
    { id: "salud", label: "Salud del Sistema", icon: Activity },
    { id: "configuracion", label: "Configuración", icon: Settings },
  ];

  // 4. Renderizado Dinámico por Pestaña Activa
  const renderTabContent = () => {
    switch (activeTab) {
      case "vista-general":
        return (
          <VistaGeneral
            tenants={tenants}
            filteredTenants={filteredTenants}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedPlanFilter={selectedPlanFilter}
            setSelectedPlanFilter={setSelectedPlanFilter}
            onOpenNewClientModal={() => setIsNewClientModalOpen(true)}
            openActionMenuId={openActionMenuId}
            setOpenActionMenuId={setOpenActionMenuId}
            onToggleStatus={handleToggleStatus}
          />
        );
      case "tenants":
        return <VistaTenants onBackToOverview={() => setActiveTab("vista-general")} />;
      case "suscripciones":
        return <VistaSuscripciones onBackToOverview={() => setActiveTab("vista-general")} />;
      case "salud":
        return <VistaSalud onBackToOverview={() => setActiveTab("vista-general")} />;
      case "configuracion":
        return <VistaConfiguracion onBackToOverview={() => setActiveTab("vista-general")} />;
      default:
        return (
          <VistaGeneral
            tenants={tenants}
            filteredTenants={filteredTenants}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedPlanFilter={selectedPlanFilter}
            setSelectedPlanFilter={setSelectedPlanFilter}
            onOpenNewClientModal={() => setIsNewClientModalOpen(true)}
            openActionMenuId={openActionMenuId}
            setOpenActionMenuId={setOpenActionMenuId}
            onToggleStatus={handleToggleStatus}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans antialiased flex flex-col lg:flex-row selection:bg-orange-500 selection:text-white relative">
      {/* Top Bar Móvil */}
      <div className="lg:hidden bg-neutral-900/90 backdrop-blur-md border-b border-neutral-800 px-4 py-3.5 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <img
            src="/ALL-IN-ONE-LOGO-07.png"
            alt="All In One Hotels"
            className="h-8 w-auto invert brightness-110 contrast-125"
          />
          <span className="text-[10px] font-mono font-semibold bg-orange-500/15 text-orange-400 border border-orange-500/30 px-2 py-0.5 rounded">
            SUPER ADMIN
          </span>
        </div>

        <button
          type="button"
          onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
          className="p-2 rounded-lg bg-neutral-800 text-neutral-300 hover:text-white"
          aria-label="Abrir menú lateral"
        >
          {isMobileSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Backdrop Móvil */}
      {isMobileSidebarOpen && (
        <div
          onClick={() => setIsMobileSidebarOpen(false)}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 lg:hidden"
        />
      )}

      {/* Menú Lateral (Sidebar) */}
      <aside
        className={`fixed lg:sticky top-0 left-0 bottom-0 z-50 w-64 xl:w-72 bg-neutral-900 border-r border-neutral-800 flex flex-col justify-between shrink-0 transition-transform duration-300 ease-in-out h-screen ${
          isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div>
          {/* Logo y Encabezado */}
          <div className="p-6 border-b border-neutral-800/80 flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <img
                src="/ALL-IN-ONE-LOGO-07.png"
                alt="All In One Hotels"
                className="h-9 w-auto object-contain invert brightness-110 contrast-125"
              />
              <span className="text-[10px] tracking-wider uppercase font-mono text-neutral-400 mt-1 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Centro de Mando Super Admin
              </span>
            </div>

            <button
              type="button"
              onClick={() => setIsMobileSidebarOpen(false)}
              className="lg:hidden p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Botones del Menú Lateral con Estados Dinámicos */}
          <nav className="p-3 space-y-1.5 mt-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsMobileSidebarOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-xl text-sm font-medium transition-all text-left cursor-pointer ${
                    isActive
                      ? "bg-orange-500/10 text-orange-500 border-r-2 border-orange-500 font-semibold shadow-sm"
                      : "text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800"
                  }`}
                >
                  <Icon
                    className={`w-4 h-4 shrink-0 transition-colors ${
                      isActive ? "text-orange-500" : "text-neutral-400"
                    }`}
                  />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Sección Inferior del Sidebar: Perfil & Logout */}
        <div className="p-4 border-t border-neutral-800 bg-neutral-950/40">
          <div className="flex items-center justify-between p-2 rounded-xl bg-neutral-900/80 border border-neutral-800/80">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 p-[1px] shadow-sm">
                <div className="w-full h-full bg-neutral-950 rounded-[11px] flex items-center justify-center font-bold text-xs text-orange-400">
                  LE
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-white tracking-tight">Leonardo</span>
                <span className="text-[10px] font-mono text-neutral-400">Super Admin</span>
              </div>
            </div>

            <button
              type="button"
              onClick={onLogout}
              title="Cerrar sesión"
              className="p-2 text-neutral-400 hover:text-red-400 hover:bg-neutral-800 rounded-lg transition-colors cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>

          {onNavigateHome && (
            <button
              type="button"
              onClick={onNavigateHome}
              className="mt-2.5 w-full text-center text-[11px] text-neutral-500 hover:text-orange-400 transition-colors py-1 cursor-pointer"
            >
              ← Ir a la Web Pública
            </button>
          )}
        </div>
      </aside>

      {/* Área de Contenido Principal (Renderizado Dinámico) */}
      <main className="flex-1 p-5 sm:p-8 lg:p-10 max-w-7xl w-full mx-auto overflow-y-auto">
        {renderTabContent()}
      </main>

      {/* Modal: Registrar Nuevo Cliente (Accesible en todo momento) */}
      {isNewClientModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl w-full max-w-md p-6 shadow-2xl relative">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-orange-500" />
                <h3 className="text-lg font-bold text-white">Registrar Nuevo Cliente</h3>
              </div>
              <button
                type="button"
                onClick={() => setIsNewClientModalOpen(false)}
                className="p-1 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateTenant} className="space-y-4 mt-4">
              <div>
                <label className="block text-xs font-mono uppercase text-neutral-400 mb-1">
                  Nombre del Hotel o Propiedad
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Glamping El Mirador"
                  value={newClient.name}
                  onChange={(e) => setNewClient({ ...newClient, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-neutral-950 border border-neutral-800 rounded-xl text-sm text-white focus:outline-none focus:border-orange-500"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-neutral-400 mb-1">
                  Plan de Suscripción
                </label>
                <select
                  value={newClient.plan}
                  onChange={(e) => setNewClient({ ...newClient, plan: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-neutral-950 border border-neutral-800 rounded-xl text-sm text-white focus:outline-none focus:border-orange-500"
                >
                  <option value="Hoteles & Glampings">Hoteles & Glampings ($199/mes)</option>
                  <option value="Property Managers">Property Managers ($480/mes)</option>
                  <option value="Plug & Play">Plug & Play ($350/mes)</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-400 mb-1">
                    Unidades / Domos
                  </label>
                  <input
                    type="text"
                    value={newClient.units}
                    onChange={(e) => setNewClient({ ...newClient, units: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-neutral-950 border border-neutral-800 rounded-xl text-sm text-white focus:outline-none focus:border-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-400 mb-1">
                    Tarifa MRR
                  </label>
                  <input
                    type="text"
                    value={newClient.mrr}
                    onChange={(e) => setNewClient({ ...newClient, mrr: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-neutral-950 border border-neutral-800 rounded-xl text-sm text-white focus:outline-none focus:border-orange-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-neutral-400 mb-1">
                  Estado Inicial
                </label>
                <select
                  value={newClient.status}
                  onChange={(e) => setNewClient({ ...newClient, status: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-neutral-950 border border-neutral-800 rounded-xl text-sm text-white focus:outline-none focus:border-orange-500"
                >
                  <option value="Onboarding">Onboarding</option>
                  <option value="Activo">Activo</option>
                  <option value="Suspendido">Suspendido</option>
                </select>
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-neutral-800">
                <button
                  type="button"
                  onClick={() => setIsNewClientModalOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-neutral-400 hover:text-white cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-bold bg-orange-500 hover:bg-orange-600 text-white rounded-xl shadow-md transition-colors cursor-pointer"
                >
                  Guardar Tenant
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SuperAdminDashboard;
