document.addEventListener('DOMContentLoaded', () => {
    // 1. Header-ის გამოჩენა
    setTimeout(() => {
        document.querySelector('header').classList.add('active');
    }, 200);

    // 2. Parallax ეფექტი
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const bg = document.querySelector('.parallax-bg');
        bg.style.transform = `translateY(${scrolled * 0.3}px)`;
    });

    // 3. სიის ელემენტების ტალღისებური გამოჩენა
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const items = entry.target.querySelectorAll('.menu-list li');
                items.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('show');
                    }, index * 50);
                });
            }
        });
    }, observerOptions);

    document.querySelectorAll('.menu-card').forEach(card => {
        observer.observe(card);
    });
});