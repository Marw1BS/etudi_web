import React, { useState, useEffect, useRef } from 'react'
import {
    CheckCircle,
    Shield,
    Users,
    Clock,
    Filter,
    Layers,
    Briefcase,
    Lock,
    FileText,
    UserPlus,
    Upload,
    List,
    Play,
    ArrowRight,
    Download,
    Calendar,
    MessageSquare,
    UserCheck,
    BookOpen
} from 'lucide-react'
import { Button, Badge } from '../../components/ui'
import GradientText from '../../components/ui/GradientText'
import { Link } from 'react-router-dom'

// Images Prof
const PROF_IMAGES = {
    AJOUTER_ELEVE: '/images/prof/ajouter_élève.jpg',
    CREER_COURS: '/images/prof/créer_cours.jpg',
    DEMANDE_CONNEXION: '/images/prof/demande_connexion.png',
    PLANNING: '/images/prof/planning.png',
    PROFIL_ELEVE: '/images/prof/profil_élève.png',
}

// App Features for Prof
const PROF_FEATURES_LIST = [
    {
        title: 'Demandes de connexion',
        desc: 'Recevez et gérez les demandes des élèves qui souhaitent rejoindre vos cours.',
        image: PROF_IMAGES.DEMANDE_CONNEXION,
        color: 'blue',
        icon: <MessageSquare size={24} />
    },
    {
        title: 'Profil élève',
        desc: 'Consultez le profil complet de chaque élève avant de l\'accepter.',
        image: PROF_IMAGES.PROFIL_ELEVE,
        color: 'purple',
        icon: <UserCheck size={24} />
    },
    {
        title: 'Ajouter un élève',
        desc: 'Ajoutez facilement de nouveaux élèves à vos groupes de cours.',
        image: PROF_IMAGES.AJOUTER_ELEVE,
        color: 'green',
        icon: <UserPlus size={24} />
    },
    {
        title: 'Créer un cours',
        desc: 'Organisez vos séances et créez des cours pour vos différents groupes.',
        image: PROF_IMAGES.CREER_COURS,
        color: 'primary',
        icon: <BookOpen size={24} />
    },
    {
        title: 'Planning',
        desc: 'Visualisez et gérez votre emploi du temps en un coup d\'œil.',
        image: PROF_IMAGES.PLANNING,
        color: 'orange',
        icon: <Calendar size={24} />
    },
]

