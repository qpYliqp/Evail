<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { Travel } from "@/model/Travel";
import { useScrollReveal } from "@/composables/useScrollReveal";

const travelsList = ref<Travel[]>([]);
const selectedTravel = ref(0);
const { register } = useScrollReveal();

const impactIndicators = [
  { label: "Consultations réalisées", value: "1 336" },
  { label: "Médicaments collectés", value: "250" },
  { label: "Ateliers de prévention", value: "42" },
];

const initTravel = () => {
  const casamanceDescription = [
    "Accueillies par les habitants des villages en Casamance, nous avons travaillé main dans la main avec l'association AMP, le consulat général et les autorités locales.",
    "Nos équipes ont mené des actions de prévention autour du diabète, de l'hypertension, du cholestérol, des IST et des pathologies ostéo-articulaires.",
    "Les consultations et pansements réalisés ont renforcé les capacités locales et resserré les liens avec les familles accompagnées.",
  ];

  const casamanceImages = [
    "/images/travels/casamance/casamance-1.jpg",
    "/images/travels/casamance/casamance-2.jpg",
    "/images/travels/casamance/casamance-3.jpg",
  ];

  const upcomingMessage = "Ce voyage est en préparation : nous co-construisons les actions avec les partenaires locaux.";

  travelsList.value = [
    new Travel("Casamance", "2024", casamanceDescription, "Du Casamance aux parcelles de Dakar", casamanceImages),
    new Travel("Sénégal", "2025", [upcomingMessage], "Voyage au Sénégal", []),
    new Travel("Togo", "2025", [upcomingMessage], "Voyage au Togo", []),
    new Travel("Cameroun", "2025", [upcomingMessage], "Voyage au Cameroun", []),
    new Travel("Inde", "2026", [upcomingMessage], "Voyage en Inde", []),
  ];

  selectedTravel.value = 0;
};

onMounted(() => {
  initTravel();
});

const activeTravel = computed(() => travelsList.value[selectedTravel.value]);

const hasImages = computed(() => (activeTravel.value?.getImagesPath()?.length ?? 0) > 0);

const selectTravel = (index: number) => {
  selectedTravel.value = index;
};
</script>

<template>
  <section
    id="actions"
    class="section-padding bg-dusk/60"
  >
    <div class="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 md:px-6">
      <div class="flex flex-col items-start gap-4" :ref="register">
        <span class="rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          Nos actions sur le terrain
        </span>
        <h2 class="text-3xl font-bold text-slate md:text-[2.4rem]">
          Des missions pensées avec les communautés locales pour un impact durable.
        </h2>
        <p class="max-w-3xl text-base text-slate/80 md:text-lg">
          Chaque voyage est construit comme une expérience humaine immersive, avec un fil conducteur : prévenir, soigner et transmettre les bons gestes pour que la santé reste entre les mains des habitants.
        </p>
      </div>

      <div class="flex flex-col gap-6" :ref="register">
        <div class="flex items-center gap-4 overflow-x-auto pb-2">
          <button
            v-for="(travel, index) in travelsList"
            :key="travel.getDestination()"
            type="button"
            class="flex min-w-[9rem] flex-col items-start gap-2 rounded-[var(--radius-md)] border border-primary/15 bg-white/80 px-4 py-3 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[var(--shadow-card)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            :class="index === selectedTravel ? 'shadow-[var(--shadow-card)]' : ''"
            :aria-pressed="index === selectedTravel"
            @click="selectTravel(index)"
          >
            <span class="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">{{ travel.getStartDate() }}</span>
            <span class="text-sm font-semibold text-slate">{{ travel.getDestination() }}</span>
          </button>
        </div>

        <div class="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <div class="flex h-full flex-col gap-5 rounded-[var(--radius-lg)] bg-white/95 p-6 shadow-[var(--shadow-card)]">
            <h3 class="text-2xl font-semibold text-primary">{{ activeTravel?.getTitle() }}</h3>
            <div class="space-y-4 text-sm leading-relaxed text-slate/80 md:text-base">
              <p
                v-for="(paragraph, idx) in activeTravel?.getDescriptionParagraph()"
                :key="idx"
              >
                {{ paragraph }}
              </p>
            </div>
            <div class="grid gap-4 rounded-[var(--radius-md)] bg-dusk/70 p-4 sm:grid-cols-3">
              <div
                v-for="indicator in impactIndicators"
                :key="indicator.label"
                class="flex flex-col gap-1"
              >
                <span class="text-xs font-medium uppercase tracking-[0.18em] text-primary/70">{{ indicator.label }}</span>
                <span class="text-xl font-heading font-semibold text-primary">{{ indicator.value }}</span>
              </div>
            </div>
          </div>
          <div
            class="flex h-full flex-col gap-4"
          >
            <div
              v-if="hasImages"
              class="flex h-full flex-col gap-4"
            >
              <div class="relative h-60 w-full overflow-hidden rounded-[var(--radius-lg)] shadow-[var(--shadow-card)] sm:h-72">
                <img
                  :src="activeTravel?.getImagesPath()[0]"
                  :alt="`Scène de mission en ${activeTravel?.getDestination()}`"
                  class="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div
                  v-for="(img, idx) in activeTravel?.getImagesPath().slice(1)"
                  :key="img"
                  class="h-32 overflow-hidden rounded-[var(--radius-md)] shadow-[var(--shadow-card)]"
                >
                  <img
                    :src="img"
                    :alt="`Moment ${idx + 2} de la mission en ${activeTravel?.getDestination()}`"
                    class="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div
              v-else
              class="flex h-full items-center justify-center rounded-[var(--radius-lg)] border border-dashed border-primary/30 bg-white/70 p-6 text-center text-sm text-slate/70"
            >
              Les images de cette mission seront partagées très prochainement.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
