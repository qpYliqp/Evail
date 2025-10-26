<script setup lang="ts">
import { PDFViewer } from '@/model/PDFViewer'

const pdfViewer = new PDFViewer('/pdf/action/RAPPORT-AMP-AEH.pdf')

const focusPoints = [
  'Des consultations itinérantes pour atteindre les villages isolés',
  'Des ateliers de prévention sur le diabète, l’hypertension et les IST',
  'Des partenariats avec les structures locales pour pérenniser les actions',
]

const metrics = [
  { value: '1 336', label: 'consultations réalisées' },
  { value: '2 050', label: 'boîtes de médicaments collectées' },
  { value: '35', label: 'professionnels de santé mobilisés' },
]

const openReport = () => {
  pdfViewer.openPDF()
}
</script>

<template>
  <section id="actions" class="section-muted">
    <div class="mx-auto grid max-w-6xl gap-12 px-4 section-spacing sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
      <div class="flex flex-col gap-6" data-animate="reveal">
        <span class="badge-pill">Nos actions</span>
        <h2 class="font-heading heading-2 text-gray-900">
          Soigner, prévenir et transmettre sur le terrain
        </h2>
        <p class="text-fluid text-gray-700">
          Chaque mission est une aventure collective : nous rencontrons les communautés, écoutons leurs priorités sanitaires et
          proposons des réponses adaptées. Des consultations aux actions de prévention, nous favorisons l’accès aux soins tout en
          renforçant les connaissances locales.
        </p>
        <ul class="space-y-3 text-fluid text-gray-700">
          <li v-for="point in focusPoints" :key="point" class="flex items-start gap-3">
            <span class="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-white">✓</span>
            <span>{{ point }}</span>
          </li>
        </ul>
        <button type="button" class="btn-secondary mt-2" @click="openReport">
          Consulter le rapport de mission
        </button>
        <div class="grid gap-4 pt-4 sm:grid-cols-3">
          <div
            v-for="metric in metrics"
            :key="metric.label"
            class="rounded-2xl border border-primary/10 bg-white/80 p-4 text-center backdrop-blur"
          >
            <p class="font-heading text-xl text-primary">{{ metric.value }}</p>
            <p class="text-xs font-medium uppercase tracking-wide text-gray-600">{{ metric.label }}</p>
          </div>
        </div>
      </div>

      <div class="relative" data-animate="reveal">
        <div class="absolute -inset-6 hidden rounded-[2rem] bg-secondary/10 blur-2xl lg:block"></div>
        <div class="relative overflow-hidden rounded-[1.75rem] shadow-soft">
          <picture>
            <source
              srcset="/images/actions/action-image-1.jpg 640w, /images/actions/action-image-1.jpg 1280w"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
            <img
              src="/images/actions/action-image-1.jpg"
              alt="Consultation médicale lors d’une mission Evail"
              class="h-full w-full object-cover"
              loading="lazy"
            />
          </picture>
          <div class="absolute inset-x-6 bottom-6 rounded-2xl bg-white/85 p-4 text-sm text-gray-700 shadow-lg backdrop-blur">
            <p class="font-semibold text-primary">Accompagnement continu</p>
            <p>Préparation, logistique, suivi : chaque étape est coordonnée avec les partenaires locaux.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
