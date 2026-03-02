document.addEventListener('DOMContentLoaded', () => {
    // 1. სქროლვის პროგრესის ხაზი
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        document.querySelector(".scroll-progress").style.width = scrolled + "%";
    });

    // 2. Parallax ფონი
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        document.querySelector('.parallax-bg').style.transform = `translateY(${scrolled * 0.15}px)`;
    });

    // 3. Scroll Reveal (ელემენტების გამოჩენა სქროლვისას)
    const reveal = () => {
        const reveals = document.querySelectorAll('.reveal');
        reveals.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', reveal);
    reveal(); // პირველივე ჩატვირთვაზე

    // 4. კერძების "ტალღისებური" გამოჩენა
    const cards = document.querySelectorAll('.menu-card');
    cards.forEach(card => {
        const listItems = card.querySelectorAll('li');
        listItems.forEach((li, index) => {
            li.style.transitionDelay = `${index * 50}ms`;
        });
    });
});