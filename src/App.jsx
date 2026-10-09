"use client";

import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
  Link
} from "react-router-dom";

// Componentes del Ecosistema All In One Hotels
import { DevHub } from "./components/DevHub";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { StackInvisible } from "./components/StackInvisible";
import { StackVisualizer } from "./components/StackVisualizer";
import { PricingAndTestimonial } from "./components/PricingAndTestimonial";
import { PricingCalculator } from "./components/PricingCalculator";
import { BentoBox } from "./components/BentoBox";
import { FAQ } from "./components/FAQ";
import { CTAFinal } from "./components/CTAFinal";

// Sub-Funnels Comerciales
import { HotelGlampingFunnel } from "./components/HotelGlampingFunnel";
import { PropertyManagerFunnel } from "./components/PropertyManagerFunnel";
import { PlugAndPlayFunnel } from "./components/PlugAndPlayFunnel";

// Portal de Autenticación
import { LoginPage } from "./components/LoginPage";

// Dashboards Privados
import { SuperAdminDashboard } from "./components/SuperAdminDashboard";
import { PropertyManagerDashboard } from "./components/PropertyManagerDashboard";
import { HotelGlampingDashboard } from "./components/HotelGlampingDashboard";
import { PlugAndPlayDashboard } from "./components/PlugAndPlayDashboard";

// Lucide icon para el acceso rápido flotante
import { LayoutGrid } from "lucide-react";

/**
 * ScrollToTop - Asegura que al cambiar de ruta siempre se inicie en la parte superior
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

/**
 * FloatingDevHubButton - Botón flotante discreto para regresar al Dev Hub
 * Visible en todas las rutas excepto en la raíz (/)
 */
function FloatingDevHubButton() {
  const location = useLocation();
  if (location.pathname === "/") return null;

  return (
    <Link
      to="/"
      title="Volver al Menú Maestro (Dev Hub)"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 px-3.5 py-2 rounded-xl bg-neutral-900/90 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-700/80 shadow-2xl backdrop-blur-md text-xs font-mono transition-all hover:scale-105 active:scale-95 group"
    >
      <LayoutGrid className="w-3.5 h-3.5 text-orange-400 group-hover:rotate-90 transition-transform duration-300" />
      <span>Dev Hub</span>
    </Link>
  );
}

/**
 * LandingPrincipal - Página de inicio pública para "All In One Hotels"
 */
function LandingPrincipal() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-black text-neutral-50 font-sans antialiased selection:bg-orange-500 selection:text-white relative overflow-x-hidden">
      {/* Orbes de luz ambiental de fondo */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-orange-500/10 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="fixed top-[40%] right-[-10%] w-[500px] h-[500px] bg-amber-500/8 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="fixed bottom-10 left-[-10%] w-[600px] h-[600px] bg-orange-600/8 blur-[160px] rounded-full pointer-events-none -z-10" />

      {/* 1. Barra de Navegación Maestra */}
      <Header onLoginClick={() => navigate("/login")} />

      {/* 2. Hero Section */}
      <Hero />

      {/* 3. Stack Invisible */}
      <StackInvisible />

      {/* 4. Visualizador del Stack Invisible */}
      <StackVisualizer />

      {/* 5. Modelos de Negocio / Pricing & Testimonial Destacado */}
      <PricingAndTestimonial
        onSelectHotelGlamping={() => navigate("/funnel-hotel")}
        onSelectPropertyManager={() => navigate("/funnel-pm")}
        onSelectPlugAndPlay={() => navigate("/funnel-plugplay")}
      />

      {/* 6. Calculadora de Ahorro Dinámica */}
      <PricingCalculator />

      {/* 7. Características en Bento Box Grid Asimétrica */}
      <BentoBox />

      {/* 8. Preguntas Frecuentes (FAQ Acordeón) */}
      <FAQ />

      {/* 9. Cierre Final Persuasivo & Footer */}
      <CTAFinal />
    </main>
  );
}

/**
 * Wrapper de Rutas para integrar navegación SPA fluida
 */
function AppRoutes() {
  const navigate = useNavigate();

  return (
    <>
      <ScrollToTop />
      <FloatingDevHubButton />

      <Routes>
        {/* / -> Menú Maestro de Accesos */}
        <Route path="/" element={<DevHub />} />

        {/* /landing -> Landing Principal Pública */}
        <Route path="/landing" element={<LandingPrincipal />} />

        {/* /login -> Portal de Inicio de Sesión (Fase 1) */}
        <Route
          path="/login"
          element={
            <LoginPage
              onBack={() => navigate("/landing")}
              onLoginSuccess={() => navigate("/admin")}
            />
          }
        />

        {/* /admin -> Super Admin Dashboard (Fase 2) */}
        <Route
          path="/admin"
          element={
            <SuperAdminDashboard
              onLogout={() => navigate("/login")}
              onNavigateHome={() => navigate("/landing")}
            />
          }
        />

        {/* /property-manager -> Property Managers Dashboard (Fase 3) */}
        <Route
          path="/property-manager"
          element={
            <PropertyManagerDashboard
              onLogout={() => navigate("/login")}
              onNavigateHome={() => navigate("/landing")}
            />
          }
        />

        {/* /hotel -> Hoteles & Glampings Dashboard (Fase 4) */}
        <Route
          path="/hotel"
          element={
            <HotelGlampingDashboard
              onLogout={() => navigate("/login")}
              onNavigateHome={() => navigate("/landing")}
            />
          }
        />

        {/* /plug-play -> Plug & Play Enterprise Dashboard (Fase 5) */}
        <Route
          path="/plug-play"
          element={
            <PlugAndPlayDashboard
              onLogout={() => navigate("/login")}
              onNavigateHome={() => navigate("/landing")}
            />
          }
        />

        {/* Sub-Funnels Comerciales */}
        <Route
          path="/funnel-hotel"
          element={
            <HotelGlampingFunnel
              onBack={() => navigate("/landing")}
              onLoginClick={() => navigate("/login")}
            />
          }
        />

        <Route
          path="/funnel-pm"
          element={
            <PropertyManagerFunnel
              onBack={() => navigate("/landing")}
              onLoginClick={() => navigate("/login")}
            />
          }
        />

        <Route
          path="/funnel-plugplay"
          element={
            <PlugAndPlayFunnel
              onBack={() => navigate("/landing")}
              onLoginClick={() => navigate("/login")}
            />
          }
        />

        {/* Redirección por defecto a Dev Hub si la ruta no existe */}
        <Route path="*" element={<DevHub />} />
      </Routes>
    </>
  );
}

/**
 * App - Componente Principal con BrowserRouter
 */
export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
