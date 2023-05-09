// const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav div a");
const toggleMenu = () => document.body.classList.toggle("open");
const resetLinks = () => {
  navLinks.forEach((link) => link.classList.remove("active"));
};

const handleScroll = () => {
  const { pageYOffset } = window;

  sections.forEach((section) => {
    const { id, offsetTop, clientHeight } = section;
    const offset = offsetTop - 1;

    if (pageYOffset >= offset && pageYOffset < offset + clientHeight) {
      resetLinks();
      navLinks.forEach((link) => {
        if (link.dataset.scroll === id) {
          link.classList.add("active");
        }
      });
    }
  });
};

document.addEventListener("scroll", handleScroll);

gsap.registerPlugin(ScrollTrigger);

const sections = gsap.utils.toArray(".panel"),
  container = document.querySelector(".container");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    end: () => "+=" + container.offsetWidth,
  },
});
