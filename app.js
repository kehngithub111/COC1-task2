document.addEventListener('DOMContentLoaded', () => {
    const footerContent = document.getElementById("footer");
    const date = new Date().getFullYear();

    footerContent.textContent = `All Rights Reserved ${date}`;
});