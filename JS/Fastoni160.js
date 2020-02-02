const kalite_container = document.querySelector("main>section:nth-of-type(2)>div.cell_container");
const kalite_cells = document.querySelectorAll(
  "main>section:nth-of-type(2)>div.cell_container>div.cell"
);
const kalite_cells_paragraphs = document.querySelectorAll(
  "main>section:nth-of-type(2)>div.cell_container>div>p"
);
const kalite_last_paragraph = document.querySelector(
  "main > section:nth-of-type(2) > div > div:last-of-type > p"
);

const resizer = () => {
  let s = kalite_cells.length;
  for (let i = 0; i < s; i++) {
    kalite_cells[i].style.height = 400 + i * 200 + "px";
    kalite_cells[i].style.zIndex = s - i;
  }
};
resizer();

