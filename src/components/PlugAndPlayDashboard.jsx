"use client";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  TrendingUp,
  Radar,
  Radio,
  CheckCircle2,
  Cpu,
  Activity,
  Sliders,
  Settings,
  LogOut,
  RefreshCw,
  Zap,
  MessageCircle,
  DollarSign,
  ArrowUpRight,
  ExternalLink,
  ShieldCheck,
  Check,
  Menu,
  X,
  Server,
  Workflow,
  ArrowRight,
  Clock,
  Sparkles,
  Layers,
  Lock
} from "lucide-react";

/**
 * Sub-componente: VistaRendimiento
 * Contiene la telemetría principal de ventas de la IA, el embudo en vivo (Radar),
 * la arquitectura del puente API hacia el PMS y la tabla de últimos cierres autónomos.
 */
const VistaRendimiento = ({ setActiveTab }) => {
  const [isPingingPMS, setIsPingingPMS] = useState(false);
  const [pingResult, setPingResult] = useState(null);

  // Simulación de prueba de conexión con PMS externo (Cloudbeds / Sirvoy / Opera)
  const handleTestPMSConnection = () => {
    setIsPingingPMS(true);
    setPingResult(null);

    setTimeout(() => {
      setIsPingingPMS(false);
      setPingResult({
        latency: "42ms",
        status: "Conexión Óptima",
        timestamp: "Ahora mismo"
      });
    }, 1200);
  };

  // Últimos cierres exitosos inyectados en el PMS
  const successfulBookings = [
    {
      id: "res-01",
      phone: "+57 320***",
      guest: "Carlos V. (Medellín)",
      value: "$450 USD",
      dates: "12 Nov - 15 Nov (3 Noches)",
      gateway: "MercadoPago",
      pmsId: "ID-PMS: #88392",
      pmsSystem: "Cloudbeds",
      status: "Inyectado en PMS",
      time: "Hace 45 min"
    },
    {
      id: "res-02",
      phone: "+57 311***",
      guest: "Marcela T. (Bogotá)",
      value: "$620 USD",
      dates: "20 Nov - 23 Nov (3 Noches)",
      gateway: "Wompi (PSE)",
      pmsId: "ID-PMS: #88391",
      pmsSystem: "Cloudbeds",
      status: "Inyectado en PMS",
      time: "Hace 2 horas"
    },
    {
      id: "res-03",
      phone: "+1 786***",
      guest: "Jason K. (Miami, USA)",
      value: "$1,280 USD",
      dates: "05 Dic - 11 Dic (6 Noches)",
      gateway: "Stripe Intl.",
      pmsId: "ID-PMS: #88390",
      pmsSystem: "Cloudbeds",
      status: "Inyectado en PMS",
      time: "Hace 5 horas"
    },
    {
      id: "res-04",
      phone: "+57 315***",
      guest: "David G. (Cali)",
      value: "$340 USD",
      dates: "18 Oct - 20 Oct (2 Noches)",
      gateway: "Bancolombia QR",
      pmsId: "ID-PMS: #88389",
      pmsSystem: "Cloudbeds",
      status: "Inyectado en PMS",
      time: "Ayer"
    }
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* ===================================================================== */}
      {/* HEADER: TÍTULO ENTERPRISE & BOTÓN GHOST / OUTLINE */}
      {/* ===================================================================== */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-neutral-800/70">
        <div>
          <div className="flex items-center gap-2.5">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Panel de Asistente Comercial IA - Hotel Armenia Enterprise
            </h1>
            <span className="hidden xl:inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              PMS Sync Active
            </span>
          </div>
          <p className="text-sm text-neutral-400 mt-1">
            Telemetría de ventas autónomas, embudo conversacional en vivo y salud del puente API con tu software habitual.
          </p>
        </div>

        {/* Botón Estilo Outline/Ghost: "Probar Conexión PMS" */}
        <button
          onClick={handleTestPMSConnection}
          disabled={isPingingPMS}
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-neutral-200 hover:text-white border border-neutral-700/80 hover:border-neutral-500 hover:bg-neutral-900/90 transition-all cursor-pointer shrink-0"
        >
          <RefreshCw className={`w-4 h-4 text-orange-400 ${isPingingPMS ? "animate-spin" : ""}`} />
          <span>{isPingingPMS ? "Verificando Conexión..." : "Probar Conexión PMS"}</span>
        </button>
      </div>

      {/* Notificación de Ping PMS si fue ejecutada */}
      {pingResult && (
        <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center justify-between animate-in fade-in duration-200">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>
              <strong>Prueba Exitosa:</strong> Puente con Cloudbeds respondiendo con latencia de {pingResult.latency}.
            </span>
          </div>
          <span className="font-mono text-[11px] text-neutral-400">{pingResult.timestamp}</span>
        </div>
      )}

      {/* ===================================================================== */}
      {/* 1. KPIS DE RENDIMIENTO COMERCIAL (4 TARJETAS SUPERIORES) */}
      {/* ===================================================================== */}
      <section aria-label="KPIs Comerciales">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {/* KPI 1: Conversaciones Activas Hoy */}
          <div className="bg-neutral-900/60 backdrop-blur-sm border border-neutral-800 hover:border-neutral-700 rounded-2xl p-5 sm:p-6 transition-all group">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                Conversaciones Hoy
              </span>
              <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 border border-orange-500/20">
                <MessageCircle className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              24 <span className="text-sm font-medium text-emerald-400">Chats</span>
            </div>
            <div className="flex items-center gap-1.5 mt-2 text-xs text-neutral-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Atendiendo en vivo 24/7</span>
            </div>
          </div>

          {/* KPI 2: Tasa de Conversión IA */}
          <div className="bg-neutral-900/60 backdrop-blur-sm border border-neutral-800 hover:border-neutral-700 rounded-2xl p-5 sm:p-6 transition-all group">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                Conversión Comercial IA
              </span>
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
                <TrendingUp className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              18.5%
            </div>
            <div className="flex items-center gap-1.5 mt-2 text-xs text-emerald-400 font-semibold">
              <ArrowUpRight className="w-4 h-4" />
              <span>+2.1%</span>
              <span className="text-neutral-400 font-normal">vs. mes anterior</span>
            </div>
          </div>

          {/* KPI 3: Ventas Cerradas (Mes) - DESTACADO EN NARANJA */}
          <div className="bg-neutral-900/80 backdrop-blur-md border border-orange-500/30 hover:border-orange-500/50 rounded-2xl p-5 sm:p-6 transition-all relative overflow-hidden group shadow-[0_0_25px_rgba(255,107,0,0.08)]">
            <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/10 rounded-full blur-xl pointer-events-none" />
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono uppercase tracking-wider text-orange-400 font-semibold">
                Ventas Cerradas (Mes)
              </span>
              <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400 border border-orange-500/40">
                <DollarSign className="w-4 h-4" />
              </div>
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono">
              $12,400 <span className="text-sm font-normal text-neutral-400">USD</span>
            </div>
            <div className="mt-2 text-xs text-neutral-400 flex items-center gap-1">
              <span>Ingreso 100% inyectado en PMS</span>
            </div>
          </div>

          {/* KPI 4: Tiempo de Respuesta */}
          <div className="bg-neutral-900/60 backdrop-blur-sm border border-neutral-800 hover:border-neutral-700 rounded-2xl p-5 sm:p-6 transition-all group">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                Tiempo de Respuesta
              </span>
              <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 border border-orange-500/20">
                <Zap className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              &lt; 1.2s
            </div>
            <div className="mt-2 text-xs text-neutral-400">
              Piloto automático sin intervención
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* SECCIÓN CENTRAL: RADAR DE CONVERSACIONES + SALUD DE INTEGRACIÓN PMS */}
      {/* ===================================================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
        {/* RADAR DE CONVERSACIONES (EMBUDO EN VIVO) */}
        <div className="bg-neutral-900/60 backdrop-blur-sm border border-neutral-800 rounded-2xl p-6 sm:p-7 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
              <div className="flex items-center gap-2.5">
                <Radio className="w-5 h-5 text-orange-500" />
                <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  Radar de Conversaciones (Embudo en Vivo)
                </h2>
              </div>
              <span className="text-xs font-mono bg-orange-500/10 text-orange-400 border border-orange-500/20 px-2.5 py-0.5 rounded-full flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                6 Prospectos Activos
              </span>
            </div>

            {/* Fases del Embudo Conversacional */}
            <div className="space-y-4 mt-5">
              {/* Fase 1: Interés */}
              <div className="p-4 rounded-xl bg-neutral-950/70 border border-neutral-800/80 hover:border-neutral-700 transition-all">
                <div className="flex items-center justify-between text-xs mb-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded font-mono font-semibold bg-neutral-800 text-neutral-300 text-[10px]">
                      FASE 1
                    </span>
                    <span className="font-bold text-white">Interés & Fechas</span>
                  </div>
                  <span className="font-mono text-orange-400 font-bold">3 Clientes</span>
                </div>
                <p className="text-xs text-neutral-300 mb-2.5">
                  3 clientes cotizando fechas (Dic 15 - Dic 20).
                </p>
                <div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                  <div className="h-full bg-orange-500 rounded-full w-[60%] transition-all duration-500" />
                </div>
              </div>

              {/* Fase 2: Negociación */}
              <div className="p-4 rounded-xl bg-neutral-950/70 border border-neutral-800/80 hover:border-neutral-700 transition-all">
                <div className="flex items-center justify-between text-xs mb-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded font-mono font-semibold bg-neutral-800 text-neutral-300 text-[10px]">
                      FASE 2
                    </span>
                    <span className="font-bold text-white">Negociación & Políticas</span>
                  </div>
                  <span className="font-mono text-orange-400 font-bold">2 Clientes</span>
                </div>
                <p className="text-xs text-neutral-300 mb-2.5">
                  2 clientes validando políticas de mascotas y hora de check-in temprano.
                </p>
                <div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                  <div className="h-full bg-orange-500 rounded-full w-[40%] transition-all duration-500" />
                </div>
              </div>

              {/* Fase 3: Cierre */}
              <div className="p-4 rounded-xl bg-neutral-950/70 border border-emerald-500/20 hover:border-emerald-500/40 transition-all">
                <div className="flex items-center justify-between text-xs mb-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded font-mono font-semibold bg-emerald-500/20 text-emerald-400 text-[10px]">
                      FASE 3
                    </span>
                    <span className="font-bold text-white flex items-center gap-1.5">
                      <span>Cierre & Pasarela</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    </span>
                  </div>
                  <span className="font-mono text-emerald-400 font-bold">1 Cliente en Pago</span>
                </div>
                <p className="text-xs text-neutral-300 mb-2.5">
                  1 cliente en pasarela de pago (Wompi) por $450 USD.
                </p>
                <div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full w-[90%] transition-all duration-500" />
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-neutral-800 mt-5 flex items-center justify-between text-xs text-neutral-400">
            <span>Embudo alimentado por WhatsApp Business API</span>
            <button
              onClick={() => setActiveTab("radar")}
              className="text-orange-400 hover:text-orange-300 font-medium cursor-pointer"
            >
              Ver Radar Completo →
            </button>
          </div>
        </div>

        {/* SALUD DE LA INTEGRACIÓN (API / PMS) */}
        <div className="bg-neutral-900/60 backdrop-blur-sm border border-neutral-800 rounded-2xl p-6 sm:p-7 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
              <div className="flex items-center gap-2.5">
                <Cpu className="w-5 h-5 text-orange-500" />
                <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  Salud de la Integración (API / PMS)
                </h2>
              </div>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                Latencia 45ms
              </span>
            </div>

            {/* Diagrama Visual del Puente Tecnológico */}
            <div className="mt-5 p-4 rounded-xl bg-neutral-950/80 border border-neutral-800">
              <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 mb-3 text-center sm:text-left">
                Arquitectura del Puente en Tiempo Real
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-center text-center">
                {/* Nodo 1: Asistente IA */}
                <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 flex flex-col items-center">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mb-1.5" />
                  <div className="font-bold text-xs text-white">Asistente IA</div>
                  <div className="text-[10px] text-neutral-400 font-mono mt-0.5">WhatsApp Cloud</div>
                </div>

                {/* Nodo 2: Conector API */}
                <div className="p-3 rounded-xl bg-neutral-900 border border-orange-500/30 flex flex-col items-center relative">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse mb-1.5" />
                  <div className="font-bold text-xs text-orange-400">Conector API</div>
                  <div className="text-[10px] text-neutral-400 font-mono mt-0.5">Latencia: 45ms</div>
                </div>

                {/* Nodo 3: PMS Externo */}
                <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 flex flex-col items-center">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mb-1.5" />
                  <div className="font-bold text-xs text-white">PMS Externo</div>
                  <div className="text-[10px] text-neutral-400 font-mono mt-0.5">Cloudbeds / Sirvoy</div>
                </div>
              </div>
            </div>

            {/* Log de Telemetría Reciente */}
            <div className="mt-4 space-y-2.5">
              <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                Log de Telemetría Reciente
              </div>

              <div className="p-3 rounded-xl bg-neutral-950/60 border border-neutral-800/80 flex items-start gap-2.5 text-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium">Última lectura de inventario exitosa</span>
                  <span className="block text-[11px] text-neutral-400 font-mono">Hace 2 segundos • 0 discrepancias detectadas</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-neutral-950/60 border border-neutral-800/80 flex items-start gap-2.5 text-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium">Última inyección de reserva exitosa</span>
                  <span className="block text-[11px] text-neutral-400 font-mono">Hace 45 minutos • Reserva #88392 ($450 USD)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-neutral-800 mt-5 flex items-center justify-between text-xs text-neutral-400">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Webhook Bidireccional Activo
            </span>
            <button
              onClick={() => setActiveTab("salud-pms")}
              className="text-orange-400 hover:text-orange-300 font-medium cursor-pointer"
            >
              Inspeccionar Telemetría →
            </button>
          </div>
        </div>
      </div>

      {/* ===================================================================== */}
      {/* 4. ÚLTIMOS CIERRES EXITOSOS (TABLA ULTRA LIMPIA) */}
      {/* ===================================================================== */}
      <section aria-label="Últimos Cierres Exitosos" className="bg-neutral-900/60 backdrop-blur-sm border border-neutral-800 rounded-2xl overflow-hidden shadow-xl">
        <div className="p-5 sm:p-6 border-b border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
              Últimos Cierres Exitosos (ROI del Asistente Comercial)
            </h2>
            <p className="text-xs text-neutral-400 mt-0.5">
              Ventas cerradas de forma autónoma por WhatsApp e inyectadas en tu PMS sin intervención humana.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 self-start sm:self-auto">
              100% Cierre Autónomo
            </span>
            <button
              onClick={() => setActiveTab("historial")}
              className="text-xs text-orange-400 hover:text-orange-300 font-medium cursor-pointer"
            >
              Ver Todo el Historial →
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-neutral-950/60 text-neutral-400 border-b border-neutral-800 uppercase font-mono text-[10px] tracking-wider">
              <tr>
                <th scope="col" className="py-3 px-4 sm:px-6">Teléfono (WhatsApp)</th>
                <th scope="col" className="py-3 px-4">Estadía & Huésped</th>
                <th scope="col" className="py-3 px-4 font-mono">Valor de Reserva</th>
                <th scope="col" className="py-3 px-4">Pasarela de Pago</th>
                <th scope="col" className="py-3 px-4">ID Inyección PMS</th>
                <th scope="col" className="py-3 px-4 text-right">Tiempo</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800/60">
              {successfulBookings.map((b) => (
                <tr
                  key={b.id}
                  className="hover:bg-neutral-800/40 transition-colors group"
                >
                  <td className="py-3.5 px-4 sm:px-6 font-mono font-medium text-white">
                    {b.phone}
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="font-semibold text-white">{b.guest}</div>
                    <div className="text-[11px] text-neutral-400">{b.dates}</div>
                  </td>
                  <td className="py-3.5 px-4 font-mono font-bold text-emerald-400 text-sm">
                    {b.value}
                  </td>
                  <td className="py-3.5 px-4 text-neutral-300 font-medium">
                    {b.gateway}
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <Check className="w-3.5 h-3.5" />
                      {b.pmsId}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-right text-neutral-500 text-[11px] font-mono">
                    {b.time}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 sm:px-6 bg-neutral-950/40 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
          <span>Suma de últimos cierres: <strong className="text-white font-mono">$2,690 USD</strong></span>
          <span className="font-mono text-neutral-500">Cero comisiones a intermediarios</span>
        </div>
      </section>
    </div>
  );
};

// Subcomponente: Vista Placeholder Radar
const VistaRadar = ({ setActiveTab }) => (
  <div className="space-y-6 animate-fadeIn">
    <div className="flex items-center justify-between pb-6 border-b border-neutral-800">
      <div>
        <h1 className="text-2xl font-bold text-white">Radar de Conversaciones en Vivo</h1>
        <p className="text-neutral-400 text-sm mt-1">Inspección de leads en tiempo real a través del embudo de ventas.</p>
      </div>
      <button 
        onClick={() => setActiveTab("rendimiento-ia")}
        className="px-3.5 py-2 text-xs text-neutral-400 hover:text-white bg-neutral-900 border border-neutral-800 rounded-lg hover:border-neutral-700 transition-colors"
      >
        Volver a Rendimiento IA
      </button>
    </div>

    <div className="bg-neutral-900/40 border border-dashed border-neutral-800 rounded-2xl p-12 text-center">
      <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-500 flex items-center justify-center mx-auto mb-4">
        <Radio className="w-7 h-7" />
      </div>
      <h3 className="text-lg font-bold text-white mb-2">Monitoreo Detallado de Prospectos</h3>
      <p className="text-neutral-400 text-sm max-w-md mx-auto mb-6">
        Aquí podrás ver cada conversación individual en WhatsApp, clasificada por intención de compra, probabilidad de cierre y valor proyectado de la reserva.
      </p>
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-800 text-orange-400 text-xs font-mono font-medium">
        <Sparkles className="w-3.5 h-3.5" /> Módulo en construcción - Próximamente
      </div>
    </div>
  </div>
);

// Subcomponente: Vista Placeholder Historial
const VistaHistorial = ({ setActiveTab }) => (
  <div className="space-y-6 animate-fadeIn">
    <div className="flex items-center justify-between pb-6 border-b border-neutral-800">
      <div>
        <h1 className="text-2xl font-bold text-white">Historial de Cierres & Conversiones</h1>
        <p className="text-neutral-400 text-sm mt-1">Registro completo de reservas cerradas autónomamente por la IA.</p>
      </div>
      <button 
        onClick={() => setActiveTab("rendimiento-ia")}
        className="px-3.5 py-2 text-xs text-neutral-400 hover:text-white bg-neutral-900 border border-neutral-800 rounded-lg hover:border-neutral-700 transition-colors"
      >
        Volver a Rendimiento IA
      </button>
    </div>

    <div className="bg-neutral-900/40 border border-dashed border-neutral-800 rounded-2xl p-12 text-center">
      <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
        <CheckCircle2 className="w-7 h-7" />
      </div>
      <h3 className="text-lg font-bold text-white mb-2">Auditoría Histórica de Ventas</h3>
      <p className="text-neutral-400 text-sm max-w-md mx-auto mb-6">
        Consulta todos los comprobantes de pago procesados, IDs de inyección en el PMS, métricas de retención y análisis de ventas por temporada.
      </p>
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-800 text-emerald-400 text-xs font-mono font-medium">
        <Sparkles className="w-3.5 h-3.5" /> Módulo en construcción - Próximamente
      </div>
    </div>
  </div>
);

// Subcomponente: Vista Placeholder Salud PMS
const VistaSaludPMS = ({ setActiveTab }) => (
  <div className="space-y-6 animate-fadeIn">
    <div className="flex items-center justify-between pb-6 border-b border-neutral-800">
      <div>
        <h1 className="text-2xl font-bold text-white">Salud de Integración & Telemetría PMS</h1>
        <p className="text-neutral-400 text-sm mt-1">Diagnóstico profundo del puente API entre WhatsApp y tu software hotelero.</p>
      </div>
      <button 
        onClick={() => setActiveTab("rendimiento-ia")}
        className="px-3.5 py-2 text-xs text-neutral-400 hover:text-white bg-neutral-900 border border-neutral-800 rounded-lg hover:border-neutral-700 transition-colors"
      >
        Volver a Rendimiento IA
      </button>
    </div>

    <div className="bg-neutral-900/40 border border-dashed border-neutral-800 rounded-2xl p-12 text-center">
      <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-500 flex items-center justify-center mx-auto mb-4">
        <Activity className="w-7 h-7" />
      </div>
      <h3 className="text-lg font-bold text-white mb-2">Telemetría de Webhooks y Endpoints</h3>
      <p className="text-neutral-400 text-sm max-w-md mx-auto mb-6">
        Monitorea el flujo bidireccional de reservas, tiempos de sincronización de tarifas, caídas de conexión y logs de error en bruto.
      </p>
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-800 text-orange-400 text-xs font-mono font-medium">
        <Sparkles className="w-3.5 h-3.5" /> Módulo en construcción - Próximamente
      </div>
    </div>
  </div>
);

// Subcomponente: Vista Placeholder Ajustes IA
const VistaAjustes = ({ setActiveTab }) => (
  <div className="space-y-6 animate-fadeIn">
    <div className="flex items-center justify-between pb-6 border-b border-neutral-800">
      <div>
        <h1 className="text-2xl font-bold text-white">Ajustes & Parámetros del Asistente IA</h1>
        <p className="text-neutral-400 text-sm mt-1">Configuración del comportamiento comercial, tono y catálogo sincronizado.</p>
      </div>
      <button 
        onClick={() => setActiveTab("rendimiento-ia")}
        className="px-3.5 py-2 text-xs text-neutral-400 hover:text-white bg-neutral-900 border border-neutral-800 rounded-lg hover:border-neutral-700 transition-colors"
      >
        Volver a Rendimiento IA
      </button>
    </div>

    <div className="bg-neutral-900/40 border border-dashed border-neutral-800 rounded-2xl p-12 text-center">
      <div className="w-14 h-14 rounded-2xl bg-neutral-800 border border-neutral-700 text-neutral-300 flex items-center justify-center mx-auto mb-4">
        <Sliders className="w-7 h-7" />
      </div>
      <h3 className="text-lg font-bold text-white mb-2">Personalización del Agente Comercial</h3>
      <p className="text-neutral-400 text-sm max-w-md mx-auto mb-6">
        Modifica el prompt del sistema, políticas de descuento por estadías prolongadas, enlaces de pasarelas de pago y credenciales de acceso al PMS.
      </p>
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-800 text-neutral-400 text-xs font-mono font-medium">
        <Sparkles className="w-3.5 h-3.5" /> Módulo en construcción - Próximamente
      </div>
    </div>
  </div>
);

/**
 * PlugAndPlayDashboard - Centro de Mando para el plan "Plug & Play" (Enterprise Add-on)
 */
export const PlugAndPlayDashboard = ({ onLogout, onNavigateHome }) => {
  const [activeTab, setActiveTab] = useState("rendimiento-ia");
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  // Ítems de navegación compactos Enterprise
  const navItems = [
    { id: "rendimiento-ia", label: "Rendimiento IA", icon: TrendingUp },
    { id: "radar", label: "Radar de Conversaciones", icon: Radio },
    { id: "historial", label: "Historial de Cierres", icon: CheckCircle2 },
    { id: "salud-pms", label: "Salud de Integración (PMS)", icon: Activity },
    { id: "ajustes", label: "Ajustes de IA", icon: Sliders },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50 font-sans antialiased flex flex-col lg:flex-row selection:bg-orange-500 selection:text-white relative">
      
      {/* ===================================================================== */}
      {/* 1. TOP BAR MÓVIL */}
      {/* ===================================================================== */}
      <div className="lg:hidden bg-neutral-900/90 backdrop-blur-md border-b border-neutral-800 px-4 py-3.5 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-2.5">
          <img
            src="/ALL-IN-ONE-LOGO-07.png"
            alt="All In One Hotels"
            className="h-8 w-auto invert brightness-110 contrast-125"
          />
          <span className="text-[10px] font-mono font-semibold bg-orange-500/15 text-orange-400 border border-orange-500/30 px-2 py-0.5 rounded">
            PLUG & PLAY
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
      {/* 2. SIDEBAR REDUCIDO & ENTERPRISE */}
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
          {/* Logo y Badge de Integración */}
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
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Plug & Play • Add-On Enterprise
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

          {/* Tarjeta de Estado del Puente API en Sidebar */}
          <div className="mx-3 mt-4 p-3.5 rounded-xl bg-neutral-950/70 border border-neutral-800/80 text-xs">
            <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 mb-1.5">
              <span>PMS Conectado:</span>
              <span className="text-emerald-400 font-bold">Cloudbeds</span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-neutral-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Webhook Bidireccional OK</span>
            </div>
          </div>
        </div>

        {/* Perfil Enterprise & Salida */}
        <div className="p-4 border-t border-neutral-800 bg-neutral-950/40">
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-neutral-900/80 border border-neutral-800">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 p-[1px] shadow-sm">
                <div className="w-full h-full bg-neutral-950 rounded-[11px] flex items-center justify-center font-bold text-xs text-orange-400">
                  HA
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-white tracking-tight">Hotel Armenia</span>
                <span className="text-[10px] font-mono text-neutral-400">Enterprise Add-On</span>
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
      {/* 3. ÁREA PRINCIPAL DINÁMICA: EVALUACIÓN DE activeTab */}
      {/* ===================================================================== */}
      <main className="flex-1 p-6 sm:p-9 lg:p-12 max-w-7xl w-full mx-auto overflow-y-auto space-y-8">
        {activeTab === "rendimiento-ia" && <VistaRendimiento setActiveTab={setActiveTab} />}
        {activeTab === "radar" && <VistaRadar setActiveTab={setActiveTab} />}
        {activeTab === "historial" && <VistaHistorial setActiveTab={setActiveTab} />}
        {activeTab === "salud-pms" && <VistaSaludPMS setActiveTab={setActiveTab} />}
        {activeTab === "ajustes" && <VistaAjustes setActiveTab={setActiveTab} />}
      </main>

    </div>
  );
};

export default PlugAndPlayDashboard;
