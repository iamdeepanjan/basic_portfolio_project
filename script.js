document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelector(".nav-links");
    
    document.querySelector(".hamburger").addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    document.getElementById("download-btn").addEventListener("click", function() {
        const link = document.createElement("a");
        link.href = "Deepanjan CV.pdf";  // Path to your CV
        link.download = "Deepanjan_Datta_CV.pdf";  // Set the download filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });

    document.getElementById("hire-me").addEventListener("click", function() {
        window.open("https://www.linkedin.com/in/deepanjan-datta-68843323b/", "_blank");
    });

    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission
        alert("Thank you! Your message has been sent.");
        form.reset(); // Reset form fields
    });
});