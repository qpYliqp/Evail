<script setup lang="ts">
import { computed } from "vue";
import { useScrollReveal } from "@/composables/useScrollReveal";

interface TeamMember {
  name: string;
  role: string;
  imagePath: string;
  description: string;
  citation: string;
}

const { register } = useScrollReveal();

const teamMembers: TeamMember[] = [
  {
    name: "Annie",
    role: "Fondatrice & présidente",
    imagePath: "/images/staff/anne.png",
    description:
      "Ancienne bio-esthéticienne devenue agente hospitalière, Annie donne l'impulsion et veille à la cohérence de chaque mission.",
    citation:
      "L'humain est au cœur de nos professions, nous restons donc des soignants avant tout.",
  },
  {
    name: "Yaye",
    role: "Co-fondatrice & vice-présidente",
    imagePath: "/images/staff/yaye.png",
    description:
      "Praticienne Snoezelen et professionnelle de santé, elle crée des espaces sensoriels apaisants pour nos bénéficiaires.",
    citation:
      "Mon humanité est liée à la vôtre : partageons le bonheur pour rester debout ensemble.",
  },
  {
    name: "Minette",
    role: "Co-fondatrice & trésorière",
    imagePath: "/images/staff/minette.png",
    description:
      "Architecte d'intérieur et soignante en soins palliatifs, elle imagine des parcours de prise en charge respectueux.",
    citation:
      "L'amour est un guide, une énergie douce qui nous pousse à bâtir des liens durables.",
  },
  {
    name: "Martine Gomis",
    role: "Secrétaire & coordinatrice handicap",
    imagePath: "/images/staff/martine.png",
    description:
      "Assistante spécialisée du handicap, elle accompagne les équipes dans l'adaptation des soins aux besoins spécifiques.",
    citation:
      "Ensemble, grandissons chaque jour pour offrir le meilleur à chacun.",
  },
];

const slices = computed(() => [teamMembers.slice(0, 2), teamMembers.slice(2)]);
</script>

<template>
  <section
    id="team"
    class="section-padding"
  >
    <div class="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 md:px-6">
      <div class="flex flex-col items-start gap-4" :ref="register">
        <span class="rounded-full bg-dusk px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          L'équipe
        </span>
        <h2 class="text-3xl font-bold text-slate md:text-[2.4rem]">
          Une équipe pluridisciplinaire qui fait rayonner la bienveillance sur le terrain.
        </h2>
        <p class="max-w-2xl text-base text-slate/80 md:text-lg">
          Nos professionnelles et bénévoles apportent leurs savoir-faire médicaux, sensoriels et organisationnels pour créer des expériences de soin complètes et humaines.
        </p>
      </div>
      <div class="flex flex-col gap-6" :ref="register">
        <div class="grid gap-6 sm:grid-cols-2">
          <article
            v-for="member in slices[0]"
            :key="member.name"
            class="flex h-full flex-col gap-5 rounded-[var(--radius-lg)] bg-white/90 p-6 shadow-[var(--shadow-card)] transition-transform duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-hover)]"
          >
            <div class="flex items-center gap-4">
              <img
                :src="member.imagePath"
                :alt="member.name"
                class="h-20 w-20 flex-shrink-0 rounded-full object-cover"
                loading="lazy"
              />
              <div>
                <h3 class="text-xl font-semibold text-slate">{{ member.name }}</h3>
                <p class="text-sm font-medium uppercase tracking-[0.2em] text-primary/80">{{ member.role }}</p>
              </div>
            </div>
            <p class="text-sm leading-relaxed text-slate/75 md:text-base">{{ member.description }}</p>
            <blockquote class="relative rounded-[var(--radius-sm)] bg-primary/5 p-4 text-sm italic text-primary md:text-base">
              <span class="sr-only">Citation :</span>
              « {{ member.citation }} »
            </blockquote>
          </article>
        </div>
        <div class="grid gap-6 sm:grid-cols-2">
          <article
            v-for="member in slices[1]"
            :key="member.name"
            class="flex h-full flex-col gap-5 rounded-[var(--radius-lg)] bg-white/90 p-6 shadow-[var(--shadow-card)] transition-transform duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-hover)]"
          >
            <div class="flex items-center gap-4">
              <img
                :src="member.imagePath"
                :alt="member.name"
                class="h-20 w-20 flex-shrink-0 rounded-full object-cover"
                loading="lazy"
              />
              <div>
                <h3 class="text-xl font-semibold text-slate">{{ member.name }}</h3>
                <p class="text-sm font-medium uppercase tracking-[0.2em] text-primary/80">{{ member.role }}</p>
              </div>
            </div>
            <p class="text-sm leading-relaxed text-slate/75 md:text-base">{{ member.description }}</p>
            <blockquote class="relative rounded-[var(--radius-sm)] bg-primary/5 p-4 text-sm italic text-primary md:text-base">
              <span class="sr-only">Citation :</span>
              « {{ member.citation }} »
            </blockquote>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
