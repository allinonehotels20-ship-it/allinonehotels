"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "¿Necesito conocimientos técnicos para usar All In One Hotels?",
      a: "Absolutamente no. Nuestro equipo de ingenieros se encarga de todo el montaje, la conexión con tus canales de venta y de entrenar a tu asistente virtual. Tú y tu equipo solo reciben notificaciones de nuevas reservas directas y pagos confirmados en su WhatsApp y panel de control.",
    },
    {
      q: "¿Perderé mi posicionamiento en Booking o Airbnb?",
      a: "No. Nuestro motor de conexión global mantiene sincronizados tus calendarios en todos los portales. Tu estrategia debe ser usar las OTAs como vitrina para captar nuevos huéspedes y cerrar la recompra o clientes referidos por tu canal directo sin pagar comisiones del 15% al 20%.",
    },
    {
      q: "¿Qué pasa si ya uso un sistema hotelero en mi propiedad?",
      a: "Te ofrecemos nuestra integración 'Plug & Play'. Conectamos nuestro asistente virtual por WhatsApp directamente a tu sistema actual para que cierre ventas leyendo tu disponibilidad real, sin cambiar tu software base ni alterar la rutina de recepción.",
    },
    {
      q: "¿Cuánto tarda la implementación?",
      a: "Entre 2 a 3 semanas dependiendo de la cantidad de propiedades y la personalización del motor de reservas. Durante ese período configuramos los calendarios, adaptamos las respuestas comerciales a las políticas de tu hotel y realizamos pruebas exhaustivas antes del lanzamiento oficial.",
    },
  ];

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 relative border-t border-neutral-800 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-mono font-semibold tracking-wider uppercase text-orange-500 bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
            Transparencia Total
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Preguntas Frecuentes
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            Respuestas directas a las dudas más habituales de directores de hoteles, dueños de glampings y administradores turísticos.
          </p>
        </div>

        {/* Accordion Stack */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden bg-neutral-900/50 backdrop-blur-xl ${
                  isOpen
                    ? "border-orange-500/50 shadow-[0_0_25px_rgba(255,107,0,0.1)]"
                    : "border-neutral-800 hover:border-neutral-700"
                }`}
              >
                <button
                  type="button"
                  onClick={() => handleToggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 group focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`text-base sm:text-lg font-bold transition-colors ${
                      isOpen ? "text-orange-400" : "text-white group-hover:text-orange-300"
                    }`}
                  >
                    {faq.q}
                  </span>
                  
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all flex-shrink-0 ${
                      isOpen
                        ? "bg-orange-500/20 text-orange-400 rotate-180"
                        : "bg-white/5 text-neutral-400 group-hover:text-orange-400 group-hover:bg-orange-500/10"
                    }`}
                  >
                    <ChevronDown className="w-5 h-5 transition-transform duration-300" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-neutral-300 text-sm leading-relaxed border-t border-neutral-800 pt-4 animate-in fade-in duration-200">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
