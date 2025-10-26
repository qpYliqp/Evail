<script setup lang="ts">
import { useScrollReveal } from "@/composables/useScrollReveal";

const { register } = useScrollReveal();

const values = [
  {
    title: "Humanité partagée",
    description:
      "Chaque rencontre est guidée par l'écoute active et la considération de la personne dans sa globalité, ses forces et ses fragilités.",
    icon: "heart",
  },
  {
    title: "Solidarité durable",
    description:
      "Nous co-construisons des parcours de soin et de prévention avec nos partenaires locaux pour faire grandir leur autonomie.",
    icon: "hands",
  },
  {
    title: "Exigence de soin",
    description:
      "Nos équipes pluridisciplinaires partagent des protocoles exigeants pour garantir la qualité et la sécurité des gestes.",
    icon: "shield",
  },
  {
    title: "Élan joyeux",
    description:
      "Nous cultivons un climat chaleureux et optimiste, convaincus que la joie est un moteur de résilience.",
    icon: "sparkles",
  },
];

const iconPaths: Record<string, string> = {
  heart: "M12 21.35 10.55 20.03C5.4 15.36 2 12.27 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09A6.15 6.15 0 0 1 16.5 3C19.58 3 22 5.42 22 8.5c0 3.77-3.4 6.86-8.55 11.54z",
  hands: "M2.25 12a2.25 2.25 0 0 1 3.13-.35l3.2 2.4a2.25 2.25 0 0 0 2.77-3.53L8.52 7.97A3.75 3.75 0 0 1 13.2 2.6l4.53 4.52a3.75 3.75 0 0 1-5.3 5.3l-.78-.77",
  shield: "M12 3 4.5 6v6c0 4.97 3.58 9.27 8.4 10 4.82-.73 8.4-5.03 8.4-10V6L12 3z",
  sparkles: "M12 2l1.76 5.24L19 9l-5.24 1.76L12 16l-1.76-5.24L5 9l5.24-1.76L12 2z M5 17l1.05 3.15L9 21l-2.95.85L5 25l-1.05-3.15L1 21l2.95-.85L5 17z M19 17l1.05 3.15L23 21l-2.95.85L19 25l-1.05-3.15L15 21l2.95-.85L19 17z",
};

const getIconPath = (key: string) => iconPaths[key] ?? iconPaths.heart;
</script>

<template>
  <section
    id="values"
    class="section-padding bg-white/70"
  >
    <div class="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 md:px-6">
      <div class="flex flex-col items-start gap-4" :ref="register">
        <span class="rounded-full bg-dusk px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          Nos valeurs
        </span>
        <h2 class="text-3xl font-bold text-slate md:text-[2.4rem]">
          Une palette d'attentions qui fait du bien aux personnes accompagnées comme aux équipes.
        </h2>
        <p class="max-w-2xl text-base text-slate/80 md:text-lg">
          Nous cultivons un style de présence chaleureux et professionnel, inspiré par le sourire et l'énergie des équipes Relax, pour offrir aux personnes accompagnées des moments de respiration.
        </p>
      </div>
      <div class="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <article
          v-for="value in values"
          :key="value.title"
          class="flex h-full flex-col gap-4 rounded-[var(--radius-md)] bg-white/90 p-6 shadow-[var(--shadow-card)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-hover)]"
          :ref="register"
        >
          <div class="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="h-6 w-6"
              aria-hidden="true"
            >
              <path :d="getIconPath(value.icon)" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-slate">{{ value.title }}</h3>
          <p class="text-sm leading-relaxed text-slate/75 md:text-base">{{ value.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
