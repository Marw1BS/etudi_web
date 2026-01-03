import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  Search,
  CheckCircle,
  GraduationCap,
  Users,
  Star,
  MapPin,
  MessageCircle,
  Download,
  Shield,
  Zap,
  PhoneOff,
  HelpCircle,
  Smartphone,
  Calendar,
  Send
} from 'lucide-react'
import { Button, Badge, Card, Avatar, PhoneMockup } from '../../components/ui'
import GradientText from '../../components/ui/GradientText';

// Images
const IMAGES = {
  LOGO: '/images/ETUDI_ICONE.png',
  STUDENTS_BANNER: '/images/students_banner.webp', // Can be used for Hero background or social proof
  PROFILE_SARAH: '/images/profile_sarah.webp',
  PROFILE_AHMED: '/images/profile_ahmed.webp',
  STUDENT_AVATAR: '/images/student_avatar.webp',
  APP_SCREENSHOT: '/images/app_screenshot.webp',
  APP_DISCUSSIONS: '/images/discussion_1.png', // Renamed
  APP_COURS: '/images/cours.png',
  APP_EMPLOI_TEMPS: '/images/emploi_temps.png',
  APP_NOTES: '/images/notes.png',
  APP_SEARCH: '/images/trouver_enseignant.png',
  APP_DOSSIER: '/images/dossier_scolaire.png'
}

// Data Constants
const NAVIGATION_LINKS = [
  { label: 'Fonctionnalités', href: '#features' },
  { label: 'Comment ça marche', href: '#how-it-works' },
  { label: 'Télécharger', href: '#download' },
]

const KEY_BENEFITS = [
  { icon: <Zap size={18} className="text-amber-500" />, text: 'Connexion instantanée' },
  { icon: <Shield size={18} className="text-green-500" />, text: 'Profs vérifiés' },
  { icon: <MapPin size={18} className="text-primary" />, text: 'Près de chez toi' },
]

const PROBLEM_ITEMS = [
  { icon: <div className="text-3xl">😓</div>, title: 'Recherche interminable', desc: 'Des heures à demander des contacts à droite à gauche' },
  { icon: <PhoneOff size={32} className="text-red-400" />, title: 'Communication difficile', desc: 'Numéros qui ne répondent pas, messages ignorés' },
  { icon: <HelpCircle size={32} className="text-red-400" />, title: 'Qualité incertaine', desc: 'Aucune garantie sur les compétences du prof' },
]

const SOLUTION_ITEMS = [
  { icon: <Search size={32} className="text-blue-500" />, title: 'Recherche instantanée', desc: 'Filtre par matière, niveau et localisation', color: 'blue' },
  { icon: <MessageCircle size={32} className="text-purple-500" />, title: 'Chat direct', desc: 'Discute avec le prof avant de te décider', color: 'purple' },
  { icon: <CheckCircle size={32} className="text-green-500" />, title: 'Profs certifiés', desc: 'Tous les diplômes sont vérifiés par notre équipe', color: 'green' },
]

const FEATURE_ITEMS = [
  { icon: <Search size={24} className="text-white" />, title: 'Recherche rapide', desc: 'Trouve le prof parfait en quelques secondes' },
  { icon: <MessageCircle size={24} className="text-white" />, title: 'Chat instantané', desc: 'Communique directement avec les profs' },
  { icon: <Calendar size={24} className="text-white" />, title: 'Réservation facile', desc: 'Planifie tes cours en un clic' },
  { icon: <Star size={24} className="text-white" />, title: 'Avis vérifiés', desc: 'Consulte les notes et recommandations' },
]

