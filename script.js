const themeToggle = document.getElementById("theme-toggle");

// Check previously selected theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeToggle.textContent = "☀";
}


// Toggle dark/light mode
themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        localStorage.setItem("theme", "dark");
        themeToggle.textContent = "☀";

    } else {

        localStorage.setItem("theme", "light");
        themeToggle.textContent = "☾";

    }

});
