document.addEventListener('DOMContentLoaded', () => {
    const footerContent = document.getElementById("footer");
    const date = new Date().getFullYear();

    footerContent.textContent = `All Rights Reserved ${date}`;


    const navButton = document.getElementById('navButton');
    const navContainer = document.getElementById('navContainer');
    let navButtonClick = 0;

    navButton.addEventListener('click', () => {
        navButtonClick++;
        console.log(navButtonClick);

        if (navButtonClick % 2 === 1) {
            navContainer.classList.add('navActive');
            document.body.style.overflow = 'hidden';
        }else {
            navContainer.classList.remove('navActive');
            document.body.style.overflow = 'auto';
        }
    });
});