document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".fade-up");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target); // animate once
        }
      });
    },
    {
      threshold: 0.2, // trigger when 20% visible
    }
  );

  sections.forEach((section) => observer.observe(section));
});

