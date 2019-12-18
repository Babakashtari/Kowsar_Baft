const kaliteContainer = document.querySelector(
    "main > section:first-of-type#kalite_container > div#cell_container"
);
const kaliteImage = document.querySelector(
    "main>section:first-of-type#kalite_container> div#cell_container>img"
);
const kalite_cells = document.querySelectorAll(
    "main>section:first-of-type#kalite_container>div#cell_container>div"
);

// background gradients:
const kalite_cells_gradients = [
    "radial-gradient(circle, rgb(50, 36, 27) 10px, transparent 10px)",
    "radial-gradient(circle,rgba(255, 255, 255, 0.8) 10px,transparent 10px)",
    "radial-gradient(circle,rgb(199, 123, 101) 10px,transparent 10px)",
    "radial-gradient(circle,rgb(199, 123, 101) 10px,transparent 10px)",
    "radial-gradient(circle,rgba(255, 255, 255, 0.5) 10px,transparent 10px)",
    "radial-gradient(circle,rgba(255, 255, 255, 0.5) 10px,transparent 10px)",
    "radial-gradient(circle,rgba(255, 255, 255, 0.5) 10px,transparent 10px)",
    "radial-gradient(circle,rgba(255, 255, 255, 0.6) 10px,transparent 10px)",
    "radial-gradient(circle,rgba(255, 255, 255, 0.5) 10px,transparent 10px)",
    "radial-gradient(circle,rgba(255, 255, 255, 0.7) 10px,transparent 10px)",
    "radial-gradient(circle,rgba(255, 255, 255, 0.4) 10px,transparent 10px)"
];
// background colors:
const kalite_cells_background_colors = [
    "rgb(205, 218, 96)",
    "rgb(210, 77, 76)",
    "rgb(84, 0, 0)",
    "rgb(34, 0, 0)",
    "rgb(128, 0, 128)",
    "rgb(0, 0, 40)",
    "rgb(35, 0, 44)",
    "rgb(2, 19, 13)",
    "rgb(74, 59, 16)",
    "rgb(48, 64, 47)",
    "rgb(4, 12, 3)"
];

(() => {
    for (let i = 1; i < kalite_cells.length - 1; i++) {
        kalite_cells[i].style.backgroundColor =
            kalite_cells_background_colors[i - 1];
        kalite_cells[i].style.backgroundImage = kalite_cells_gradients[i - 1];
        for (let s = 1; s < kalite_cells.length; s++) {
            kalite_cells[s].style.bottom = "100%";
        }
    }
})();

let current = 0;
kaliteContainer.addEventListener("click", e => {
    for (let i = 0; i < kalite_cells.length; i++) {
        if (e.target === kalite_cells[i]) {
            if (i < kalite_cells.length - 1) {
                current = i + 1;
                kalite_cells[i].style.bottom = "100%";
            } else {
                current = 0;
                kalite_cells[kalite_cells.length - 1].style.bottom = "100%";
            }
            console.log(kalite_cells[current]);
            setTimeout(() => {
                kalite_cells[current].style.bottom = "0";
            }, 1);
        } else {
            kalite_cells[i].style.bottom = "100%";
        }
    }
});
