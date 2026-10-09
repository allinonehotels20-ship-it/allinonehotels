"use client";

import React from "react";
import { BadgeDollarSign, CreditCard, Zap, Sparkles, Key, ShieldCheck, Database, RefreshCw, CheckCircle2 } from "lucide-react";

export const BentoBox = () => {
  return (
    <section id="caracteristicas" className="py-24 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono font-semibold tracking-wider uppercase text-orange-500 bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
            Ecosistema Todo en Uno
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Diseñado para la escala. <br />
            <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">
              Construido para la rentabilidad absoluta.
            </span>
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            Cada módulo está ensamblado para eliminar la fricción operativa y garantizar que retengas el 100% del valor de cada reserva.
          </p>
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">

          {/* Tarjeta 1 (Destacada: 7 Cols): "Adiós comisiones del 15%" */}
          <div className="lg:col-span-7 rounded-3xl p-7 sm:p-10 border border-neutral-800 bg-neutral-900/50 backdrop-blur-xl relative overflow-hidden group hover:border-orange-500/50 transition-all duration-500 hover:shadow-[0_0_35px_rgba(255,107,0,0.25)] flex flex-col justify-between">
            <div className="absolute -top-16 -right-16 w-56 h-56 bg-orange-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-orange-500/20 transition-all duration-500" />

            <div>
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono font-semibold">
                  <BadgeDollarSign className="w-3.5 h-3.5" />
                  <span>Cobros Directos a tu Cuenta</span>
                </div>
                
                {/* Gateway badges */}
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/80 border border-neutral-800">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-sky-400">
                    <CreditCard className="w-3.5 h-3.5" />
                    <span>MercadoPago</span>
                  </div>
                  <span className="text-neutral-600">•</span>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-orange-400">
                    <Zap className="w-3.5 h-3.5" />
                    <span>Wompi</span>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 tracking-tight">
                Adiós comisiones del 15%
              </h3>
              
              <p className="text-neutral-300 text-base leading-relaxed max-w-xl">
                Recibe el 100% de tus ventas directas en tu cuenta, al instante. Sin retenciones abusivas, sin intermediarios que dicten cuándo recibes el dinero de tus huéspedes.
              </p>
            </div>

            {/* Micro Dashboard */}
            <div className="mt-8 pt-6 border-t border-neutral-800 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="p-3.5 rounded-xl bg-black/60 border border-neutral-800">
                <span className="text-[11px] text-neutral-400 block">Comisión All In One</span>
                <span className="text-xl font-bold font-mono text-orange-500">0.0%</span>
              </div>
              <div className="p-3.5 rounded-xl bg-black/60 border border-neutral-800">
                <span className="text-[11px] text-neutral-400 block">Liquidación</span>
                <span className="text-xl font-bold font-mono text-white">Inmediata</span>
              </div>
              <div className="p-3.5 rounded-xl bg-black/60 border border-neutral-800 col-span-2 sm:col-span-1">
                <span className="text-[11px] text-neutral-400 block">Cobro Protegido</span>
                <span className="text-xl font-bold font-mono text-orange-400">Pasarela Segura</span>
              </div>
            </div>
          </div>

          {/* Tarjeta 2 (5 Cols): "Operación en Piloto Automático" */}
          <div className="lg:col-span-5 rounded-3xl p-7 sm:p-9 border border-neutral-800 bg-neutral-900/50 backdrop-blur-xl relative overflow-hidden group hover:border-orange-500/50 transition-all duration-500 hover:shadow-[0_0_35px_rgba(255,107,0,0.25)] flex flex-col justify-between">
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-orange-500/20 transition-all duration-500" />

            <div>
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/30 text-orange-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6" />
              </div>

              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-orange-500/10 text-orange-400 border border-orange-500/20 font-semibold mb-3">
                Operación Sin Fricciones
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-3 tracking-tight">
                Operación en Piloto Automático
              </h3>

              <p className="text-neutral-300 text-sm leading-relaxed">
                El sistema notifica al personal de limpieza y despacha códigos de cerraduras inteligentes automáticamente tras cada check-out.
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-neutral-800 flex items-center gap-3 text-xs text-neutral-400 font-mono">
              <Key className="w-4 h-4 text-orange-500" />
              <span>Cerraduras Digitales • Alertas Automáticas</span>
            </div>
          </div>

          {/* Tarjeta 3 (6 Cols): "Seguridad Nivel Banco (SaaS Multi-tenant)" */}
          <div className="lg:col-span-6 rounded-3xl p-7 sm:p-9 border border-neutral-800 bg-neutral-900/50 backdrop-blur-xl relative overflow-hidden group hover:border-orange-500/50 transition-all duration-500 hover:shadow-[0_0_35px_rgba(255,107,0,0.25)] flex flex-col justify-between">
            <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/30 text-orange-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>

              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-orange-500/10 text-orange-400 border border-orange-500/20 font-semibold mb-3">
                Privacidad y Protección Máxima
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-3 tracking-tight">
                Seguridad Nivel Banco
              </h3>

              <p className="text-neutral-300 text-sm leading-relaxed">
                Tus datos y los de tus clientes protegidos con una base de datos encriptada y aislamiento exclusivo para tu propiedad. Nadie excepto tú tiene acceso a tus métricas de huéspedes ni tarifas.
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-neutral-800 flex items-center gap-3 text-xs text-neutral-400 font-mono">
              <Database className="w-4 h-4 text-orange-500" />
              <span>Base de Datos Encriptada • Servidor Dedicado</span>
            </div>
          </div>

          {/* Tarjeta 4 (6 Cols): "Cero Sobreventas" */}
          <div className="lg:col-span-6 rounded-3xl p-7 sm:p-9 border border-neutral-800 bg-neutral-900/50 backdrop-blur-xl relative overflow-hidden group hover:border-orange-500/50 transition-all duration-500 hover:shadow-[0_0_35px_rgba(255,107,0,0.25)] flex flex-col justify-between">
            <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/30 text-orange-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <RefreshCw className="w-6 h-6" />
              </div>

              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-orange-500/10 text-orange-400 border border-orange-500/20 font-semibold mb-3">
                Conexión Global en Vivo
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-3 tracking-tight">
                Cero Sobreventas
              </h3>

              <p className="text-neutral-300 text-sm leading-relaxed">
                Sincronización milimétrica con Booking, Airbnb y Expedia mediante nuestro motor de conexión global. Si una habitación se reserva en tu web o WhatsApp, se bloquea en el resto del mundo al instante.
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-neutral-800 flex items-center gap-3 text-xs text-neutral-400 font-mono">
              <CheckCircle2 className="w-4 h-4 text-orange-500" />
              <span>Motor de Conexión Global • Sincronización Bidireccional</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
