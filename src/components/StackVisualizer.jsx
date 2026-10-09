"use client";

import React from "react";
import { MessageSquare, Bot, CalendarSync, CheckCircle2, ArrowDown, Zap, Sparkles, ShieldCheck, CreditCard, Clock } from "lucide-react";

export const StackVisualizer = () => {
  const steps = [
    {
      num: 1,
      tag: "Respuesta Inmediata",
      tagColor: "text-orange-400 bg-orange-500/10 border-orange-500/20",
      title: "Huésped escribe por WhatsApp",
      description: "Consulta de tarifas, cotización para fechas específicas o preguntas frecuentes sobre servicios del hotel.",
      tech: "Atención al Instante",
      techIcon: Zap,
      border: "group-hover:border-orange-500 group-hover:shadow-[0_0_25px_rgba(255,107,0,0.3)]",
      icon: MessageSquare,
      iconBg: "bg-orange-500/15 text-orange-500",
      numBg: "bg-orange-500 text-white",
      pulse: true,
    },
    {
      num: 2,
      tag: "Venta Asistida 24/7",
      tagColor: "text-orange-400 bg-orange-500/10 border-orange-500/20",
      title: "Asistente Virtual Inteligente",
      description: "Nuestro cerebro interpreta la solicitud, formula la cotización y lee tu disponibilidad en tiempo real.",
      tech: "Cotización Automática",
      techIcon: Sparkles,
      border: "group-hover:border-orange-500 group-hover:shadow-[0_0_25px_rgba(255,107,0,0.3)]",
      icon: Bot,
      iconBg: "bg-orange-500/15 text-orange-400",
      numBg: "bg-orange-500 text-white",
      rotateHover: true,
    },
    {
      num: 3,
      tag: "Cero Sobreventas",
      tagColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
      title: "Sincronización Global",
      description: "Bloqueo instantáneo en Booking, Airbnb y Expedia para garantizar cero sobreventas.",
      tech: "Calendarios Blindados",
      techIcon: ShieldCheck,
      border: "group-hover:border-amber-500 group-hover:shadow-[0_0_25px_rgba(245,158,11,0.3)]",
      icon: CalendarSync,
      iconBg: "bg-amber-500/15 text-amber-400",
      numBg: "bg-amber-500 text-black",
    },
    {
      num: 4,
      tag: "Ingreso Directo",
      tagColor: "text-orange-300 bg-orange-500/10 border-orange-500/20",
      title: "Cierre y Confirmación Segura",
      description: "La reserva se registra en tu panel central privado y se envía el link de pago al instante.",
      tech: "Cobro Inmediato a tu Cuenta",
      techIcon: CreditCard,
      border: "group-hover:border-orange-400 group-hover:shadow-[0_0_25px_rgba(255,107,0,0.3)]",
      icon: CheckCircle2,
      iconBg: "bg-orange-500/20 text-orange-400",
      numBg: "bg-orange-500 text-white",
    },
  ];

  return (
    <section className="py-20 relative bg-black border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-xs font-mono font-medium">
            <Zap className="w-3.5 h-3.5" />
            <span>Flujo Operativo Automatizado</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Cómo funciona la magia:{" "}
            <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">
              De la Consulta al Pago en Piloto Automático
            </span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-400">
            Un huésped inicia la conversación; el sistema inteligente consulta disponibilidad, protege tus calendarios en portales mundiales y formaliza el cobro sin que tengas que intervenir.
          </p>
        </div>

        {/* Pipeline Container */}
        <div className="relative max-w-6xl mx-auto rounded-3xl p-6 sm:p-10 border border-neutral-800 bg-neutral-900/50 backdrop-blur-xl overflow-hidden shadow-2xl">
          
          {/* Ambient Glows */}
          <div className="absolute -top-20 -left-20 w-60 h-60 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4 items-stretch">
            
            {/* Desktop Animated Laser Stream */}
            <div className="hidden lg:block absolute top-[52px] left-[12%] right-[12%] h-[2px] pointer-events-none z-0">
              <svg className="w-full h-4 overflow-visible" fill="none">
                <line x1="0" y1="0" x2="100%" y2="0" stroke="rgba(255,255,255,0.06)" strokeWidth="2" strokeDasharray="6 6" />
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="url(#orangeLaserGradient)"
                  strokeWidth="2.5"
                  className="stroke-dash-laser"
                />
                <defs>
                  <linearGradient id="orangeLaserGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FF6B00" />
                    <stop offset="50%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#ea580c" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Steps Mapping */}
            {steps.map((step, idx) => {
              const IconComp = step.icon;
              const TechIconComp = step.techIcon;

              return (
                <div key={step.num} className="relative z-10 flex flex-col items-center text-center group">
                  
                  {/* Badge Node */}
                  <div className="relative mb-5">
                    <div
                      className={`w-20 h-20 rounded-2xl bg-black border-2 border-neutral-800 flex items-center justify-center shadow-lg transition-all duration-300 group-hover:-translate-y-1 ${step.border}`}
                    >
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${step.iconBg}`}>
                        <IconComp className={`w-6 h-6 transition-transform duration-300 group-hover:scale-110 ${step.rotateHover ? "group-hover:rotate-12" : ""}`} />
                      </div>
                    </div>

                    {/* Step Number Tag */}
                    <span className={`absolute -top-2 -right-2 w-6 h-6 rounded-full text-xs font-mono font-bold flex items-center justify-center shadow-md ${step.numBg}`}>
                      {step.num}
                    </span>

                    {/* Pulsing indicator if active */}
                    {step.pulse && (
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
                      </span>
                    )}
                  </div>

                  {/* Texts */}
                  <div className="space-y-2">
                    <div className={`inline-block px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider border font-semibold ${step.tagColor}`}>
                      {step.tag}
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-orange-400 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs text-neutral-400 leading-relaxed px-2">
                      {step.description}
                    </p>
                    <div className="pt-2 text-[11px] font-mono text-orange-400/90 flex items-center justify-center gap-1">
                      <TechIconComp className="w-3 h-3" />
                      <span>{step.tech}</span>
                    </div>
                  </div>

                  {/* Mobile Down Arrow */}
                  {idx < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center py-4 text-orange-500">
                      <ArrowDown className="w-5 h-5 animate-bounce" />
                    </div>
                  )}
                </div>
              );
            })}

          </div>

          {/* Telemetry Status Bar (Traducción a lenguaje de negocios) */}
          <div className="mt-10 pt-6 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping"></span>
              <span className="text-neutral-300 font-medium">Estado del Sistema:</span>
              <span className="text-neutral-400">Infraestructura Cloud de Alta Seguridad • Procesamiento en Milisegundos</span>
            </div>
            <div className="flex items-center gap-2 text-neutral-400 font-mono text-[11px]">
              <Clock className="w-3.5 h-3.5 text-orange-500" />
              <span>Operación Ininterrumpida 24/7/365</span>
            </div>
          </div>

        </div>

      </div>

      <style jsx>{`
        .stroke-dash-laser {
          stroke-dasharray: 8 8;
          animation: flowLaser 2.2s linear infinite;
        }
        @keyframes flowLaser {
          0% {
            stroke-dashoffset: 100;
            opacity: 0.3;
          }
          50% {
            opacity: 1;
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 0.3;
          }
        }
      `}</style>
    </section>
  );
};
