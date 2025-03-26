function loadHTML(elementId, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => document.getElementById(elementId).innerHTML = data)
        .catch(error => console.error("Error loading " + file, error));
}

document.addEventListener("DOMContentLoaded", function() {
    loadHTML("header", "header.html");
});

    const pathName = window.location.pathname;
    const pageName = pathName.split("/").pop();

    
    setTimeout(() => {
        if (pageName === "index.html" && document.querySelector(".home")) {
            document.querySelector(".home").classList.add("active-link");
        }
        if (pageName === "about.html" && document.querySelector(".about")) {
            document.querySelector(".about").classList.add("active-link");
        }
        if (pageName === "contact.html" && document.querySelector(".contact")) {
            document.querySelector(".contact").classList.add("active-link");
        }
        if (pageName === "tutorial.html" && document.querySelector(".tutorial")) {
            document.querySelector(".tutorial").classList.add("active-link");
        }
    }, 100);

