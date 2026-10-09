"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, MessageCircle, LogIn, ChevronLeft } from "lucide-react";

/**
 * Header Maestro para "All In One Hotels"
 * Reutilizable tanto en la Landing Principal como en Sub-Funnels de Planes.
 *
 * Props:
 * - onBack: Función opcional para volver a la portada principal (usada en sub-funnels).
 * - badge: Texto o etiqueta opcional para sub-funnels (ej. "Boutique", "Managers", "Plug & Play").
 * - whatsappUrl: Enlace personalizado de WhatsApp para el CTA principal.
 * - loginUrl: Enlace al dashboard / portal de propietarios (por defecto "#login").
 * - onLoginClick: Manejador opcional para el clic en "Iniciar Sesión".
 * - onNavigateHome: Manejador opcional para navegar de vuelta a la portada y hacer scroll a una sección.
 */
export const Header = ({
  onBack,
  badge,
  ctaLabel = "Habla con nuestro equipo",
  whatsappUrl = "https://wa.me/573000000000?text=Hola%2C%20quiero%20hablar%20con%20el%20equipo%20de%20All%20In%20One%20Hotels%20para%20conocer%20la%20plataforma",
  loginUrl = "#login",
  onLoginClick,
  onNavigateHome,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detección de scroll para sutil realce visual
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bloquear scroll de la página cuando el menú móvil esté abierto en pantallas pequeñas
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Lista de enlaces de navegación requeridos
  const navLinks = [
    { label: "Infraestructura", href: "#infraestructura", fallbackId: "solucion" },
    { label: "Automatización", href: "#automatizacion", fallbackId: "experiencia" },
    { label: "Planes", href: "#planes", fallbackId: "precios" },
    { label: "FAQ", href: "#faq", fallbackId: "faq" },
  ];

  const handleLinkClick = (e, href, fallbackId) => {
    setIsMobileMenuOpen(false);

    // Si estamos en un sub-funnel y se nos dio un callback para volver a la portada
    if (onBack || onNavigateHome) {
      e.preventDefault();
      if (onNavigateHome) {
        onNavigateHome(href);
      } else if (onBack) {
        onBack();
        setTimeout(() => {
          const targetId = href.replace("#", "");
          const el = document.getElementById(targetId) || (fallbackId ? document.getElementById(fallbackId) : null);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }, 120);
      }
      return;
    }

    // Comportamiento estándar en la landing principal
    const targetId = href.replace("#", "");
    const targetEl = document.getElementById(targetId) || (fallbackId ? document.getElementById(fallbackId) : null);
    if (targetEl) {
      e.preventDefault();
      targetEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLogoClick = (e) => {
    if (onBack) {
      e.preventDefault();
      onBack();
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-neutral-950/90 backdrop-blur-md border-neutral-800 shadow-lg shadow-black/40"
          : "bg-neutral-950/80 backdrop-blur-md border-neutral-800"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* ===================================================================== */}
        {/* ZONA IZQUIERDA: BOTÓN VOLVER (SUB-FUNNELS) + LOGO OFICIAL */}
        {/* ===================================================================== */}
        <div className="flex items-center gap-3 sm:gap-4">
          {onBack && (
            <button
              type="button"
              onClick={onBack}
              aria-label="Volver a la portada principal"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-400 hover:text-orange-500 transition-colors p-2 rounded-lg hover:bg-neutral-900 border border-neutral-800 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4 text-orange-500" />
              <span className="hidden sm:inline">Volver</span>
            </button>
          )}

          {/* Logo Principal con filtro invert para contraste perfecto sobre fondo oscuro */}
          <a
            href="#"
            onClick={handleLogoClick}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50 rounded-lg py-1"
          >
            <img
              src="/ALL-IN-ONE-LOGO-07.png"
              alt="All In One Hotels"
              className="h-10 sm:h-11 w-auto object-contain invert brightness-110 contrast-125 transition-transform duration-200 group-hover:scale-105"
            />
            {badge && (
              <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-orange-500/15 text-orange-400 border border-orange-500/30">
                {badge}
              </span>
            )}
          </a>
        </div>

        {/* ===================================================================== */}
        {/* ZONA CENTRAL: ENLACES DE NAVEGACIÓN (DESKTOP) */}
        {/* ===================================================================== */}
        <nav
          aria-label="Navegación principal"
          className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href, link.fallbackId)}
              className="hover:text-orange-500 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* ===================================================================== */}
        {/* ZONA DERECHA: BOTONES DE ACCIÓN (DESKTOP) */}
        {/* ===================================================================== */}
        <div className="hidden md:flex items-center gap-3 lg:gap-4">
          {/* Botón Secundario (Ghost / Outline): Iniciar Sesión para dueños */}
          <a
            href={loginUrl}
            onClick={(e) => {
              if (onLoginClick) {
                e.preventDefault();
                onLoginClick();
              }
            }}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs lg:text-sm font-medium text-neutral-200 hover:text-white border border-neutral-700/60 hover:border-neutral-500 hover:bg-neutral-900/80 transition-all duration-200 cursor-pointer"
          >
            <LogIn className="w-4 h-4 text-neutral-400" />
            <span>Iniciar Sesión</span>
          </a>

          {/* Botón Primario (CTA): Habla con nuestro equipo */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs lg:text-sm font-bold bg-orange-500 hover:bg-orange-600 text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,107,0,0.3)] hover:shadow-[0_0_28px_rgba(255,107,0,0.5)] hover:scale-[1.02] active:scale-[0.98]"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{ctaLabel}</span>
          </a>
        </div>

        {/* ===================================================================== */}
        {/* BOTÓN MENÚ HAMBURGUESA (MÓVIL / TABLET) */}
        {/* ===================================================================== */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-neutral-300 hover:text-white p-2.5 rounded-xl bg-neutral-900/60 hover:bg-neutral-900 border border-neutral-800 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500/40"
          aria-label={isMobileMenuOpen ? "Cerrar menú principal" : "Abrir menú principal"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-neutral-200" />
          )}
        </button>
      </div>

      {/* ===================================================================== */}
      {/* MENÚ DESPLEGABLE MÓVIL (MOBILE FIRST CON TOUCH TARGETS AMPLIOS) */}
      {/* ===================================================================== */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-neutral-950/95 backdrop-blur-xl border-b border-neutral-800 shadow-2xl px-5 sm:px-6 py-6 animate-in fade-in slide-in-from-top-2 duration-200">
          {/* Enlaces de Navegación Móvil */}
          <nav aria-label="Navegación móvil" className="flex flex-col divide-y divide-neutral-900/80 mb-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href, link.fallbackId)}
                className="py-3.5 text-base font-medium text-neutral-200 hover:text-orange-500 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Botones de Acción Móvil (100% de ancho para facilidad de toque) */}
          <div className="flex flex-col gap-3 pt-2 border-t border-neutral-800/80">
            {/* Botón Secundario Móvil */}
            <a
              href={loginUrl}
              onClick={(e) => {
                setIsMobileMenuOpen(false);
                if (onLoginClick) {
                  e.preventDefault();
                  onLoginClick();
                }
              }}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-sm font-semibold text-neutral-200 hover:text-white border border-neutral-700/80 bg-neutral-900/50 hover:bg-neutral-900 transition-colors cursor-pointer"
            >
              <LogIn className="w-4 h-4 text-neutral-400" />
              <span>Iniciar Sesión</span>
            </a>

            {/* Botón Primario Móvil */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-sm font-bold bg-orange-500 hover:bg-orange-600 text-white shadow-[0_0_25px_rgba(255,107,0,0.35)] transition-all active:scale-[0.98]"
            >
              <MessageCircle className="w-5 h-5" />
              <span>{ctaLabel}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