const TeacherHome = () => {
    const [activeFeature, setActiveFeature] = useState(0);
    const featureRefs = useRef([]);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-40% 0px -40% 0px',
            threshold: 0,
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = parseInt(entry.target.dataset.index, 10);
                    setActiveFeature(index);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        featureRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 font-sans text-text-main relative selection:bg-primary/20">

            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-white/20">
                <div className="container mx-auto px-6">
                    <div className="h-20 flex items-center justify-between">
                        <Link to="/" className="flex items-center gap-3">
                            <span className="text-2xl font-bold text-gray-900 tracking-tight">ETUDI</span>
                            <Badge className="bg-primary/10 text-primary border-primary/20">Espace Prof</Badge>
                        </Link>
                        <Link to="/">
                            <Button size="sm" variant="ghost">Retour à l'accueil</Button>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                {/* Animated Background Blobs */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] animate-float" />
                    <div className="absolute bottom-0 left-[-10%] w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] animate-pulse" />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">

                    {/* Eyebrow / Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-8 animate-fade-in-up">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>
                        <span className="text-sm font-semibold text-gray-700">Rejoignez ETUDI</span>
                    </div>

                    {/* Main Title */}
                    <div className="mb-6 space-y-4">
                        <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 tracking-tight">
                            L'App N°1 des <br />
                        </h1>
                        <div className="py-2"> {/* Padding to prevent gradient clipping/overlap */}
                            <GradientText colors={['#2563eb', '#06b6d4', '#2563eb']} className="text-6xl lg:text-8xl font-extrabold pb-2">
                                Professeurs
                            </GradientText>
                        </div>
                        <p className="text-2xl lg:text-3xl text-gray-400 font-medium tracking-tight mt-4">
                            en Tunisie 🇹🇳
                        </p>
                    </div>

                    {/* Value Prop */}
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-10 mt-8">
                        Développez votre réseau, sélectionnez les meilleurs élèves et gérez vos cours <br className="hidden md:block" /> en toute simplicité.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="https://play.google.com/store/apps/details?id=com.etudi.app&hl=fr" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="rounded-full px-10 py-7 text-lg bg-primary hover:bg-primary-dark shadow-xl shadow-primary/20 hover:-translate-y-1 transition-all">
                                <Download className="mr-2 h-6 w-6" /> Télécharger l'App
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            {/* Explorer l'application Prof */}
            <section id="features-prof" className="relative">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden -z-10">
                    <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-[0.02]" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row items-start">

                        {/* Left: Scrolling Text */}
                        <div className="w-full md:w-1/2 py-24 z-10">
                            <div className="mb-32 pl-4">
                                <Badge className="mb-6 bg-blue-100 text-blue-700 border-blue-200">Explorer l'application</Badge>
                                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                    Gérez vos cours <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">comme un pro.</span>
                                </h2>
                                <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                                    Découvrez les fonctionnalités conçues pour simplifier votre quotidien de professeur.
                                </p>
                            </div>

                            <div className="space-y-[60vh]">
                                {PROF_FEATURES_LIST.map((feature, index) => (
                                    <div
                                        key={index}
                                        data-index={index}
                                        ref={el => featureRefs.current[index] = el}
                                        className={`transition-all duration-700 py-6 pl-8 border-l-4 ${activeFeature === index ? `border-${feature.color}-500 opacity-100 translate-x-4 scale-105` : 'border-gray-200 opacity-30 blur-[1px]'}`}
                                    >
                                        <div className={`flex items-center gap-3 mb-4 ${activeFeature === index ? `text-${feature.color}-600` : 'text-gray-400'}`}>
                                            {feature.icon}
                                            <span className="text-sm font-semibold uppercase tracking-wider">Fonctionnalité</span>
                                        </div>
                                        <h3 className={`text-3xl md:text-4xl font-bold mb-6 ${activeFeature === index ? 'text-gray-900' : 'text-gray-400'}`}>
                                            {feature.title}
                                        </h3>

                                        {/* Mobile Image */}
                                        <div className="md:hidden mb-6 flex justify-center relative">
                                            <div className={`absolute inset-0 bg-gradient-to-br from-${feature.color}-400/20 to-blue-400/10 rounded-[3rem] blur-2xl -z-10`} />
                                            <div className="relative bg-gradient-to-b from-gray-800 via-gray-900 to-black rounded-[2.5rem] p-1.5 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.3)]">
                                                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-30" />
                                                <div className="relative bg-gray-50 rounded-[2rem] overflow-hidden w-[200px] h-[400px] flex items-center justify-center">
                                                    <img src={feature.image} alt={feature.title} className="w-full h-full object-contain" />
                                                </div>
                                            </div>
                                        </div>

                                        <p className={`text-xl leading-relaxed max-w-sm transition-colors duration-500 ${activeFeature === index ? 'text-gray-600' : 'text-gray-300'}`}>
                                            {feature.desc}
                                        </p>
                                        {activeFeature === index && (
                                            <div className="mt-6 flex items-center text-blue-600 font-medium animate-fade-in-up">
                                                En savoir plus <span className="ml-2">→</span>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <div className="h-[20vh]" />
                        </div>

                        {/* Right: Sticky Phone Mockup */}
                        <div className="hidden md:flex w-1/2 sticky top-20 h-[calc(100vh-5rem)] items-center justify-center p-4">
                            <div className="relative flex items-center justify-center">

                                {/* Animated Background */}
                                <div className="absolute inset-0 -z-10">
                                    <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[100px] bg-gradient-to-br from-${PROF_FEATURES_LIST[activeFeature]?.color}-400/30 to-cyan-400/20 transition-all duration-1000 animate-pulse`} />
                                    <div className={`absolute left-[30%] top-[60%] w-[200px] h-[200px] rounded-full blur-[80px] bg-${PROF_FEATURES_LIST[activeFeature]?.color}-300/20 transition-all duration-700`} />
                                    <div className="absolute top-10 right-10 w-16 h-16 bg-gradient-to-br from-blue-500/30 to-cyan-500/20 rounded-full blur-xl animate-bounce" style={{ animationDuration: '3s' }} />
                                    <div className="absolute bottom-20 left-10 w-12 h-12 bg-gradient-to-br from-purple-400/30 to-blue-500/20 rounded-full blur-lg animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }} />
                                </div>

                                {/* Phone Frame */}
                                <div className="relative">
                                    <div className="absolute -inset-4 bg-gradient-to-b from-white/20 to-transparent rounded-[3rem] blur-2xl -z-10" />

                                    <div className="relative">
                                        <div className="relative bg-gradient-to-b from-gray-800 via-gray-900 to-black rounded-[3rem] p-2 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4),0_30px_60px_-30px_rgba(0,0,0,0.5)] ring-1 ring-white/10">
                                            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-30 flex items-center justify-center">
                                                <div className="w-3 h-3 rounded-full bg-gray-800 mr-8" />
                                            </div>

                                            <div className="relative bg-white rounded-[2.5rem] overflow-hidden w-[300px] h-[620px]">
                                                <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-black/5 to-transparent z-20 flex items-center justify-between px-8 pt-2 text-[10px] font-medium text-gray-600">
                                                    <span>9:41</span>
                                                    <div className="flex items-center gap-1">
                                                        <span>📶</span>
                                                        <span>🔋</span>
                                                    </div>
                                                </div>

                                                {PROF_FEATURES_LIST.map((feature, index) => (
                                                    <div
                                                        key={index}
                                                        className={`absolute inset-0 w-full h-full flex items-center justify-center bg-gray-50 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${activeFeature === index
                                                                ? 'opacity-100 scale-100 translate-y-0'
                                                                : activeFeature > index
                                                                    ? 'opacity-0 scale-95 -translate-y-8'
                                                                    : 'opacity-0 scale-95 translate-y-8'
                                                            }`}
                                                    >
                                                        <img src={feature.image} alt={feature.title} className="w-full h-full object-contain" />
                                                    </div>
                                                ))}

                                                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none z-10" />
                                            </div>

                                            <div className="absolute left-[-3px] top-[20%] w-[4px] h-8 bg-gray-700 rounded-l-sm" />
                                            <div className="absolute left-[-3px] top-[30%] w-[4px] h-12 bg-gray-700 rounded-l-sm" />
                                            <div className="absolute left-[-3px] top-[42%] w-[4px] h-12 bg-gray-700 rounded-l-sm" />
                                            <div className="absolute right-[-3px] top-[28%] w-[4px] h-16 bg-gray-700 rounded-r-sm" />
                                        </div>

                                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[60%] h-8 bg-black/20 blur-2xl rounded-full" />
                                    </div>
                                </div>

                                {/* Dots */}
                                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                    {PROF_FEATURES_LIST.map((_, index) => (
                                        <div
                                            key={index}
                                            className={`w-2 h-2 rounded-full transition-all duration-500 ${activeFeature === index
                                                    ? 'bg-blue-600 w-6 shadow-lg shadow-blue-600/30'
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

            {/* 1. Pourquoi choisir ETUDI */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <Badge className="bg-blue-100 text-blue-700 border-blue-200 mb-4">Avantages</Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            1. Pourquoi les professeurs choisissent ETUDI ?
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Users className="text-blue-600" size={28} />,
                                title: "Une visibilité unique en Tunisie",
                                desc: "Des centaines d’élèves recherchent chaque jour un professeur de qualité autour d’eux.",
                                bg: "bg-blue-50"
                            },
                            {
                                icon: <Filter className="text-purple-600" size={28} />,
                                title: "Vous choisissez vos élèves",
                                desc: "Vous acceptez uniquement les profils qui correspondent à votre niveau et vos exigences.",
                                bg: "bg-purple-50"
                            },
                            {
                                icon: <Layers className="text-green-600" size={28} />,
                                title: "Gestion simplifiée",
                                desc: "Ajoutez vos classes, suivez vos élèves, gérez inscriptions et documents en un clic.",
                                bg: "bg-green-50"
                            },
                            {
                                icon: <Briefcase className="text-amber-600" size={28} />,
                                title: "Outils professionnels",
                                desc: "Messagerie, suivi des élèves, partage de fichiers, calendrier intelligent.",
                                bg: "bg-amber-50"
                            },
                            {
                                icon: <Clock className="text-red-600" size={28} />,
                                title: "Zéro perte de temps",
                                desc: "Fini les appels et les demandes désorganisées : ETUDI centralise tout.",
                                bg: "bg-red-50"
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-all group">
                                <div className={`w-14 h-14 ${item.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 2. Sécurité et Pro */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <Badge className="bg-green-100 text-green-700 border-green-200 mb-4">Sécurité</Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            2. Sécurité et professionnalisme
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Shield className="text-green-600" size={32} />,
                                title: "Profils vérifiés",
                                desc: "Les professeurs sont authentifiés (CIN, diplômes). Les élèves sont validés via documents scolaires."
                            },
                            {
                                icon: <Lock className="text-green-600" size={32} />,
                                title: "Messagerie sécurisée",
                                desc: "Échangez avec vos groupes et vos élèves en toute confidentialité."
                            },
                            {
                                icon: <FileText className="text-green-600" size={32} />,
                                title: "Documents protégés",
                                desc: "Les relevés, devoirs ou corrections restent accessibles uniquement à vos élèves."
                            }
                        ].map((item, i) => (
                            <div key={i} className="text-center p-8 rounded-3xl bg-green-50/50 border border-green-100">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mx-auto mb-6">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Avantages concrets */}
            <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-bold mb-8">
                                3. Avantages concrets <br /> pour vous
                            </h2>
                            <div className="space-y-4">
                                {[
                                    "Augmenter votre nombre d’élèves",
                                    "Organiser vos groupes facilement",
                                    "Éviter les élèves non sérieux",
                                    "Gagner en visibilité sans effort",
                                    "Développer votre réputation dans votre région",
                                    "Centraliser votre activité dans une seule app"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                                        <CheckCircle className="text-green-400 shrink-0" size={24} />
                                        <span className="font-medium text-lg">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:w-1/2 bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10">
                            <h3 className="text-2xl font-bold mb-6">Exemple de message d'accroche</h3>
                            <div className="bg-white/10 p-6 rounded-2xl italic text-lg leading-relaxed text-gray-300">
                                "Vous êtes professeur ? <br />
                                Rejoignez ETUDI et donnez cours à des élèves motivés, organisés et vérifiés. <br />
                                Gérez votre activité et développez votre réseau en toute simplicité."
                            </div>
                            <div className="mt-8">
                                <Button size="lg" className="w-full rounded-xl py-6 text-lg bg-white text-gray-900 hover:bg-gray-100 font-bold">
                                    Rejoindre ETUDI
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Comment devenir professeur */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            4. Comment devenir professeur sur ETUDI ?
                        </h2>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
                            {[
                                { title: "Créer un compte professeur", desc: "Téléchargez l'app et inscrivez-vous.", icon: <UserPlus size={20} /> },
                                { title: "Télécharger vos justificatifs", desc: "CIN / diplôme / photo.", icon: <Upload size={20} /> },
                                { title: "Configurer votre profil", desc: "Décrire vos matières, niveaux et disponibilité.", icon: <List size={20} /> },
                                { title: "Accepter des élèves", desc: "Commencer à construire votre classe.", icon: <ArrowRight size={20} /> },
                                { title: "Gérer vos groupes", desc: "Donnez cours et suivez la progression.", icon: <Play size={20} /> },
                            ].map((step, i) => (
                                <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-100 group-hover:bg-primary group-hover:text-white transition-colors shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow z-10">
                                        {step.icon}
                                    </div>
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
                                        <div className="flex items-center justify-between space-x-2 mb-1">
                                            <div className="font-bold text-gray-900">Étape {i + 1}</div>
                                        </div>
                                        <div className="text-lg font-bold text-primary mb-2">{step.title}</div>
                                        <div className="text-gray-500">{step.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. CTA & SEO Footer */}
            <section className="py-24 bg-gray-50 border-t border-gray-200">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">
                            Prêt à transformer votre carrière ?
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                            <Button size="lg" className="rounded-full px-10 py-6 text-lg bg-primary hover:bg-primary-dark">
                                Devenir Professeur
                            </Button>
                            <a href="https://play.google.com/store/apps/details?id=com.etudi.app&hl=fr" target="_blank" rel="noopener noreferrer">
                                <Button size="lg" variant="outline" className="rounded-full px-10 py-6 text-lg bg-white border-2 border-gray-200 hover:border-gray-300">
                                    <Download size={20} className="mr-2" /> Télécharger l'App
                                </Button>
                            </a>
                        </div>

                        {/* SEO Text */}
                        <div className="text-xs text-gray-400 leading-relaxed border-t border-gray-200 pt-8 mt-8">
                            <p>
                                ETUDI est la première application en Tunisie dédiée aux professeurs particuliers, enseignants du collège, lycée, Bac et matières scientifiques ou littéraires.
                                Grâce à ETUDI, chaque professeur peut créer ses groupes, accepter les meilleurs élèves, organiser son planning et développer son activité de soutien scolaire.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default TeacherHome
