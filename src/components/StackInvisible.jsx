"use client";

import React from "react";
import { XCircle, CheckCircle2, AlertTriangle, Check, Database, Network, Cpu, Shield, Activity, Key } from "lucide-react";

export const StackInvisible = () => {
  return (
    <section id="solucion" className="py-24 relative border-t border-neutral-800 bg-black">
      <span id="infraestructura" className="absolute -top-20" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="text-xs font-mono font-semibold tracking-wider uppercase text-orange-500 bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
            Arquitectura Disruptiva
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            El Stack Invisible: <br />
            <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">
              Del Caos Manual a la Centralización Total
            </span>
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            La mayoría de hoteles pierden hasta 20 horas semanales y el 18% de sus ingresos coordinando softwares incompatibles. Nosotros unificamos la infraestructura en una sola capa inteligente.
          </p>
        </div>

        {/* Comparison Grid: El Caos Tradicional vs All In One Hotels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          
          {/* Caos Tradicional */}
          <div className="rounded-3xl p-7 sm:p-8 bg-red-950/10 border border-red-500/20 relative overflow-hidden group hover:border-red-500/40 transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center border border-red-500/30">
                  <XCircle className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white">El Caos Tradicional</h3>
              </div>
              <span className="text-xs font-mono text-red-400 bg-red-500/10 px-2.5 py-1 rounded font-semibold">
                FRÁGIL Y COSTOSO
              </span>
            </div>

            <p className="text-sm text-neutral-400 mb-6">
              Sistemas fragmentados, hojas de Excel desactualizadas y fricción humana constante.
            </p>

            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-neutral-300">
                <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <span><strong>Comisiones sangrantes del 15% al 20%:</strong> Dependencia total de OTAs como Booking y Airbnb para conseguir ocupación.</span>
              </li>
              <li className="flex items-start gap-3 text-neutral-300">
                <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <span><strong>Sobreventas (Overbooking):</strong> Desincronización de calendarios por retrasos de hasta 40 minutos entre canales.</span>
              </li>
              <li className="flex items-start gap-3 text-neutral-300">
                <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <span><strong>Pérdida de clientes nocturnos:</strong> Preguntas de WhatsApp desatendidas después de las 9:00 PM; el huésped reserva en otro lugar.</span>
              </li>
              <li className="flex items-start gap-3 text-neutral-300">
                <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <span><strong>Coordinación manual agotadora:</strong> Enviar claves de cerraduras y llamar a la camarera por cada check-in de forma manual.</span>
              </li>
            </ul>
          </div>

          {/* Solución All In One */}
          <div className="rounded-3xl p-7 sm:p-8 bg-neutral-900/60 border border-orange-500/40 relative overflow-hidden group hover:border-orange-500 transition-all duration-300 shadow-[0_0_35px_rgba(255,107,0,0.1)]">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-500 flex items-center justify-center border border-orange-500/40">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white">All In One Hotels v2.0</h3>
              </div>
              <span className="text-xs font-mono text-orange-500 bg-orange-500/10 px-2.5 py-1 rounded font-semibold">
                AUTOMATIZACIÓN PURA
              </span>
            </div>

            <p className="text-sm text-neutral-300 mb-6">
              Un motor centralizado que orquesta tu propiedad sin necesidad de intervención humana.
            </p>

            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-neutral-200">
                <Check className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span><strong>0% Comisiones en Venta Directa:</strong> Tu propio motor de reservas ultrarrápido y pasarelas de pago integradas sin intermediarios.</span>
              </li>
              <li className="flex items-start gap-3 text-neutral-200">
                <Check className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span><strong>Sincronización en sub-segundos:</strong> Conexión Headless directa con API oficiales; bloqueos inmediatos en todos los portales.</span>
              </li>
              <li className="flex items-start gap-3 text-neutral-200">
                <Check className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span><strong>Cierre de ventas 24/7 con IA:</strong> El agente de WhatsApp contesta en segundos, resuelve dudas complejas y envía botones de pago.</span>
              </li>
              <li className="flex items-start gap-3 text-neutral-200">
                <Check className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span><strong>Operación Zero-Touch:</strong> Emisión automática de códigos temporales de cerradura inteligente y alertas al equipo de limpieza.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* 3 Pillars */}
        <span id="automatizacion" className="relative -top-20" aria-hidden="true" />
        <div id="experiencia" className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Pilar 1: Multi-tenant DB */}
          <div className="rounded-3xl p-7 sm:p-8 bg-neutral-900/50 backdrop-blur-xl border border-neutral-800 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group hover:border-orange-500/50 hover:shadow-[0_0_25px_rgba(255,107,0,0.1)]">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center border border-orange-500/20 mb-6 group-hover:scale-110 transition-transform">
                <Database className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono text-orange-400 uppercase tracking-wider mb-2 font-semibold">Capa 01 • Privacidad Máxima</div>
              <h3 className="text-xl font-bold text-white mb-3">Base de Datos Multi-tenant</h3>
              <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                Datos 100% seguros y aislados criptográficamente. Ninguna propiedad comparte esquemas con terceros. Cumplimiento estricto de privacidad para huéspedes VIP y analítica confidencial.
              </p>
            </div>
            <div className="pt-4 border-t border-neutral-800 flex items-center gap-2 text-xs text-neutral-400 font-mono">
              <Shield className="w-3.5 h-3.5 text-orange-500" />
              <span>Aislamiento lógico por Tenant</span>
            </div>
          </div>

          {/* Pilar 2: Sincronización Global */}
          <div className="rounded-3xl p-7 sm:p-8 bg-neutral-900/50 backdrop-blur-xl border border-neutral-800 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group hover:border-orange-500/50 hover:shadow-[0_0_25px_rgba(255,107,0,0.1)]">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center border border-orange-500/20 mb-6 group-hover:scale-110 transition-transform">
                <Network className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono text-orange-400 uppercase tracking-wider mb-2 font-semibold">Capa 02 • Headless Core</div>
              <h3 className="text-xl font-bold text-white mb-3">Sincronización Global</h3>
              <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                Conexión directa tipo Headless Channel Manager para erradicar las sobreventas para siempre. Integra Airbnb, Booking.com, Vrbo y Google Hotels en tiempo real milimétrico.
              </p>
            </div>
            <div className="pt-4 border-t border-neutral-800 flex items-center gap-2 text-xs text-neutral-400 font-mono">
              <Activity className="w-3.5 h-3.5 text-orange-500" />
              <span>Latencia Bidireccional &lt; 3s</span>
            </div>
          </div>

          {/* Pilar 3: Cerebro IA */}
          <div className="rounded-3xl p-7 sm:p-8 bg-neutral-900/50 backdrop-blur-xl border border-neutral-800 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group hover:border-orange-500/50 hover:shadow-[0_0_25px_rgba(255,107,0,0.1)]">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center border border-orange-500/20 mb-6 group-hover:scale-110 transition-transform">
                <Cpu className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono text-orange-400 uppercase tracking-wider mb-2 font-semibold">Capa 03 • Automatización Autónoma</div>
              <h3 className="text-xl font-bold text-white mb-3">Cerebro IA Autónomo</h3>
              <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                Automatización total de pagos con pasarelas locales e internacionales, generación dinámica de códigos para cerraduras inteligentes (Tuya/TTLock) y notificaciones al personal de limpieza.
              </p>
            </div>
            <div className="pt-4 border-t border-neutral-800 flex items-center gap-2 text-xs text-neutral-400 font-mono">
              <Key className="w-3.5 h-3.5 text-orange-500" />
              <span>Cerraduras + Pagos + WhatsApp</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
