<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

type SectionId = 'hero' | 'mission' | 'impact' | 'values' | 'team' | 'support'

const isNavOpen = ref(false)
const isScrolled = ref(false)
const activeSection = ref<SectionId>('hero')

const teamMembers = [
  {
    name: 'Annie',
    role: 'Présidente & fondatrice',
    image: '/images/staff/anne.png',
    bio: "Annie coordonne l'élan humanitaire d'Evail et veille à l'accueil de chaque patient avec douceur et dignité.",
    quote: "L'humain est au cœur de nos professions : restons des soignants avant tout."
  },
  {
    name: 'Yaye',
    role: 'Vice-présidente',
    image: '/images/staff/yaye.png',
    bio: "Spécialiste de l’accompagnement sensoriel, Yaye s’assure que la prévention et la bienveillance guident nos interventions.",
    quote: 'Mon humanité est liée à la vôtre : partageons le bonheur.'
  },
  {
    name: 'Minette',
    role: 'Trésorière & coordinatrice terrain',
    image: '/images/staff/minette.png',
    bio: "Minette orchestre la logistique des missions et accompagne les équipes vers des espaces de soin sécurisés.",
    quote: 'L’amour est une énergie qui nous apprend à nous servir de ses ailes.'
  },
  {
    name: 'Martine',
    role: "Secrétaire de l'association",
    image: '/images/staff/martine.png',
    bio: "Martine assure les liens avec nos partenaires locaux pour que chaque mission ait un impact durable.",
    quote: 'Ensemble, vivons des moments uniques pour offrir le meilleur à chacun.'
  }
] as const

const closeNav = () => {
  isNavOpen.value = false
}

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    closeNav()
  }
}

let revealObserver: IntersectionObserver | null = null
let sectionObserver: IntersectionObserver | null = null

const handleScroll = () => {
  isScrolled.value = window.scrollY > 12
}

const revealElements = () => {
  const targets = document.querySelectorAll<HTMLElement>('.reveal')
  targets.forEach((target) => revealObserver?.observe(target))
}

const observeSections = () => {
  const sections = document.querySelectorAll<HTMLElement>('[data-section]')
  sections.forEach((section) => sectionObserver?.observe(section))
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('keydown', handleKeydown)

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          revealObserver?.unobserve(entry.target as Element)
        }
      })
    },
    {
      threshold: 0.2
    }
  )

  sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id as SectionId
        }
      })
    },
    {
      threshold: 0.55
    }
  )

  revealElements()
  observeSections()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('keydown', handleKeydown)
  revealObserver?.disconnect()
  sectionObserver?.disconnect()
})
</script>

