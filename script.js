document.addEventListener('DOMContentLoaded', () => {
    const progressBars = document.querySelectorAll('.skill-progress');

    const observerOptions = {
        threshold: 0.2 // Trigger when 20% of the section is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const width = progressBar.getAttribute('data-progress');
                progressBar.style.width = width;
                // Once animated, no need to observe anymore
                observer.unobserve(progressBar);
            }
        });
    }, observerOptions);

    progressBars.forEach(bar => {
        observer.observe(bar);
    });
});