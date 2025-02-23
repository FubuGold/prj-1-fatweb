// Author: ChatGPT
document.addEventListener("DOMContentLoaded", function () {
    fetch("layout/navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-placeholder").innerHTML = data;
        })
        .catch(error => console.error("Error loading header:", error));
});