<template>
  <div class="app-shell">
    <header class="header" :class="{ 'header--scrolled': isScrolled }">
      <nav class="container nav" aria-label="Navigation principale">
        <a class="nav__brand" href="#hero">
          <img src="/images/logos/red_evail_logo.png" alt="Logo Evail" />
          <span>Evail Humanitaire</span>
        </a>
        <div class="nav__links" role="menubar">
          <a
            v-for="link in [
              { id: 'mission', label: 'Notre mission' },
              { id: 'impact', label: 'Impact' },
              { id: 'values', label: 'Nos valeurs' },
              { id: 'team', label: 'Équipe' },
              { id: 'support', label: 'Nous soutenir' }
            ]"
            :key="link.id"
            class="nav__link"
            role="menuitem"
            :href="`#${link.id}`"
            :class="{ 'is-active': activeSection === link.id }"
            @click="closeNav"
          >
            {{ link.label }}
          </a>
        </div>
        <button
          class="nav__toggle"
          type="button"
          @click="isNavOpen = !isNavOpen"
          :aria-expanded="isNavOpen"
          aria-controls="nav-drawer"
        >
          <span class="sr-only">Ouvrir le menu</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
      <transition name="fade">
        <div
          v-if="isNavOpen"
          id="nav-drawer"
          class="nav__drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Menu principal"
          @click.self="closeNav"
        >
          <div class="nav__panel">
            <a href="#mission" @click="closeNav">Notre mission</a>
            <a href="#impact" @click="closeNav">Impact</a>
            <a href="#values" @click="closeNav">Nos valeurs</a>
            <a href="#team" @click="closeNav">Équipe</a>
            <a href="#support" @click="closeNav">Nous soutenir</a>
          </div>
        </div>
      </transition>
    </header>

    <main>
      <section id="hero" data-section class="section hero">
        <div class="container hero__grid">
          <div class="hero__content reveal">
            <div class="badge-accent">Humanité en action</div>
            <h1 class="hero__title">
              Diffuser la douceur des soins là où les besoins se font sentir
            </h1>
            <p class="hero__text">
              Evail Humanitaire accompagne les soignants et les communautés pour tisser des parcours de santé accessibles,
              chaleureux et durables. Notre équipe sillonne le monde pour porter un soutien très concret aux personnes les plus
              vulnérables.
            </p>
            <div class="hero__actions">
              <a class="btn-primary" href="#support">Rejoindre le mouvement</a>
              <a class="btn-secondary" href="#mission">Découvrir notre vision</a>
            </div>
          </div>
          <div class="hero__media reveal" data-delay="200">
            <picture>
              <source
                srcset="/images/actions/action-image-1.jpg"
                media="(min-width: 768px)"
              />
              <img
                class="hero__image"
                src="/images/actions/action-image-1.jpg"
                alt="Soignante accompagnant une habitante lors d'une mission Evail"
                sizes="(min-width: 1024px) 520px, (min-width: 768px) 440px, 92vw"
              />
            </picture>
          </div>
        </div>
        <div class="container hero__badge-grid reveal" data-delay="400">
          <article class="hero__badge">
            <strong>+10&nbsp;000</strong>
            <span>Bénéficiaires accompagnés depuis la création de l'association.</span>
          </article>
          <article class="hero__badge">
            <strong>30 soignants</strong>
            <span>Infirmiers, médecins et spécialistes mobilisés aux côtés des équipes locales.</span>
          </article>
          <article class="hero__badge">
            <strong>4 pays</strong>
            <span>Déjà concernés par nos actions de prévention et nos cliniques mobiles solidaires.</span>
          </article>
        </div>
      </section>

      <section id="mission" data-section class="section section--alt mission">
        <div class="container mission__grid">
          <div class="reveal">
            <span class="section__eyebrow">Notre mission</span>
            <h2 class="section__title">Prendre soin autrement, avec et pour les communautés locales</h2>
            <p class="section__subtitle">
              Nous co-construisons chaque mission avec les partenaires de terrain pour répondre précisément aux besoins de
              prévention, de dépistage et d’accompagnement thérapeutique.
            </p>
            <ul class="mission__list">
              <li class="mission__item">
                <strong>Prévenir &amp; sensibiliser</strong>
                <span>Ateliers participatifs, diagnostics partagés et suivi personnalisé pour diffuser les bons réflexes santé.</span>
              </li>
              <li class="mission__item">
                <strong>Soigner avec douceur</strong>
                <span>Consultations mobiles, équipes pluridisciplinaires et espaces de repos adaptés aux réalités locales.</span>
              </li>
              <li class="mission__item">
                <strong>Pérenniser les actions</strong>
                <span>Transmission des savoir-faire, soutien aux initiatives locales et mise à disposition de matériel durable.</span>
              </li>
            </ul>
            <a class="card-link" href="https://www.payasso.fr/association-evail-humanitaire/don" target="_blank" rel="noopener">
              Explorer nos programmes
            </a>
          </div>
          <div class="mission__image-wrapper reveal" data-delay="200">
            <picture>
              <source
                srcset="/images/travels/casamance/casamance-1.jpg"
                media="(min-width: 1024px)"
              />
              <img
                class="mission__image"
                src="/images/travels/casamance/casamance-1.jpg"
                alt="Rencontre avec les habitants lors d'une mission en Casamance"
                loading="lazy"
                sizes="(min-width: 1024px) 460px, (min-width: 768px) 540px, 92vw"
              />
            </picture>
          </div>
        </div>
      </section>

      <section id="impact" data-section class="section impact">
        <div class="container">
          <div class="reveal">
            <span class="section__eyebrow">Impact</span>
            <h2 class="section__title">L’humain au centre de chaque étape</h2>
            <p class="section__subtitle">
              De la préparation des missions à leur suivi, nous veillons à offrir des expériences de soin rassurantes, respectueuses
              et porteuses d’autonomie.
            </p>
          </div>
          <div class="impact__grid reveal" data-delay="200">
            <article class="impact-card">
              <strong>1336</strong>
              <span>Consultations réalisées lors de notre première campagne en Casamance.</span>
            </article>
            <article class="impact-card">
              <strong>250</strong>
              <span>Kilos de matériel et de médicaments collectés grâce à notre communauté solidaire.</span>
            </article>
            <article class="impact-card">
              <strong>15</strong>
              <span>Partenaires locaux engagés pour renforcer durablement l’accès aux soins.</span>
            </article>
          </div>
        </div>
      </section>

      <section id="values" data-section class="section section--alt values">
        <div class="container">
          <div class="reveal">
            <span class="section__eyebrow">Nos valeurs</span>
            <h2 class="section__title">Des cartes humaines, des gestes qui rassurent</h2>
            <p class="section__subtitle">
              Chaque membre d’Evail incarne des valeurs fortes qui se traduisent par des attentions concrètes pour les patients
              comme pour les bénévoles.
            </p>
          </div>
          <div class="values__grid reveal" data-delay="200">
            <article class="value-card">
              <div class="value-card__icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 21C12 21 3 13.5 3 8.5C3 5.46243 5.46243 3 8.5 3C10.3638 3 12 4.0111 12 4.0111C12 4.0111 13.6362 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 13.5 12 21 12 21Z" />
                </svg>
              </div>
              <h3 class="value-card__title">Bienveillance active</h3>
              <p>Écoute attentive, gestes doux et respect des rythmes de chacun pour apaiser les parcours de soins.</p>
            </article>
            <article class="value-card">
              <div class="value-card__icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 8V12L14.5 13.5" />
                  <circle cx="12" cy="12" r="9" />
                </svg>
              </div>
              <h3 class="value-card__title">Fiabilité</h3>
              <p>Organisation solide, suivi précis et transparence financière pour rassurer nos partenaires et donateurs.</p>
            </article>
            <article class="value-card">
              <div class="value-card__icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M20 21V7L12 3L4 7V21" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 21V12H15V21" />
                </svg>
              </div>
              <h3 class="value-card__title">Ancrage local</h3>
              <p>Co-création avec les associations de terrain pour renforcer durablement l’accès aux soins essentiels.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="team" data-section class="section team">
        <div class="container">
          <div class="reveal">
            <span class="section__eyebrow">Notre équipe</span>
            <h2 class="section__title">Des soignantes engagées, proches de chaque patient</h2>
            <p class="section__subtitle">
              Une équipe pluridisciplinaire soudée par l’envie de créer des espaces de soins réconfortants partout où nous sommes
              attendus.
            </p>
          </div>
          <div class="team__grid reveal" data-delay="200">
            <article v-for="member in teamMembers" :key="member.name" class="team-card">
              <img
                class="team-card__photo"
                :src="member.image"
                :alt="`Portrait de ${member.name}`"
                loading="lazy"
              />
              <div>
                <h3 class="team-card__name">{{ member.name }}</h3>
                <p class="team-card__role">{{ member.role }}</p>
              </div>
              <p>{{ member.bio }}</p>
              <p class="team-card__quote">« {{ member.quote }} »</p>
            </article>
          </div>
        </div>
      </section>

      <section id="support" data-section class="section support">
        <div class="container support__panel reveal">
          <span class="section__eyebrow">Nous soutenir</span>
          <h2 class="section__title">Offrir un soin chaleureux à chaque don</h2>
          <p>
            Vos contributions permettent d’équiper nos cliniques mobiles, de former les bénévoles et de garantir un suivi digne des
            personnes rencontrées sur le terrain.
          </p>
          <a
            class="btn-primary"
            href="https://www.payasso.fr/association-evail-humanitaire/don"
            target="_blank"
            rel="noopener"
          >
            Faire un don sécurisé
          </a>
          <p>66&nbsp;% de votre don est déductible de vos impôts.</p>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="container site-footer__grid">
        <div class="site-footer__brand">
          <img src="/images/logos/colored_evail_logo.png" alt="Logo coloré Evail" loading="lazy" />
          <div>
            <strong>Evail Humanitaire</strong>
            <p>Diffuseur de bonne humeur et de soins partout où l’on nous attend.</p>
          </div>
        </div>
        <div class="site-footer__links" aria-label="Liens rapides">
          <a href="#mission">Notre mission</a>
          <a href="#values">Nos valeurs</a>
          <a href="#team">Équipe</a>
          <a href="#support">Nous soutenir</a>
        </div>
        <div class="site-footer__links" aria-label="Nous contacter">
          <a href="mailto:Contact.evailhumanitaire@gmail.com">Contact.evailhumanitaire@gmail.com</a>
          <a href="https://www.instagram.com/evail_humanitaire" target="_blank" rel="noopener">@evail_humanitaire</a>
        </div>
      </div>
      <div class="container site-footer__small">
        © {{ new Date().getFullYear() }} Evail Humanitaire – Association loi 1901.
      </div>
    </footer>
  </div>
</template>
