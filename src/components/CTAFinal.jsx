"use client";

import React from "react";
import { Zap, MessageCircle, ArrowRight } from "lucide-react";

export const CTAFinal = () => {
  const whatsappUrl = "https://wa.me/573000000000?text=Hola%2C%20quiero%20hablar%20con%20el%20equipo%20de%20All%20In%20One%20Hotels%20para%20conocer%20la%20plataforma";
  const asesorWhatsappUrl = "https://wa.me/573000000000?text=Hola%2C%20quiero%20contactar%20a%20un%20asesor%20de%20All%20In%20One%20Hotels";

  return (
    <>
      <footer className="pt-24 pb-28 md:pb-16 relative overflow-hidden bg-black">
        {/* Ambient Bottom Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[850px] h-[380px] bg-orange-500/10 blur-[140px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Big Persuasive CTA Banner */}
          <div className="relative rounded-3xl p-8 sm:p-14 lg:p-16 bg-neutral-900/60 backdrop-blur-xl border border-orange-500/30 text-center space-y-8 max-w-4xl mx-auto mb-20 shadow-[0_0_50px_rgba(255,107,0,0.15)]">
            
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-mono font-medium border border-orange-500/20">
              <Zap className="w-3.5 h-3.5" />
              <span>Transición Acompañada y Segura</span>
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Tu hotel trabaja 24/7. <br />
              <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">
                Tu sistema de reservas también debería hacerlo.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-neutral-400 max-w-xl mx-auto">
              Da el salto hacia la rentabilidad independiente hoy. Empieza a vender en automático, asegura cada fecha y maximiza el beneficio neto de tu propiedad.
            </p>

            {/* Big Giant CTA Button Humanizado */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl font-extrabold text-lg bg-orange-500 hover:bg-orange-600 text-white transition-all duration-300 shadow-[0_0_35px_rgba(255,107,0,0.35)] hover:scale-105 active:scale-95 group"
              >
                <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span>Habla con nuestro equipo</span>
              </a>
            </div>

            <p className="text-xs text-neutral-400 font-mono">
              Implementación guiada en 2-3 semanas • Sin contratos forzosos • 0% de comisiones por reservas directas
            </p>
          </div>

          {/* Footer Sub-grid Links */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-12 border-t border-neutral-800 text-neutral-400 text-xs sm:text-sm">
            
            {/* Brand */}
            <div className="space-y-3 md:col-span-1">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center text-white font-bold">
                  AI
                </div>
                <span className="font-bold text-white text-base">ALL IN ONE HOTELS</span>
              </div>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Ecosistema tecnológico de última generación para hoteles independientes, glampings de lujo y operadores inmobiliarios.
              </p>
            </div>

            {/* Links */}
            <div className="space-y-2">
              <h5 className="font-bold text-white uppercase text-xs tracking-wider">Solución</h5>
              <ul className="space-y-1.5 text-xs">
                <li><a href="#solucion" className="hover:text-orange-500 transition-colors">Motor de Conexión Global</a></li>
                <li><a href="#experiencia" className="hover:text-orange-500 transition-colors">Asistente Virtual por WhatsApp</a></li>
                <li><a href="#caracteristicas" className="hover:text-orange-500 transition-colors">Control de Accesos Digitales</a></li>
                <li><a href="#precios" className="hover:text-orange-500 transition-colors">Portal para Administradores</a></li>
              </ul>
            </div>

            {/* Compatibility */}
            <div className="space-y-2">
              <h5 className="font-bold text-white uppercase text-xs tracking-wider">Integraciones</h5>
              <ul className="space-y-1.5 text-xs">
                <li className="flex items-center gap-1.5"><span className="text-orange-500">✓</span> Sistemas Hoteleros del Mercado</li>
                <li className="flex items-center gap-1.5"><span className="text-orange-500">✓</span> Canales Globales (Airbnb, Booking)</li>
                <li className="flex items-center gap-1.5"><span className="text-orange-500">✓</span> Cerraduras Inteligentes</li>
                <li className="flex items-center gap-1.5"><span className="text-orange-500">✓</span> Pasarelas de Pago Directas</li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-2">
              <h5 className="font-bold text-white uppercase text-xs tracking-wider">Atención Directa</h5>
              <p className="text-xs">Asesoría comercial personalizada y demostraciones en vivo disponibles vía WhatsApp.</p>
              <div className="pt-2 text-[11px] text-neutral-400 font-mono">
                © 2026 All In One Hotels. Todos los derechos reservados.
              </div>
            </div>

          </div>

        </div>
      </footer>

      {/* Sticky Bottom Bar on Mobile (<768px) con CTA humanizado */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-3 bg-black/95 backdrop-blur-xl border-t border-neutral-800 md:hidden shadow-[0_-10px_30px_rgba(0,0,0,0.8)]">
        <a
          href={asesorWhatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-3 py-3.5 px-5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-sm shadow-[0_0_25px_rgba(255,107,0,0.35)] active:scale-95 transition-transform"
        >
          <div className="relative">
            <MessageCircle className="w-5 h-5 text-white" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full animate-ping" />
          </div>
          <span>Contactar a un asesor</span>
          <ArrowRight className="w-4 h-4 text-white" />
        </a>
      </div>

      {/* Floating Pill Button on Desktop (>=768px) con CTA humanizado */}
      <div className="hidden md:block fixed bottom-6 right-6 z-50">
        <a
          href={asesorWhatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 px-6 py-4 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-sm shadow-[0_0_35px_rgba(255,107,0,0.35)] hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-orange-400/40"
        >
          <div className="relative">
            <MessageCircle className="w-5 h-5 text-white group-hover:rotate-12 transition-transform" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full animate-ping" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full" />
          </div>
          <span>Contactar a un asesor</span>
        </a>
      </div>
    </>
  );
};
