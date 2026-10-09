"use client";

import React, { useState } from "react";
import {
  Sparkles,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Check,
  Cpu,
  Layers,
  RefreshCw,
  CreditCard,
  Building2,
  ChevronLeft,
  ChevronDown,
  Terminal,
  Zap,
  Lock,
  GitMerge,
  Smartphone,
  SlidersHorizontal,
  Workflow,
  HelpCircle,
  FileCheck2,
  Headphones
} from "lucide-react";
import { Header } from "./Header";

export const PlugAndPlayFunnel = ({ onBack, onLoginClick }) => {
  const [openFaq, setOpenFaq] = useState(null);

  const whatsappUrl =
    "https://wa.me/573000000000?text=Hola%2C%20estoy%20interesado%20en%20el%20m%C3%B3dulo%20Plug%20%26%20Play%20y%20deseo%20solicitar%20un%20an%C3%A1lisis%20de%20viabilidad%20t%C3%A9cnica%20para%20conectar%20mi%20PMS";

  const pillars = [
    {
      badge: "Integración Nativa",
      title: "Conexión Directa con tu Sistema Actual",
      copy: "Nos enlazamos de forma nativa con los principales sistemas del mercado. Tu infraestructura tecnológica actual se mantiene intacta. Nos conectamos a través de protocolos seguros y conectores oficiales a tu PMS, Channel Manager o motor existente sin necesidad de complejas migraciones ni costosas capacitaciones para tu personal.",
      highlight: "Tu equipo continúa trabajando en su entorno habitual sin curvas de aprendizaje.",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85",
      imageAlt: "Infraestructura de servidores y sincronización de APIs en la nube",
      icon: GitMerge,
      reverse: false,
    },
    {
      badge: "Inventario en Tiempo Real",
      title: "Lectura en Vivo de Inventario y Tarifas Oficiales",
      copy: "El asistente virtual no adivina. Lee tu inventario oficial y tus tarifas dinámicas en tiempo real antes de enviar cualquier cotización. Si una habitación se reserva en Booking, Expedia o en el mostrador físico, la IA actualiza su disponibilidad en milisegundos y jamás ofrecerá fechas ocupadas.",
      highlight: "Eliminación absoluta de sobreventas (overbooking) en tus canales de mensajería.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
      imageAlt: "Pantalla con métricas de inventario y analítica hotelera en tiempo real",
      icon: RefreshCw,
      reverse: true,
    },
    {
      badge: "Identidad & Reglas de Negocio",
      title: "Políticas y Tono 100% Personalizados",
      copy: "Entrenamos a la IA para que hable con el tono de tu marca y aplique estrictamente tus políticas de cancelación, mascotas, horarios de check-in/out y depósitos de garantía. Responde con la calidez y precisión de tu mejor ejecutivo de ventas, respetando cada directriz comercial.",
      highlight: "Protocolos de atención corporativos ejecutados rigurosamente el 100% de las veces.",
      image:
        "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=1200&q=85",
      imageAlt: "Huésped interactuando con servicio personalizado en smartphone",
      icon: SlidersHorizontal,
      reverse: false,
    },
    {
      badge: "Checkout sin Fricción",
      title: "Cobros Inmediatos y Seguros por Chat",
      copy: "Envío directo de botones y pasarelas de pago seguras dentro de la conversación. El cliente paga sin salir de WhatsApp mediante enlaces generados al instante compatibles con Wompi, Bold, Stripe, Mercado Pago o transferencias bancarias verificadas con confirmación automática.",
      highlight: "Cierre de reservas hasta 4 veces más rápido que con cotizaciones manuales por correo.",
      image:
        "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=85",
      imageAlt: "Pasarela de pagos digitales y transacciones electrónicas seguras",
      icon: CreditCard,
      reverse: true,
    },
    {
      badge: "Flujo Invisible",
      title: "Cero Interrupciones en tu Rutina Operativa",
      copy: "Tu equipo de recepción sigue usando la misma pantalla de siempre. La IA hace el trabajo pesado de prospectar, responder preguntas repetitivas y cobrar; una vez liquidada la reserva, esta aparece mágicamente inyectada en el calendario de tu software habitual con todos los datos del huésped.",
      highlight: "Libera a tu recepción de cientos de mensajes para enfocarse en la experiencia física del huésped.",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85",
      imageAlt: "Recepción de hotel boutique de alta categoría atendiendo huéspedes",
      icon: Workflow,
      reverse: false,
    },
  ];

  const faqs = [
    {
      q: "¿Es necesario cambiar el software o PMS que ya usamos en nuestro hotel?",
      a: "No, en absoluto. La filosofía de Plug & Play es actuar como un acelerador inteligente ('Add-on'). Tu equipo continúa usando exactamente el mismo sistema para facturación, asignación de cuartos y check-in. Nosotros solo construimos el puente de conexión inteligente hacia WhatsApp.",
    },
    {
      q: "¿Qué sistemas hoteleros son compatibles con esta integración?",
      a: "Nos integramos con cualquier sistema que cuente con API pública, webhooks o Channel Managers headless (como Channex, Cloudbeds, Sirvoy, Opera Cloud, Beds24, entre otros). Durante la llamada de viabilidad técnica analizamos tu arquitectura específica.",
    },
    {
      q: "¿Qué sucede si el huésped hace una pregunta compleja o requiere atención humana?",
      a: "El sistema detecta solicitudes especiales (ej. eventos corporativos, requerimientos médicos o quejas) y transfiere la conversación en segundos a un recepcionista humano, silenciándose de forma autónoma para no interrumpir el trato personal.",
    },
    {
      q: "¿Cuánto tiempo toma el proceso de conexión y puesta en marcha?",
      a: "El tiempo estándar de implementación oscila entre 7 y 21 días hábiles, dependiendo de la apertura técnica de tu PMS actual y del nivel de personalización de las respuestas y pasarelas requeridas.",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50 font-sans antialiased selection:bg-orange-500 selection:text-white relative overflow-x-hidden">
      
      {/* Orbes de luz ambiental cálida tecnológica */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-orange-500/10 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="fixed top-[45%] right-[-10%] w-[500px] h-[500px] bg-amber-500/8 blur-[160px] rounded-full pointer-events-none -z-10" />
      <div className="fixed bottom-10 left-[-10%] w-[600px] h-[600px] bg-orange-600/8 blur-[170px] rounded-full pointer-events-none -z-10" />

      {/* ===================================================================== */}
      {/* FUNNEL NAVIGATION */}
      {/* ===================================================================== */}
      <Header
        onBack={onBack}
        badge="Plug & Play"
        whatsappUrl={whatsappUrl}
        ctaLabel="Solicitar viabilidad técnica"
        onLoginClick={onLoginClick}
      />

      {/* ===================================================================== */}
      {/* 1. HERO SECTION */}
      {/* ===================================================================== */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-4xl mx-auto space-y-6">
            
            {/* Pre-título Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs sm:text-sm font-mono font-medium shadow-[0_0_15px_rgba(255,107,0,0.15)]">
              <Cpu className="w-4 h-4 text-orange-500" />
              <span>Módulo de Integración Externa</span>
            </div>

            {/* Titular Principal */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Supercarga tu actual software hotelero con un{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500">
                Asistente de Ventas con IA.
              </span>
            </h1>

            {/* Subtítulo */}
            <p className="text-neutral-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
              ¿Ya usas un sistema robusto? Perfecto. Conectamos nuestro motor inteligente directamente a tu PMS actual para que cierres ventas por WhatsApp 24/7 leyendo tu disponibilidad real, sin obligarte a migrar ni cambiar tu operativa diaria.
            </p>

            {/* Botones de Acción */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-base bg-orange-500 hover:bg-orange-600 text-white transition-all duration-300 shadow-[0_0_30px_rgba(255,107,0,0.35)] hover:scale-105 active:scale-95 group"
              >
                <span>Asesórate con un experto en integraciones</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              {onBack && (
                <button
                  type="button"
                  onClick={onBack}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-sm bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-800 transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Explorar otros planes</span>
                </button>
              )}
            </div>

            {/* Micro-puntos de confianza */}
            <div className="pt-6 flex flex-wrap justify-center items-center gap-6 text-xs text-neutral-400 font-mono">
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-orange-500" />
                100% Cero Migraciones Forzadas
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-orange-500" />
                Lectura Oficial de Tarifas en Vivo
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-orange-500" />
                Seguridad & Cifrado Enterprise
              </span>
            </div>

          </div>

          {/* Maqueta Visual Interactiva: Puente Tecnológico PMS <-> IA WhatsApp */}
          <div className="mt-16 relative max-w-5xl mx-auto">
            <div className="rounded-3xl p-6 sm:p-10 bg-neutral-900/60 border border-neutral-800 backdrop-blur-xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="text-center mb-8">
                <span className="text-xs font-mono text-orange-400 uppercase tracking-widest font-semibold">
                  Arquitectura en Acción • Flujo de Sincronización Continua
                </span>
                <h3 className="text-lg sm:text-2xl font-bold text-white mt-1">
                  Tu PMS existente + Nuestro Motor Conversacional
                </h3>
              </div>

              {/* Diagrama de 3 Columnas */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                
                {/* Columna 1: Tu PMS Actual */}
                <div className="p-5 rounded-2xl bg-black/80 border border-neutral-800 space-y-3 relative group hover:border-neutral-700 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-neutral-400 font-medium">1. Tu Infraestructura</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-orange-400">
                      <Layers className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Tu Software Actual</h4>
                      <p className="text-xs text-neutral-400">Opera, Cloudbeds, Sirvoy, etc.</p>
                    </div>
                  </div>
                  <ul className="text-xs text-neutral-400 space-y-1.5 pt-2 border-t border-neutral-800/80">
                    <li className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-orange-500" />
                      <span>Inventario oficial de habitaciones</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-orange-500" />
                      <span>Tarifas dinámicas y temporadas</span>
                    </li>
                  </ul>
                </div>

                {/* Columna 2: Conexión Add-On (El Puente Inteligente) */}
                <div className="p-6 rounded-2xl bg-gradient-to-b from-orange-500/15 via-orange-500/5 to-transparent border border-orange-500/30 text-center space-y-3 relative shadow-[0_0_30px_rgba(255,107,0,0.15)]">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-300 text-xs font-mono font-bold">
                    <Zap className="w-3.5 h-3.5 text-orange-400" />
                    <span>Conector Plug & Play</span>
                  </div>
                  <div className="py-2">
                    <div className="w-12 h-12 mx-auto rounded-2xl bg-orange-500 flex items-center justify-center text-white shadow-[0_0_20px_rgba(255,107,0,0.4)]">
                      <Cpu className="w-6 h-6 animate-pulse" />
                    </div>
                  </div>
                  <h4 className="text-sm font-bold text-white">Sincronización Bidireccional</h4>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    Lee inventario en milisegundos e inyecta la reserva confirmada directamente en tu calendario.
                  </p>
                </div>

                {/* Columna 3: Ventas en WhatsApp */}
                <div className="p-5 rounded-2xl bg-black/80 border border-neutral-800 space-y-3 relative group hover:border-neutral-700 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-neutral-400 font-medium">3. Canal de Ventas</span>
                    <span className="text-xs font-mono text-orange-400 font-bold">24/7 Activo</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-orange-400">
                      <Smartphone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">WhatsApp Conversacional</h4>
                      <p className="text-xs text-neutral-400">Cotización + Pago Instantáneo</p>
                    </div>
                  </div>
                  <ul className="text-xs text-neutral-400 space-y-1.5 pt-2 border-t border-neutral-800/80">
                    <li className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-orange-500" />
                      <span>Atención y cierre en 60 segundos</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-orange-500" />
                      <span>Cobros con pasarela sin salir del chat</span>
                    </li>
                  </ul>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ===================================================================== */}
      {/* 2. DESGLOSE DE BENEFICIOS (5 PILARES EN ZIG-ZAG) */}
      {/* ===================================================================== */}
      <section className="py-24 bg-black relative border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-mono font-semibold tracking-wider uppercase text-orange-500 bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
              Arquitectura Add-On Sin Riesgos
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Los 5 pilares de una integración sin fricción
            </h2>
            <p className="text-neutral-400 text-base sm:text-lg">
              Diseñado minuciosamente para hoteles y complejos con sistemas consolidados que buscan multiplicar sus ventas directas sin traumas operativos.
            </p>
          </div>

          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                  pillar.reverse ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Texto del Pilar */}
                <div
                  className={`space-y-6 lg:col-span-6 ${
                    pillar.reverse ? "lg:col-start-7" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-400 bg-orange-500/10 px-3 py-1 rounded-md border border-orange-500/20">
                      Pilar 0{index + 1} • {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
                    {pillar.title}
                  </h3>

                  <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
                    {pillar.copy}
                  </p>

                  <div className="p-4 rounded-xl bg-neutral-900/70 border border-neutral-800 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-orange-500/10 text-orange-400 shrink-0 mt-0.5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-neutral-200">
                      <strong className="text-white block mb-0.5">Impacto Operativo:</strong>
                      {pillar.highlight}
                    </p>
                  </div>
                </div>

                {/* Imagen / Visual del Pilar */}
                <div
                  className={`lg:col-span-6 ${
                    pillar.reverse ? "lg:col-start-1" : ""
                  }`}
                >
                  <div className="relative group rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-900/40 p-2 shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
                    
                    <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-neutral-950">
                      <img
                        src={pillar.image}
                        alt={pillar.imageAlt}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                        loading="lazy"
                      />
                      
                      {/* Badge flotante sobre la foto */}
                      <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/85 backdrop-blur-md border border-neutral-800/80 flex items-center justify-between text-xs font-mono text-neutral-300">
                        <span className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-orange-500" />
                          <span>{pillar.badge}</span>
                        </span>
                        <span className="text-neutral-400">All In One Engine</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

        </div>
      </section>

      {/* ===================================================================== */}
      {/* 3. SECCIÓN DE INVERSIÓN Y ALCANCE (MODELO CUSTOM ENTERPRISE) */}
      {/* ===================================================================== */}
      <section className="py-24 bg-neutral-950 relative border-t border-neutral-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-mono font-semibold tracking-wider uppercase text-orange-500 bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
              Inversión y Alcance
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Modelo a Medida según tu Arquitectura
            </h2>
            <p className="text-neutral-400 text-base sm:text-lg">
              Una solución Enterprise diseñada para escalar tus ventas directas sin alterar el ecosistema en el que tu equipo ya confía.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
            
            {/* Tarjeta Principal de Alcance Personalizado */}
            <div className="lg:col-span-7 rounded-3xl p-8 sm:p-10 bg-neutral-900/60 border border-neutral-800 flex flex-col justify-between shadow-2xl relative">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono font-bold">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>Esquema Enterprise</span>
                  </div>
                  <span className="text-xs font-mono text-neutral-400">Add-On PMS</span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    Integración a Medida
                  </h3>
                  <p className="text-sm text-neutral-300 mt-2 leading-relaxed">
                    Personalizado según el volumen de reservas y la arquitectura de tu software actual.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-black/80 border border-neutral-800 space-y-3">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-xs text-neutral-400 font-medium block">Integración técnica:</span>
                      <span className="text-2xl sm:text-3xl font-extrabold text-white">A convenir</span>
                    </div>
                    <span className="text-xs font-mono text-orange-400 font-semibold bg-orange-500/10 px-2.5 py-1 rounded border border-orange-500/20">
                      Tras análisis de viabilidad
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400 pt-2 border-t border-neutral-800">
                    Incluye auditoría de endpoints, pruebas de estrés de inventario y entrenamiento personalizado con tus manuales de marca.
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-bold">
                    ¿Qué incluye este alcance técnico?
                  </h4>
                  <ul className="space-y-2.5 text-sm text-neutral-300">
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                      <span>Auditoría previa de APIs, conectores o webhooks de tu PMS</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                      <span>Configuración de sincronización de inventario y tarifas en vivo</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                      <span>Entrenamiento del agente con políticas y catálogo de servicios</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                      <span>Conexión de pasarela de pago nativa (Wompi, Stripe, Bold o MercadoPago)</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                      <span>Garantía de soporte técnico y acompañamiento continuo</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-8">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-bold text-base bg-orange-500 hover:bg-orange-600 text-white transition-all shadow-[0_0_25px_rgba(255,107,0,0.3)] hover:scale-[1.02] active:scale-95"
                >
                  <span>Solicitar análisis de viabilidad técnica</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Comparativa: Migrar vs Integrar con All In One */}
            <div className="lg:col-span-5 rounded-3xl p-8 bg-black border border-neutral-800 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-xs font-mono uppercase tracking-wider text-orange-400 font-bold block">
                  Por qué elegir Plug & Play
                </span>
                <h4 className="text-xl font-bold text-white">
                  El costo oculto de cambiar de software vs. Integrar nuestra IA
                </h4>
                
                <div className="space-y-4 pt-2">
                  <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800/80 space-y-1.5">
                    <span className="text-xs font-bold text-neutral-400 uppercase tracking-wide">
                      Cambiar de PMS Tradicional
                    </span>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      Semanas de migración de base de datos, semanas de re-entrenamiento del personal en recepción y riesgo de pérdida de historial de clientes.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/30 space-y-1.5">
                    <span className="text-xs font-bold text-orange-400 uppercase tracking-wide flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5" />
                      Integrar All In One Plug & Play
                    </span>
                    <p className="text-xs text-neutral-200 leading-relaxed">
                      Cero cambios en recepción. Tu equipo sigue con su rutina mientras la IA suma un canal de ventas de alta conversión 24/7 en WhatsApp.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/50 border border-neutral-800 text-xs text-neutral-400 space-y-1 font-mono">
                <span className="text-neutral-300 font-bold block">¿Tienes dudas sobre tu software?</span>
                <p>Verificamos la compatibilidad de tu PMS de forma gratuita antes de cotizar.</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ===================================================================== */}
      {/* 4. PREGUNTAS FRECUENTES (FAQ) */}
      {/* ===================================================================== */}
      <section className="py-20 bg-black relative border-t border-neutral-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3">
            <span className="text-xs font-mono font-semibold tracking-wider uppercase text-orange-500 bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
              Claridad Técnica
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
              Preguntas Frecuentes sobre la Integración
            </h3>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-neutral-800 bg-neutral-900/40 overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-white hover:text-orange-400 transition-colors cursor-pointer"
                  >
                    <span className="text-base sm:text-lg">{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-neutral-400 transition-transform duration-300 shrink-0 ${
                        isOpen ? "rotate-180 text-orange-500" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 text-neutral-300 text-sm leading-relaxed border-t border-neutral-800/60 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ===================================================================== */}
      {/* 5. CIERRE FINAL PERSUASIVO & FOOTER */}
      {/* ===================================================================== */}
      <footer className="py-24 bg-neutral-950 relative border-t border-neutral-800 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-orange-400 bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
            Escalabilidad Sin Límites
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Lleva las reservas de WhatsApp al siguiente nivel sin tocar tu PMS.
          </h2>

          <p className="text-base sm:text-lg text-neutral-400 max-w-xl mx-auto leading-relaxed">
            Permítenos evaluar la compatibilidad de tu sistema actual y mostrarte cómo nuestro motor automatiza cotizaciones y cobros en tiempo real.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl font-extrabold text-lg bg-orange-500 hover:bg-orange-600 text-white transition-all duration-300 shadow-[0_0_35px_rgba(255,107,0,0.35)] hover:scale-105 active:scale-95 group"
            >
              <Terminal className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span>Solicitar viabilidad técnica</span>
            </a>
          </div>

          <div className="pt-12 text-xs text-neutral-400 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono">
            <span>© 2026 All In One Hotels • División Enterprise Plug & Play</span>
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
      {/* 6. BOTÓN STICKY (MÓVIL Y DESKTOP) */}
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
            <Terminal className="w-5 h-5 text-white" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full animate-ping" />
          </div>
          <span>Solicitar viabilidad técnica</span>
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
            <Terminal className="w-5 h-5 text-white group-hover:rotate-12 transition-transform" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full animate-ping" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full" />
          </div>
          <span>Solicitar viabilidad técnica</span>
        </a>
      </div>

    </div>
  );
};
