import React, { useState } from 'react'
import { Check, Download } from 'lucide-react'
import { SiteNav, SiteFooter, PrimaryLink, StoreButtons, PhoneFrame, StatsBar } from '../../components/site'

const NAV_LINKS = [
  { label: 'Fonctionnalités', href: '#features' },
  { label: 'Inscription', href: '#steps' },
  { label: 'Élèves et parents', to: '/' },
]

const FEATURES = [
  { title: 'Demandes de connexion', desc: 'Recevez et gérez les demandes des élèves qui veulent rejoindre vos cours.', image: '/images/prof/demande_connexion.png' },
  { title: 'Profil élève', desc: "Consultez le profil complet de chaque élève avant de l'accepter.", image: '/images/prof/profil_élève.png' },
  { title: 'Ajouter un élève', desc: 'Ajoutez de nouveaux élèves à vos groupes.', image: '/images/prof/ajouter_élève.jpg' },
  { title: 'Créer un cours', desc: 'Organisez vos séances pour chacun de vos groupes.', image: '/images/prof/créer_cours.jpg' },
  { title: 'Planning', desc: 'Votre emploi du temps en un coup d’œil.', image: '/images/prof/planning.png' },
]

const REASONS = [
  { title: 'De la visibilité', desc: 'Plus de 100 élèves sont déjà inscrits et cherchent un professeur près de chez eux.' },
  { title: 'Vous choisissez vos élèves', desc: 'Vous acceptez uniquement les profils qui correspondent à votre niveau et à vos exigences.' },
  { title: 'Tout au même endroit', desc: 'Classes, inscriptions, messages, documents et calendrier : fini les appels et les demandes éparpillées.' },
  { title: 'Profils vérifiés', desc: 'Professeurs authentifiés (CIN, diplômes), élèves validés via leurs documents scolaires.' },
  { title: 'Messagerie privée', desc: 'Échangez avec vos groupes et vos élèves en toute confidentialité.' },
  { title: 'Documents protégés', desc: 'Relevés, devoirs et corrections ne sont visibles que par vos élèves.' },
]

const STEPS = [
  { title: 'Créez un compte professeur', desc: "Téléchargez l'app et inscrivez-vous." },
  { title: 'Envoyez vos justificatifs', desc: 'CIN, diplôme et photo.' },
  { title: 'Complétez votre profil', desc: 'Matières, niveaux et disponibilités.' },
  { title: 'Acceptez vos premiers élèves', desc: 'Construisez votre classe.' },
  { title: 'Gérez vos groupes', desc: 'Donnez cours et suivez la progression.' },
]

const TeacherHome = () => {
  const [active, setActive] = useState(0)

  return (
    <div className="min-h-screen bg-white font-sans text-navy">
      <SiteNav
        links={NAV_LINKS}
        cta={
          <PrimaryLink className="px-4 py-2 text-sm">
            <Download size={16} /> Télécharger
          </PrimaryLink>
        }
      />

      {/* Hero */}
      <section className="border-b border-navy/10">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <p className="mb-4 text-sm font-semibold text-primary">Pour les professeurs</p>
          <h1 className="max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl">
            Trouvez des élèves sérieux et gérez vos cours au même endroit
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            ETUDI aide les professeurs particuliers en Tunisie à développer leur activité :
            vous choisissez vos élèves, organisez vos groupes et suivez votre planning depuis votre téléphone.
          </p>
          <div className="mt-8">
            <PrimaryLink>
              <Download size={18} /> Télécharger l'app
            </PrimaryLink>
          </div>
        </div>
      </section>

      <StatsBar />

      {/* Reasons */}
      <section className="bg-mint">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Pourquoi les professeurs choisissent ETUDI</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {REASONS.map((r) => (
              <div key={r.title} className="rounded-[20px] bg-white p-6 shadow-soft">
                <h3 className="font-bold">{r.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="scroll-mt-16">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">L'app, côté professeur</h2>
            <p className="mt-4 text-lg text-muted">Ce que vous pouvez faire depuis votre espace.</p>
            <ul className="mt-8 divide-y divide-navy/10 border-y border-navy/10">
              {FEATURES.map((f, i) => (
                <li key={f.title}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    aria-pressed={active === i}
                    className={`flex w-full items-baseline gap-4 py-4 text-left transition-colors ${active === i ? 'text-navy' : 'text-muted hover:text-navy'}`}
                  >
                    <span className={`w-1 self-stretch rounded-full ${active === i ? 'bg-primary' : 'bg-transparent'}`} />
                    <span>
                      <span className="block font-semibold">{f.title}</span>
                      <span className="block text-sm">{f.desc}</span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center">
            <PhoneFrame className="w-[280px]">
              <div className="relative aspect-[2/3] bg-mint">
                {FEATURES.map((f, i) => (
                  <img
                    key={f.title}
                    src={f.image}
                    alt={f.title}
                    loading="lazy"
                    className={`absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-300 ${active === i ? 'opacity-100' : 'opacity-0'}`}
                  />
                ))}
              </div>
            </PhoneFrame>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section id="steps" className="scroll-mt-16 bg-mint">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Devenir professeur sur ETUDI</h2>
          <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {STEPS.map((s, i) => (
              <li key={s.title} className="border-t-2 border-primary pt-5">
                <span className="text-sm font-semibold text-muted">0{i + 1}</span>
                <h3 className="mt-1 font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.desc}</p>
              </li>
            ))}
          </ol>
          <ul className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              'Plus d’élèves',
              'Des groupes faciles à organiser',
              'Moins d’élèves non sérieux',
              'Plus de visibilité',
              'Une réputation dans votre région',
              'Toute votre activité dans une seule app',
            ].map((t) => (
              <li key={t} className="flex items-center gap-2 text-navy/80">
                <Check size={18} className="shrink-0 text-primary" /> {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-5 py-16 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Prêt à rejoindre ETUDI ?</h2>
            <p className="mt-3 max-w-xl text-white/70">
              ETUDI est l'application tunisienne dédiée aux professeurs particuliers : collège, lycée, Bac, matières scientifiques ou littéraires.
              Créez vos groupes, acceptez vos élèves, organisez votre planning.
            </p>
          </div>
          <StoreButtons dark />
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}

export default TeacherHome
