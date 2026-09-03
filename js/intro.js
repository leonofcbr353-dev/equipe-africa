const intro = document.getElementById("intro");
const site = document.getElementById("site");
const music = document.getElementById("backgroundMusic");

if (intro) {
    intro.remove();
}

if (site) {
    site.classList.add("is-visible");
}

if (music) {
    music.volume = 0.35;

    const startMusic = () => {
        music.play().catch(() => {});
    };

    startMusic();

    document.addEventListener("click", startMusic, { once: true });
}