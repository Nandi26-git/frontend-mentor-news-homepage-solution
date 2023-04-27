const openBtn = document.querySelector(".openBtn");
const closeBtn = document.querySelector(".closeBtn");
const menuContainer = document.querySelector(".menu");
const bodyDimmerAtMobileNav = document.querySelector(".body-dimmer");

openBtn.addEventListener("click", function applyMobileNav() {
    if (menuContainer.classList.contains("hideMobileNav")) {
        menuContainer.classList.remove("hideMobileNav");
    };
    menuContainer.classList.add("showMobileNav");
    bodyDimmerAtMobileNav.classList.add("apply-body-dimmer");

})

openBtn.addEventListener("click", closeBtnPositioner)

closeBtn.addEventListener("click", () => {
    if (menuContainer.classList.contains("showMobileNav")) {
        menuContainer.classList.remove("showMobileNav")
    };
    menuContainer.classList.add("hideMobileNav");
    bodyDimmerAtMobileNav.classList.remove("apply-body-dimmer");
    openBtn.style.display = "flex";
})

window.addEventListener("resize", () => {
    if (window.innerWidth > 800 && menuContainer.classList.contains("showMobileNav")) {
        menuContainer.style.transition = "0s"
        bodyDimmerAtMobileNav.style.transition = "0s"
    } else if (window.innerWidth <= 800 && menuContainer.classList.contains("showMobileNav")) {
        menuContainer.style.transition = "0.3s"
        bodyDimmerAtMobileNav.style.transition = "0.3s"
    }
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 800 && menuContainer.classList.contains("showMobileNav")) {
        openBtn.style.display = "none";
    }
    else if (window.innerWidth > 800 && menuContainer.classList.contains("hideMobileNav")) {
        openBtn.style.display = "none";
    }
    else if (window.innerWidth > 800) {
        openBtn.style.display = "none";
    }
    else {
        openBtn.style.display = "flex";
    }
});

window.addEventListener("resize", () => {
    if (window.innerWidth <= 800) {
        closeBtnPositioner()
    }
})

function closeBtnPositioner() {
    const windowWidth = document.body.clientWidth;
    const { y, right, width, height } = openBtn.getBoundingClientRect();
    const openBtnPositionFromRightSide = windowWidth - right;
    const closeBtnHeight = closeBtn.getBoundingClientRect().height;
    const closeBtnWidth = closeBtn.getBoundingClientRect().width;
    closeBtn.style.top = `${y - ((closeBtnHeight - height) / 2)}px`;
    closeBtn.style.right = `${openBtnPositionFromRightSide + ((width - closeBtnWidth) / 2)}px`
}



