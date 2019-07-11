function pageHeader() {
    const header = document.querySelector(".header-container");
    window.addEventListener("scroll", function () {
        if (this.scrollY > 80) {
            header.classList.add("sticky")
        } else {
            header.classList.remove("sticky")
        }
    })

}

export {pageHeader};