"use client";

import React from "react";
import { Check, ArrowRight, Star } from "lucide-react";

export const PricingAndTestimonial = ({
  onSelectHotelGlamping,
  onSelectPropertyManager,
  onSelectPlugAndPlay,
}) => {
  return (
    <>
      {/* ===================================================================== */}
      {/* MODELOS DE NEGOCIO / PRICING */}
      {/* ===================================================================== */}
      <section id="precios" className="py-24 relative overflow-hidden bg-black">
        <span id="planes" className="absolute -top-20" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-mono font-semibold tracking-wider uppercase text-orange-500 bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
              Inversión Clara & Escalable
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Planes diseñados para maximizar tu rentabilidad
            </h2>
            <p className="text-neutral-400 text-base sm:text-lg">
              Sin costos ocultos ni letras pequeñas. Recuperas el valor de la implementación con tus primeras reservas directas.
            </p>
            <div className="pt-2 flex justify-center items-center gap-2 text-xs text-neutral-300 font-medium">
              <span className="bg-orange-500/10 text-orange-400 border border-orange-500/20 px-3 py-1 rounded-full flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5" /> 0% de comisiones sobre todas tus ventas directas
              </span>
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            
            {/* Tarjeta 1: Hoteles y Glampings Independientes (POPULAR) */}
            <div className="relative rounded-3xl p-7 lg:p-8 flex flex-col justify-between border-2 border-orange-500 shadow-[0_0_35px_rgba(255,107,0,0.25)] hover:-translate-y-1 transition-all duration-300 bg-neutral-900/60">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-orange-500 text-white font-extrabold text-[11px] uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
                MÁS POPULAR
              </div>

              <div>
                <div className="flex items-center justify-between mb-4 mt-2">
                  <h3 className="text-xl font-bold text-white">Hoteles y Glampings</h3>
                  <span className="text-xs font-mono text-orange-400 bg-orange-500/10 px-2.5 py-0.5 rounded border border-orange-500/20">Solución Integral</span>
                </div>
                
                <p className="text-sm text-neutral-400 min-h-[40px]">
                  Diseñado para propiedades boutique y glampings de lujo que desean multiplicar sus reservas directas y dejar de depender de las agencias de viajes online.
                </p>

                <div className="my-6 p-4 rounded-xl bg-black/80 border border-neutral-800 space-y-3">
                  <div>
                    <span className="text-xs text-neutral-400 font-medium block">Membresía mensual</span>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="text-3xl font-extrabold text-white">$40</span>
                      <span className="text-xs font-semibold text-neutral-400 font-mono">USD/mes</span>
                      <span className="text-xs text-orange-400 font-semibold ml-2">+ $3 a $5/hab</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-neutral-800 flex items-center justify-between text-xs">
                    <span className="text-neutral-400">Puesta en marcha (Setup):</span>
                    <span className="text-white font-mono font-bold">$800 - $1,500 USD</span>
                  </div>
                </div>

                <ul className="space-y-3 text-sm text-neutral-300 mb-8">
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-orange-500 flex-shrink-0" />
                    <span><strong>Motor de Reservas Directas</strong> libre de comisiones</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-orange-500 flex-shrink-0" />
                    <span><strong>Sincronizador Multicanal</strong> (Airbnb, Booking y más)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-orange-500 flex-shrink-0" />
                    <span><strong>Asistente Virtual por WhatsApp</strong> (Ventas 24/7)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-orange-500 flex-shrink-0" />
                    <span>Generación automática de links de pago y recibos</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-orange-500 flex-shrink-0" />
                    <span>Acompañamiento e inducción personalizada</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-2.5">
                {onSelectHotelGlamping && (
                  <button
                    type="button"
                    onClick={onSelectHotelGlamping}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm bg-orange-500 hover:bg-orange-600 text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,107,0,0.3)] cursor-pointer"
                  >
                    <span>Saber más sobre este plan</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}

                <a
                  href="https://wa.me/573000000000?text=Hola%2C%20me%20interesa%20el%20plan%20para%20Hoteles%20y%20Glampings%20Independientes.%20Quiero%20hablar%20con%20su%20equipo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-xs transition-all duration-300 ${
                    onSelectHotelGlamping
                      ? "bg-neutral-900 hover:bg-neutral-800 text-neutral-300 border border-neutral-800 hover:text-white"
                      : "bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-[0_0_20px_rgba(255,107,0,0.3)]"
                  }`}
                >
                  <span>Habla con nuestro equipo</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Tarjeta 2: Property Managers */}
            <div className="rounded-3xl p-7 lg:p-8 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 bg-neutral-900/40 border border-neutral-800 hover:border-orange-500/50">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">Property Managers</h3>
                  <span className="text-xs font-mono text-orange-400 bg-orange-500/10 px-2.5 py-0.5 rounded border border-orange-500/20">Multi-Propiedad</span>
                </div>

                <p className="text-sm text-neutral-400 min-h-[40px]">
                  Diseñado para administradores y empresas gestoras con portafolios de múltiples apartamentos, villas o complejos turísticos.
                </p>

                <div className="my-6 p-4 rounded-xl bg-black/80 border border-neutral-800 space-y-3">
                  <div>
                    <span className="text-xs text-neutral-400 font-medium block">Membresía mensual</span>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="text-3xl font-extrabold text-white">$50</span>
                      <span className="text-xs font-semibold text-neutral-400 font-mono">USD/mes</span>
                      <span className="text-xs text-orange-400 font-semibold ml-2">+ $10 a $15/apto</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-neutral-800 flex items-center justify-between text-xs">
                    <span className="text-neutral-400">Puesta en marcha (Setup):</span>
                    <span className="text-white font-mono font-bold">$1,000 - $2,000 USD</span>
                  </div>
                </div>

                <ul className="space-y-3 text-sm text-neutral-300 mb-8">
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-orange-500 flex-shrink-0" />
                    <span><strong>Portal Multi-Propietario</strong> con acceso seguro para dueños</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-orange-500 flex-shrink-0" />
                    <span><strong>Reportes de rendición de cuentas</strong> automáticos en 1 clic</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-orange-500 flex-shrink-0" />
                    <span><strong>Gestión y alertas para cuadrillas de limpieza</strong></span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-orange-500 flex-shrink-0" />
                    <span>Códigos de acceso digital vinculados a cerraduras inteligentes</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-orange-500 flex-shrink-0" />
                    <span>Atención simultánea de múltiples propiedades en WhatsApp</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-2.5">
                {onSelectPropertyManager && (
                  <button
                    type="button"
                    onClick={onSelectPropertyManager}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm bg-orange-500 hover:bg-orange-600 text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,107,0,0.3)] cursor-pointer"
                  >
                    <span>Saber más sobre este plan</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}

                <a
                  href="https://wa.me/573000000000?text=Hola%2C%20administro%20propiedades%20y%20quiero%20agendar%20una%20demostraci%C3%B3n%20para%20Property%20Managers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-xs transition-all duration-300 ${
                    onSelectPropertyManager
                      ? "bg-neutral-900 hover:bg-neutral-800 text-neutral-300 border border-neutral-800 hover:text-white"
                      : "bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-800 hover:border-orange-500/40"
                  }`}
                >
                  <span>Agenda una demostración</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Tarjeta 3: Plug & Play */}
            <div className="rounded-3xl p-7 lg:p-8 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 bg-neutral-900/40 border border-neutral-800 hover:border-orange-500/50">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">Plug & Play</h3>
                  <span className="text-xs font-mono text-orange-400 bg-orange-500/10 px-2.5 py-0.5 rounded border border-orange-500/20">Integración Externa</span>
                </div>

                <p className="text-sm text-neutral-400 min-h-[40px]">
                  ¿Ya cuentas con un software hotelero instalado? Conectamos nuestro Asistente Comercial a tu sistema actual sin cambiar tu operativa.
                </p>

                <div className="my-6 p-4 rounded-xl bg-black/80 border border-neutral-800 space-y-3">
                  <div>
                    <span className="text-xs text-neutral-400 font-medium block">Integración a medida</span>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="text-3xl font-extrabold text-white">Personalizado</span>
                    </div>
                    <span className="text-xs text-neutral-400">Según volumen de reservas y software actual</span>
                  </div>

                  <div className="pt-3 border-t border-neutral-800 flex items-center justify-between text-xs">
                    <span className="text-neutral-400">Integración técnica:</span>
                    <span className="text-white font-mono font-bold">A convenir</span>
                  </div>
                </div>

                <ul className="space-y-3 text-sm text-neutral-300 mb-8">
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-orange-500 flex-shrink-0" />
                    <span><strong>Conexión directa</strong> con los principales sistemas del mercado</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-orange-500 flex-shrink-0" />
                    <span>Lectura en vivo de inventario y tarifas oficiales</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-orange-500 flex-shrink-0" />
                    <span>Asistente personalizado con las políticas de tu hotel</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-orange-500 flex-shrink-0" />
                    <span>Envío directo de botones y pasarelas de pago seguras</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-orange-500 flex-shrink-0" />
                    <span>Cero interrupciones en la rutina diaria de recepción</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-2.5">
                {onSelectPlugAndPlay && (
                  <button
                    type="button"
                    onClick={onSelectPlugAndPlay}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm bg-orange-500 hover:bg-orange-600 text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,107,0,0.3)] cursor-pointer"
                  >
                    <span>Saber más sobre este plan</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}

                <a
                  href="https://wa.me/573000000000?text=Hola%2C%20quiero%20asesorarme%20con%20un%20experto%20sobre%20la%20compatibilidad%20de%20mi%20software%20actual"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-xs transition-all duration-300 ${
                    onSelectPlugAndPlay
                      ? "bg-neutral-900 hover:bg-neutral-800 text-neutral-300 border border-neutral-800 hover:text-white"
                      : "bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-800 hover:border-orange-500/40"
                  }`}
                >
                  <span>Asesórate con un experto</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ===================================================================== */}
      {/* SOCIAL PROOF (TESTIMONIO DESTACADO) */}
      {/* ===================================================================== */}
      <section id="testimonios" className="py-24 relative border-t border-b border-neutral-800 bg-neutral-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="relative rounded-3xl p-8 sm:p-12 lg:p-14 overflow-hidden border border-neutral-800 bg-neutral-900/50 backdrop-blur-xl shadow-2xl">
            <div className="absolute -top-24 -left-24 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              <div className="md:col-span-8 space-y-6">
                <div className="flex items-center gap-1 text-orange-500">
                  <Star className="w-5 h-5 fill-orange-500" />
                  <Star className="w-5 h-5 fill-orange-500" />
                  <Star className="w-5 h-5 fill-orange-500" />
                  <Star className="w-5 h-5 fill-orange-500" />
                  <Star className="w-5 h-5 fill-orange-500" />
                  <span className="text-xs font-mono text-neutral-400 ml-2">5.0 / 5.0 Caso de Éxito</span>
                </div>

                <blockquote className="text-xl sm:text-2xl lg:text-3xl font-medium text-neutral-100 leading-snug tracking-tight">
                  &ldquo;Trabajé con 3 plataformas distintas; al final siempre teníamos problemas. Cuando descubrí a All In One y decidí que fueran mis socios tecnológicos, descubrí la inmediatez y calidad del servicio. <span className="text-orange-500 font-semibold">Sin duda mi mejor decisión.</span>&rdquo;
                </blockquote>

                <div className="flex items-center gap-4 pt-2">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-orange-500/40 bg-neutral-900 flex items-center justify-center font-bold text-white text-base">
                    JB
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">Julián</h4>
                    <p className="text-xs text-neutral-400 font-medium">Propietario y Fundador • <span className="text-orange-500">Hotel El Bosque</span></p>
                  </div>
                </div>
              </div>

              <div className="md:col-span-4 bg-black/80 rounded-2xl p-6 border border-neutral-800 flex flex-col justify-center space-y-4 text-center md:text-left">
                <div>
                  <span className="text-3xl sm:text-4xl font-extrabold text-orange-500 font-mono">+42%</span>
                  <p className="text-xs text-neutral-300 font-medium mt-1">Incremento en Reservas Directas vía WhatsApp</p>
                </div>
                <div className="pt-3 border-t border-neutral-800">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono">0</span>
                  <p className="text-xs text-neutral-300 font-medium mt-1">Sobreventas en temporadas altas desde el despliegue</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  );
};
