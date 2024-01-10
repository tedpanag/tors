const torsLogo = document.getElementById("tors-logo");

const links = document.querySelector('.links');

const footer = document.querySelector("footer");

torsLogo.addEventListener('animationend', () => {
    links.classList.add("visible");
    footer.classList.add("visible");
});