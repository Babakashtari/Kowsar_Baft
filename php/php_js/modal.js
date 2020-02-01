//modal box:
const modalOpaqueBox = document.querySelector("body>main>div.modal");
const modalBox = modalOpaqueBox.querySelector("div:nth-child(2)");
const modalCloseBox = modalBox.querySelector("span");

// quantity calculation:
const measure = () => {
    const metters = document.getElementById("measurement");
    const taghe = document.getElementsByName("orderQuantityTaghe")[0].value;
    const adl = document.getElementsByName("OrderQuantityAdl")[0].value;
    switch (taghe * 40 + adl * 320) {
        case 0:
            metters.innerHTML = "... متر";
            break;
        default:
            metters.innerHTML = taghe * 40 + adl * 320 + " متر ";
            break;
    }
};
const charkhouneh_modal_opener = event => {
    modalBox.style.backgroundImage = event.currentTarget.style.backgroundImage;
    document.getElementById("colorCode").innerHTML = event.currentTarget
        .querySelector("div>p>a")
        .innerHTML.replace("افزودن به سبد خرید", "");
    modalOpaqueBox.classList.remove("displayNone");
    setTimeout(() => {
        modalOpaqueBox.classList.remove("zeroOpacity");
    }, 20);
};
const Teregal_modal_opener = event => {
    modalBox.style.backgroundColor = event.currentTarget.style.backgroundColor;
    document.getElementById("colorCode").innerHTML = event.currentTarget
        .querySelector("div>p>a")
        .innerHTML.replace("افزودن به سبد خرید", "");
    modalOpaqueBox.classList.remove("displayNone");
    setTimeout(() => {
        modalOpaqueBox.classList.remove("zeroOpacity");
    }, 20);
};

const fastoni160_modal_opener = event => {
    if (event.target.classList.contains("modal_opener")) {
        modalBox.style.backgroundColor = event.currentTarget.style.backgroundColor;
        document.getElementById("colorCode").innerHTML = event.currentTarget
            .querySelector("p")
            .innerHTML.replace("افزودن به سبد خرید", "");
        modalOpaqueBox.classList.remove("displayNone");
        setTimeout(() => {
            modalOpaqueBox.classList.remove("zeroOpacity");
        }, 20);
    }
};

(() => {
    // modal closing:
    modalCloseBox.addEventListener("click", () => {
        modalOpaqueBox.classList.add("zeroOpacity");
        modalOpaqueBox.addEventListener("transitionend", () => {
            if (modalOpaqueBox.classList.contains("zeroOpacity")) {
                modalOpaqueBox.classList.add("displayNone");
            }
        });
    });
})();
