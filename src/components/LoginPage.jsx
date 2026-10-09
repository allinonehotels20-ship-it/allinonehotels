"use client";

import React, { useState } from "react";
import {
  Lock,
  Mail,
  Eye,
  EyeOff,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Star,
  CheckCircle2,
  Sparkles,
  Zap,
  Building2,
  HelpCircle
} from "lucide-react";

/**
 * LoginPage - Portal de autenticación para dueños y administradores de hoteles
 * Arquitectura: Split Screen Design con Glassmorphism y Social Proof
 *
 * Props:
 * - onBack: Función para regresar a la landing page principal
 * - onLoginSuccess: Callback ejecutado tras autenticación exitosa
 * - onGoogleLogin: Handler para integración con Supabase Auth (Google OAuth)
 * - onMicrosoftLogin: Handler para integración con Supabase Auth (Azure/Microsoft OAuth)
 */
export const LoginPage = ({
  onBack,
  onLoginSuccess,
  onGoogleLogin,
  onMicrosoftLogin
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorStatus, setErrorStatus] = useState(null);

  // Simulación de submit (preparado para Supabase Auth: supabase.auth.signInWithPassword)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorStatus("Por favor ingresa tu correo y contraseña.");
      return;
    }

    setErrorStatus(null);
    setIsLoading(true);

    // Simulación de latencia de red para feedback táctil en UI
    setTimeout(() => {
      setIsLoading(false);
      if (onLoginSuccess) {
        onLoginSuccess({ email });
      } else {
        alert(`Inicio de sesión exitoso como: ${email}. Redirigiendo a tu Dashboard de Propiedades...`);
      }
    }, 1000);
  };

  const handleGoogleAuth = () => {
    if (onGoogleLogin) {
      onGoogleLogin();
    } else {
      // Punto de integración con Supabase:
      // await supabase.auth.signInWithOAuth({ provider: 'google' })
      alert("Conectando con tu cuenta de Google...");
    }
  };

  const handleMicrosoftAuth = () => {
    if (onMicrosoftLogin) {
      onMicrosoftLogin();
    } else {
      // Punto de integración: await supabase.auth.signInWithOAuth({ provider: 'azure' })
      alert("Conectando con tu cuenta de Microsoft...");
    }
  };

  return (
    <div className="min-h-screen w-full flex bg-black text-neutral-50 font-sans antialiased selection:bg-orange-500 selection:text-white">
      
      {/* ===================================================================== */}
      {/* COLUMNA IZQUIERDA: FORMULARIO DE AUTENTICACIÓN (100% Mobile, 50% Desktop) */}
      {/* ===================================================================== */}
      <div className="w-full lg:w-1/2 flex flex-col justify-between p-6 sm:p-10 lg:p-12 xl:p-16 bg-neutral-950 relative z-10 border-r border-neutral-900 overflow-y-auto">
        
        {/* Top Bar: Botón de Retorno & Logo */}
        <div className="flex items-center justify-between gap-4 mb-8">
          {onBack ? (
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-400 hover:text-orange-500 transition-colors p-2 rounded-xl hover:bg-neutral-900 border border-neutral-800/80 cursor-pointer group"
            >
              <ArrowLeft className="w-4 h-4 text-orange-500 group-hover:-translate-x-0.5 transition-transform" />
              <span>Volver a la portada</span>
            </button>
          ) : (
            <a
              href="/"
              className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-400 hover:text-orange-500 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 text-orange-500" />
              <span>Volver</span>
            </a>
          )}

          {/* Logo con invert para máximo contraste en fondo negro */}
          <div className="flex items-center gap-2">
            <img
              src="/ALL-IN-ONE-LOGO-07.png"
              alt="All In One Hotels"
              className="h-9 sm:h-10 w-auto object-contain invert brightness-110 contrast-125"
            />
          </div>
        </div>

        {/* Contenido Central: Formulario */}
        <div className="max-w-md w-full mx-auto my-auto py-4">
          
          {/* Badge & Título de Bienvenida */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-orange-500/10 text-orange-400 border border-orange-500/20 mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-orange-400" />
              <span>Portal de Propietarios & Administradores</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Accede a tu panel de control
            </h1>
            <p className="text-neutral-400 text-sm mt-2">
              Ingresa tus credenciales para administrar tus propiedades, canales de venta y automatizaciones.
            </p>
          </div>

          {errorStatus && (
            <div className="mb-5 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
              <span>{errorStatus}</span>
            </div>
          )}

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Campo: Correo Electrónico */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-medium text-neutral-300 uppercase tracking-wider mb-1.5"
              >
                Correo Electrónico
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-500">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@tupropiedad.com"
                  className="w-full pl-10 pr-4 py-3 bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 rounded-xl text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                />
              </div>
            </div>

            {/* Campo: Contraseña */}
            <div>
              <label
                htmlFor="password"
                className="block text-xs font-medium text-neutral-300 uppercase tracking-wider mb-1.5"
              >
                Contraseña
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-500">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full pl-10 pr-11 py-3 bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 rounded-xl text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-neutral-500 hover:text-neutral-300 transition-colors cursor-pointer"
                  aria-label={showPassword ? "Ocultar contraseña" : "Ver contraseña"}
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Opciones Adicionales: Recordarme & Olvidé contraseña */}
            <div className="flex items-center justify-between text-xs pt-1">
              <label className="flex items-center gap-2 cursor-pointer text-neutral-300 hover:text-white transition-colors">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded bg-neutral-900 border-neutral-700 text-orange-500 focus:ring-orange-500/30 focus:ring-offset-0 transition-colors cursor-pointer accent-orange-500"
                />
                <span>Recordarme</span>
              </label>

              <a
                href="#recuperar"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Instrucciones de recuperación enviadas a tu correo de contacto.");
                }}
                className="text-neutral-400 hover:text-orange-500 font-medium transition-colors"
              >
                ¿Olvidaste tu contraseña?
              </a>
            </div>

            {/* Botón Principal: Iniciar Sesión */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-2 py-3.5 px-4 rounded-xl font-bold text-sm bg-orange-500 hover:bg-orange-600 disabled:opacity-70 text-white shadow-[0_0_25px_rgba(255,107,0,0.35)] transition-all flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <Lock className="w-4 h-4" />
                  <span>Iniciar Sesión</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </>
              )}
            </button>
          </form>

          {/* Separador Visual */}
          <div className="relative my-7">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-neutral-800" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-neutral-950 px-3 text-neutral-500 font-mono font-medium">
                O continúa con
              </span>
            </div>
          </div>

          {/* Botones Single Sign-On (SSO - Google & Microsoft) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Google SSO */}
            <button
              type="button"
              onClick={handleGoogleAuth}
              className="flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl border border-neutral-800 hover:border-neutral-700 bg-neutral-900/60 hover:bg-neutral-900 text-neutral-200 text-xs sm:text-sm font-semibold transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>Google</span>
            </button>

            {/* Microsoft SSO */}
            <button
              type="button"
              onClick={handleMicrosoftAuth}
              className="flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl border border-neutral-800 hover:border-neutral-700 bg-neutral-900/60 hover:bg-neutral-900 text-neutral-200 text-xs sm:text-sm font-semibold transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
            >
              <svg className="w-4 h-4" viewBox="0 0 23 23">
                <path fill="#f35325" d="M1 1h10v10H1z" />
                <path fill="#81bc06" d="M12 1h10v10H12z" />
                <path fill="#05a6f0" d="M1 12h10v10H1z" />
                <path fill="#ffba08" d="M12 12h10v10H12z" />
              </svg>
              <span>Microsoft</span>
            </button>
          </div>

          {/* Ayuda o Solicitud de Acceso */}
          <div className="mt-8 pt-6 border-t border-neutral-900 text-center">
            <p className="text-xs text-neutral-400">
              ¿Aún no administras tus hoteles con All In One?{" "}
              <a
                href="https://wa.me/573000000000?text=Hola%2C%20quiero%20conocer%20c%C3%B3mo%20activar%20mi%20cuenta%20en%20All%20In%20One%20Hotels"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:text-orange-400 font-semibold transition-colors underline underline-offset-4"
              >
                Solicita una demostración
              </a>
            </p>
          </div>

        </div>

        {/* Footer Inferior Columna Izquierda */}
        <div className="mt-8 pt-4 flex items-center justify-between text-[11px] text-neutral-500 border-t border-neutral-900/80">
          <span>© {new Date().getFullYear()} All In One Hotels</span>
          <span className="flex items-center gap-1.5 text-neutral-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Servidores Operativos • Cifrado AES-256
          </span>
        </div>

      </div>

      {/* ===================================================================== */}
      {/* COLUMNA DERECHA: BRANDING & SOCIAL PROOF (Visible solo en desktop lg:) */}
      {/* ===================================================================== */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-neutral-900 overflow-hidden flex-col justify-between p-12 xl:p-16">
        
        {/* Imagen de fondo de hotel boutique de alta gama con overlay oscuro translúcido */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=85')`
          }}
        />

        {/* Patrón de puntos geométricos de fondo tecnológico */}
        <div className="absolute inset-0 bg-[radial-gradient(#ff6b00_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

        {/* Gradiente oscuro degradado para legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-transparent to-black/60 pointer-events-none" />

        {/* Orbes ambientales de luz naranja */}
        <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-orange-500/15 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-amber-500/10 blur-[140px] rounded-full pointer-events-none" />

        {/* Cabecera Superior Columna Derecha */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-950/70 border border-neutral-800 backdrop-blur-md text-xs text-neutral-300 font-medium">
            <Sparkles className="w-3.5 h-3.5 text-orange-400" />
            <span>All In One Hotels</span>
          </div>

          <div className="flex items-center gap-2 text-xs text-neutral-300 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Sincronización Automática 24/7</span>
          </div>
        </div>

        {/* Centro: Tarjeta Flotante Glassmorphism con Testimonio */}
        <div className="relative z-10 my-auto py-8 max-w-lg mx-auto w-full">
          
          <div className="backdrop-blur-xl bg-white/[0.04] border border-white/10 rounded-3xl p-8 sm:p-9 shadow-2xl shadow-black/80 relative overflow-hidden group hover:border-orange-500/40 transition-colors duration-500">
            
            {/* Resplandor decorativo interno */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl pointer-events-none" />

            {/* Estrellas de Calificación */}
            <div className="flex items-center gap-1.5 mb-5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-amber-400 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.4)]"
                />
              ))}
              <span className="ml-2 text-xs font-mono font-semibold text-neutral-300">
                5.0 / 5.0 Verificado
              </span>
            </div>

            {/* Cita del Testimonio */}
            <blockquote className="text-lg sm:text-xl font-medium text-white leading-relaxed tracking-tight mb-7">
              “Desde que centralizamos nuestra operativa con All In One, redujimos los errores de sobreventa a cero y recuperamos el control de nuestros márgenes.”
            </blockquote>

            {/* Autor & Organización */}
            <div className="flex items-center gap-4 pt-5 border-t border-white/10">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 p-[1px] shadow-[0_0_20px_rgba(255,107,0,0.3)]">
                <div className="w-full h-full bg-neutral-950 rounded-[15px] flex items-center justify-center font-bold text-sm text-orange-400 font-mono">
                  GC
                </div>
              </div>
              <div>
                <div className="text-sm font-bold text-white flex items-center gap-1.5">
                  <span>Gerente de Operaciones</span>
                  <CheckCircle2 className="w-4 h-4 text-orange-400" />
                </div>
                <div className="text-xs text-neutral-400 font-medium">
                  Glamping Collection • Red Multi-Destino
                </div>
              </div>
            </div>

            {/* Métricas Rápidas en la Tarjeta */}
            <div className="grid grid-cols-3 gap-3 mt-6 pt-5 border-t border-white/5 text-center">
              <div className="p-2.5 rounded-xl bg-black/40 border border-white/5">
                <div className="text-base font-extrabold text-orange-400 font-mono">0%</div>
                <div className="text-[10px] text-neutral-400 uppercase tracking-wider mt-0.5">Sobreventas</div>
              </div>
              <div className="p-2.5 rounded-xl bg-black/40 border border-white/5">
                <div className="text-base font-extrabold text-orange-400 font-mono">&lt; 2s</div>
                <div className="text-[10px] text-neutral-400 uppercase tracking-wider mt-0.5">WhatsApp IA</div>
              </div>
              <div className="p-2.5 rounded-xl bg-black/40 border border-white/5">
                <div className="text-base font-extrabold text-orange-400 font-mono">100%</div>
                <div className="text-[10px] text-neutral-400 uppercase tracking-wider mt-0.5">Control Directo</div>
              </div>
            </div>

          </div>

        </div>

        {/* Footer Inferior Columna Derecha: Canales Sincronizados */}
        <div className="relative z-10 flex items-center justify-between text-xs text-neutral-400 pt-4 border-t border-neutral-800/60">
          <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-400">
            Sincronización en Tiempo Real
          </span>
          <div className="flex items-center gap-4 text-neutral-400 font-medium text-xs">
            <span>Airbnb</span>
            <span>•</span>
            <span>Booking.com</span>
            <span>•</span>
            <span>Expedia</span>
            <span>•</span>
            <span>WhatsApp</span>
          </div>
        </div>

      </div>

    </div>
  );
};

export default LoginPage;
