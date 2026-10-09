"use client";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  CalendarDays,
  FileSpreadsheet,
  Sparkles,
  Bot,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  Plus,
  Send,
  MessageCircle,
  Building2,
  KeyRound,
  Clock,
  CheckCircle2,
  AlertTriangle,
  TrendingUp,
  DollarSign,
  Filter,
  Check,
  Share2,
  FileText,
  UserCheck
} from "lucide-react";

/**
 * Sub-componente: VistaPanelGeneral
 * Contiene los KPIs operativos del día, el Multi-Calendario Timeline,
 * el Control de Limpieza (Housekeeping), la mini-tabla de Liquidación de Dueños
 * y el modal para generar reportes masivos por WhatsApp vía n8n.
 */
const VistaPanelGeneral = ({ setActiveTab }) => {
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [sentReports, setSentReports] = useState({});

  // Datos simulados de propietarios y liquidaciones
  const [ownerSettlements, setOwnerSettlements] = useState([
    {
      id: "own-1",
      owner: "Carlos Soto",
      property: "Apto 201 - Poblado",
      gross: "$1,650 USD",
      commission: "$400 USD",
      net: "$1,250 USD",
      phone: "+57 310 456 7890",
      status: "Pendiente"
    },
    {
      id: "own-2",
      owner: "Marcela Henao",
      property: "Villa Cafetera",
      gross: "$2,890 USD",
      commission: "$710 USD",
      net: "$2,180 USD",
      phone: "+57 312 987 6543",
      status: "Pendiente"
    },
    {
      id: "own-3",
      owner: "Diego Martínez",
      property: "Apto 402 - Sunset",
      gross: "$2,100 USD",
      commission: "$460 USD",
      net: "$1,640 USD",
      phone: "+57 315 222 3344",
      status: "Pendiente"
    },
    {
      id: "own-4",
      owner: "Elena Ramírez",
      property: "Penthouse 101 - Luxury",
      gross: "$4,400 USD",
      commission: "$1,020 USD",
      net: "$3,380 USD",
      phone: "+57 300 777 8899",
      status: "Pendiente"
    }
  ]);

  // Tareas de limpieza (Housekeeping)
  const [cleaningTasks] = useState([
    {
      id: "clean-1",
      property: "Apto 402 - Sunset",
      checkoutTime: "11:00 AM Hoy",
      staff: "Sin Asignar",
      status: "Pendiente",
      badgeColor: "bg-red-500/15 text-red-400 border-red-500/30",
      dotColor: "bg-red-500"
    },
    {
      id: "clean-2",
      property: "Villa Cafetera",
      checkoutTime: "09:00 AM Hoy",
      staff: "María Ospina",
      status: "En Progreso",
      badgeColor: "bg-orange-500/15 text-orange-400 border-orange-500/30",
      dotColor: "bg-orange-500 animate-pulse"
    },
    {
      id: "clean-3",
      property: "Glamping 1 - Domo Bosque",
      checkoutTime: "Salida Ayer (12:00 PM)",
      staff: "Carlos Pérez",
      status: "Limpio e Inspeccionado",
      badgeColor: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
      dotColor: "bg-emerald-500"
    },
    {
      id: "clean-4",
      property: "Apto 201 - Poblado",
      checkoutTime: "02:00 PM Hoy",
      staff: "Sandra Gómez",
      status: "En Progreso",
      badgeColor: "bg-orange-500/15 text-orange-400 border-orange-500/30",
      dotColor: "bg-orange-500 animate-pulse"
    }
  ]);

  // Simulación de envío del reporte vía webhook n8n + WhatsApp
  const handleSendReport = (ownerId, ownerName, propertyName, netAmount) => {
    setSentReports((prev) => ({
      ...prev,
      [ownerId]: true
    }));

    setTimeout(() => {
      alert(
        `✓ [Webhook n8n activado]\nReporte financiero generado en PDF y enviado a ${ownerName} por WhatsApp.\nPropiedad: ${propertyName}\nTotal neto transferido: ${netAmount}`
      );
    }, 400);
  };

  // Días para el timeline semanal del Gantt Chart
  const timelineDays = [
    { dayName: "Lun", dateNumber: "06 Oct" },
    { dayName: "Mar", dateNumber: "07 Oct" },
    { dayName: "Mié", dateNumber: "08 Oct", isToday: true },
    { dayName: "Jue", dateNumber: "09 Oct" },
    { dayName: "Vie", dateNumber: "10 Oct" },
    { dayName: "Sáb", dateNumber: "11 Oct" },
    { dayName: "Dom", dateNumber: "12 Oct" }
  ];

  return (
    <div className="space-y-7 animate-fadeIn">
      {/* ===================================================================== */}
      {/* HEADER: BIENVENIDA & BOTÓN ACCIÓN RÁPIDA */}
      {/* ===================================================================== */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-neutral-800/60">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Bienvenido, Administrador - Vista de Portafolio
            </h1>
            <span className="hidden md:inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-orange-500/10 text-orange-400 border border-orange-500/20">
              14 Propiedades
            </span>
          </div>
          <p className="text-sm text-neutral-400 mt-1">
            Supervisión de calendarios cruzados, operaciones de limpieza y liquidación financiera a propietarios.
          </p>
        </div>

        <button
          onClick={() => setIsReportModalOpen(true)}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-orange-500 hover:bg-orange-600 text-white shadow-[0_0_20px_rgba(255,107,0,0.3)] transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer shrink-0"
        >
          <FileText className="w-4 h-4" />
          <span>Generar Reportes de Dueños</span>
        </button>
      </div>

      {/* ===================================================================== */}
      {/* 1. KPIS OPERATIVOS DEL DÍA (4 TARJETAS SUPERIORES) */}
      {/* ===================================================================== */}
      <section aria-label="KPIs Operativos">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5">
          {/* KPI 1: Ocupación Global */}
          <div className="bg-neutral-900/60 backdrop-blur-sm border border-neutral-800 hover:border-neutral-700 rounded-2xl p-5 sm:p-6 transition-all group">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                Ocupación Global
              </span>
              <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 border border-orange-500/20">
                <Building2 className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              85%
            </div>
            <div className="mt-2 text-xs text-neutral-400 font-medium">
              <span className="text-orange-400 font-semibold">12 de 14</span> Aptos ocupados hoy
            </div>
          </div>

          {/* KPI 2: Check-ins Hoy */}
          <div className="bg-neutral-900/60 backdrop-blur-sm border border-neutral-800 hover:border-neutral-700 rounded-2xl p-5 sm:p-6 transition-all group">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                Check-ins Hoy
              </span>
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
                <KeyRound className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              4 <span className="text-base font-medium text-emerald-400">Llegadas</span>
            </div>
            <div className="flex items-center gap-1.5 mt-2 text-xs text-emerald-400 font-medium">
              <Check className="w-3.5 h-3.5" />
              <span>Códigos de cerradura enviados</span>
            </div>
          </div>

          {/* KPI 3: Check-outs Hoy */}
          <div className="bg-neutral-900/60 backdrop-blur-sm border border-neutral-800 hover:border-neutral-700 rounded-2xl p-5 sm:p-6 transition-all group">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                Check-outs Hoy
              </span>
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 border border-amber-500/20">
                <Clock className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              3 <span className="text-base font-medium text-amber-400">Salidas</span>
            </div>
            <div className="flex items-center gap-1.5 mt-2 text-xs text-amber-400 font-medium">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Requieren limpieza inmediata</span>
            </div>
          </div>

          {/* KPI 4: Ingresos Mensuales */}
          <div className="bg-neutral-900/60 backdrop-blur-sm border border-neutral-800 hover:border-neutral-700 rounded-2xl p-5 sm:p-6 transition-all group">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                Ingresos Mensuales
              </span>
              <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 border border-orange-500/20">
                <DollarSign className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              $8,450 <span className="text-xs font-mono font-normal text-neutral-400">USD</span>
            </div>
            <div className="mt-2 text-xs text-neutral-400">
              Suma consolidada de todas las propiedades
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* BENTO BOX GRID LAYOUT (Multi-Calendario, Limpieza, Liquidaciones) */}
      {/* ===================================================================== */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* WIDGET CENTRAL: MULTI-CALENDARIO (TIMELINE GANTT CHART) */}
        <div className="col-span-1 md:col-span-12 bg-neutral-900/60 backdrop-blur-sm border border-neutral-800 rounded-2xl p-5 sm:p-6 shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-neutral-800">
            <div>
              <div className="flex items-center gap-2">
                <CalendarDays className="w-5 h-5 text-orange-500" />
                <h2 className="text-lg font-bold text-white tracking-tight">
                  Multi-Calendario en Vivo (Timeline)
                </h2>
                <span className="text-xs font-mono bg-neutral-800 px-2.5 py-0.5 rounded text-neutral-300">
                  Semana Actual
                </span>
              </div>
              <p className="text-xs text-neutral-400 mt-1">
                Sincronización bidireccional en tiempo real con Airbnb, Booking.com y canal directo.
              </p>
            </div>

            {/* Leyenda de Colores */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-orange-500 shrink-0" />
                <span className="text-neutral-300">Confirmada por OTA (Airbnb/Booking)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-amber-600 shrink-0" />
                <span className="text-neutral-300">Reserva Directa Web (0% Comis.)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-neutral-700 shrink-0" />
                <span className="text-neutral-400">Bloqueo de Limpieza</span>
              </div>
            </div>
          </div>

          {/* Gantt Chart Simplificado */}
          <div className="mt-5 overflow-x-auto">
            <div className="min-w-[760px]">
              <div className="grid grid-cols-8 gap-2 pb-3 border-b border-neutral-800/80 text-center font-mono text-xs">
                <div className="text-left font-sans text-neutral-400 uppercase tracking-wider text-[11px] font-semibold pl-2">
                  Propiedad
                </div>
                {timelineDays.map((d) => (
                  <div
                    key={d.dayName}
                    className={`py-1.5 px-2 rounded-lg ${
                      d.isToday
                        ? "bg-orange-500/15 border border-orange-500/30 text-orange-400 font-bold"
                        : "text-neutral-400"
                    }`}
                  >
                    <div>{d.dayName}</div>
                    <div className="text-[10px] opacity-80">{d.dateNumber}</div>
                  </div>
                ))}
              </div>

              <div className="divide-y divide-neutral-800/60 mt-2 text-xs">
                {/* Fila 1: Villa Cafetera */}
                <div className="grid grid-cols-8 gap-2 py-3 items-center group hover:bg-neutral-800/30 rounded-xl transition-colors">
                  <div className="font-semibold text-white pl-2 truncate">
                    Villa Cafetera
                    <span className="block text-[10px] font-normal text-neutral-400">Dueño: Marcela H.</span>
                  </div>
                  <div className="col-span-2">
                    <div className="bg-orange-500 text-white font-medium px-2 py-1.5 rounded-lg shadow-sm truncate text-[11px]">
                      Airbnb • David Miller (USA)
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="bg-neutral-700/80 border border-neutral-600/50 text-neutral-300 px-2 py-1.5 rounded-lg text-center truncate text-[10px]">
                      Limpieza
                    </div>
                  </div>
                  <div className="col-span-4">
                    <div className="bg-amber-600 text-white font-medium px-2 py-1.5 rounded-lg shadow-sm truncate text-[11px]">
                      Directa Web • Laura Gómez (4 noches)
                    </div>
                  </div>
                </div>

                {/* Fila 2: Apto 402 - Sunset */}
                <div className="grid grid-cols-8 gap-2 py-3 items-center group hover:bg-neutral-800/30 rounded-xl transition-colors">
                  <div className="font-semibold text-white pl-2 truncate">
                    Apto 402 - Sunset
                    <span className="block text-[10px] font-normal text-neutral-400">Dueño: Diego M.</span>
                  </div>
                  <div className="col-span-3">
                    <div className="bg-orange-500 text-white font-medium px-2 py-1.5 rounded-lg shadow-sm truncate text-[11px]">
                      Booking.com • Jean Pierre
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="bg-neutral-700/80 border border-neutral-600/50 text-neutral-300 px-2 py-1.5 rounded-lg text-center truncate text-[10px]">
                      Limpieza
                    </div>
                  </div>
                  <div className="col-span-3">
                    <div className="bg-orange-500 text-white font-medium px-2 py-1.5 rounded-lg shadow-sm truncate text-[11px]">
                      Airbnb • Sofía Mendoza
                    </div>
                  </div>
                </div>

                {/* Fila 3: Domo Forestal 01 */}
                <div className="grid grid-cols-8 gap-2 py-3 items-center group hover:bg-neutral-800/30 rounded-xl transition-colors">
                  <div className="font-semibold text-white pl-2 truncate">
                    Domo Forestal 01
                    <span className="block text-[10px] font-normal text-neutral-400">Glamping Luxury</span>
                  </div>
                  <div className="col-span-1 text-center text-neutral-500 font-mono text-[10px]">
                    Disponible
                  </div>
                  <div className="col-span-4">
                    <div className="bg-amber-600 text-white font-medium px-2 py-1.5 rounded-lg shadow-sm truncate text-[11px]">
                      Directa WhatsApp • Pareja Luna de Miel
                    </div>
                  </div>
                  <div className="col-span-2">
                    <div className="bg-orange-500 text-white font-medium px-2 py-1.5 rounded-lg shadow-sm truncate text-[11px]">
                      Expedia • Robert F.
                    </div>
                  </div>
                </div>

                {/* Fila 4: Penthouse 101 */}
                <div className="grid grid-cols-8 gap-2 py-3 items-center group hover:bg-neutral-800/30 rounded-xl transition-colors">
                  <div className="font-semibold text-white pl-2 truncate">
                    Penthouse 101
                    <span className="block text-[10px] font-normal text-neutral-400">Dueño: Elena R.</span>
                  </div>
                  <div className="col-span-7">
                    <div className="bg-amber-600 text-white font-medium px-3 py-1.5 rounded-lg shadow-sm flex items-center justify-between text-[11px]">
                      <span>Directa VIP • Corporativo Tech (Estadía extendida)</span>
                      <span className="font-mono text-[10px] bg-black/30 px-1.5 py-0.5 rounded">$3,380 USD</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-[11px] text-neutral-400">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Cero sobreventas garantizado • Sincronización cada 2 segundos
            </span>
            <button
              onClick={() => setActiveTab("calendario")}
              className="text-orange-400 hover:text-orange-300 font-medium hover:underline cursor-pointer"
            >
              Expandir a Vista Mensual →
            </button>
          </div>
        </div>

        {/* WIDGET INFERIOR IZQUIERDO: CONTROL DE LIMPIEZA */}
        <div className="col-span-1 md:col-span-6 bg-neutral-900/60 backdrop-blur-sm border border-neutral-800 rounded-2xl p-5 sm:p-6 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-orange-500" />
                <h3 className="text-base font-bold text-white tracking-tight">
                  Control de Limpieza (Housekeeping)
                </h3>
              </div>
              <span className="text-xs font-mono bg-neutral-800 px-2 py-0.5 rounded text-neutral-300">
                Cuadrillas de Hoy
              </span>
            </div>

            <div className="divide-y divide-neutral-800/80 mt-2">
              {cleaningTasks.map((task) => (
                <div
                  key={task.id}
                  className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-neutral-800/30 px-2 rounded-xl transition-colors"
                >
                  <div>
                    <div className="font-semibold text-sm text-white flex items-center gap-2">
                      <span>{task.property}</span>
                    </div>
                    <div className="text-xs text-neutral-400 flex items-center gap-3 mt-1">
                      <span>Salida: {task.checkoutTime}</span>
                      <span>•</span>
                      <span className="text-neutral-300">
                        {task.staff !== "Sin Asignar" ? `Asignado a: ${task.staff}` : "Sin asignar"}
                      </span>
                    </div>
                  </div>

                  <div className="self-start sm:self-center">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${task.badgeColor}`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${task.dotColor}`} />
                      {task.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-neutral-800 mt-4 flex items-center justify-between text-xs">
            <span className="text-neutral-400">3 de 4 limpiezas cubiertas</span>
            <button
              onClick={() => setActiveTab("limpieza")}
              className="text-orange-400 hover:text-orange-300 font-semibold cursor-pointer"
            >
              + Gestionar Cuadrillas →
            </button>
          </div>
        </div>

        {/* WIDGET INFERIOR DERECHO: RENDICIÓN DE CUENTAS DUEÑOS */}
        <div className="col-span-1 md:col-span-6 bg-neutral-900/60 backdrop-blur-sm border border-neutral-800 rounded-2xl p-5 sm:p-6 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
              <div className="flex items-center gap-2">
                <FileSpreadsheet className="w-4 h-4 text-orange-500" />
                <h3 className="text-base font-bold text-white tracking-tight">
                  Rendición de Cuentas (Propietarios)
                </h3>
              </div>
              <span className="text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded">
                Conexión n8n Activa
              </span>
            </div>

            <div className="overflow-x-auto mt-2">
              <table className="w-full text-left text-xs">
                <thead className="text-neutral-400 uppercase font-mono text-[10px] tracking-wider border-b border-neutral-800/80">
                  <tr>
                    <th className="py-2.5 px-2">Propietario</th>
                    <th className="py-2.5 px-2">Propiedad</th>
                    <th className="py-2.5 px-2 font-mono">Neto a Pagar</th>
                    <th className="py-2.5 px-2 text-right">Acción</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-800/60">
                  {ownerSettlements.map((item) => {
                    const isSent = sentReports[item.id];
                    return (
                      <tr key={item.id} className="hover:bg-neutral-800/30 transition-colors">
                        <td className="py-3 px-2 font-medium text-white">
                          {item.owner}
                        </td>
                        <td className="py-3 px-2 text-neutral-400">
                          {item.property}
                        </td>
                        <td className="py-3 px-2 font-mono font-bold text-orange-400">
                          {item.net}
                        </td>
                        <td className="py-3 px-2 text-right">
                          <button
                            onClick={() =>
                              handleSendReport(item.id, item.owner, item.property, item.net)
                            }
                            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                              isSent
                                ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                                : "bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm hover:scale-105 active:scale-95"
                            }`}
                            title={`Enviar reporte financiero a ${item.owner} por WhatsApp`}
                          >
                            <MessageCircle className="w-3.5 h-3.5" />
                            <span>{isSent ? "Enviado ✓" : "Enviar Reporte"}</span>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          <div className="pt-4 border-t border-neutral-800 mt-4 flex items-center justify-between text-xs">
            <span className="text-neutral-400">
              Total liquidaciones pendientes: <strong className="text-white font-mono">$8,450 USD</strong>
            </span>
            <button
              onClick={() => setActiveTab("propietarios")}
              className="text-orange-400 hover:text-orange-300 font-semibold cursor-pointer"
            >
              Liquidación Masiva →
            </button>
          </div>
        </div>
      </div>

      {/* MODAL INTERACTIVO: GENERAR REPORTES DE DUEÑOS */}
      {isReportModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl w-full max-w-lg p-6 shadow-2xl relative">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-orange-500" />
                <h3 className="text-lg font-bold text-white">
                  Generador Masivo de Reportes de Dueños
                </h3>
              </div>
              <button
                onClick={() => setIsReportModalOpen(false)}
                className="p-1 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-4 space-y-4 text-xs text-neutral-300">
              <p className="text-neutral-400">
                Este proceso consolidará automáticamente los ingresos brutos, deducirá comisiones de administración (20%), gastos de limpieza certificados y generará un estado de cuenta en PDF para cada propietario.
              </p>

              <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400">Período de Liquidación:</span>
                  <span className="font-mono text-white font-semibold">Octubre 2026 (Al día)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400">Propietarios a Notificar:</span>
                  <span className="font-mono text-emerald-400 font-semibold">4 Dueños</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400">Canal de Notificación:</span>
                  <span className="text-white font-medium">WhatsApp Business API (n8n Bot)</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs flex items-center gap-2">
                <Sparkles className="w-4 h-4 shrink-0" />
                <span>Cada propietario recibirá un link seguro con su extracto y gráficos de rendimiento de su propiedad.</span>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-neutral-800 mt-5">
              <button
                type="button"
                onClick={() => setIsReportModalOpen(false)}
                className="px-4 py-2 text-xs font-semibold text-neutral-400 hover:text-white"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsReportModalOpen(false);
                  alert(
                    "✓ Todos los reportes han sido generados y enviados a los dueños por WhatsApp mediante n8n."
                  );
                }}
                className="px-4 py-2.5 text-xs font-bold bg-orange-500 hover:bg-orange-600 text-white rounded-xl shadow-[0_0_20px_rgba(255,107,0,0.3)] transition-all"
              >
                Generar y Enviar a Todos (4)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Subcomponente: Vista Placeholder Calendario
const VistaCalendario = ({ setActiveTab }) => (
  <div className="space-y-6 animate-fadeIn">
    <div className="flex items-center justify-between pb-6 border-b border-neutral-800">
      <div>
        <h1 className="text-2xl font-bold text-white">Multi-Calendario & Disponibilidad</h1>
        <p className="text-neutral-400 text-sm mt-1">Sincronización en vivo de bloqueos de OTA y tarifas dinámicas.</p>
      </div>
      <button 
        onClick={() => setActiveTab("panel-general")}
        className="px-3.5 py-2 text-xs text-neutral-400 hover:text-white bg-neutral-900 border border-neutral-800 rounded-lg hover:border-neutral-700 transition-colors"
      >
        Volver al Panel General
      </button>
    </div>

    <div className="bg-neutral-900/40 border border-dashed border-neutral-800 rounded-2xl p-12 text-center">
      <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-500 flex items-center justify-center mx-auto mb-4">
        <CalendarDays className="w-7 h-7" />
      </div>
      <h3 className="text-lg font-bold text-white mb-2">Vista Extendida de Multi-Calendario</h3>
      <p className="text-neutral-400 text-sm max-w-md mx-auto mb-6">
        Aquí podrás visualizar vistas mensuales y anuales completas, modificar precios por temporadas y forzar sincronización instantánea con los canales OTA.
      </p>
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-800 text-orange-400 text-xs font-mono font-medium">
        <Sparkles className="w-3.5 h-3.5" /> Módulo en construcción - Próximamente
      </div>
    </div>
  </div>
);

// Subcomponente: Vista Placeholder Propietarios
const VistaPropietarios = ({ setActiveTab }) => (
  <div className="space-y-6 animate-fadeIn">
    <div className="flex items-center justify-between pb-6 border-b border-neutral-800">
      <div>
        <h1 className="text-2xl font-bold text-white">Propietarios & Liquidaciones</h1>
        <p className="text-neutral-400 text-sm mt-1">Gestión de acuerdos de comisión, retenciones y dispersión bancaria.</p>
      </div>
      <button 
        onClick={() => setActiveTab("panel-general")}
        className="px-3.5 py-2 text-xs text-neutral-400 hover:text-white bg-neutral-900 border border-neutral-800 rounded-lg hover:border-neutral-700 transition-colors"
      >
        Volver al Panel General
      </button>
    </div>

    <div className="bg-neutral-900/40 border border-dashed border-neutral-800 rounded-2xl p-12 text-center">
      <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-500 flex items-center justify-center mx-auto mb-4">
        <FileSpreadsheet className="w-7 h-7" />
      </div>
      <h3 className="text-lg font-bold text-white mb-2">Portal de Liquidación a Propietarios</h3>
      <p className="text-neutral-400 text-sm max-w-md mx-auto mb-6">
        Generación masiva de estados de cuenta con deducción de gastos operativos, facturación digital y envío de extractos en un solo clic.
      </p>
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-800 text-orange-400 text-xs font-mono font-medium">
        <Sparkles className="w-3.5 h-3.5" /> Módulo en construcción - Próximamente
      </div>
    </div>
  </div>
);

// Subcomponente: Vista Placeholder Limpieza
const VistaLimpieza = ({ setActiveTab }) => (
  <div className="space-y-6 animate-fadeIn">
    <div className="flex items-center justify-between pb-6 border-b border-neutral-800">
      <div>
        <h1 className="text-2xl font-bold text-white">Cuadrillas de Limpieza (Housekeeping)</h1>
        <p className="text-neutral-400 text-sm mt-1">Logística de turnos, check-lists de inspección y control de insumos.</p>
      </div>
      <button 
        onClick={() => setActiveTab("panel-general")}
        className="px-3.5 py-2 text-xs text-neutral-400 hover:text-white bg-neutral-900 border border-neutral-800 rounded-lg hover:border-neutral-700 transition-colors"
      >
        Volver al Panel General
      </button>
    </div>

    <div className="bg-neutral-900/40 border border-dashed border-neutral-800 rounded-2xl p-12 text-center">
      <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-500 flex items-center justify-center mx-auto mb-4">
        <Sparkles className="w-7 h-7" />
      </div>
      <h3 className="text-lg font-bold text-white mb-2">Gestión y Despacho de Cuadrillas</h3>
      <p className="text-neutral-400 text-sm max-w-md mx-auto mb-6">
        Asignación automática de limpiezas al detectar el check-out, verificación fotográfica de habitaciones e inventario de lencería en tiempo real.
      </p>
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-800 text-orange-400 text-xs font-mono font-medium">
        <Sparkles className="w-3.5 h-3.5" /> Módulo en construcción - Próximamente
      </div>
    </div>
  </div>
);

// Subcomponente: Vista Placeholder Asistente IA
const VistaAsistente = ({ setActiveTab }) => (
  <div className="space-y-6 animate-fadeIn">
    <div className="flex items-center justify-between pb-6 border-b border-neutral-800">
      <div>
        <h1 className="text-2xl font-bold text-white">Asistente IA (WhatsApp Concierge)</h1>
        <p className="text-neutral-400 text-sm mt-1">Atención 24/7 a huéspedes, entrega de claves y soporte en estancia.</p>
      </div>
      <button 
        onClick={() => setActiveTab("panel-general")}
        className="px-3.5 py-2 text-xs text-neutral-400 hover:text-white bg-neutral-900 border border-neutral-800 rounded-lg hover:border-neutral-700 transition-colors"
      >
        Volver al Panel General
      </button>
    </div>

    <div className="bg-neutral-900/40 border border-dashed border-neutral-800 rounded-2xl p-12 text-center">
      <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-500 flex items-center justify-center mx-auto mb-4">
        <Bot className="w-7 h-7" />
      </div>
      <h3 className="text-lg font-bold text-white mb-2">Centro de Control del Asistente Virtual</h3>
      <p className="text-neutral-400 text-sm max-w-md mx-auto mb-6">
        Monitoreo de conversaciones activas, prompts personalizados para reglas de convivencia y sincronización con cerraduras inteligentes.
      </p>
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-800 text-orange-400 text-xs font-mono font-medium">
        <Sparkles className="w-3.5 h-3.5" /> Módulo en construcción - Próximamente
      </div>
    </div>
  </div>
);

// Subcomponente: Vista Placeholder Configuración
const VistaConfiguracion = ({ setActiveTab }) => (
  <div className="space-y-6 animate-fadeIn">
    <div className="flex items-center justify-between pb-6 border-b border-neutral-800">
      <div>
        <h1 className="text-2xl font-bold text-white">Configuración del Portafolio</h1>
        <p className="text-neutral-400 text-sm mt-1">Parámetros del gestor, comisiones base, webhooks y cerraduras.</p>
      </div>
      <button 
        onClick={() => setActiveTab("panel-general")}
        className="px-3.5 py-2 text-xs text-neutral-400 hover:text-white bg-neutral-900 border border-neutral-800 rounded-lg hover:border-neutral-700 transition-colors"
      >
        Volver al Panel General
      </button>
    </div>

    <div className="bg-neutral-900/40 border border-dashed border-neutral-800 rounded-2xl p-12 text-center">
      <div className="w-14 h-14 rounded-2xl bg-neutral-800 border border-neutral-700 text-neutral-300 flex items-center justify-center mx-auto mb-4">
        <Settings className="w-7 h-7" />
      </div>
      <h3 className="text-lg font-bold text-white mb-2">Ajustes & Conectores Externos</h3>
      <p className="text-neutral-400 text-sm max-w-md mx-auto mb-6">
        Configura los porcentajes de comisión por defecto, claves API de WhatsApp, integración con cerraduras Tuya/Yale y cuentas bancarias para dispersión.
      </p>
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-800 text-neutral-400 text-xs font-mono font-medium">
        <Sparkles className="w-3.5 h-3.5" /> Módulo en construcción - Próximamente
      </div>
    </div>
  </div>
);

/**
 * PropertyManagerDashboard - Panel Maestro para el plan "Property Managers"
 */
export const PropertyManagerDashboard = ({ onLogout, onNavigateHome }) => {
  const [activeTab, setActiveTab] = useState("panel-general");
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  // Ítems de navegación específicos para Property Managers
  const navItems = [
    { id: "panel-general", label: "Panel General", icon: LayoutDashboard },
    { id: "calendario", label: "Multi-Calendario", icon: CalendarDays },
    { id: "propietarios", label: "Propietarios & Liquidaciones", icon: FileSpreadsheet },
    { id: "limpieza", label: "Cuadrillas de Limpieza", icon: Sparkles },
    { id: "asistente", label: "Asistente IA (WhatsApp)", icon: Bot },
    { id: "configuracion", label: "Configuración", icon: Settings }
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50 font-sans antialiased flex flex-col lg:flex-row selection:bg-orange-500 selection:text-white relative">
      
      {/* ===================================================================== */}
      {/* 1. TOP BAR MÓVIL */}
      {/* ===================================================================== */}
      <div className="lg:hidden bg-neutral-900/90 backdrop-blur-md border-b border-neutral-800 px-4 py-3.5 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <img
            src="/ALL-IN-ONE-LOGO-07.png"
            alt="All In One Hotels"
            className="h-8 w-auto invert brightness-110 contrast-125"
          />
          <span className="text-[10px] font-mono font-semibold bg-orange-500/15 text-orange-400 border border-orange-500/30 px-2 py-0.5 rounded">
            MANAGERS
          </span>
        </div>

        <button
          onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
          className="p-2 rounded-lg bg-neutral-800 text-neutral-300 hover:text-white"
          aria-label="Abrir menú de navegación"
        >
          {isMobileSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* ===================================================================== */}
      {/* 2. SIDEBAR (MENÚ LATERAL IZQUIERDO) */}
      {/* ===================================================================== */}
      {isMobileSidebarOpen && (
        <div
          onClick={() => setIsMobileSidebarOpen(false)}
          className="fixed inset-0 bg-black/75 backdrop-blur-sm z-40 lg:hidden"
        />
      )}

      <aside
        className={`fixed lg:sticky top-0 left-0 bottom-0 z-50 w-64 xl:w-72 bg-neutral-900 border-r border-neutral-800 flex flex-col justify-between shrink-0 transition-transform duration-300 ease-in-out h-screen ${
          isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div>
          {/* Logo y Badge de Nicho */}
          <div className="p-6 border-b border-neutral-800 flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <Link to="/">
                <img
                  src="/ALL-IN-ONE-LOGO-07.png"
                  alt="All In One Hotels"
                  className="h-9 w-auto object-contain invert brightness-110 contrast-125"
                />
              </Link>
              <span className="text-[10px] tracking-wider uppercase font-mono text-neutral-400 mt-1 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                Property Managers OS
              </span>
            </div>

            <button
              onClick={() => setIsMobileSidebarOpen(false)}
              className="lg:hidden p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Menú de Enlaces Dinámicos */}
          <nav className="p-3 space-y-1 mt-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsMobileSidebarOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all text-left cursor-pointer ${
                    isActive
                      ? "bg-orange-500/10 text-orange-500 border-r-2 border-orange-500 font-semibold"
                      : "text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/60"
                  }`}
                >
                  <Icon
                    className={`w-4 h-4 ${
                      isActive ? "text-orange-500" : "text-neutral-400"
                    }`}
                  />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Perfil del Administrador & Salida */}
        <div className="p-4 border-t border-neutral-800 bg-neutral-950/40">
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-neutral-900/80 border border-neutral-800">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 p-[1px] shadow-sm">
                <div className="w-full h-full bg-neutral-950 rounded-[11px] flex items-center justify-center font-bold text-xs text-orange-400">
                  PM
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-white tracking-tight">Administrador</span>
                <span className="text-[10px] font-mono text-neutral-400">14 Propiedades Activas</span>
              </div>
            </div>

            <Link
              to="/login"
              onClick={onLogout}
              title="Cerrar sesión"
              className="p-2 text-neutral-400 hover:text-red-400 hover:bg-neutral-800 rounded-lg transition-colors cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
            </Link>
          </div>

          <Link
            to="/"
            onClick={onNavigateHome}
            className="block mt-2.5 w-full text-center text-[11px] text-neutral-500 hover:text-orange-400 transition-colors py-1 cursor-pointer"
          >
            ← Ir a la Web Pública
          </Link>
        </div>
      </aside>

      {/* ===================================================================== */}
      {/* 3. ÁREA DE CONTENIDO PRINCIPAL DINÁMICA */}
      {/* ===================================================================== */}
      <main className="flex-1 p-5 sm:p-8 lg:p-10 max-w-7xl w-full mx-auto overflow-y-auto space-y-7">
        {activeTab === "panel-general" && <VistaPanelGeneral setActiveTab={setActiveTab} />}
        {activeTab === "calendario" && <VistaCalendario setActiveTab={setActiveTab} />}
        {activeTab === "propietarios" && <VistaPropietarios setActiveTab={setActiveTab} />}
        {activeTab === "limpieza" && <VistaLimpieza setActiveTab={setActiveTab} />}
        {activeTab === "asistente" && <VistaAsistente setActiveTab={setActiveTab} />}
        {activeTab === "configuracion" && <VistaConfiguracion setActiveTab={setActiveTab} />}
      </main>

    </div>
  );
};

export default PropertyManagerDashboard;
