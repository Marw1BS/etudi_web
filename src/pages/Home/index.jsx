import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Check, Download, Star } from 'lucide-react'
import { SiteNav, SiteFooter, PrimaryLink, StoreButtons, PhoneFrame, StatsBar } from '../../components/site'

const NAV_LINKS = [
  { label: 'Fonctionnalités', href: '#features' },
  { label: 'Comment ça marche', href: '#how-it-works' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Je suis prof', to: '/je-suis-prof' },
]

const APP_FEATURES = [
  { title: 'Recherche', desc: 'Filtre les profs par matière, niveau et ville.', image: '/images/trouver_enseignant.png' },
  { title: 'Messagerie', desc: 'Pose tes questions au prof avant de réserver.', image: '/images/discussion_1.png' },
  { title: 'Suivi des cours', desc: 'Retrouve l’historique de toutes tes séances.', image: '/images/cours.png' },
  { title: 'Emploi du temps', desc: 'Tes cours de la semaine au même endroit.', image: '/images/emploi_temps.png' },
  { title: 'Dossier scolaire', desc: 'Tes documents, partagés avec tes profs.', image: '/images/dossier_scolaire.png' },
  { title: 'Notes', desc: 'Suis l’évolution de tes résultats.', image: '/images/notes.png' },
]

const STEPS = [
  { title: 'Cherche', desc: 'Choisis la matière, ton niveau et ta ville. Tu vois les profs disponibles près de chez toi, avec leurs avis et leurs tarifs.' },
  { title: 'Discute', desc: 'Écris directement au prof dans l’app pour vérifier ses disponibilités et sa méthode avant de t’engager.' },
  { title: 'Réserve', desc: 'Fixe ton premier cours. Ensuite, ton planning, tes notes et tes documents restent dans l’app.' },
]

const REVIEWS = [
  { name: 'Yasmine B.', role: 'Élève, Bac Maths', text: "J'avais du mal en Physique. Grâce à ETUDI, j'ai trouvé un prof particulier à Tunis en 5 minutes. Mes notes ont doublé en un trimestre ! L'app est super facile à utiliser pour réviser." },
  { name: 'Karim M.', role: 'Étudiant en prépa', text: "L'application haidhi 3awnitni, merci 5atir fikra behya. J'ai cherché longtemps un professeur compétent et j'ai trouvé le bon avec ETUDI." },
  { name: 'Amira S.', role: "Parent d'élève", text: "Enfin une solution fiable en Tunisie ! J'ai trouvé un excellent enseignant pour ma fille en 9ème. Le suivi des notes et la messagerie intégrée sont des vrais plus." },
]

const FAQ = [
  { q: 'Comment trouver un prof particulier en Tunisie avec ETUDI ?', a: "Téléchargez l'application, créez votre compte élève et lancez une recherche par matière (Maths, Physique, etc.) et par ville. Vous verrez une liste de profs vérifiés avec leurs avis et tarifs." },
  { q: 'Les professeurs sont-ils vraiment vérifiés ?', a: "Oui. Chaque enseignant sur ETUDI doit fournir ses diplômes et une pièce d'identité. Notre équipe valide manuellement chaque profil avant qu'il ne soit visible." },
  { q: "L'application est-elle gratuite ?", a: "Le téléchargement et la mise en relation sont gratuits. Vous ne payez que les cours que vous réservez directement avec le prof." },
  { q: 'Puis-je préparer mon Bac avec ETUDI ?', a: "Oui. De nombreux profs sont spécialisés dans la préparation aux examens nationaux (Bac, Neuvième, concours). Vous pouvez filtrer pour trouver ceux qui préparent au Bac tunisien." },
]

function Home() {
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
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-[1.2fr_1fr] md:py-24">
          <div>
            <p className="mb-4 text-sm font-semibold text-primary">Soutien scolaire en Tunisie</p>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl">
              Trouver un prof particulier près de chez vous
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              ETUDI met en relation élèves, parents et professeurs vérifiés partout en Tunisie.
              Cours à domicile, soutien scolaire et préparation aux examens, du primaire au Bac.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PrimaryLink>
                <Download size={18} /> Télécharger l'app
              </PrimaryLink>
              <Link
                to="/je-suis-prof"
                className="inline-flex items-center justify-center rounded-2xl border border-navy/10 px-5 py-3 font-semibold text-navy transition-colors hover:bg-mint"
              >
                Je suis prof
              </Link>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
              {['Profs vérifiés', 'Gratuit pour les élèves', 'Tunis, Sfax, Sousse et partout ailleurs'].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <Check size={16} className="text-primary" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -left-32 top-14 hidden w-[230px] -rotate-6 lg:block" aria-hidden="true">
                <PhoneFrame>
                  <img src="/images/notes.png" alt="" className="block w-full" />
                </PhoneFrame>
              </div>
              <PhoneFrame className="w-[270px]">
                <img src="/images/trouver_enseignant.png" alt="Recherche d'un professeur dans l'app ETUDI" className="block w-full" />
              </PhoneFrame>
            </div>
          </div>
        </div>
      </section>

      <StatsBar />

      {/* How it works */}
      <section id="how-it-works" className="scroll-mt-16 bg-mint">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
            Fini les groupes Facebook et les numéros qui ne répondent pas
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted">Trois étapes pour commencer.</p>
          <ol className="mt-12 grid gap-10 md:grid-cols-3">
            {STEPS.map((step, i) => (
              <li key={step.title} className="border-t-2 border-primary pt-5">
                <span className="text-sm font-semibold text-muted">0{i + 1}</span>
                <h3 className="mt-1 text-xl font-bold">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="scroll-mt-16">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Tout ton suivi scolaire dans une app</h2>
            <p className="mt-4 text-lg text-muted">Une fois ton prof trouvé, ETUDI t'aide à t'organiser.</p>
            <ul className="mt-8 divide-y divide-navy/10 border-y border-navy/10">
              {APP_FEATURES.map((f, i) => (
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
                {APP_FEATURES.map((f, i) => (
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

      {/* Reviews */}
      <section className="bg-mint">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Ce qu'en disent les élèves et les parents</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {REVIEWS.map((r) => (
              <figure key={r.name} className="flex flex-col rounded-[20px] bg-white p-6 shadow-soft">
                <div className="flex gap-0.5 text-amber-500" aria-label="5 étoiles sur 5">
                  {[0, 1, 2, 3, 4].map((s) => <Star key={s} size={16} fill="currentColor" />)}
                </div>
                <blockquote className="mt-4 flex-1 leading-relaxed text-navy/80">{r.text}</blockquote>
                <figcaption className="mt-6 text-sm">
                  <span className="font-semibold">{r.name}</span>
                  <span className="text-muted"> · {r.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-16">
        <div className="mx-auto max-w-3xl px-5 py-20">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Questions fréquentes</h2>
          <div className="mt-10 divide-y divide-navy/10 border-y border-navy/10">
            {FAQ.map((item, i) => (
              <details key={item.q} className="group py-5" open={i === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                  <h3>{item.q}</h3>
                  <span className="text-xl text-muted/60 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 leading-relaxed text-muted">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* SEO content */}
      <section className="border-t border-navy/10 bg-mint">
        <div className="mx-auto max-w-3xl space-y-10 px-5 py-20 leading-relaxed text-navy/80">
          <h2 className="text-3xl font-bold tracking-tight text-navy md:text-4xl">
            ETUDI : trouver un professeur particulier en Tunisie
          </h2>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-navy">Comment trouver un prof particulier en Tunisie rapidement ?</h3>
            <p>
              Vous cherchez un <strong>professeur particulier en Tunisie</strong> pour vous accompagner dans vos études ? ETUDI simplifie votre recherche. Que vous soyez à <strong>Tunis</strong>, <strong>Sfax</strong>, <strong>Sousse</strong> ou dans une autre ville, trouvez en quelques clics un <strong>enseignant qualifié</strong> près de chez vous.
            </p>
            <p>
              Recherchez par <strong>matière</strong> (mathématiques, physique, français, anglais, etc.), par <strong>niveau scolaire</strong> (primaire, collège, lycée, Bac, université) et par <strong>localisation</strong>. Consultez les profils, les avis d'autres élèves, et contactez directement le prof qui correspond à vos besoins.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-navy">Soutien scolaire et cours à domicile pour tous les niveaux</h3>
            <p>
              Que vous prépariez le <strong>Bac tunisien</strong>, un concours d'entrée, ou que vous souhaitiez simplement améliorer vos résultats, les <strong>professeurs vérifiés</strong> d'ETUDI peuvent vous aider. C'est une solution complète de <strong>soutien scolaire en Tunisie</strong>.
            </p>
            <p>
              Organisez des <strong>cours particuliers à domicile</strong> ou en ligne. Chaque enseignant est vérifié par notre équipe. Réservez vos séances dans l'application et suivez votre progression avec la gestion des notes et de l'emploi du temps.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-navy">Pourquoi choisir ETUDI ?</h3>
            <ul className="space-y-2">
              {[
                ['Professeurs vérifiés', 'diplômes et identité contrôlés par notre équipe.'],
                ['Recherche simple', 'par matière, niveau et ville.'],
                ['Communication directe', 'discutez avec le prof avant de réserver.'],
                ['Avis d’élèves', 'pour faire le bon choix.'],
                ['Partout en Tunisie', 'des professeurs dans tout le pays.'],
              ].map(([b, t]) => (
                <li key={b} className="flex gap-3">
                  <Check size={18} className="mt-1 shrink-0 text-primary" />
                  <span><strong>{b} :</strong> {t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Download */}
      <section id="download" className="bg-navy text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-5 py-16 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Ton prof, dans ta poche</h2>
            <p className="mt-3 text-lg text-white/70">Gratuit. Trouve, contacte et réserve depuis ton téléphone.</p>
          </div>
          <StoreButtons dark />
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}

export default Home
