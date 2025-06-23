const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = "fadeIn 1s forwards";
    }
  });
}, {
  threshold: 0.3
});

sections.forEach(section => {
  section.style.opacity = 0;
  observer.observe(section);
});
