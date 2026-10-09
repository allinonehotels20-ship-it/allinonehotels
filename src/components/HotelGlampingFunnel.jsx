"use client";

import React from "react";
import {
  Sparkles,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Check,
  CalendarCheck,
  Bot,
  CreditCard,
  Users,
  Compass,
  Star,
  ChevronLeft
} from "lucide-react";
import { Header } from "./Header";

export const HotelGlampingFunnel = ({ onBack, onLoginClick }) => {
  const whatsappUrl =
    "https://wa.me/573000000000?text=Hola%2C%20tengo%20un%20Hotel%20Boutique%20o%20Glamping%20y%20quiero%20hablar%20con%20un%20asesor%20especializado";

  const benefits = [
    {
      badge: "0% Comisiones",
      title: "Motor de Reservas Directas",
      copy: "Tu propia vitrina de ventas, optimizada para convertir visitantes en huéspedes sin intermediarios. Una experiencia de usuario pulida y fluida donde el huésped selecciona fechas, habitaciones y servicios adicionales en menos de un minuto desde su teléfono móvil o computadora.",
      highlight: "Retén el 100% de la tarifa cobrada directamente en tu balance neto.",
      image:
        "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=1200&q=85",
      imageAlt: "Domo Glamping de lujo con vista panorámica a la montaña",
      icon: CalendarCheck,
      reverse: false,
    },
    {
      badge: "Cero Sobreventas",
      title: "Sincronizador Multicanal en Tiempo Real",
      copy: "Aparece en Airbnb, Booking y Expedia con total tranquilidad. Si te reservan por un canal, se bloquea en todos los demás al instante. Protegemos tus calendarios las 24 horas para que tu equipo nunca más tenga que lidiar con la pesadilla de cancelar o reubicar huéspedes por reservas duplicadas.",
      highlight: "Sincronización milimétrica bidireccional en menos de 2 segundos.",
      image:
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=85",
      imageAlt: "Hotel boutique con vista a cafetales y arquitectura cálida",
      icon: Compass,
      reverse: true,
    },
    {
      badge: "Ventas en Piloto Automático",
      title: "Asistente Virtual por WhatsApp 24/7",
      copy: "Atiende cotizaciones a las 3:00 AM. Nuestro sistema responde dudas, muestra fotos de tus habitaciones o domos y cierra ventas mientras duermes. La mayoría de los viajeros nocturnos reservan en el primer lugar que les contesta; con nosotros nunca más perderás un cliente por tardar en responder.",
      highlight: "Tasa de respuesta inmediata de 2 segundos garantizada.",
      image:
        "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=85",
      imageAlt: "Cabaña de madera de alto nivel inmersa en bosque nublado",
      icon: Bot,
      reverse: false,
    },
    {
      badge: "Liquidez Inmediata",
      title: "Pagos Seguros e Inmediatos",
      copy: "Generación automática de links de cobro seguros. El dinero entra a tu cuenta, no a la de un intermediario. Tus huéspedes pagan con tarjeta de crédito, débito o transferencias bancarias locales e internacionales mediante pasarelas con la más alta certificación de seguridad.",
      highlight: "Disponibilidad de fondos al instante según tu banco habitual.",
      image:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=85",
      imageAlt: "Hotel boutique de lujo con piscina y entorno natural",
      icon: CreditCard,
      reverse: true,
    },
    {
      badge: "Acompañamiento VIP",
      title: "Onboarding VIP e Inducción Personalizada",
      copy: "No te dejamos solo con un manual o tutoriales genéricos. Hacemos la inducción personalizada con tu equipo de trabajo. Configuramos tus tarifas por temporada, cargamos fotos profesionales, conectamos tus canales y te acompañamos paso a paso hasta que tu primera reserva directa esté confirmada.",
      highlight: "Soporte dedicado 1 a 1 antes, durante y después del lanzamiento.",
      image:
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=85",
      imageAlt: "Recepción de hotel boutique cálido y diseño arquitectónico",
      icon: Users,
      reverse: false,
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50 font-sans antialiased selection:bg-orange-500 selection:text-white relative overflow-x-hidden">
      
      {/* Orbes de luz ambiental cálida */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-orange-500/10 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="fixed top-[50%] right-[-10%] w-[500px] h-[500px] bg-amber-500/8 blur-[160px] rounded-full pointer-events-none -z-10" />
      <div className="fixed bottom-10 left-[-10%] w-[600px] h-[600px] bg-orange-600/8 blur-[170px] rounded-full pointer-events-none -z-10" />

      {/* ===================================================================== */}
      {/* FUNNEL NAVIGATION */}
      {/* ===================================================================== */}
      <Header
        onBack={onBack}
        badge="Boutique"
        whatsappUrl={whatsappUrl}
        ctaLabel="Hablar con un asesor"
        onLoginClick={onLoginClick}
      />

      {/* ===================================================================== */}
      {/* 1. HERO SECTION (NICHO EXCLUSIVO) */}
      {/* ===================================================================== */}
      <section className="relative pt-36 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-4xl mx-auto space-y-6">
            
            {/* Pre-título */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
              <span>Solución Integral para Hoteles Boutique y Glampings</span>
            </div>

            {/* Titular */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.15]">
              Toma el control total de tus reservas y{" "}
              <span className="block bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">
                deja de pagar comisiones abusivas.
              </span>
            </h1>

            {/* Subtítulo */}
            <p className="text-lg sm:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
              Un ecosistema diseñado a la medida de tu propiedad. Centraliza tu disponibilidad, automatiza la atención por WhatsApp 24/7 y recibe el dinero directo en tu cuenta.
            </p>

            {/* Botón Primario Prominente */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl font-extrabold text-lg bg-orange-500 hover:bg-orange-600 text-white transition-all duration-300 shadow-[0_0_40px_rgba(255,107,0,0.4)] hover:scale-105 active:scale-95 group"
              >
                <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                <span>Hablar con un asesor para mi propiedad</span>
              </a>
            </div>

            {/* Mini Trust Metrics */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-8 text-xs sm:text-sm text-neutral-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-orange-500" />
                <span>Sin Permanencia Forzosa</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-orange-400 fill-orange-400" />
                <span>Configuración Acompañada 1 a 1</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-orange-500" />
                <span>Retén el 100% de tus ventas</span>
              </div>
            </div>

          </div>

          {/* Luxury Visual Showcase */}
          <div className="mt-16 max-w-5xl mx-auto rounded-3xl p-2 bg-gradient-to-b from-white/10 via-white/5 to-transparent shadow-2xl">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 aspect-[16/9] sm:aspect-[21/9]">
              <img
                src="https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=1600&q=85"
                alt="Glamping de montaña y hotel boutique de lujo"
                className="w-full h-full object-cover brightness-[0.75]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-2xl bg-black/80 backdrop-blur-xl border border-neutral-800">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-ping" />
                    <span className="text-xs font-bold text-orange-400 uppercase tracking-wider font-mono">
                      Caso Habitual
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white">
                    Glampings y Hoteles Boutique ahorran más de $3,500 USD mensuales
                  </h4>
                  <p className="text-xs text-neutral-400">
                    Al migrar reservas de Booking y Airbnb a su canal directo de WhatsApp.
                  </p>
                </div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-orange-500 hover:bg-orange-600 text-white transition-colors flex-shrink-0"
                >
                  <span>Solicitar Asesoría</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ===================================================================== */}
      {/* 2. DESGLOSE DE BENEFICIOS (DEEP DIVE EN ZIGZAG) */}
      {/* ===================================================================== */}
      <section className="py-28 relative bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-mono font-semibold tracking-wider uppercase text-orange-500 bg-orange-500/10 px-3.5 py-1 rounded-full border border-orange-500/20">
              Pilares de Transformación
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Diseñado exclusivamente para la realidad de tu propiedad
            </h2>
            <p className="text-neutral-400 text-base sm:text-lg">
              Conoce en detalle las 5 soluciones que transforman la operativa diaria de hoteles independientes y glampings de lujo.
            </p>
          </div>

          {/* Zigzag Cards */}
          <div className="space-y-24">
            {benefits.map((b, index) => {
              const IconComponent = b.icon;
              return (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                    b.reverse ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  
                  {/* Text Column */}
                  <div
                    className={`space-y-6 ${
                      b.reverse ? "lg:col-span-6 lg:order-2" : "lg:col-span-6 lg:order-1"
                    }`}
                  >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono font-semibold">
                      <IconComponent className="w-3.5 h-3.5" />
                      <span>{b.badge}</span>
                    </div>

                    <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
                      {b.title}
                    </h3>

                    <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
                      {b.copy}
                    </p>

                    <div className="p-4 rounded-2xl bg-neutral-900/60 border border-neutral-800 flex items-start gap-3">
                      <Check className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <p className="text-sm font-semibold text-neutral-200">
                        {b.highlight}
                      </p>
                    </div>

                    <div className="pt-2">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-bold text-orange-500 hover:text-orange-400 transition-colors group"
                      >
                        <span>Consultar cómo se implementa en mi propiedad</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>

                  {/* Visual / Image Column */}
                  <div
                    className={`${
                      b.reverse ? "lg:col-span-6 lg:order-1" : "lg:col-span-6 lg:order-2"
                    }`}
                  >
                    <div className="relative rounded-3xl p-2 bg-gradient-to-b from-white/10 to-transparent shadow-2xl group overflow-hidden">
                      <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-900 border border-neutral-800">
                        <img
                          src={b.image}
                          alt={b.imageAlt}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-[0.8]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                        {/* Floating Micro Feature Tag */}
                        <div className="absolute bottom-5 left-5 right-5 p-3.5 rounded-xl bg-black/85 backdrop-blur-md border border-neutral-800 flex items-center justify-between text-xs">
                          <span className="font-semibold text-white">All In One Hotels</span>
                          <span className="text-orange-400 font-mono text-[11px] font-bold">
                            {b.badge}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ===================================================================== */}
      {/* 3. SECCIÓN DE INVERSIÓN VS. RETORNO (TRANSPARENCIA TOTAL) */}
      {/* ===================================================================== */}
      <section className="py-24 relative bg-black border-t border-neutral-800 overflow-hidden">
        
        {/* Glow Decor */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-orange-500/10 blur-[150px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-mono font-semibold tracking-wider uppercase text-orange-500 bg-orange-500/10 px-3.5 py-1 rounded-full border border-orange-500/20">
              Transparencia Total
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Inversión clara, retorno inmediato
            </h2>
            <p className="text-neutral-400 text-base sm:text-lg">
              Sin costos ocultos ni cláusulas de retención de comisiones. Una estructura fija y predecible pensada para potenciar tus utilidades.
            </p>
          </div>

          {/* Pricing Highlight Box */}
          <div className="relative rounded-3xl p-8 sm:p-12 lg:p-14 bg-neutral-900/60 backdrop-blur-2xl border-2 border-orange-500 shadow-[0_0_50px_rgba(255,107,0,0.2)]">
            
            {/* Top Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-orange-500 text-white font-extrabold text-xs uppercase tracking-wider px-4 py-1 rounded-full shadow-md">
              PLAN HOTELES Y GLAMPINGS INDEPENDIENTES
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Cost Breakdown */}
              <div className="lg:col-span-7 space-y-6">
                
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    Estructura de Inversión Oficial
                  </h3>
                  <p className="text-sm text-neutral-400 mt-1">
                    Incluye plataforma completa, asistente por WhatsApp y canal directo.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Setup Box */}
                  <div className="p-5 rounded-2xl bg-black/80 border border-neutral-800 space-y-1">
                    <span className="text-xs font-semibold text-neutral-400 block">
                      Puesta en marcha (Setup)
                    </span>
                    <div className="text-2xl font-black text-white font-mono">
                      $800 - $1,500 <span className="text-xs text-neutral-400">USD</span>
                    </div>
                    <p className="text-[11px] text-neutral-400 mt-1">
                      Pago único de instalación, configuración técnica y entrenamiento de tu equipo.
                    </p>
                  </div>

                  {/* Monthly Box */}
                  <div className="p-5 rounded-2xl bg-black/80 border border-neutral-800 space-y-1">
                    <span className="text-xs font-semibold text-neutral-400 block">
                      Membresía mensual
                    </span>
                    <div className="text-2xl font-black text-orange-400 font-mono">
                      $40 <span className="text-xs text-neutral-400">USD/mes</span>
                    </div>
                    <p className="text-[11px] text-neutral-400 mt-1">
                      + $3 a $5 USD por habitación activa. Cero porcentajes de ventas.
                    </p>
                  </div>

                </div>

                {/* Return on Investment Rationale */}
                <div className="p-5 rounded-2xl bg-orange-500/10 border border-orange-500/20">
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white">
                        La ecuación matemática es simple:
                      </h4>
                      <p className="text-xs sm:text-sm text-orange-200/90 mt-1 leading-relaxed">
                        &ldquo;Una sola reserva directa que le quites a una OTA (15% a 20% de comisión) paga la mensualidad de toda tu plataforma.&rdquo;
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Action Side Box */}
              <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-black/90 border border-neutral-800 space-y-6">
                <div className="space-y-3">
                  <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-bold">
                    ¿Qué incluye tu plan?
                  </span>
                  <ul className="space-y-2.5 text-xs text-neutral-300">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-orange-500 flex-shrink-0" />
                      <span>Motor de reservas directas sin comisiones</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-orange-500 flex-shrink-0" />
                      <span>Sincronización con Airbnb, Booking y Expedia</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-orange-500 flex-shrink-0" />
                      <span>Asistente virtual de ventas 24/7 en WhatsApp</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-orange-500 flex-shrink-0" />
                      <span>Integración de links y pasarelas de pago</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-orange-500 flex-shrink-0" />
                      <span>Inducción VIP y soporte personalizado</span>
                    </li>
                  </ul>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-5 rounded-xl font-bold text-sm bg-orange-500 hover:bg-orange-600 text-white transition-all duration-300 shadow-[0_0_25px_rgba(255,107,0,0.35)] hover:scale-[1.02] active:scale-[0.98] group"
                >
                  <MessageCircle className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  <span>Hablar con un asesor para mi propiedad</span>
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ===================================================================== */}
      {/* 4. CIERRE Y STICKY CTA */}
      {/* ===================================================================== */}
      <footer className="pt-28 pb-32 md:pb-24 relative bg-neutral-950 border-t border-neutral-900 text-center overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-mono font-medium border border-orange-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Paso Hacia la Independencia Comercial</span>
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            ¿Listo para modernizar la operación de tu propiedad?
          </h2>

          <p className="text-base sm:text-lg text-neutral-400 max-w-xl mx-auto leading-relaxed">
            Permítenos mostrarte en vivo cómo All In One Hotels puede sincronizar tus calendarios y empezar a capturar reservas directas para tu hotel o glamping desde esta misma semana.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl font-extrabold text-lg bg-orange-500 hover:bg-orange-600 text-white transition-all duration-300 shadow-[0_0_35px_rgba(255,107,0,0.35)] hover:scale-105 active:scale-95 group"
            >
              <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span>Contactar a un Asesor de Ventas</span>
            </a>
          </div>

          <div className="pt-12 text-xs text-neutral-400 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono">
            <span>© 2026 All In One Hotels • División Hoteles Boutique & Glampings</span>
            {onBack && (
              <button
                type="button"
                onClick={onBack}
                className="hover:text-orange-500 transition-colors underline cursor-pointer"
              >
                Volver al sitio principal
              </button>
            )}
          </div>

        </div>
      </footer>

      {/* ===================================================================== */}
      {/* BOTÓN STICKY (MÓVIL Y DESKTOP) */}
      {/* ===================================================================== */}
      {/* Sticky Bottom Bar on Mobile (<768px) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-3 bg-black/95 backdrop-blur-xl border-t border-neutral-800 md:hidden shadow-[0_-10px_30px_rgba(0,0,0,0.8)]">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-3 py-3.5 px-5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-sm shadow-[0_0_25px_rgba(255,107,0,0.35)] active:scale-95 transition-transform"
        >
          <div className="relative">
            <MessageCircle className="w-5 h-5 text-white" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full animate-ping" />
          </div>
          <span>Contactar a un Asesor de Ventas</span>
          <ArrowRight className="w-4 h-4 text-white" />
        </a>
      </div>

      {/* Floating Pill Button on Desktop (>=768px) */}
      <div className="hidden md:block fixed bottom-6 right-6 z-50">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 px-6 py-4 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-sm shadow-[0_0_35px_rgba(255,107,0,0.35)] hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-orange-400/40"
        >
          <div className="relative">
            <MessageCircle className="w-5 h-5 text-white group-hover:rotate-12 transition-transform" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full animate-ping" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full" />
          </div>
          <span>Contactar a un Asesor de Ventas</span>
        </a>
      </div>

    </div>
  );
};