// App Features Grid Data
const APP_FEATURES_LIST = [
  {
    title: 'Recherche Avancée',
    desc: 'Trouvez le professeur idéal avec des filtres précis.',
    image: IMAGES.APP_SEARCH,
    color: 'blue',
    colSpan: 'md:col-span-2',
    bg: 'bg-blue-50'
  },
  {
    title: 'Messagerie',
    desc: 'Chat direct et sécurisé.',
    image: IMAGES.APP_DISCUSSIONS,
    color: 'purple',
    colSpan: 'md:col-span-1',
    bg: 'bg-purple-50'
  },
  {
    title: 'Suivi des Cours',
    desc: 'Historique complet de vos séances.',
    image: IMAGES.APP_COURS,
    color: 'primary',
    colSpan: 'md:col-span-2',
    bg: 'bg-rose-50'
  },
  {
    title: 'Planning',
    desc: 'Votre emploi du temps.',
    image: IMAGES.APP_EMPLOI_TEMPS,
    color: 'green',
    colSpan: 'md:col-span-1',
    bg: 'bg-green-50'
  },
  {
    title: 'Dossier Scolaire',
    desc: 'Vos documents.',
    image: IMAGES.APP_DOSSIER,
    color: 'pink',
    colSpan: 'md:col-span-1',
    bg: 'bg-pink-50'
  },
  {
    title: 'Suivi des Notes',
    desc: 'Visualisez votre progression.',
    image: IMAGES.APP_NOTES,
    color: 'orange',
    colSpan: 'md:col-span-1',
    bg: 'bg-orange-50'
  }
]
// Correcting logic for 3rd row:
// We want alternating pattern.
// 1: Large
// 2: Small
// 3: Small
// 4: Large
// 5: Large
// 6: Small

const PREPARED_FEATURES = [
  { ...APP_FEATURES_LIST[0], colSpan: 'md:col-span-2' },
  { ...APP_FEATURES_LIST[1], colSpan: 'md:col-span-1' },
  { ...APP_FEATURES_LIST[2], colSpan: 'md:col-span-1' },
  { ...APP_FEATURES_LIST[3], colSpan: 'md:col-span-2' },
  { ...APP_FEATURES_LIST[4], colSpan: 'md:col-span-2' }, // Planning Large
  { ...APP_FEATURES_LIST[5], colSpan: 'md:col-span-1' }, // Dossier Small
]

