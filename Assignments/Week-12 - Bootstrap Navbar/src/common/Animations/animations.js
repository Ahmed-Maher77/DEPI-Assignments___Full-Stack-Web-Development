// Minimal IntersectionObserver helper to toggle visibility class
export function initAnimations() {
    const elements = document.querySelectorAll("[data-anim]");
    if (!elements.length) return;

    const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
        elements.forEach((el) => el.classList.add("is-visible"));
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(({ isIntersecting, target }) => {
                if (isIntersecting) {
                    target.classList.add("is-visible");
                    observer.unobserve(target);
                }
            });
        },
        { root: null, rootMargin: "0px 0px -10% 0px", threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));

    // Auto-stagger on containers
    document.querySelectorAll("[data-anim-stagger]").forEach((container) => {
        const baseDelay = parseInt(
            container.getAttribute("data-anim-stagger") || "120",
            10
        );
        const children = Array.from(container.children).filter(
            (ch) => ch.nodeType === 1
        );
        children.forEach((ch, idx) => {
            if (!ch.hasAttribute("data-anim")) {
                ch.setAttribute("data-anim", "slide-up");
            }
            if (!ch.hasAttribute("data-anim-delay")) {
                ch.setAttribute("data-anim-delay", String(baseDelay * idx));
            }
            observer.observe(ch);
        });
    });
}
