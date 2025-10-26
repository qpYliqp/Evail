import { onBeforeUnmount, onMounted } from "vue";

export function useScrollReveal() {
  let observer: IntersectionObserver | null = null;
  const pending = new Set<Element>();

  const setupObserver = () => {
    if (observer) {
      return;
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer?.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    pending.forEach((el) => observer?.observe(el));
    pending.clear();
  };

  const register = (el: Element | null) => {
    if (!el) return;
    el.classList.add("reveal");

    if (observer) {
      observer.observe(el);
    } else {
      pending.add(el);
    }
  };

  onMounted(() => {
    setupObserver();
  });

  onBeforeUnmount(() => {
    observer?.disconnect();
    observer = null;
    pending.clear();
  });

  return { register };
}
