<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { StaffMember } from '@/model/StaffMember'

const staffMembers = ref<StaffMember[]>([])

onMounted(() => {
  const anne = new StaffMember(
    'Annie',
    '/images/staff/anne.png',
    "Fondatrice et présidente de l'association, ancienne bio-esthéticienne devenue agente hospitalière.",
    "L'humain est au cœur de nos professions, nous restons des soignants avant tout."
  )

  const yaye = new StaffMember(
    'Yaye',
    '/images/staff/yaye.png',
    "Co-fondatrice et vice-présidente, certifiée en pratique Snoezelen et professionnelle de santé dans le public et le privé.",
    'Mon humanité est liée à la vôtre : partageons le bonheur.'
  )

  const minette = new StaffMember(
    'Minette',
    '/images/staff/minette.png',
    "Co-fondatrice et trésorière, architecte d’intérieur et professionnelle de santé en soins palliatifs.",
    "L'amour est un guide dans ma vie, une étincelle douce et accomplie."
  )

  const martine = new StaffMember(
    'Martine Gomis',
    '/images/staff/martine.png',
    "Secrétaire de l'association, assistante spécialisée dans le handicap et professionnelle de santé engagée.",
    'Ensemble, vivons des moments uniques pour offrir le meilleur à chacun.'
  )

  staffMembers.value = [anne, yaye, minette, martine]
})
</script>

<template>
  <section id="team" class="bg-white">
    <div class="mx-auto flex max-w-6xl flex-col gap-12 px-4 section-spacing sm:px-6 lg:px-8">
      <div class="max-w-3xl" data-animate="reveal">
        <span class="badge-pill">Une équipe pluri-professionnelle</span>
        <h2 class="mt-4 font-heading heading-2 text-gray-900">
          Des soignantes engagées, des parcours complémentaires
        </h2>
        <p class="mt-4 text-fluid text-gray-700">
          Chaque membre d’EVAIL apporte son expertise, son empathie et sa créativité. Ensemble, nous construisons des missions
          chaleureuses, où les personnes accompagnées se sentent en confiance.
        </p>
      </div>

      <div
        class="flex gap-6 overflow-x-auto pb-6 sm:grid sm:grid-cols-2 sm:gap-8 sm:overflow-visible lg:grid-cols-4"
        data-animate="reveal"
      >
        <article
          v-for="member in staffMembers"
          :key="member.name"
          class="card-surface min-w-[280px] flex-1 rounded-[1.5rem] bg-white/90 p-6 backdrop-blur-sm sm:min-w-0"
        >
          <div class="flex flex-col items-center text-center">
            <div class="relative h-32 w-32 overflow-hidden rounded-full border-4 border-white shadow-soft">
              <img
                :src="member.imagePath"
                :alt="`Portrait de ${member.name}`"
                class="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <h3 class="mt-6 font-heading text-xl text-gray-900">{{ member.name }}</h3>
            <p class="mt-4 text-sm text-gray-600">{{ member.description }}</p>
            <p class="mt-6 rounded-2xl border border-primary/10 bg-primary/5 p-4 text-sm italic text-gray-700">
              &ldquo;{{ member.citation }}&rdquo;
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
