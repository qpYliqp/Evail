<script setup lang="ts">
const values = [
  {
    title: 'Respect de la dignité',
    description:
      'Chaque mission est co-construite avec les communautés locales pour renforcer l’autonomie et la confiance mutuelle.',
    emoji: '🤝',
  },
  {
    title: 'Soins holistiques',
    description:
      'Nous intervenons avec une vision globale de la santé : écoute, prévention, accompagnement et suivi personnalisé.',
    emoji: '🌍',
  },
  {
    title: 'Transparence & confiance',
    description:
      'Un reporting rigoureux et une communication ouverte assurent à nos partenaires la bonne utilisation des ressources.',
    emoji: '✨',
  },
  {
    title: 'Équipe pluri-professionnelle',
    description:
      'Des profils complémentaires pour répondre avec justesse aux besoins médicaux, logistiques et sociaux.',
    emoji: '🩺',
  },
]
</script>

<template>
  <section id="values" class="section-muted">
    <div class="mx-auto flex max-w-6xl flex-col gap-12 px-4 section-spacing sm:px-6 lg:px-8">
      <div class="max-w-3xl" data-animate="reveal">
        <span class="badge-pill">Nos valeurs</span>
        <h2 class="mt-4 font-heading heading-2 text-primary">
          Une culture de soin centrée sur l’humain
        </h2>
        <p class="mt-4 text-fluid text-gray-700">
          Nous créons des expériences solidaires chaleureuses, ancrées dans la proximité et la co-construction. Chaque action est
          pensée pour valoriser les personnes accompagnées, les soignants et les partenaires de terrain.
        </p>
      </div>

      <div class="grid gap-8 sm:grid-cols-2" data-animate="reveal">
        <article
          v-for="value in values"
          :key="value.title"
          class="card-surface flex flex-col gap-4 p-8 transition duration-200"
        >
          <div class="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-2xl" aria-hidden="true">
            {{ value.emoji }}
          </div>
          <h3 class="font-heading heading-3 text-gray-900">
            {{ value.title }}
          </h3>
          <p class="text-fluid text-gray-700">
            {{ value.description }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
