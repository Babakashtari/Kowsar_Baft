const kaliteContainer = document.querySelector("main > section:first-of-type#kalite_container > div#cell_container");
const kaliteImage = document.querySelector('main>section:first-of-type#kalite_container> div#cell_container>img');

kaliteContainer.addEventListener('click', (e)=>{
    console.log(e.target);
})
