document.addEventListener('DOMContentLoaded', function() {
    // Variables
    const header = document.getElementById('header');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileNavClose = document.querySelector('.mobile-nav-close');
    const backToTop = document.querySelector('.back-to-top');
    const serviceCategories = document.querySelectorAll('.service-category');
    const serviceCards = document.querySelectorAll('.service-card');
    const contactForm = document.getElementById('contactForm');
    const navLinks = document.querySelectorAll('.main-nav a, .mobile-nav a');
    const statNumbers = document.querySelectorAll('.stat-number');

    // Scroll Event
    window.addEventListener('scroll', function() {
        // Header Scroll
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Back to Top Button
        if (window.scrollY > 700) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }

        // Animate Stats on Scroll
        const statsSection = document.querySelector('.stats-section');
        if (statsSection) {
            const sectionPos = statsSection.getBoundingClientRect().top;
            const screenPos = window.innerHeight / 1.3;
            
            if (sectionPos < screenPos) {
                animateStats();
            }
        }
    });

    // Mobile Navigation
    mobileMenuBtn.addEventListener('click', function() {
        mobileNav.classList.add('active');
    });

    mobileNavClose.addEventListener('click', function() {
        mobileNav.classList.remove('active');
    });

    // Close mobile nav when clicking outside
    document.addEventListener('click', function(e) {
        if (!mobileNav.contains(e.target) && !mobileMenuBtn.contains(e.target) && mobileNav.classList.contains('active')) {
            mobileNav.classList.remove('active');
        }
    });

    // Smooth Scrolling for Navigation Links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Close mobile nav if open
            if (mobileNav.classList.contains('active')) {
                mobileNav.classList.remove('active');
            }
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Back to Top Button Click
    backToTop.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Service Filtering
    serviceCategories.forEach(category => {
        category.addEventListener('click', function() {
            // Remove active class from all categories
            serviceCategories.forEach(cat => cat.classList.remove('active'));
            
            // Add active class to clicked category
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-category');
            
            // Filter service cards
            serviceCards.forEach(card => {
                const serviceType = card.getAttribute('data-service');
                
                if (filterValue === 'all' || filterValue === serviceType) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
/* Testimonials Section */
.testimonials {
    padding: 100px 0;
    background-color: #f9f9f9;
}

.testimonials-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
}

.testimonial-card {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: var(--box-shadow);
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.testimonial-image {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 20px;
}

.testimonial-rating {
    color: #ffc107;
    margin-bottom: 15px;
}

.testimonial-content p {
    font-style: italic;
    margin-bottom: 15px;
    text-align: center;
}

.testimonial-content h4 {
    font-size: 18px;
    margin-bottom: 5px;
    text-align: center;
}

.testimonial-location {
    color: #777;
    font-size: 14px;
    text-align: center;
}