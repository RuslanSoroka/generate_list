(function () {
    const $container = document.querySelector(".container");
    const $nav = document.querySelector("nav");
    let links = [
        "Home",
        "Socials",
        ["facebook", "instagram", "twitter"],
        "About",
    ];

    const renderList = (arr, ulTag, parentTag) => {
        arr.forEach((item) => {
            const $li = document.createElement("li");
            if (Array.isArray(item)) {
                generateList(item, "internal-list", ulTag);
            } else {
                $li.innerHTML = `<a href="#">${item}</a>`;
                ulTag.appendChild($li);
            }
        });
        parentTag.appendChild(ulTag);
    };

    const generateList = (arr, className, parentTag) => {
        const $ul = document.createElement("ul");
        $ul.className = className;
        renderList(arr, $ul, parentTag);
    };

    addEventListener("load", () => {
        generateList(links, "external-list", $nav);
        $container.classList.add("active");
        addEventListener("click", (e) => {
            const clickedElement = e.target;

            if (clickedElement.parentElement.tagName === "LI")
                console.log(clickedElement.textContent);
        });
    });
})();