function Home() {
  const [activeFeature, setActiveFeature] = useState(0);
  const featureRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setActiveFeature(index);
          }
        });
      },
      {
        rootMargin: '-20% 0px -20% 0px', // Trigger slightly before center
        threshold: 0.4
      }
    );

    featureRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-text-main relative"> {/* Removed overflow-x-hidden to fix sticky scroll */}
      {/* Navigation - Glassmorphism */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-white/20 transition-all duration-300">
        <div className="container mx-auto px-6">
          <div className="h-20 flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3 group">
              <div className="relative p-1 bg-white rounded-xl shadow-sm group-hover:shadow-md transition-all">
                <img
                  src={`${IMAGES.LOGO}?v=2`}
                  alt="ETUDI Logo"
                  className="h-10 w-10 object-contain"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/images/logo_etudi.webp';
                  }}
                />
              </div>
              <span className="text-2xl font-bold text-gray-900 tracking-tight group-hover:text-primary transition-colors">
                ETUDI
              </span>
            </a>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-100">
              {NAVIGATION_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-primary rounded-full hover:bg-white transition-all"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex items-center gap-3">
              <a href="https://play.google.com/store/apps/details?id=com.etudi.app&hl=fr" target="_blank" rel="noopener noreferrer">
                <Button size="sm" className="rounded-full px-6 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300 bg-gradient-to-r from-primary to-primary-dark">
                  <Download size={18} className="mr-2" /> Télécharger
                </Button>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] animate-float" />
          <div className="absolute bottom-0 left-[-10%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] animate-pulse" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">

            {/* New Animated Gradient Title */}
            <div className="mb-4">
              <GradientText
                colors={['#000000', '#4b5563', '#000000', '#4b5563', '#000000']}
                animationSpeed={5}
                showBorder={false}
                className="text-6xl md:text-8xl font-black tracking-tighter"
              >
                ETUDI
              </GradientText>
            </div>

            <div className="inline-flex justify-center">
              <Badge variant="tricolor" className="px-6 py-2 text-sm font-semibold shadow-sm">
                🎓 La 1ère app de soutien scolaire en Tunisie
              </Badge>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-gray-900 tracking-tight">
              L'<span className="text-primary">App</span> N°1 pour tes <span className="text-secondary">Études</span> <br /> et trouver un Prof en Tunisie.
            </h1>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Fini les recherches interminables. Avec <span className="font-bold text-gray-900">ETUDI</span>, l'<span className="font-bold text-gray-900">App</span> de référence, trouvez un enseignant certifié pour exceller dans vos <span className="font-bold text-gray-900">études</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <a href="https://play.google.com/store/apps/details?id=com.etudi.app&hl=fr" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="rounded-full px-10 py-7 text-lg shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 bg-gradient-to-r from-primary to-primary-dark border-0">
                  <Smartphone size={24} className="mr-3" /> Télécharger l'App
                </Button>
              </a>
              <Link to="/je-suis-prof">
                <Button size="lg" variant="outline" className="rounded-full px-10 py-7 text-lg bg-white/80 hover:bg-white border-2 border-gray-100 text-gray-700 w-full sm:w-auto">
                  Je suis Prof
                </Button>
              </Link>
            </div>

            {/* Key Benefits */}
            <div className="flex flex-wrap justify-center gap-4 pt-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {KEY_BENEFITS.map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/60 backdrop-blur-md px-6 py-3 rounded-full border border-white/50 shadow-sm hover:shadow-md transition-shadow">
                  {item.icon}
                  <span className="text-sm font-semibold text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Trouver un bon <span className="text-primary">prof en Tunisie</span>, <br /> c'est souvent <span className="text-red-500">compliqué</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Entre les groupes Facebook, le bouche-à-oreille et les numéros qui ne répondent pas...
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {PROBLEM_ITEMS.map((item, i) => (
              <Card key={i} className="p-8 text-center border-0 bg-gray-50 hover:bg-red-50/50 transition-colors duration-300 group rounded-[32px]">
                <div className="w-16 h-16 mx-auto bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm text-3xl group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Decoration */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-700 mb-6 px-4 py-1">
              La solution
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              ETUDI simplifie vos <span className="text-primary">études</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Une application pensée pour les étudiants tunisiens. Simple, rapide et fiable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {SOLUTION_ITEMS.map((item, i) => (
              <Card key={i} className={`p-8 text-center border border-gray-100 bg-white hover:-translate-y-2 hover:shadow-xl transition-all duration-300 rounded-[32px] group relative overflow-hidden`}>
                <div className={`absolute inset-0 bg-${item.color}-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="relative z-10">
                  <div className={`w-16 h-16 mx-auto bg-${item.color}-50 rounded-2xl flex items-center justify-center mb-6 text-${item.color}-500 group-hover:scale-110 transition-all duration-300`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* App Features Section - Sticky Scroll (Apple Style) - V2 Deluxe */}
      {/* CRITICAL FIX: overflow-hidden removed from section to allow sticky behavior */}
      <section id="features" className="relative">

        {/* Background Layer - Isolated Overflow */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden -z-10">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-[0.02]" />

          {/* Dynamic Glow Background for Sticky Area - Moved here to prevent overflow issues */}
          {/* Note: We keep a placeholder glow in the sticky component for local effect if needed, but managing it here is safer for overflow */}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-start">

            {/* Left: Scrolling Text (Triggers) - Slightly narrower for focus */}
            <div className="w-full md:w-1/2 py-24 z-10">
              <div className="mb-32 pl-4">
                <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">Explorer l'application</Badge>
                <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  L'application pour réussir vos <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">études en Tunisie.</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                  Naviguez à travers les fonctionnalités essentielles conçues pour booster votre réussite scolaire.
                </p>
              </div>

              <div className="space-y-[60vh]"> {/* More breathing room */}
                {APP_FEATURES_LIST.map((feature, index) => (
                  <div
                    key={index}
                    data-index={index}
                    ref={el => featureRefs.current[index] = el}
                    className={`transition-all duration-700 py-6 pl-8 border-l-4 ${activeFeature === index ? `border-${feature.color}-500 opacity-100 translate-x-4 scale-105` : 'border-gray-200 opacity-30 blur-[1px]'}`}
                  >
                    <h3 className={`text-3xl md:text-4xl font-bold mb-6 ${activeFeature === index ? 'text-gray-900' : 'text-gray-400'}`}>
                      {feature.title}
                    </h3>

                    {/* Mobile Image (Inline) - Phone Mockup Style */}
                    <div className="md:hidden mb-6 flex justify-center relative">
                      {/* Mobile Glow Background */}
                      <div className={`absolute inset-0 bg-gradient-to-br from-${feature.color}-400/20 to-purple-400/10 rounded-[3rem] blur-2xl -z-10`} />

                      {/* Phone Frame */}
                      <div className="relative bg-gradient-to-b from-gray-800 via-gray-900 to-black rounded-[2.5rem] p-1.5 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.3)]">
                        {/* Dynamic Island */}
                        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-30" />

                        {/* Screen */}
                        <div className="relative bg-gray-50 rounded-[2rem] overflow-hidden w-[200px] h-[400px] flex items-center justify-center">
                          <img
                            src={feature.image}
                            alt={feature.title}
                            className="w-full h-full object-contain"
                          />
                          {/* Screen Glare */}
                          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
                        </div>

                        {/* Side Buttons */}
                        <div className="absolute left-[-2px] top-[25%] w-[3px] h-6 bg-gray-700 rounded-l-sm" />
                        <div className="absolute left-[-2px] top-[35%] w-[3px] h-10 bg-gray-700 rounded-l-sm" />
                        <div className="absolute right-[-2px] top-[30%] w-[3px] h-12 bg-gray-700 rounded-r-sm" />
                      </div>
                    </div>

                    <p className={`text-xl leading-relaxed max-w-sm transition-colors duration-500 ${activeFeature === index ? 'text-gray-600' : 'text-gray-300'}`}>
                      {feature.desc}
                    </p>
                    {activeFeature === index && (
                      <div className="mt-6 flex items-center text-primary font-medium animate-fade-in-up">
                        En savoir plus <span className="ml-2">→</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="h-[20vh]" />
            </div>

            {/* Right: Sticky Phone Mockup Display - Premium Look */}
            <div className="hidden md:flex w-1/2 sticky top-20 h-[calc(100vh-5rem)] items-center justify-center p-4">
              <div className="relative flex items-center justify-center">

                {/* Animated Background Elements */}
                <div className="absolute inset-0 -z-10">
                  {/* Primary Glow */}
                  <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[100px] bg-gradient-to-br from-${APP_FEATURES_LIST[activeFeature]?.color}-400/30 to-purple-400/20 transition-all duration-1000 animate-pulse`} />
                  {/* Secondary Glow */}
                  <div className={`absolute left-[30%] top-[60%] w-[200px] h-[200px] rounded-full blur-[80px] bg-${APP_FEATURES_LIST[activeFeature]?.color}-300/20 transition-all duration-700`} />
                  {/* Floating Orbs */}
                  <div className="absolute top-10 right-10 w-16 h-16 bg-gradient-to-br from-primary/30 to-purple-500/20 rounded-full blur-xl animate-bounce" style={{ animationDuration: '3s' }} />
                  <div className="absolute bottom-20 left-10 w-12 h-12 bg-gradient-to-br from-blue-400/30 to-cyan-500/20 rounded-full blur-lg animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }} />
                </div>

                {/* Phone Frame Container */}
                <div className="relative">
                  {/* Reflection Effect */}
                  <div className="absolute -inset-4 bg-gradient-to-b from-white/20 to-transparent rounded-[3rem] blur-2xl -z-10" />

                  {/* Phone Mockup */}
                  <div className="relative">
                    {/* Phone Frame */}
                    <div className="relative bg-gradient-to-b from-gray-800 via-gray-900 to-black rounded-[3rem] p-2 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4),0_30px_60px_-30px_rgba(0,0,0,0.5)] ring-1 ring-white/10">
                      {/* Dynamic Island */}
                      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-30 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-gray-800 mr-8" />
                      </div>

                      {/* Screen Container - Responsive size */}
                      <div className="relative bg-white rounded-[2.5rem] overflow-hidden w-[300px] h-[620px]">
                        {/* Status Bar */}
                        <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-black/5 to-transparent z-20 flex items-center justify-between px-8 pt-2 text-[10px] font-medium text-gray-600">
                          <span>9:41</span>
                          <div className="flex items-center gap-1">
                            <span>📶</span>
                            <span>🔋</span>
                          </div>
                        </div>

                        {/* Screen Content with Transitions */}
                        {APP_FEATURES_LIST.map((feature, index) => (
                          <div
                            key={index}
                            className={`absolute inset-0 w-full h-full flex items-center justify-center bg-gray-50 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${activeFeature === index
                                ? 'opacity-100 scale-100 translate-y-0'
                                : activeFeature > index
                                  ? 'opacity-0 scale-95 -translate-y-8'
                                  : 'opacity-0 scale-95 translate-y-8'
                              }`}
                          >
                            <img
                              src={feature.image}
                              alt={feature.title}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        ))}

                        {/* Screen Glare Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none z-10" />
                      </div>

                      {/* Side Buttons */}
                      <div className="absolute left-[-3px] top-[20%] w-[4px] h-8 bg-gray-700 rounded-l-sm" />
                      <div className="absolute left-[-3px] top-[30%] w-[4px] h-12 bg-gray-700 rounded-l-sm" />
                      <div className="absolute left-[-3px] top-[42%] w-[4px] h-12 bg-gray-700 rounded-l-sm" />
                      <div className="absolute right-[-3px] top-[28%] w-[4px] h-16 bg-gray-700 rounded-r-sm" />
                    </div>

                    {/* Phone Shadow */}
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[60%] h-8 bg-black/20 blur-2xl rounded-full" />
                  </div>
                </div>

                {/* Feature Indicator Dots */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {APP_FEATURES_LIST.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-500 ${activeFeature === index
                          ? 'bg-primary w-6 shadow-lg shadow-primary/30'
                          : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                    />
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Chat Feature Section */}
      <section id="how-it-works" className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 space-y-10">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Discute directement <br /> avec ton futur prof
              </h2>

              <div className="space-y-6">
                {[
                  { title: 'Recherche simplifiée', desc: 'Filtre par matière, niveau, et localisation.', icon: <Search size={22} className="text-blue-500" />, bg: 'bg-blue-50' },
                  { title: 'Messagerie instantanée', desc: 'Pose tes questions avant de réserver.', icon: <MessageCircle size={22} className="text-purple-500" />, bg: 'bg-purple-50' },
                  { title: 'Profs 100% vérifiés', desc: 'Tous nos professeurs sont certifiés.', icon: <CheckCircle size={22} className="text-green-500" />, bg: 'bg-green-50' },
                ].map((feature, i) => (
                  <div key={i} className="flex gap-6 p-6 rounded-3xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100 cursor-default group">
                    <div className={`w-14 h-14 ${feature.bg} rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-500">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Chat UI */}
            <div className="lg:w-1/2 w-full perspective-1000">
              <div className="bg-gray-50 p-8 rounded-[40px] border border-gray-100 shadow-2xl max-w-sm mx-auto transform rotate-y-12 hover:rotate-y-0 transition-transform duration-700 ease-out">
                <div className="bg-white rounded-[32px] overflow-hidden shadow-lg border border-gray-100">
                  {/* Chat Header */}
                  <div className="bg-white p-5 border-b border-gray-50 flex items-center gap-4">
                    <div className="relative">
                      <Avatar src={IMAGES.PROFILE_SARAH} size="md" className="border-2 border-white shadow-md" />
                      <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-[3px] border-white rounded-full" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Sarah Ben Ali</h3>
                      <p className="text-xs text-green-600 font-medium bg-green-50 px-2 py-0.5 rounded-full inline-block mt-0.5">En ligne</p>
                    </div>
                  </div>

                  {/* Chat Messages */}
                  <div className="p-5 h-72 overflow-y-auto bg-gray-50/50 space-y-4">
                    <div className="flex justify-end">
                      <div className="bg-primary text-white p-4 rounded-2xl rounded-tr-sm text-sm shadow-lg shadow-primary/20 max-w-[85%]">
                        Bonjour Madame, êtes-vous disponible pour des cours de Maths niveau Bac ?
                        <div className="text-[10px] text-white/70 text-right mt-1 font-medium">10:42</div>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-white text-gray-800 p-4 rounded-2xl rounded-tl-sm text-sm shadow-sm border border-gray-100 max-w-[85%]">
                        Bonjour ! Oui tout à fait, j'ai encore quelques créneaux le mercredi après-midi. 📚
                        <div className="text-[10px] text-gray-400 text-right mt-1 font-medium">10:44</div>
                      </div>
                    </div>
                  </div>

                  {/* Chat Input */}
                  <div className="p-4 bg-white border-t border-gray-50 flex gap-3">
                    <div className="flex-1 bg-gray-50 rounded-full px-5 py-3 text-sm text-gray-400 flex items-center gap-2 cursor-text">
                      <span>Écrivez un message...</span>
                    </div>
                    <button className="w-11 h-11 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary-dark transition-colors">
                      <Send size={18} className="ml-0.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download App Section - Dark Gradient */}
      <section id="download" className="py-24 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 space-y-10 text-center lg:text-left">
              <div>
                <Badge className="bg-white/10 text-white backdrop-blur border border-white/10 mb-6 px-4 py-1.5">
                  Télécharge maintenant
                </Badge>
                <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6 tracking-tight">
                  Ton prof <br /> dans ta poche 📱
                </h2>
                <p className="text-xl text-slate-300 max-w-xl leading-relaxed">
                  Trouve, contacte et réserve tes cours particuliers directement depuis ton smartphone.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {FEATURE_ITEMS.map((feature, i) => (
                  <div key={i} className="flex items-start gap-4 bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">{feature.icon}</div>
                    <div className="text-left">
                      <h3 className="font-bold text-white mb-1">{feature.title}</h3>
                      <p className="text-slate-400 text-sm">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Store Buttons */}
              <div className="flex flex-col sm:flex-row gap-5 pt-4 justify-center lg:justify-start">
                <button className="bg-white text-black px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 hover:scale-105 transition-all flex items-center justify-center gap-3 shadow-lg">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" /></svg>
                  <div className="text-left leading-none">
                    <div className="text-xs font-medium mb-1 opacity-70">Télécharger sur</div>
                    <div className="text-xl">App Store</div>
                  </div>
                </button>

                <a href="https://play.google.com/store/apps/details?id=com.etudi.app&hl=fr" target="_blank" rel="noopener noreferrer" className="bg-transparent text-white border-2 border-white/20 px-8 py-4 rounded-2xl font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-3">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" /></svg>
                  <div className="text-left leading-none">
                    <div className="text-xs font-medium mb-1 opacity-70">Disponible sur</div>
                    <div className="text-xl">Google Play</div>
                  </div>
                </a>
              </div>
            </div>

            {/* App Mockup with Decorations */}
            <div className="lg:w-1/2 flex justify-center relative">
              <div className="relative z-10 animate-float">
                <img
                  src={IMAGES.APP_SCREENSHOT}
                  alt="ETUDI App Screenshot"
                  className="w-full max-w-sm drop-shadow-2xl rounded-[40px] border-8 border-gray-800"
                />

                {/* Floating Elements */}
                <div className="absolute -right-8 top-20 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl animate-bounce" style={{ animationDuration: '3s' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-xl shadow-lg">✓</div>
                    <div>
                      <div className="font-bold text-sm">Cours confirmé</div>
                      <div className="text-xs text-green-300">Mercredi • 14:00</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -left-8 bottom-32 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl animate-bounce" style={{ animationDuration: '4s' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-xl shadow-lg">💬</div>
                    <div>
                      <div className="font-bold text-sm">Nouveau message</div>
                      <div className="text-xs text-red-200">Sarah Ben Ali</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - SEO Content Boost */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Ce que les étudiants disent <br /> d'<span className="text-primary">ETUDI</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Rejoignez des milliers d'élèves qui ont amélioré leurs notes grâce à notre application.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Yasmine B.",
                role: "Élève Bac Maths",
                text: "J'avais du mal en Physique. Grâce à ETUDI, j'ai trouvé un prof particulier à Tunis en 5 minutes. Mes notes ont doublé en un trimestre ! L'app est super facile à utiliser pour réviser.",
                stars: 5
              },
              {
                name: "Karim M.",
                role: "Étudiant Prépa",
                text: "L'application haidhi 3awnitni, merci 5atir fikra behya. J'ai cherché longtemps un professeur compétant et j'ai trouvé le bon avec ETUDI.",
                stars: 5
              },
              {
                name: "Amira S.",
                role: "Parent d'élève",
                text: "Enfin une solution fiable en Tunisie ! J'ai trouvé un excellent enseignant pour ma fille en 9ème. Le suivi des notes et la messagerie intégrée sont des vrais plus. Je recommande à 100%.",
                stars: 5
              }
            ].map((review, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex text-amber-500 mb-4">
                  {[...Array(review.stars)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed italic">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-lg">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{review.name}</div>
                    <div className="text-sm text-gray-500">{review.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - SEO Content Expansion */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Questions <span className="text-primary">fréquentes</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Tout ce que vous devez savoir sur l'application N°1 d'études en Tunisie.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "Comment trouver un prof particulier en Tunisie avec ETUDI ?",
                a: "C'est très simple. Téléchargez l'application, créez votre compte élève et lancez une recherche par matière (Maths, Physique, etc.) et par ville. Vous verrez une liste de profs vérifiés avec leurs avis et tarifs."
              },
              {
                q: "Les professeurs sont-ils vraiment vérifiés ?",
                a: "Oui, absolument. La sécurité et la qualité sont nos priorités. Chaque enseignant sur ETUDI doit fournir ses diplômes et une pièce d'identité. Notre équipe valide manuellement chaque profil avant qu'il ne soit visible."
              },
              {
                q: "L'application est-elle gratuite ?",
                a: "Le téléchargement de l'app est 100% gratuit sur l'App Store et Google Play. La mise en relation est également gratuite. Vous ne payez que les cours que vous réservez directement avec le prof."
              },
              {
                q: "Puis-je préparer mon Bac avec ETUDI ?",
                a: "Tout à fait ! Nous avons des centaines de profs spécialisés dans la préparation aux examens nationaux (Bac, Neuvième, Concours). Vous pouvez même filtrer pour trouver des experts du Bac Tunisien."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-3xl p-8 hover:bg-white hover:shadow-lg transition-all border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                  <span className="text-primary mr-3 text-2xl">•</span>
                  {faq.q}
                </h3>
                <p className="text-gray-600 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer - Minimalist */}
      <footer className="bg-gray-900 text-white pt-20 pb-10 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
            <div className="flex items-center gap-3">
              <img src={IMAGES.LOGO} alt="ETUDI Logo" className="h-8 w-8 object-contain brightness-0 invert" />
              <span className="text-2xl font-bold">ETUDI</span>
            </div>
            <div className="flex gap-8 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">À propos</a>
              <a href="#" className="hover:text-white transition-colors">Devenir Prof</a>
              <a href="#" className="hover:text-white transition-colors">Blog</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
                <span className="font-bold text-xs">FB</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
                <span className="font-bold text-xs">IG</span>
              </div>
            </div>
          </div>

          <div className="text-center text-xs text-gray-600 border-t border-gray-800 pt-8">
            <p>© 2024 ETUDI. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
