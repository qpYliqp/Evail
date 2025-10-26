<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Travel } from '@/model/Travel'

const travelsList = ref<Travel[]>([])
const selectedTravel = ref(0)

onMounted(() => {
  const casamanceDescription = [
    'Notre première mission a été accueillie par les habitants des villages en collaboration avec l’association AMP, le consulat général et les autorités du Sénégal.',
    'Nous avons mené des actions de prévention sur le diabète, l’hypertension, les IST, les douleurs articulaires et accompagné les soins liés à ces pathologies.',
    'Face à la dureté du quotidien rencontrée, notre équipe est restée soudée et déterminée à renforcer la prise en charge locale.',
  ]

  const travels = [
    new Travel(
      'Casamance',
      '2024',
      casamanceDescription,
      'Du Casamance aux parcelles de Dakar',
      [
        '/images/travels/casamance/casamance-1.jpg',
        '/images/travels/casamance/casamance-2.jpg',
        '/images/travels/casamance/casamance-3.jpg',
      ]
    ),
    new Travel('Sénégal', '2025', ['Ce voyage est à venir'], 'Voyage au Sénégal', []),
    new Travel('Togo', '2025', ['Ce voyage est à venir'], 'Voyage au Togo', []),
    new Travel('Cameroun', '2025', ['Ce voyage est à venir'], 'Voyage au Cameroun', []),
    new Travel('Inde', '2025', ['Ce voyage est à venir'], 'Voyage en Inde', []),
  ]

  travelsList.value = travels
  selectedTravel.value = 0
})

const selectTravel = (index: number) => {
  selectedTravel.value = index
}
</script>

<template>
  <section id="travels" class="bg-white">
    <div class="mx-auto flex max-w-6xl flex-col gap-10 px-4 section-spacing sm:px-6 lg:px-8">
      <div class="max-w-3xl" data-animate="reveal">
        <span class="badge-pill">Nos voyages humanitaires</span>
        <h2 class="mt-4 font-heading heading-2 text-gray-900">
          L’aide qui voyage au rythme des besoins
        </h2>
        <p class="mt-4 text-fluid text-gray-700">
          Chaque déplacement est imaginé comme une immersion au cœur des territoires. Nous y apportons des soins, partageons
          des savoir-faire et renforçons les réseaux locaux pour un impact durable.
        </p>
      </div>

      <div class="flex flex-col gap-6" data-animate="reveal">
        <div class="relative">
          <div class="hidden h-0.5 w-full rounded-full bg-primary/10 md:block"></div>
          <div class="flex gap-3 overflow-x-auto pb-4 md:justify-between md:overflow-visible">
            <button
              v-for="(travel, index) in travelsList"
              :key="travel.getDestination()"
              type="button"
              class="min-w-[160px] rounded-full border px-4 py-2 text-sm font-semibold transition duration-200"
              :class="
                index === selectedTravel
                  ? 'border-primary bg-primary text-white shadow-sm'
                  : 'border-primary/20 bg-white text-gray-700 hover:border-primary hover:text-primary'
              "
              :aria-pressed="index === selectedTravel"
              @click="selectTravel(index)"
            >
              <span class="block text-xs uppercase tracking-wide">{{ travel.getStartDate() }}</span>
              <span class="block text-base">{{ travel.getDestination() }}</span>
            </button>
          </div>
        </div>

        <div class="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
          <div class="card-surface space-y-4 p-8" data-animate="reveal">
            <span class="badge-pill">{{ travelsList[selectedTravel]?.getDestination() }}</span>
            <h3 class="font-heading heading-3 text-gray-900">
              {{ travelsList[selectedTravel]?.getTitle() }}
            </h3>
            <div class="space-y-4 text-fluid text-gray-700">
              <p
                v-for="(paragraph, idx) in travelsList[selectedTravel]?.getDescriptionParagraph()"
                :key="`${travelsList[selectedTravel]?.getDestination()}-${idx}`"
              >
                {{ paragraph }}
              </p>
            </div>
          </div>

          <div data-animate="reveal">
            <div v-if="travelsList[selectedTravel]?.getImagesPath().length" class="flex gap-4 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible">
              <div
                v-for="(image, idx) in travelsList[selectedTravel]?.getImagesPath()"
                :key="`${image}-${idx}`"
                class="relative min-w-[220px] overflow-hidden rounded-[1.25rem] shadow-soft sm:min-w-0"
              >
                <picture>
                  <source :srcset="`${image} 640w, ${image} 1280w`" sizes="(min-width: 768px) 30vw, 80vw" />
                  <img :src="image" :alt="`Scène du voyage en ${travelsList[selectedTravel]?.getDestination()}`" class="h-full w-full object-cover" loading="lazy" />
                </picture>
              </div>
            </div>
            <div v-else class="rounded-3xl border border-dashed border-primary/30 bg-white/80 p-8 text-center text-sm text-gray-600">
              Les images de cette mission seront bientôt disponibles.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
