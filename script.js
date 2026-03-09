document.addEventListener('DOMContentLoaded', () => {
<<<<<<< HEAD
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');

    // Toggle Mobile Menu
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            
            // Basic responsive toggle logic
            if (navLinks.style.display === 'flex') {
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '80px';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.backgroundColor = '#fff';
                navLinks.style.padding = '20px';
                navLinks.style.boxShadow = '0 5px 10px rgba(0,0,0,0.1)';
                
                const items = navLinks.querySelectorAll('li');
                items.forEach(item => {
                    item.style.margin = '10px 0';
                });
            }
        });
    }

    // Scroll reveal or other animations could go here
    console.log('Restaurant Menu Page Loaded Successfully');
=======
    // Add a simple fade-in effect for food cards
    const cards = document.querySelectorAll('.food-card');
    
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(card);
    });

    console.log('Gourmet Haven Menu Loaded Successfully!');
>>>>>>> Helitha1
});
