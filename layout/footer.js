// Author: ChatGPT
document.addEventListener("DOMContentLoaded", function () {
    fetch("layout/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-placeholder").innerHTML = data;
        })
        .catch(error => console.error("Error loading header:", error));
});
