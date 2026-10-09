"use client";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  CalendarDays,
  Users,
  Bot,
  CreditCard,
  Settings,
  LogOut,
  Plus,
  Copy,
  Check,
  KeyRound,
  Clock,
  Sparkles,
  Percent,
  Coins,
  MessageCircle,
  ExternalLink,
  ShieldCheck,
  Menu,
  X,
  Share2,
  DollarSign,
  Send,
  Zap,
  Layers,
  Compass,
  CheckCircle2,
  AlertCircle
} from "lucide-react";

/**
 * Sub-componente: VistaPanelPrincipal
 * Contiene los KPIs diarios, la Operativa de Hoy (Llegadas y Salidas con enlace de pago Wompi),
 * el Live Feed de eventos de WhatsApp y el banner de sincronización de Channex.
 */
const VistaPanelPrincipal = ({ setActiveTab }) => {
  const [copiedId, setCopiedId] = useState(null);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  // Formulario de nuevo link de pago
  const [paymentForm, setPaymentForm] = useState({
    guestName: "",
    accommodation: "Cabaña Salento",
    amount: "$150 USD",
    concept: "Saldo Pendiente 50% - Reserva #GL-89"
  });

  // Operativa de Hoy (Llegadas y Salidas)
  const [todayOperations] = useState([
    {
      id: "op-1",
      room: "Cabaña Salento",
      type: "Llegada",
      time: "14:00",
      guest: "Camila Ríos",
      paymentStatus: "Pagado",
      paymentBadge: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
      paymentText: "100% Pagado",
      doorCode: "Enviado",
      codeValue: "4920#",
      amount: "$320 USD"
    },
    {
      id: "op-2",
      room: "Suite Armenia",
      type: "Llegada",
      time: "15:30",
      guest: "Felipe Gómez",
      paymentStatus: "Pendiente",
      paymentBadge: "bg-orange-500/15 text-orange-400 border-orange-500/30",
      paymentText: "Saldo Pendiente (50%)",
      doorCode: "Por Enviar",
      codeValue: "Bloqueado",
      amount: "$160 USD Pendiente",
      paymentLink: "https://checkout.wompi.co/l/glamping-suite-armenia-984"
    },
    {
      id: "op-3",
      room: "Domo Mirador 3",
      type: "Salida",
      time: "11:00",
      guest: "Andrés Meza",
      paymentStatus: "Pagado",
      paymentBadge: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
      paymentText: "100% Liquidado",
      doorCode: "Desactivado",
      codeValue: "Expirado",
      amount: "$420 USD Total"
    }
  ]);

  // Live Feed de Eventos del Asistente IA (WhatsApp)
  const aiFeedEvents = [
    {
      id: "ai-1",
      timestamp: "Hace 2 min",
      type: "quote",
      icon: Bot,
      iconColor: "text-orange-400",
      bgColor: "bg-orange-500/10 border-orange-500/20",
      title: "Cotización Automática Enviada",
      desc: "Cotización enviada a +57 311 892 4102 para el fin de semana del 15 de Octubre (2 noches, Cabaña Salento).",
      channel: "WhatsApp IA"
    },
    {
      id: "ai-2",
      timestamp: "Hace 15 min",
      type: "payment",
      icon: DollarSign,
      iconColor: "text-emerald-400",
      bgColor: "bg-emerald-500/10 border-emerald-500/20",
      title: "Reserva Confirmada & Pago Liquidado",
      desc: "Reserva confirmada. Link de pago procesado exitosamente por $320 USD vía Wompi/Bancolombia.",
      channel: "Pasarela Web Directa"
    },
    {
      id: "ai-3",
      timestamp: "Hace 1 hora",
      type: "key",
      icon: KeyRound,
      iconColor: "text-blue-400",
      bgColor: "bg-blue-500/10 border-blue-500/20",
      title: "Cerradura Inteligente Activada",
      desc: "Código de cerradura digital [4920#] despachado a Huésped (Camila Ríos - Cabaña 2) con video de llegada.",
      channel: "WhatsApp Dispatcher"
    },
    {
      id: "ai-4",
      timestamp: "Hace 2 horas",
      type: "faq",
      icon: MessageCircle,
      iconColor: "text-purple-400",
      bgColor: "bg-purple-500/10 border-purple-500/20",
      title: "Duda Frecuente Resuelta en 1.8s",
      desc: "¿El jacuzzi es privado y con agua caliente? -> 'Sí, totalmente privado con calentador de agua a 38°C'.",
      channel: "Agente IA 24/7"
    }
  ];

  // Copiar link de pago
  const handleCopyLink = (id, link) => {
    navigator.clipboard?.writeText(link || "https://checkout.wompi.co/l/glamping-quindio");
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  // Crear link de pago manual
  const handleGeneratePaymentLink = (e) => {
    e.preventDefault();
    const generatedUrl = `https://checkout.wompi.co/l/glamping-${Date.now().toString().slice(-4)}`;
    navigator.clipboard?.writeText(generatedUrl);
    setIsPaymentModalOpen(false);
    alert(
      `✓ Link de Pago Wompi/MercadoPago Creado con Éxito:\n${generatedUrl}\n\nSe ha copiado a tu portapapeles y se ha enviado automáticamente al huésped por WhatsApp.`
    );
  };

  return (
    <div className="space-y-7 animate-fadeIn">
      {/* ===================================================================== */}
      {/* HEADER: VISTA GENERAL & BOTÓN ACCIÓN RÁPIDA */}
      {/* ===================================================================== */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-neutral-800/60">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Vista General - Glamping Quindío
            </h1>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              En Vivo
            </span>
          </div>
          <p className="text-sm text-neutral-400 mt-1">
            Monitoreo diario de check-ins, cobros pendientes y actividad en tiempo real del asistente de WhatsApp.
          </p>
        </div>

        <button
          onClick={() => setIsPaymentModalOpen(true)}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-orange-500 hover:bg-orange-600 text-white shadow-[0_0_20px_rgba(255,107,0,0.3)] transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>+ Nuevo Link de Pago Manual</span>
        </button>
      </div>

      {/* ===================================================================== */}
      {/* 1. KPIS OPERATIVOS (4 TARJETAS SUPERIORES) */}
      {/* ===================================================================== */}
      <section aria-label="KPIs Operativos">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5">
          {/* KPI 1: Llegadas Hoy */}
          <div className="bg-neutral-900/60 backdrop-blur-sm border border-neutral-800 hover:border-neutral-700 rounded-2xl p-5 sm:p-6 transition-all group">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                Llegadas Hoy
              </span>
              <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 border border-orange-500/20">
                <KeyRound className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              3 <span className="text-sm font-medium text-emerald-400">Check-ins</span>
            </div>
            <div className="flex items-center gap-1.5 mt-2 text-xs text-emerald-400 font-medium">
              <Check className="w-3.5 h-3.5" />
              <span>Todos pagados</span>
            </div>
          </div>

          {/* KPI 2: Salidas Hoy */}
          <div className="bg-neutral-900/60 backdrop-blur-sm border border-neutral-800 hover:border-neutral-700 rounded-2xl p-5 sm:p-6 transition-all group">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                Salidas Hoy
              </span>
              <div className="w-8 h-8 rounded-lg bg-neutral-800/80 flex items-center justify-center text-neutral-300 border border-neutral-700/60">
                <Clock className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              2 <span className="text-sm font-medium text-neutral-400">Check-outs</span>
            </div>
            <div className="mt-2 text-xs text-neutral-400">
              2 Cabañas para limpieza y relevo
            </div>
          </div>

          {/* KPI 3: Ocupación Semanal */}
          <div className="bg-neutral-900/60 backdrop-blur-sm border border-neutral-800 hover:border-neutral-700 rounded-2xl p-5 sm:p-6 transition-all group">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                Ocupación Semanal
              </span>
              <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 border border-orange-500/20">
                <Percent className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              92%
            </div>
            <div className="mt-2 text-xs text-neutral-400">
              Picos de alta demanda para este fin de semana
            </div>
          </div>

          {/* KPI 4: Ahorro en Comisiones */}
          <div className="bg-neutral-900/60 backdrop-blur-sm border border-neutral-800 hover:border-neutral-700 rounded-2xl p-5 sm:p-6 transition-all group">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                Ahorro en Comisiones
              </span>
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
                <Coins className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 tracking-tight">
              +$450 <span className="text-xs font-mono font-normal text-emerald-400/80">USD</span>
            </div>
            <div className="mt-2 text-xs text-neutral-400">
              Retenido por reservas directas vs. pagar a OTAs
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 2. OPERATIVA DE HOY + LIVE FEED DEL ASISTENTE IA */}
      {/* ===================================================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* OPERATIVA DE HOY (Llegadas y Salidas) */}
        <div className="lg:col-span-2 bg-neutral-900/60 backdrop-blur-sm border border-neutral-800 rounded-2xl p-5 sm:p-6 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-neutral-800">
              <div className="flex items-center gap-2">
                <KeyRound className="w-5 h-5 text-orange-500" />
                <h2 className="text-lg font-bold text-white tracking-tight">
                  Operativa de Hoy (Llegadas y Salidas)
                </h2>
              </div>
              <span className="text-xs font-mono bg-neutral-800 px-2.5 py-0.5 rounded text-neutral-300 self-start sm:self-auto">
                Prioridad Inmediata
              </span>
            </div>

            {/* Lista Operativa de Acciones */}
            <div className="divide-y divide-neutral-800/80 mt-2">
              {/* Cabaña Salento */}
              <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-neutral-800/20 px-2 rounded-xl transition-colors">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-white">Cabaña Salento</span>
                    <span className="text-xs font-mono text-neutral-400">• 14:00</span>
                  </div>
                  <div className="text-xs text-neutral-300 mt-1">
                    Huésped: <strong className="text-white">Camila Ríos</strong> ({todayOperations[0].amount})
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-[11px] font-mono text-neutral-400">
                      Código de puerta: <span className="text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded">4920# (Enviado)</span>
                    </span>
                  </div>
                </div>

                <div className="flex sm:flex-col items-center sm:items-end justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    <Check className="w-3 h-3" />
                    100% Pagado
                  </span>
                  <span className="text-[11px] text-neutral-500">
                    Llegada confirmada
                  </span>
                </div>
              </div>

              {/* Suite Armenia */}
              <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-neutral-800/20 px-2 rounded-xl transition-colors">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-white">Suite Armenia</span>
                    <span className="text-xs font-mono text-neutral-400">• 15:30</span>
                  </div>
                  <div className="text-xs text-neutral-300 mt-1">
                    Huésped: <strong className="text-white">Felipe Gómez</strong> ({todayOperations[1].amount})
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-[11px] font-mono text-neutral-400">
                      Código cerradura: <span className="text-orange-400 font-semibold bg-orange-500/10 px-1.5 py-0.5 rounded">Pendiente de cobro final</span>
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-start sm:items-end gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-orange-500/15 text-orange-400 border border-orange-500/30">
                    <AlertCircle className="w-3 h-3" />
                    Saldo Pendiente (50%)
                  </span>

                  <button
                    onClick={() => handleCopyLink("suite-armenia", todayOperations[1].paymentLink)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      copiedId === "suite-armenia"
                        ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                        : "bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white border border-neutral-700"
                    }`}
                    title="Copiar link de Wompi/MercadoPago para enviar por WhatsApp"
                  >
                    {copiedId === "suite-armenia" ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>¡Link Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-orange-400" />
                        <span>Copiar Link Wompi/MercadoPago</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Domo Mirador 3 (Salida) */}
              <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-neutral-800/20 px-2 rounded-xl transition-colors">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-white">Domo Mirador 3</span>
                    <span className="text-xs font-mono text-neutral-400">• Salida 11:00 AM</span>
                  </div>
                  <div className="text-xs text-neutral-300 mt-1">
                    Huésped: <strong className="text-white">Andrés Meza</strong> (Check-out listo)
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-[11px] font-mono text-neutral-400">
                      Cerradura: <span className="text-neutral-400 bg-neutral-800 px-1.5 py-0.5 rounded">Código Expirado</span>
                    </span>
                  </div>
                </div>

                <div className="flex sm:flex-col items-center sm:items-end justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    100% Liquidado
                  </span>
                  <span className="text-[11px] text-neutral-400">
                    Listo para inspección de aseo
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-neutral-800 mt-4 flex items-center justify-between text-xs text-neutral-400">
            <span>Automatización de códigos activa vía n8n</span>
            <button
              onClick={() => setActiveTab("calendario")}
              className="text-orange-400 hover:text-orange-300 font-medium hover:underline cursor-pointer"
            >
              Ver Agenda Completa →
            </button>
          </div>
        </div>

        {/* LIVE FEED DEL ASISTENTE IA */}
        <div className="lg:col-span-1 bg-black/40 backdrop-blur-md border border-neutral-800 rounded-2xl p-5 sm:p-6 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5 text-orange-500" />
                <h3 className="text-base font-bold text-white tracking-tight">
                  Live Feed Asistente IA
                </h3>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                WhatsApp 24/7
              </div>
            </div>

            <div className="space-y-3.5 mt-4">
              {aiFeedEvents.map((event) => {
                const Icon = event.icon;
                return (
                  <div
                    key={event.id}
                    className="p-3.5 rounded-xl bg-neutral-900/70 border border-neutral-800/80 hover:border-neutral-700/80 transition-all text-xs"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <div className={`p-1 rounded-md ${event.bgColor}`}>
                          <Icon className={`w-3.5 h-3.5 ${event.iconColor}`} />
                        </div>
                        <span className="font-bold text-white text-[12px]">{event.title}</span>
                      </div>
                      <span className="text-[10px] font-mono text-neutral-400 shrink-0">
                        {event.timestamp}
                      </span>
                    </div>

                    <p className="text-neutral-300 text-[11.5px] leading-relaxed pl-7">
                      {event.desc}
                    </p>

                    <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 mt-2 pl-7 pt-1 border-t border-neutral-800/40">
                      <span>Canal: {event.channel}</span>
                      <span className="text-emerald-400 font-semibold">Autónomo</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-4 border-t border-neutral-800 mt-4 flex items-center justify-between text-xs">
            <span className="text-neutral-400 text-[11px]">
              Tiempo prom. respuesta: <strong className="text-white font-mono">1.8 segundos</strong>
            </span>
            <button
              onClick={() => setActiveTab("interacciones")}
              className="text-orange-400 hover:text-orange-300 font-semibold text-xs cursor-pointer"
            >
              Ver Chats en Vivo →
            </button>
          </div>
        </div>
      </div>

      {/* ===================================================================== */}
      {/* 3. ESTADO DE CONEXIÓN CHANNEX (BANNER HORIZONTAL) */}
      {/* ===================================================================== */}
      <section aria-label="Sincronización Multicanal">
        <div className="bg-neutral-900/60 backdrop-blur-sm border border-neutral-800 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-white">
                  Sincronización Multicanal Activa (Channex)
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <p className="text-xs text-neutral-400 mt-0.5">
                Airbnb (<span className="text-emerald-400 font-medium">Conectado</span>) • 
                Booking.com (<span className="text-emerald-400 font-medium">Conectado</span>) • 
                Último barrido hace 2 segundos
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="hidden md:inline-flex items-center gap-1.5 text-xs text-neutral-400 font-mono">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Cero Sobreventas
            </span>
            <button
              onClick={() => alert("Verificando consistencia de tarifas y calendarios con Channex...")}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-neutral-800 hover:bg-neutral-700 text-neutral-200 border border-neutral-700 transition-colors cursor-pointer"
            >
              <span>Forzar Sync</span>
            </button>
          </div>
        </div>
      </section>

      {/* MODAL: NUEVO LINK DE PAGO MANUAL */}
      {isPaymentModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl w-full max-w-md p-6 shadow-2xl relative">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
              <div className="flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-orange-500" />
                <h3 className="text-lg font-bold text-white">
                  Generar Link de Pago Manual
                </h3>
              </div>
              <button
                onClick={() => setIsPaymentModalOpen(false)}
                className="p-1 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleGeneratePaymentLink} className="space-y-4 mt-4 text-xs">
              <div>
                <label className="block font-mono uppercase text-neutral-400 mb-1">
                  Nombre del Huésped
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Felipe Gómez"
                  value={paymentForm.guestName}
                  onChange={(e) => setPaymentForm({ ...paymentForm, guestName: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-neutral-950 border border-neutral-800 rounded-xl text-sm text-white focus:outline-none focus:border-orange-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-mono uppercase text-neutral-400 mb-1">
                    Cabaña / Habitación
                  </label>
                  <select
                    value={paymentForm.accommodation}
                    onChange={(e) => setPaymentForm({ ...paymentForm, accommodation: e.target.value })}
                    className="w-full px-3 py-2.5 bg-neutral-950 border border-neutral-800 rounded-xl text-xs text-white focus:outline-none focus:border-orange-500"
                  >
                    <option value="Cabaña Salento">Cabaña Salento</option>
                    <option value="Suite Armenia">Suite Armenia</option>
                    <option value="Domo Mirador 3">Domo Mirador 3</option>
                    <option value="Glamping 4 Luxury">Glamping 4 Luxury</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono uppercase text-neutral-400 mb-1">
                    Monto a Cobrar
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="$160 USD"
                    value={paymentForm.amount}
                    onChange={(e) => setPaymentForm({ ...paymentForm, amount: e.target.value })}
                    className="w-full px-3 py-2.5 bg-neutral-950 border border-neutral-800 rounded-xl text-xs text-white focus:outline-none focus:border-orange-500"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono uppercase text-neutral-400 mb-1">
                  Pasarela de Pago Preferida
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <div className="p-2 rounded-lg bg-neutral-950 border border-orange-500/50 text-center text-[11px] font-semibold text-orange-400">
                    Wompi (PSE/Tarjetas)
                  </div>
                  <div className="p-2 rounded-lg bg-neutral-950 border border-neutral-800 text-center text-[11px] text-neutral-400">
                    MercadoPago
                  </div>
                  <div className="p-2 rounded-lg bg-neutral-950 border border-neutral-800 text-center text-[11px] text-neutral-400">
                    Stripe Intl.
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 text-[11px] flex items-center gap-2">
                <Sparkles className="w-4 h-4 shrink-0" />
                <span>Al generar el link, el bot de WhatsApp notificará al huésped con el botón de pago seguro de inmediato.</span>
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-neutral-800 mt-4">
                <button
                  type="button"
                  onClick={() => setIsPaymentModalOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-neutral-400 hover:text-white"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-bold bg-orange-500 hover:bg-orange-600 text-white rounded-xl shadow-md transition-colors"
                >
                  Crear & Copiar Link
                </button>
              </div>
            </form>
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
        <h1 className="text-2xl font-bold text-white">Calendario de Reservas & Ocupación</h1>
        <p className="text-neutral-400 text-sm mt-1">Disponibilidad en tiempo real de domos, cabañas y suites.</p>
      </div>
      <button 
        onClick={() => setActiveTab("panel-principal")}
        className="px-3.5 py-2 text-xs text-neutral-400 hover:text-white bg-neutral-900 border border-neutral-800 rounded-lg hover:border-neutral-700 transition-colors"
      >
        Volver al Panel Principal
      </button>
    </div>

    <div className="bg-neutral-900/40 border border-dashed border-neutral-800 rounded-2xl p-12 text-center">
      <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-500 flex items-center justify-center mx-auto mb-4">
        <CalendarDays className="w-7 h-7" />
      </div>
      <h3 className="text-lg font-bold text-white mb-2">Calendario de Ocupación & Bloqueos</h3>
      <p className="text-neutral-400 text-sm max-w-md mx-auto mb-6">
        Gestiona tarifas de temporada alta, estadías mínimas y bloqueos por mantenimiento con sincronización instantánea hacia Airbnb y Booking.
      </p>
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-800 text-orange-400 text-xs font-mono font-medium">
        <Sparkles className="w-3.5 h-3.5" /> Módulo en construcción - Próximamente
      </div>
    </div>
  </div>
);

// Subcomponente: Vista Placeholder Huéspedes CRM
const VistaHuespedes = ({ setActiveTab }) => (
  <div className="space-y-6 animate-fadeIn">
    <div className="flex items-center justify-between pb-6 border-b border-neutral-800">
      <div>
        <h1 className="text-2xl font-bold text-white">Directorio de Huéspedes (CRM)</h1>
        <p className="text-neutral-400 text-sm mt-1">Historial de estadías, preferencias, consumo y fidelización.</p>
      </div>
      <button 
        onClick={() => setActiveTab("panel-principal")}
        className="px-3.5 py-2 text-xs text-neutral-400 hover:text-white bg-neutral-900 border border-neutral-800 rounded-lg hover:border-neutral-700 transition-colors"
      >
        Volver al Panel Principal
      </button>
    </div>

    <div className="bg-neutral-900/40 border border-dashed border-neutral-800 rounded-2xl p-12 text-center">
      <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-500 flex items-center justify-center mx-auto mb-4">
        <Users className="w-7 h-7" />
      </div>
      <h3 className="text-lg font-bold text-white mb-2">Base de Datos de Huéspedes</h3>
      <p className="text-neutral-400 text-sm max-w-md mx-auto mb-6">
        Histórico completo de visitas, notas de conserjería (aniversarios, alergias, mascotas) y campañas de re-reserva directa con 0% comisiones.
      </p>
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-800 text-orange-400 text-xs font-mono font-medium">
        <Sparkles className="w-3.5 h-3.5" /> Módulo en construcción - Próximamente
      </div>
    </div>
  </div>
);

// Subcomponente: Vista Placeholder Interacciones IA
const VistaInteracciones = ({ setActiveTab }) => (
  <div className="space-y-6 animate-fadeIn">
    <div className="flex items-center justify-between pb-6 border-b border-neutral-800">
      <div>
        <h1 className="text-2xl font-bold text-white">Interacciones IA & WhatsApp Concierge</h1>
        <p className="text-neutral-400 text-sm mt-1">Monitoreo de conversaciones comerciales, cotizaciones y asistencia.</p>
      </div>
      <button 
        onClick={() => setActiveTab("panel-principal")}
        className="px-3.5 py-2 text-xs text-neutral-400 hover:text-white bg-neutral-900 border border-neutral-800 rounded-lg hover:border-neutral-700 transition-colors"
      >
        Volver al Panel Principal
      </button>
    </div>

    <div className="bg-neutral-900/40 border border-dashed border-neutral-800 rounded-2xl p-12 text-center">
      <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-500 flex items-center justify-center mx-auto mb-4">
        <Bot className="w-7 h-7" />
      </div>
      <h3 className="text-lg font-bold text-white mb-2">Consola de Conversaciones IA</h3>
      <p className="text-neutral-400 text-sm max-w-md mx-auto mb-6">
        Visualiza transcripciones en tiempo real, interviene chats manualmente si es necesario y afina las respuestas del bot sobre actividades y servicios.
      </p>
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-800 text-orange-400 text-xs font-mono font-medium">
        <Sparkles className="w-3.5 h-3.5" /> Módulo en construcción - Próximamente
      </div>
    </div>
  </div>
);

// Subcomponente: Vista Placeholder Pagos y Finanzas
const VistaPagos = ({ setActiveTab }) => (
  <div className="space-y-6 animate-fadeIn">
    <div className="flex items-center justify-between pb-6 border-b border-neutral-800">
      <div>
        <h1 className="text-2xl font-bold text-white">Pagos & Finanzas del Alojamiento</h1>
        <p className="text-neutral-400 text-sm mt-1">Monitoreo de ingresos directos, Wompi, MercadoPago y saldos por cobrar.</p>
      </div>
      <button 
        onClick={() => setActiveTab("panel-principal")}
        className="px-3.5 py-2 text-xs text-neutral-400 hover:text-white bg-neutral-900 border border-neutral-800 rounded-lg hover:border-neutral-700 transition-colors"
      >
        Volver al Panel Principal
      </button>
    </div>

    <div className="bg-neutral-900/40 border border-dashed border-neutral-800 rounded-2xl p-12 text-center">
      <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
        <CreditCard className="w-7 h-7" />
      </div>
      <h3 className="text-lg font-bold text-white mb-2">Flujo de Caja & Pasarelas de Pago</h3>
      <p className="text-neutral-400 text-sm max-w-md mx-auto mb-6">
        Conciliación automática de abonos del 50%, cobros en recepción física y reportes descargables de ingresos netos vs comisiones evitadas.
      </p>
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-800 text-emerald-400 text-xs font-mono font-medium">
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
        <h1 className="text-2xl font-bold text-white">Configuración del Hotel & Glamping</h1>
        <p className="text-neutral-400 text-sm mt-1">Horarios de check-in, políticas de cancelación, llaves de API y cerraduras.</p>
      </div>
      <button 
        onClick={() => setActiveTab("panel-principal")}
        className="px-3.5 py-2 text-xs text-neutral-400 hover:text-white bg-neutral-900 border border-neutral-800 rounded-lg hover:border-neutral-700 transition-colors"
      >
        Volver al Panel Principal
      </button>
    </div>

    <div className="bg-neutral-900/40 border border-dashed border-neutral-800 rounded-2xl p-12 text-center">
      <div className="w-14 h-14 rounded-2xl bg-neutral-800 border border-neutral-700 text-neutral-300 flex items-center justify-center mx-auto mb-4">
        <Settings className="w-7 h-7" />
      </div>
      <h3 className="text-lg font-bold text-white mb-2">Parámetros del Establecimiento</h3>
      <p className="text-neutral-400 text-sm max-w-md mx-auto mb-6">
        Ajusta los mensajes automáticos de bienvenida, número de WhatsApp para el bot comercial, conexión a Channex y dispositivos IoT de acceso.
      </p>
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-800 text-neutral-400 text-xs font-mono font-medium">
        <Sparkles className="w-3.5 h-3.5" /> Módulo en construcción - Próximamente
      </div>
    </div>
  </div>
);

/**
 * HotelGlampingDashboard - Centro de Mando Operativo para el plan "Hoteles y Glampings"
 */
export const HotelGlampingDashboard = ({ onLogout, onNavigateHome }) => {
  const [activeTab, setActiveTab] = useState("panel-principal");
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  // Ítems de navegación específicos para Hoteles y Glampings
  const navItems = [
    { id: "panel-principal", label: "Panel Principal", icon: LayoutDashboard },
    { id: "calendario", label: "Calendario", icon: CalendarDays },
    { id: "huespedes", label: "Huéspedes (CRM)", icon: Users },
    { id: "interacciones", label: "Interacciones IA", icon: Bot },
    { id: "pagos", label: "Pagos/Finanzas", icon: CreditCard },
    { id: "configuracion", label: "Configuración", icon: Settings },
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
            GLAMPINGS
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
          {/* Logo Oficial y Nicho */}
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
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                Hotel & Glamping OS
              </span>
            </div>

            <button
              onClick={() => setIsMobileSidebarOpen(false)}
              className="lg:hidden p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Enlaces de Navegación Dinámicos */}
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
                      ? "text-orange-500 bg-orange-500/10 border-r-2 border-orange-500 font-semibold"
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

        {/* Perfil del Operador / Dueño */}
        <div className="p-4 border-t border-neutral-800 bg-neutral-950/40">
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-neutral-900/80 border border-neutral-800">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 p-[1px] shadow-sm">
                <div className="w-full h-full bg-neutral-950 rounded-[11px] flex items-center justify-center font-bold text-xs text-orange-400">
                  GQ
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-white tracking-tight">Glamping Quindío</span>
                <span className="text-[10px] font-mono text-neutral-400">Recepción & Bot 24/7</span>
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
      <main className="flex-1 p-5 sm:p-8 lg:p-10 max-w-7xl w-full mx-auto overflow-y-auto space-y-7">
        {activeTab === "panel-principal" && <VistaPanelPrincipal setActiveTab={setActiveTab} />}
        {activeTab === "calendario" && <VistaCalendario setActiveTab={setActiveTab} />}
        {activeTab === "huespedes" && <VistaHuespedes setActiveTab={setActiveTab} />}
        {activeTab === "interacciones" && <VistaInteracciones setActiveTab={setActiveTab} />}
        {activeTab === "pagos" && <VistaPagos setActiveTab={setActiveTab} />}
        {activeTab === "configuracion" && <VistaConfiguracion setActiveTab={setActiveTab} />}
      </main>

    </div>
  );
};

export default HotelGlampingDashboard;
