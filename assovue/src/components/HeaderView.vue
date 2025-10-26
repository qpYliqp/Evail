<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

interface NavItem {
  id: string
  label: string
}

const navItems: NavItem[] = [
  { id: 'hero', label: 'Accueil' },
  { id: 'mission', label: 'Notre mission' },
  { id: 'values', label: 'Valeurs' },
  { id: 'team', label: 'Équipe' },
  { id: 'actions', label: 'Actions' },
  { id: 'travels', label: 'Voyages' },
]

const isMenuOpen = ref(false)
const isScrolled = ref(false)
const activeSection = ref('hero')

const updateActiveSection = () => {
  const offsets = navItems
    .map((item) => {
      const element = document.getElementById(item.id)
      if (!element) return { id: item.id, top: Number.POSITIVE_INFINITY }
      const rect = element.getBoundingClientRect()
      return { id: item.id, top: Math.abs(rect.top) }
    })
    .sort((a, b) => a.top - b.top)

  activeSection.value = offsets[0]?.id ?? 'hero'
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 24
  updateActiveSection()
}

const closeMenu = () => {
  isMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header class="sticky top-0 z-50" :class="{ 'shadow-sm': isScrolled }">
    <div
      :class="[
        'border-b transition-colors duration-300 backdrop-blur-md',
        isScrolled ? 'bg-white/90 border-black/5' : 'bg-white/70 border-transparent'
      ]"
    >
      <div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#hero"
          class="flex items-center gap-3 rounded-full px-2 py-1 text-sm font-semibold text-primary transition-colors duration-200"
        >
          <img
            src="/images/logos/red_evail_logo.png"
            alt="Evail Humanitaire"
            class="h-10 w-10 rounded-full border border-white/70 object-contain shadow-sm"
            loading="lazy"
          />
          <span class="hidden sm:inline text-fluid">Diffuseur de solidarité</span>
        </a>

        <nav class="hidden items-center gap-6 text-sm font-semibold text-gray-700 md:flex">
          <a
            v-for="item in navItems"
            :key="item.id"
            :href="`#${item.id}`"
            class="relative pb-1 transition-colors duration-200"
            :class="activeSection === item.id ? 'text-primary' : 'hover:text-primary'"
            :aria-current="activeSection === item.id ? 'page' : undefined"
          >
            <span class="relative">
              {{ item.label }}
              <span
                class="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 bg-primary transition-transform duration-200"
                :class="{ 'scale-x-100': activeSection === item.id }"
              ></span>
            </span>
          </a>
        </nav>

        <div class="flex items-center gap-3">
          <a href="#support" class="btn-primary hidden text-sm md:inline-flex">Nous soutenir</a>
          <button
            type="button"
            class="inline-flex items-center justify-center rounded-full border border-primary/10 bg-white/60 p-2 text-primary transition-colors duration-200 md:hidden"
            :aria-expanded="isMenuOpen"
            aria-controls="mobile-navigation"
            @click="isMenuOpen = !isMenuOpen"
          >
            <span class="sr-only">Ouvrir le menu</span>
            <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 6l12 12M6 18L18 6" />
            </svg>
          </button>
        </div>
      </div>

      <transition name="fade">
        <nav
          v-if="isMenuOpen"
          id="mobile-navigation"
          class="mx-4 mb-4 flex flex-col gap-3 rounded-2xl border border-white/60 bg-white/90 p-4 text-base font-semibold text-gray-800 shadow-soft md:hidden"
          @keydown.esc.prevent.stop="closeMenu"
        >
          <a
            v-for="item in navItems"
            :key="`mobile-${item.id}`"
            :href="`#${item.id}`"
            class="rounded-xl px-3 py-2 transition duration-200"
            :class="activeSection === item.id ? 'bg-primary/10 text-primary' : 'hover:bg-primary/5 hover:text-primary'"
            @click="closeMenu"
          >
            {{ item.label }}
          </a>
          <a
            href="#support"
            class="btn-primary justify-center text-center"
            @click="closeMenu"
          >
            Nous soutenir
          </a>
        </nav>
      </transition>
    </div>
  </header>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>
