"use client";

import React from "react";
import {
  Sparkles,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Check,
  Building2,
  FileSpreadsheet,
  Sparkle,
  KeyRound,
  Bot,
  Users2,
  TrendingUp,
  ChevronLeft,
  CalendarDays,
  LayoutDashboard
} from "lucide-react";
import { Header } from "./Header";

export const PropertyManagerFunnel = ({ onBack, onLoginClick }) => {
  const whatsappUrl =
    "https://wa.me/573000000000?text=Hola%2C%20administro%20m%C3%BAltiples%20propiedades%20y%20deseo%20agendar%20una%20demostraci%C3%B3n%20operativa%20del%20plan%20Property%20Managers";

  const pillars = [
    {
      badge: "Transparencia Total",
      title: "Portal Multi-Propietario en Tiempo Real",
      copy: "Dile adiós a las llamadas de dueños preguntando por la ocupación. Otorga accesos seguros para que cada propietario vea solo el rendimiento de su inmueble en tiempo real. Un panel exclusivo donde consultan noches ocupadas, ingresos brutos y bloqueos de uso propio sin que tengas que enviar capturas de pantalla.",
      highlight: "Ahorra más de 15 horas al mes eliminando consultas repetitivas de propietarios.",
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=85",
      imageAlt: "Dashboard moderno de gestión hotelera y analítica de propiedades",
      icon: Users2,
      reverse: false,
    },
    {
      badge: "Cero Errores Manuales",
      title: "Rendición de Cuentas en 1 Clic",
      copy: "Genera y envía reportes financieros automáticos. Liquidaciones claras, rápidas y sin errores de Excel. Al finalizar cada mes, el sistema calcula ingresos brutos, deduce costos de limpieza, comisiones de administración e insumos, generando un extracto financiero impecable listo para descargar o compartir.",
      highlight: "Liquidaciones mensuales de 10 a 50 propiedades en menos de 3 minutos.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85",
      imageAlt: "Pantalla con gráficos financieros y reportes de rentabilidad",
      icon: FileSpreadsheet,
      reverse: true,
    },
    {
      badge: "Operación Sin Fricciones",
      title: "Control Total de Logística y Cuadrillas de Limpieza",
      copy: "Gestión y alertas automáticas para tus cuadrillas de limpieza. El sistema notifica qué propiedad debe limpiarse inmediatamente después de cada check-out. El personal recibe una notificación con hora de salida, número de huéspedes y requisitos de preparación antes del próximo check-in.",
      highlight: "Coordinación de rotación de turnos automatizada sin supervisión telefónica.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
      imageAlt: "Villa vacacional moderna y espaciosa con acabados de lujo",
      icon: Sparkle,
      reverse: false,
    },
    {
      badge: "Check-in Autónomo",
      title: "Accesos Inteligentes y Cerraduras Digitales",
      copy: "Generación y envío autónomo de códigos de acceso digital vinculados a tus cerraduras inteligentes. Cero fricción en la llegada del huésped. Una vez confirmado el pago, el sistema despacha el PIN único por WhatsApp que se activa al momento del check-in y expira exactamente en el check-out.",
      highlight: "Elimina la entrega presencial de llaves y los retrasos por llegadas nocturnas.",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85",
      imageAlt: "Apartamento de lujo con cerradura digital y diseño contemporáneo",
      icon: KeyRound,
      reverse: true,
    },
    {
      badge: "Multi-Unit AI",
      title: "WhatsApp Centralizado para Múltiples Propiedades",
      copy: "Atención simultánea de múltiples propiedades. El asistente virtual sabe exactamente por cuál apartamento pregunta el cliente, guiando la venta sin cruzar información. Si un huésped consulta por una villa ocupada, sugiere de forma inteligente alternativas libres de tu propio portafolio.",
      highlight: "Multiplica la tasa de conversión cruzada sin saturar a tu equipo comercial.",
      image:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=85",
      imageAlt: "Condominio vacacional moderno y confortable en zona turística de alta demanda",
      icon: Bot,
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
        badge="Managers"
        whatsappUrl={whatsappUrl}
        ctaLabel="Demostración Operativa"
        onLoginClick={onLoginClick}
      />

      {/* ===================================================================== */}
      {/* 1. HERO SECTION (MULTI-PROPIEDAD) */}
      {/* ===================================================================== */}
      <section className="relative pt-36 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-4xl mx-auto space-y-6">
            
            {/* Pre-título */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
              <span>Plataforma de Gestión Multi-Propiedad</span>
            </div>

            {/* Titular */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.15]">
              Escala tu portafolio de propiedades sin{" "}
              <span className="block bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">
                multiplicar tu estrés operativo.
              </span>
            </h1>

            {/* Subtítulo */}
            <p className="text-lg sm:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
              Diseñado para administradores y empresas gestoras. Centraliza la comunicación de todas tus villas y apartamentos, automatiza la logística de limpieza y dale transparencia total a tus propietarios en piloto automático.
            </p>

            {/* Botón Primario Destacado */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl font-extrabold text-lg bg-orange-500 hover:bg-orange-600 text-white transition-all duration-300 shadow-[0_0_40px_rgba(255,107,0,0.4)] hover:scale-105 active:scale-95 group"
              >
                <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                <span>Agendar una demostración operativa</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-8 text-xs sm:text-sm text-neutral-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-orange-500" />
                <span>Aislamiento por Propietario</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-orange-400" />
                <span>Escalable de 5 a 100+ Unidades</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-orange-500" />
                <span>Cero Errores en Liquidaciones</span>
              </div>
            </div>

          </div>

          {/* Showcase Visual: Multi-unit Dashboard & Modern Villa */}
          <div className="mt-16 max-w-5xl mx-auto rounded-3xl p-2 bg-gradient-to-b from-white/10 via-white/5 to-transparent shadow-2xl">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 aspect-[16/9] sm:aspect-[21/9]">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85"
                alt="Portafolio de villas de lujo y apartamentos administrados con All In One Hotels"
                className="w-full h-full object-cover brightness-[0.75]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-2xl bg-black/85 backdrop-blur-xl border border-neutral-800">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center border border-orange-500/30 flex-shrink-0">
                    <LayoutDashboard className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
                      <span className="text-xs font-bold text-orange-400 uppercase tracking-wider font-mono">
                        Control Centralizado
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-white">
                      Vista unificada de inventario, check-outs y estados de limpieza
                    </h4>
                    <p className="text-xs text-neutral-400">
                      Toda tu flota de propiedades operando en perfecta sincronía.
                    </p>
                  </div>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-orange-500 hover:bg-orange-600 text-white transition-colors flex-shrink-0"
                >
                  <span>Ver Demo en Vivo</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ===================================================================== */}
      {/* 2. DESGLOSE DE BENEFICIOS (ZIGZAG LAYOUT) */}
      {/* ===================================================================== */}
      <section className="py-28 relative bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-mono font-semibold tracking-wider uppercase text-orange-500 bg-orange-500/10 px-3.5 py-1 rounded-full border border-orange-500/20">
              Pilares de Escalabilidad
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Infraestructura construida para administrar sin límites
            </h2>
            <p className="text-neutral-400 text-base sm:text-lg">
              Los 5 pilares operativos que permiten a empresas gestoras duplicar su portafolio sin contratar más personal de oficina.
            </p>
          </div>

          {/* Zigzag Cards */}
          <div className="space-y-24">
            {pillars.map((p, index) => {
              const IconComponent = p.icon;
              return (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                    p.reverse ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  
                  {/* Text Column */}
                  <div
                    className={`space-y-6 ${
                      p.reverse ? "lg:col-span-6 lg:order-2" : "lg:col-span-6 lg:order-1"
                    }`}
                  >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono font-semibold">
                      <IconComponent className="w-3.5 h-3.5" />
                      <span>{p.badge}</span>
                    </div>

                    <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
                      {p.title}
                    </h3>

                    <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
                      {p.copy}
                    </p>

                    <div className="p-4 rounded-2xl bg-neutral-900/60 border border-neutral-800 flex items-start gap-3">
                      <Check className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <p className="text-sm font-semibold text-neutral-200">
                        {p.highlight}
                      </p>
                    </div>

                    <div className="pt-2">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-bold text-orange-500 hover:text-orange-400 transition-colors group"
                      >
                        <span>Solicitar demostración de este módulo</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>

                  {/* Visual / Image Column */}
                  <div
                    className={`${
                      p.reverse ? "lg:col-span-6 lg:order-1" : "lg:col-span-6 lg:order-2"
                    }`}
                  >
                    <div className="relative rounded-3xl p-2 bg-gradient-to-b from-white/10 to-transparent shadow-2xl group overflow-hidden">
                      <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-900 border border-neutral-800">
                        <img
                          src={p.image}
                          alt={p.imageAlt}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-[0.8]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                        {/* Floating Micro Feature Tag */}
                        <div className="absolute bottom-5 left-5 right-5 p-3.5 rounded-xl bg-black/85 backdrop-blur-md border border-neutral-800 flex items-center justify-between text-xs">
                          <span className="font-semibold text-white">All In One Managers</span>
                          <span className="text-orange-400 font-mono text-[11px] font-bold">
                            {p.badge}
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
      {/* 3. SECCIÓN DE INVERSIÓN Y RETORNO (ROI MULTI-PROPIEDAD) */}
      {/* ===================================================================== */}
      <section className="py-24 relative bg-black border-t border-neutral-800 overflow-hidden">
        
        {/* Glow Decor */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-orange-500/10 blur-[150px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-mono font-semibold tracking-wider uppercase text-orange-500 bg-orange-500/10 px-3.5 py-1 rounded-full border border-orange-500/20">
              Economía Operativa
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Precios claros con rentabilidad garantizada
            </h2>
            <p className="text-neutral-400 text-base sm:text-lg">
              Un modelo de inversión predecible que escala junto con el crecimiento de tu portafolio de unidades.
            </p>
          </div>

          {/* Pricing Highlight Box */}
          <div className="relative rounded-3xl p-8 sm:p-12 lg:p-14 bg-neutral-900/60 backdrop-blur-2xl border-2 border-orange-500 shadow-[0_0_50px_rgba(255,107,0,0.2)]">
            
            {/* Top Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-orange-500 text-white font-extrabold text-xs uppercase tracking-wider px-4 py-1 rounded-full shadow-md">
              PLAN EXCLUSIVO PROPERTY MANAGERS
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Cost Breakdown */}
              <div className="lg:col-span-7 space-y-6">
                
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    Estructura de Inversión Multi-Unidad
                  </h3>
                  <p className="text-sm text-neutral-400 mt-1">
                    Incluye portales de propietarios, automatización de limpieza y conexión de cerraduras.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Setup Box */}
                  <div className="p-5 rounded-2xl bg-black/80 border border-neutral-800 space-y-1">
                    <span className="text-xs font-semibold text-neutral-400 block">
                      Puesta en marcha (Setup)
                    </span>
                    <div className="text-2xl font-black text-white font-mono">
                      $1,000 - $2,000 <span className="text-xs text-neutral-400">USD</span>
                    </div>
                    <p className="text-[11px] text-neutral-400 mt-1">
                      Configuración completa del portafolio, reglas de liquidación y automatizaciones operativas.
                    </p>
                  </div>

                  {/* Monthly Box */}
                  <div className="p-5 rounded-2xl bg-black/80 border border-neutral-800 space-y-1">
                    <span className="text-xs font-semibold text-neutral-400 block">
                      Membresía mensual
                    </span>
                    <div className="text-2xl font-black text-orange-400 font-mono">
                      $50 <span className="text-xs text-neutral-400">USD/mes (Base)</span>
                    </div>
                    <p className="text-[11px] text-neutral-400 mt-1">
                      + $10 a $15 USD por apartamento o villa gestionada. Cero cobros porcentuales.
                    </p>
                  </div>

                </div>

                {/* Return on Investment Rationale */}
                <div className="p-5 rounded-2xl bg-orange-500/10 border border-orange-500/20">
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white">
                        Rentabilidad comprobada para gestores:
                      </h4>
                      <p className="text-xs sm:text-sm text-orange-200/90 mt-1 leading-relaxed">
                        &ldquo;Una infraestructura tecnológica que absorbe el trabajo de tres recepcionistas y un coordinador logístico, por una fracción del costo.&rdquo;
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Action Side Box */}
              <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-black/90 border border-neutral-800 space-y-6">
                <div className="space-y-3">
                  <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-bold">
                    Módulos Empresariales Incluidos:
                  </span>
                  <ul className="space-y-2.5 text-xs text-neutral-300">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-orange-500 flex-shrink-0" />
                      <span>Portal Multi-Propietario con accesos independientes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-orange-500 flex-shrink-0" />
                      <span>Rendición de cuentas y extractos en 1 clic</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-orange-500 flex-shrink-0" />
                      <span>Automatización de cuadrillas de limpieza post check-out</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-orange-500 flex-shrink-0" />
                      <span>Generación y despacho de claves de cerraduras inteligentes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-orange-500 flex-shrink-0" />
                      <span>Asistente en WhatsApp multi-unidad sin cruce de datos</span>
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
                  <span>Agendar una demostración operativa</span>
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
            <span>Escalabilidad Operativa</span>
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Administra 5 o 50 propiedades con el mismo tamaño de equipo.
          </h2>

          <p className="text-base sm:text-lg text-neutral-400 max-w-xl mx-auto leading-relaxed">
            ¿Listo para optimizar tu operación? Permítenos mostrarte en vivo cómo All In One Hotels elimina las tareas repetitivas y le brinda transparencia total a tus propietarios.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl font-extrabold text-lg bg-orange-500 hover:bg-orange-600 text-white transition-all duration-300 shadow-[0_0_35px_rgba(255,107,0,0.35)] hover:scale-105 active:scale-95 group"
            >
              <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span>Agenda tu demostración ahora</span>
            </a>
          </div>

          <div className="pt-12 text-xs text-neutral-400 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono">
            <span>© 2026 All In One Hotels • División Property Managers & Multi-Propiedad</span>
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
          <span>Agenda tu demostración ahora</span>
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
          <span>Agenda tu demostración ahora</span>
        </a>
      </div>

    </div>
  );
};
