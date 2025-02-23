// Author: ChatGPT
document.addEventListener("DOMContentLoaded", function () {
    fetch("/components/customer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("customer-card").innerHTML = data;
        })
        .catch(error => console.error("Error loading header:", error));
});
