"use client";

import React, { useState, useEffect } from "react";
import { Home, DollarSign, Percent, Info, AlertCircle, CheckCircle, MessageCircle } from "lucide-react";

export const PricingCalculator = () => {
  const [rooms, setRooms] = useState(10);
  const [price, setPrice] = useState(120);
  const [occupancy, setOccupancy] = useState(65);

  // Animated outputs state
  const [displayOta, setDisplayOta] = useState(3510);
  const [displayAio, setDisplayAio] = useState(80);
  const [displaySavings, setDisplaySavings] = useState(41160);

  // Calculate target financial metrics
  const monthlyRevenue = rooms * price * 30 * (occupancy / 100);
  const targetOtaMonthly = monthlyRevenue * 0.15; // 15% OTA commission
  const targetAioMonthly = 40 + rooms * 4; // $40 base + $4/room
  const targetMonthlySavings = targetOtaMonthly - targetAioMonthly;
  const targetAnnualSavings = Math.max(0, targetMonthlySavings * 12);

  // Smooth lerp / requestAnimationFrame number transition
  useEffect(() => {
    let animId;
    const startTime = performance.now();
    const duration = 250; // ms

    const startOta = displayOta;
    const startAio = displayAio;
    const startSavings = displaySavings;

    const animate = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const ease = 1 - Math.pow(1 - progress, 3);

      setDisplayOta(startOta + (targetOtaMonthly - startOta) * ease);
      setDisplayAio(startAio + (targetAioMonthly - startAio) * ease);
      setDisplaySavings(startSavings + (targetAnnualSavings - startSavings) * ease);

      if (progress < 1) {
        animId = requestAnimationFrame(animate);
      }
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [rooms, price, occupancy]);

  const formatCurrency = (val) => {
    return "$" + Math.round(val).toLocaleString("en-US") + " USD";
  };

  const dynamicWhatsappMessage = encodeURIComponent(
    `Hola! Usé la calculadora en su web con ${rooms} habitaciones a $${price} USD (${occupancy}% ocupación) y calculé que puedo retener aprox. +${formatCurrency(targetAnnualSavings)} al año. Me gustaría asesorarme con un experto de All In One Hotels.`
  );

  return (
    <section id="calculadora" className="py-24 relative overflow-hidden bg-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-mono font-semibold tracking-wider uppercase text-orange-500 bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
            Calculadora de Retorno de Inversión
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            El &ldquo;Abre Ojos&rdquo;:{" "}
            <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">
              ¿Cuánto dinero estás dejando en la mesa?
            </span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-400">
            Ajusta los controles según los números de tu propiedad y visualiza al instante las comisiones que estás transfiriendo innecesariamente a intermediarios.
          </p>
        </div>

        {/* Glassmorphism Calculator Card */}
        <div className="relative rounded-3xl p-6 sm:p-10 lg:p-12 border border-neutral-800 shadow-[0_0_50px_rgba(255,107,0,0.1)] bg-neutral-900/50 backdrop-blur-2xl overflow-hidden">
          
          {/* Ambient Orbs */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Inputs Column (Sliders) */}
            <div className="lg:col-span-7 space-y-7">
              
              {/* Slider 1: Habitaciones */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <label htmlFor="rooms" className="text-sm font-semibold text-neutral-200 flex items-center gap-2">
                    <Home className="w-4 h-4 text-orange-500" />
                    <span>Número de habitaciones / propiedades</span>
                  </label>
                  <span className="text-base font-bold font-mono text-orange-400 bg-orange-500/10 px-2.5 py-0.5 rounded border border-orange-500/20">
                    {rooms} {rooms === 1 ? "habitación" : "habitaciones"}
                  </span>
                </div>
                <input
                  id="rooms"
                  type="range"
                  min="1"
                  max="50"
                  step="1"
                  value={rooms}
                  onChange={(e) => setRooms(parseInt(e.target.value, 10))}
                  className="w-full accent-orange-500 bg-neutral-800 h-2 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] font-mono text-neutral-400">
                  <span>1 unidad</span>
                  <span>25 unidades</span>
                  <span>50 unidades</span>
                </div>
              </div>

              {/* Slider 2: Precio promedio por noche */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <label htmlFor="price" className="text-sm font-semibold text-neutral-200 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-orange-500" />
                    <span>Tarifa promedio por noche (USD)</span>
                  </label>
                  <span className="text-base font-bold font-mono text-orange-400 bg-orange-500/10 px-2.5 py-0.5 rounded border border-orange-500/20">
                    ${price} USD
                  </span>
                </div>
                <input
                  id="price"
                  type="range"
                  min="30"
                  max="500"
                  step="5"
                  value={price}
                  onChange={(e) => setPrice(parseFloat(e.target.value))}
                  className="w-full accent-orange-500 bg-neutral-800 h-2 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] font-mono text-neutral-400">
                  <span>$30 USD</span>
                  <span>$250 USD</span>
                  <span>$500 USD</span>
                </div>
              </div>

              {/* Slider 3: Porcentaje de ocupación */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <label htmlFor="occupancy" className="text-sm font-semibold text-neutral-200 flex items-center gap-2">
                    <Percent className="w-4 h-4 text-orange-500" />
                    <span>Porcentaje de ocupación mensual</span>
                  </label>
                  <span className="text-base font-bold font-mono text-orange-400 bg-orange-500/10 px-2.5 py-0.5 rounded border border-orange-500/20">
                    {occupancy}%
                  </span>
                </div>
                <input
                  id="occupancy"
                  type="range"
                  min="10"
                  max="100"
                  step="1"
                  value={occupancy}
                  onChange={(e) => setOccupancy(parseInt(e.target.value, 10))}
                  className="w-full accent-orange-500 bg-neutral-800 h-2 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] font-mono text-neutral-400">
                  <span>10%</span>
                  <span>50%</span>
                  <span>100%</span>
                </div>
              </div>

              {/* Banner informativo */}
              <div className="p-3.5 rounded-xl bg-black/80 border border-neutral-800 flex items-center gap-3 text-xs text-neutral-400">
                <Info className="w-4 h-4 text-orange-500 flex-shrink-0" />
                <span>Cálculo basado en 30 días/mes. El costo All In One incluye membresía base ($40 USD) + tarifa plana por habitación activa ($4 USD).</span>
              </div>

            </div>

            {/* Outputs Column (Resultados en tiempo real) */}
            <div className="lg:col-span-5 bg-black/90 rounded-2xl p-6 sm:p-7 border border-neutral-800 flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                
                {/* Dato A: Rojo Alerta */}
                <div className="p-3.5 rounded-xl bg-red-950/20 border border-red-500/25">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold text-red-300 flex items-center gap-1.5">
                      <AlertCircle className="w-3.5 h-3.5 text-red-400" />
                      Comisión pagada a OTAs / mes
                    </span>
                    <span className="text-[10px] font-mono bg-red-500/20 text-red-400 px-1.5 py-0.5 rounded font-bold">15% Comisiones</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-red-400 font-mono tracking-tight">
                    {formatCurrency(displayOta)}
                  </div>
                  <p className="text-[11px] text-neutral-400 mt-0.5">Capital que deja de entrar al patrimonio de tu hotel cada mes.</p>
                </div>

                {/* Dato B: Naranja Acento */}
                <div className="p-3.5 rounded-xl bg-orange-950/20 border border-orange-500/30">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold text-orange-300 flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-orange-500" />
                      Inversión fija mensual All In One
                    </span>
                    <span className="text-[10px] font-mono bg-orange-500/20 text-orange-400 px-1.5 py-0.5 rounded font-bold">Sin Comisiones</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight">
                    {formatCurrency(displayAio)}
                  </div>
                  <p className="text-[11px] text-neutral-400 mt-0.5">Tarifa plana predecible. Cero porcentajes sobre tus ingresos.</p>
                </div>

                {/* Dato C: Gigante Ahorro Anual */}
                <div className="pt-2 border-t border-neutral-800 text-center space-y-1.5">
                  <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-semibold block">
                    Tu ahorro anual retenido
                  </span>
                  <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 font-mono tracking-tight">
                    +{formatCurrency(displaySavings)}
                  </div>
                  <p className="text-[11px] text-neutral-400">
                    Beneficio neto adicional directo a la rentabilidad de tu negocio cada año.
                  </p>
                </div>
              </div>

              {/* Botón de Conversión Secundario */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/573000000000?text=${dynamicWhatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-5 rounded-xl font-bold text-sm bg-orange-500 hover:bg-orange-600 text-white transition-all duration-300 shadow-[0_0_25px_rgba(255,107,0,0.3)] hover:scale-[1.02] active:scale-[0.98] group"
                >
                  <MessageCircle className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  <span>Asesórate con un experto</span>
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
