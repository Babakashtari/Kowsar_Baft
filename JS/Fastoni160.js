const kalite_container = document.querySelector("main>section:nth-of-type(2)>div.cell_container");
const kalite_cells = document.querySelectorAll("main>section:nth-of-type(2)>div.cell_container>div");
const kalite_cells_paragraphs = document.querySelectorAll("main>section:nth-of-type(2)>div.cell_container>div>p");
const kalite_last_paragraph = document.querySelector("main > section:nth-of-type(2) > div > div:last-of-type > p");

const kalite_cells_click_event = () => {
    for (let i = 0; i < kalite_cells.length; i++) {
        kalite_cells[i].addEventListener("click", event => {
            if (event.target.classList.contains("modal_opener")) {
                return;
            } else {
                kalite_cells[i].style.bottom = "100%";
                kalite_cells[i].style.transitionDelay = "0ms";
                setTimeout(() => {
                    kalite_cells_paragraphs[i].style.display = "none";
                }, 1000);
                if (i - 1 >= 0) {
                    kalite_cells_paragraphs[i - 1].style.display = "block";
                } else {
                    for (let s = 0; s < kalite_cells_paragraphs.length; s++) {
                        kalite_cells[s].style.bottom = "0";
                        kalite_cells[s].style.transitionDelay = (s + 1) * 100 + "ms";
                    }
                    kalite_last_paragraph.style.display = "block";
                }
            }
        });
    }
};
kalite_cells_click_event();
