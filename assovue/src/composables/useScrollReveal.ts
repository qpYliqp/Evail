import { onMounted, onBeforeUnmount } from 'vue'

const selectors = '[data-animate="reveal"]'

export function useScrollReveal() {
  let observer: IntersectionObserver | null = null
  let mutationObserver: MutationObserver | null = null

  const observeElements = () => {
    if (!observer) return
    const nodes = document.querySelectorAll<HTMLElement>(selectors)
    nodes.forEach((node) => observer?.observe(node))
  }

  const handleIntersect: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observer?.unobserve(entry.target)
      }
    })
  }

  onMounted(() => {
    observer = new IntersectionObserver(handleIntersect, {
      rootMargin: '0px 0px -15% 0px',
      threshold: 0.2,
    })

    observeElements()

    mutationObserver = new MutationObserver(() => {
      observeElements()
    })

    mutationObserver.observe(document.body, {
      subtree: true,
      childList: true,
    })
  })

  onBeforeUnmount(() => {
    mutationObserver?.disconnect()
    mutationObserver = null
    observer?.disconnect()
    observer = null
  })
}
