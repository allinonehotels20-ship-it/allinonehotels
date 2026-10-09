"use client";

import React, { useState } from "react";
import { MessageCircle, ArrowRight, ShieldCheck, Zap, Clock, Lock, Send, RefreshCw, BadgeCheck } from "lucide-react";
import { Header } from "./Header";

// Re-export Header como Navbar para compatibilidad
export const Navbar = Header;

export const Hero = () => {
  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-black">
      {/* Radial Glow Ambient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,107,0,0.14)_0%,rgba(234,88,12,0.06)_35%,rgba(0,0,0,0)_70%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Pill Tag */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-orange-500/10 border border-orange-500/30 text-orange-400 text-xs sm:text-sm font-medium shadow-sm animate-pulse">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            <span>Sistema Centralizado de Gestión Hotelera v2.0</span>
            <ArrowRight className="w-3.5 h-3.5 text-orange-400/80" />
          </div>
        </div>

        {/* Copywriting Titular & Subtítulo */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.12]">
            Automatiza tus reservas.
            <span className="block bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">
              Sincroniza tus canales.
            </span>
            <span className="relative inline-block text-neutral-100">
              Despide las comisiones del 15%.
              <svg className="absolute -bottom-2 left-0 w-full h-2 text-orange-500/60" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0 15 Q 50 0, 100 15" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed font-normal">
            El primer ecosistema inteligente para hospitalidad que integra <strong className="text-white font-semibold">Motor de Reservas Directas</strong>, <strong className="text-white font-semibold">Conexión Global Multicanal</strong> y un <strong className="text-orange-500 font-semibold">Asistente Virtual por WhatsApp</strong> que cierra ventas en piloto automático 24/7.
          </p>

          {/* Call to Actions Humanizados */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/573000000000?text=Hola%2C%20quiero%20hablar%20con%20el%20equipo%20de%20All%20In%20One%20Hotels%20para%20conocer%20la%20soluci%C3%B3n"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-base bg-orange-500 hover:bg-orange-600 text-white transition-all duration-300 shadow-[0_0_35px_rgba(255,107,0,0.35)] hover:scale-105 active:scale-95 group"
            >
              <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span>Habla con nuestro equipo</span>
            </a>

            <a
              href="https://wa.me/573000000000?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20demostraci%C3%B3n%20personalizada%20de%20All%20In%20One%20Hotels"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-semibold text-base text-neutral-300 hover:text-white bg-neutral-900/60 hover:bg-neutral-850 border border-neutral-800 transition-all duration-300"
            >
              <span>Agenda una demostración</span>
              <ArrowRight className="w-4 h-4 text-neutral-400" />
            </a>
          </div>

          {/* Social Proof Mini Badges */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-neutral-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-orange-500" />
              <span>0% Comisiones OTAs</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-orange-400" />
              <span>Sincronización Inmediata</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-orange-500" />
              <span>Ventas Activas 24/7</span>
            </div>
          </div>
        </div>

        {/* Visual: Glamping Luxury UI + Live Simulated WhatsApp Agent */}
        <div className="mt-14 max-w-6xl mx-auto relative">
          <div className="relative rounded-2xl p-1 sm:p-2 bg-gradient-to-b from-white/10 via-white/5 to-transparent shadow-2xl">
            <div className="relative rounded-xl overflow-hidden bg-neutral-950 border border-neutral-800 grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
              
              {/* Left Side: Luxury Glamping Image & Channel Manager overlay */}
              <div className="lg:col-span-7 relative group min-h-[340px] lg:min-h-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=1400&q=85"
                  alt="Glamping de Lujo All In One Hotels"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-[0.75]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />

                {/* Floating Direct Reservation Overlay */}
                <div className="absolute top-6 left-6 right-6 sm:right-auto sm:max-w-xs p-4 rounded-xl bg-neutral-900/85 backdrop-blur-xl border border-neutral-800 shadow-2xl">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-ping"></span>
                      <span className="text-xs font-semibold text-neutral-200">Reserva Directa Confirmada</span>
                    </div>
                    <span className="text-[10px] text-orange-400 font-mono bg-orange-500/10 px-1.5 py-0.5 rounded border border-orange-500/20">+$380 USD</span>
                  </div>
                  <p className="text-xs text-neutral-300 font-medium">Glamping Domo Nebulosa • 3 Noches</p>
                  <div className="mt-2 text-[11px] text-neutral-400 flex items-center justify-between border-t border-neutral-800 pt-2">
                    <span>Ahorro en comisiones de terceros:</span>
                    <span className="text-orange-500 font-bold">$57 USD</span>
                  </div>
                </div>

                {/* Channel Manager Status Bar */}
                <div className="absolute bottom-6 left-6 right-6 p-3.5 rounded-xl bg-black/85 backdrop-blur-md border border-neutral-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-orange-500/10 text-orange-500">
                      <RefreshCw className="w-4 h-4 animate-spin" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white">Canales Sincronizados en Vivo</p>
                      <p className="text-[11px] text-neutral-400">Airbnb, Booking.com, Expedia, Sitio Web Directo</p>
                    </div>
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded bg-orange-500/20 text-orange-400 text-xs font-mono">
                    <span>TIEMPO REAL</span>
                  </div>
                </div>
              </div>

              {/* Right Side: Simulated WhatsApp Commercial Assistant */}
              <div className="lg:col-span-5 bg-neutral-950 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-neutral-800">
                
                {/* Chat Header */}
                <div className="p-4 border-b border-neutral-800 bg-neutral-900/60 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center border border-orange-500/40 text-orange-400 font-bold text-sm">
                        AI
                      </div>
                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-orange-500 border-2 border-neutral-950 rounded-full" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="text-sm font-bold text-white">Asistente Comercial 24/7</h4>
                        <BadgeCheck className="w-4 h-4 text-orange-500" />
                      </div>
                      <p className="text-[11px] text-orange-400 flex items-center gap-1">
                        <span>En línea</span> • <span>Atención inmediata</span>
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-400 bg-white/5 px-2 py-1 rounded">Canal Oficial WhatsApp</span>
                </div>

                {/* Conversation Stream */}
                <div className="p-4 sm:p-5 space-y-3.5 text-xs overflow-y-auto max-h-[380px]">
                  {/* Guest message */}
                  <div className="flex justify-end">
                    <div className="bg-orange-600 text-white rounded-2xl rounded-tr-sm px-3.5 py-2.5 max-w-[85%] shadow-sm">
                      <p>Hola! Tienen disponibilidad en el Domo Panorámico para este fin de semana? Somos 2 personas.</p>
                      <span className="block text-[10px] text-orange-200 text-right mt-1 font-mono">10:42 PM</span>
                    </div>
                  </div>

                  {/* AI Response */}
                  <div className="flex justify-start">
                    <div className="bg-neutral-900 text-neutral-200 border border-neutral-800 rounded-2xl rounded-tl-sm px-3.5 py-2.5 max-w-[88%] space-y-2 shadow-sm">
                      <p>¡Hola Carlos! 🌲 Sí, revisé nuestro calendario en tiempo real y tenemos libre el <strong>Domo Panorámico con Jacuzzi</strong> del 12 al 14 de este mes.</p>
                      <div className="p-2.5 rounded-lg bg-black/80 border border-neutral-800 space-y-1">
                        <div className="flex justify-between font-semibold text-white">
                          <span>Total 2 noches (incl. desayuno):</span>
                          <span className="text-orange-400 font-bold">$320 USD</span>
                        </div>
                        <p className="text-[10px] text-neutral-400">Tarifa directa garantizada sin cargos de intermediarios.</p>
                      </div>
                      <p className="text-[11px] text-neutral-300">¿Deseas que te genere el link seguro de pago ahora mismo para asegurar tus fechas?</p>
                      <span className="block text-[10px] text-neutral-400 text-right mt-1 font-mono">10:42 PM • Verificado en Calendario</span>
                    </div>
                  </div>

                  {/* Guest confirms */}
                  <div className="flex justify-end">
                    <div className="bg-orange-600 text-white rounded-2xl rounded-tr-sm px-3.5 py-2 max-w-[80%] shadow-sm">
                      <p>¡Sí por favor, envíame el link!</p>
                      <span className="block text-[10px] text-orange-200 text-right mt-1 font-mono">10:43 PM</span>
                    </div>
                  </div>

                  {/* AI confirms transaction and lock PIN */}
                  <div className="flex justify-start">
                    <div className="bg-neutral-900 text-neutral-200 border border-neutral-800 rounded-2xl rounded-tl-sm px-3.5 py-2.5 max-w-[88%] space-y-2 shadow-sm">
                      <p className="text-orange-400 font-semibold flex items-center gap-1.5">
                        <Lock className="w-3.5 h-3.5" /> Pago procesado con éxito ($320 USD)
                      </p>
                      <p className="text-[11px]">Tu clave digital de acceso a la puerta es <span className="font-mono bg-black px-1.5 py-0.5 rounded text-white font-bold tracking-wider">#9284*</span>. Ya se notificó al equipo de habitaciones para tener todo impecable.</p>
                      <span className="block text-[10px] text-neutral-400 text-right mt-1 font-mono">10:43 PM • Venta Directa Concluida</span>
                    </div>
                  </div>
                </div>

                {/* Simulated Input */}
                <div className="p-3 bg-black border-t border-neutral-800 flex items-center gap-2">
                  <input
                    type="text"
                    disabled
                    placeholder="Chatea con un asesor en vivo..."
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 text-xs text-neutral-400 cursor-not-allowed"
                  />
                  <a
                    href="https://wa.me/573000000000?text=Hola%2C%20quiero%20contactar%20a%20un%20asesor%20de%20All%20In%20One%20Hotels"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white transition-colors"
                  >
                    <Send className="w-4 h-4" />
                  </a>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
