
        document.addEventListener('DOMContentLoaded', () => {
            // --- Navbar Functionality ---
            const mobileMenu = document.getElementById('mobile-menu');
            const navbarLinks = document.getElementById('navbar-links');

            mobileMenu.addEventListener('click', () => {
                navbarLinks.classList.toggle('active');
                mobileMenu.classList.toggle('open'); // Toggle 'open' class for hamburger animation
                document.body.classList.toggle('no-scroll'); // Toggle no-scroll on body
            });

            // Close mobile menu when a link is clicked
            navbarLinks.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    if (navbarLinks.classList.contains('active')) {
                        navbarLinks.classList.remove('active');
                        mobileMenu.classList.remove('open'); // Remove 'open' class
                        document.body.classList.remove('no-scroll'); // Re-enable body scroll
                    }
                });
            });


            // Fast Food Menu Data
            const fastFoodMenu = [
                {
                    title: "Burger",
                    // description: "A classic Nigerian staple, perfectly seasoned jollof rice with tender grilled chicken.",
                    image: "img/burger.jpg"
                },
                {
                    title: "Chicken Kebab",
                    // description: "Flavorful fried rice loaded with vegetables and succulent stir-fried beef.",
                    image: "img/chicken kebab.jpg"
                },
                {
                    title: "Chips & sauce",
                    // description: "Traditional pounded yam served with rich and savory egusi soup.",
                    image: "img/chips.jpg"
                },
                {
                    title: "grilled chicken",
                    // description: "Spicy grilled meat skewers, a popular street food delicacy.",
                    image: "img/grilled chicken.jpg"
                },
                {
                    title: "Shawarma",
                    // description: "Delicious bean cakes (akara) served with a warm, comforting pap.",
                    image: "img/shawarma.jpg"
                },
                {
                    title: "Small Chops",
                    // description: "Juicy marinated meat wrapped in warm pita bread with fresh veggies and sauce.",
                    image: "img/small chops.jpg"
                }
            ];

            const menuContainer = document.querySelector('.menu-container');

            // Populate Fast Food Menu
            fastFoodMenu.forEach(item => {
                const menuItemDiv = document.createElement('div');
                menuItemDiv.classList.add('menu-item');
                menuItemDiv.innerHTML = `
                    <div class="menu-item-image-wrapper">
                        <img src="${item.image}" alt="${item.title}">
                    </div>
                    <h3>${item.title}</h3>
                   
                `;
                menuContainer.appendChild(menuItemDiv);
            });

            // --- Testimonial Slider ---
            const testimonialSlider = document.querySelector('.testimonial-slider');
            const testimonialSlides = document.querySelectorAll('.testimonial-slide');
            const prevBtn = document.getElementById('prev-btn');
            const nextBtn = document.getElementById('next-btn');
            let currentSlide = 0;
            let slideInterval;

            function goToSlide(index) {
                currentSlide = index;
                testimonialSlider.style.transform = `translateX(-${currentSlide * 100}%)`;
            }

            function showNextTestimonial() {
                currentSlide = (currentSlide + 1) % testimonialSlides.length;
                goToSlide(currentSlide);
            }

            function showPrevTestimonial() {
                currentSlide = (currentSlide - 1 + testimonialSlides.length) % testimonialSlides.length;
                goToSlide(currentSlide);
            }

            // Button Event Listeners
            prevBtn.addEventListener('click', () => {
                showPrevTestimonial();
                resetSlideInterval();
            });

            nextBtn.addEventListener('click', () => {
                showNextTestimonial();
                resetSlideInterval();
            });

            function resetSlideInterval() {
                clearInterval(slideInterval);
                slideInterval = setInterval(showNextTestimonial, 5000); // Change slide every 5 seconds
            }

            // Initial start of the slider
            resetSlideInterval();


            // Animated Background Images for Menu and Booking Sections
            const menuBackgroundImagesContainer = document.querySelector('.menu-background-images');
            const bookingBackgroundImagesContainer = document.querySelector('.booking-background-images');

            // Array of image URLs for the background animations
            const backgroundImages = [
                'img/menu/absolute-1.jpg', /* Changed to red for visibility */
                'img/menu/absolute-2.jpg',
                'img/menu/absolute-3.jpg',
                'img/menu/absolute-4.jpg',
                'img/menu/absolute-5.jpg',
                'img/menu/absolute-6.jpg',
                'img/menu/absolute-1.jpg',
                'img/menu/absolute-2.jpg',
                'img/menu/absolute-3.jpg'
            ];

            function createAndAnimateBackgroundImages(container, count = 10, placement = 'random') {
                const imageSizeRange = [50, 80];

                for (let i = 0; i < count; i++) {
                    const img = document.createElement('img');
                    img.src = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];
                    const size = Math.random() * (imageSizeRange[1] - imageSizeRange[0]) + imageSizeRange[0];
                    img.style.width = `${size}px`;
                    img.style.height = `${size}px`;

                    img.style.position = 'absolute';
                    img.style.opacity = '0';

                    const topPercentage = (i / count) * 100 + (Math.random() * (100 / count) - (100 / count / 2));
                    img.style.top = `${topPercentage}%`;

                    let initialTransform = `rotate(${Math.random() * 360}deg)`;

                    if (placement === 'left') {
                        img.style.left = '0';
                        initialTransform += ` translateX(-${size / 2}px)`;
                    } else if (placement === 'right') {
                        img.style.right = '0';
                        initialTransform += ` translateX(${size / 2}px)`;
                    } else {
                        img.style.left = `${Math.random() * 100}%`;
                        img.style.top = `${Math.random() * 100}%`;
                    }

                    img.style.transform = initialTransform;

                    setTimeout(() => {
                        img.style.transition = `opacity 2s ease-out, transform ${Math.random() * 10 + 5}s linear infinite alternate`;
                        img.style.opacity = '0.9';

                        let finalTransform = '';
                        if (placement === 'left') {
                            finalTransform = `translateX(${Math.random() * 30}px) translateY(${Math.random() * 50 - 25}px) rotate(${Math.random() * 720}deg)`;
                        } else if (placement === 'right') {
                            finalTransform = `translateX(-${Math.random() * 30}px) translateY(${Math.random() * 50 - 25}px) rotate(${Math.random() * 720}deg)`;
                        } else {
                            finalTransform = `translateY(${Math.random() * 200 - 100}px) translateX(${Math.random() * 200 - 100}px) rotate(${Math.random() * 720}deg)`;
                        }
                        img.style.transform = finalTransform;
                    }, 100);

                    container.appendChild(img);
                }
            }

            createAndAnimateBackgroundImages(menuBackgroundImagesContainer, 10, 'left');
            createAndAnimateBackgroundImages(menuBackgroundImagesContainer, 10, 'right');
            createAndAnimateBackgroundImages(bookingBackgroundImagesContainer, 10, 'left');
            createAndAnimateBackgroundImages(bookingBackgroundImagesContainer, 10, 'right');

            // --- Scroll Animations for Sections ---
            const animateOnScrollElements = document.querySelectorAll('.section-content, .menu-item, .gallery-grid img, .service-item, .contact-item, .pizza-deals-container, .franchise-container');

            const scrollObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                    } else {
                        // Optional: Remove class if you want the animation to replay on scroll out/in
                        // entry.target.classList.remove('animate-in');
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });

            animateOnScrollElements.forEach(element => {
                scrollObserver.observe(element);
            });

            // Specific observer for background images visibility
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observerCallback = (entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.querySelectorAll('img').forEach(img => {
                            img.style.opacity = '0.9';
                        });
                    } else {
                        entry.target.querySelectorAll('img').forEach(img => {
                            img.style.opacity = '0';
                        });
                    }
                });
            };

            const menuBgObserver = new IntersectionObserver(observerCallback, observerOptions);
            menuBgObserver.observe(menuBackgroundImagesContainer);

            const bookingBgObserver = new IntersectionObserver(observerCallback, observerOptions);
            bookingBgObserver.observe(bookingBackgroundImagesContainer);
        });


        // form
        // --- EmailJS Integration ---
            emailjs.init("jH1UyzWKrxbXrk27G"); // Initialize EmailJS with your Public Key

            const bookingForm = document.getElementById('booking-form');

            bookingForm.addEventListener('submit', function(event) {
                event.preventDefault(); // Prevent default form submission

                // Display a loading message
                const submitButton = this.querySelector('.btn');
                const originalButtonText = submitButton.textContent;
                submitButton.textContent = 'Sending...';
                submitButton.disabled = true;

                // Collect form data. The 'name' attribute of each input/select/textarea
                // should match the variable names in your EmailJS template.
                const formData = {
                    name: this.name.value,
                    email: this.email.value,
                    phone: this.phone.value,
                    'event-type': this['event-type'].value, // Corrected key to match HTML name attribute
                    'event-date': this['event-date'].value, // Corrected key to match HTML name attribute
                    guests: this.guests.value,
                    message: this.message.value
                };

                // Send the primary email to your catering service
                emailjs.send('service_q23kxse', 'template_n792mxc', formData) // Your Service ID and Primary Template ID
                    .then(function(response) {
                        console.log('Primary email SUCCESS!', response.status, response.text);

                        // --- Send Auto-Reply Email to the User ---
                        // Use the same formData as it contains the user's email and name
                        // Replace 'YOUR_AUTO_REPLY_TEMPLATE_ID' with your actual auto-reply template ID
                        emailjs.send('service_q23kxse', 'template_s85e6uj', formData)
                            .then(function(autoReplyResponse) {
                                console.log('Auto-reply SUCCESS!', autoReplyResponse.status, autoReplyResponse.text);
                                alert('Your booking request has been sent successfully! A confirmation email has been sent to your inbox.');
                                bookingForm.reset(); // Clear the form after successful submission
                            }, function(autoReplyError) {
                                console.log('Auto-reply FAILED...', autoReplyError);
                                // Even if auto-reply fails, the primary email likely went through.
                                alert('Your booking request has been sent, but we had trouble sending a confirmation email. We will still get back to you!');
                            });

                    }, function(error) {
                        console.log('Primary email FAILED...', error);
                        alert('Failed to send your booking request. Please try again later.');
                    })
                    .finally(() => {
                        // Re-enable the button and restore its text
                        submitButton.textContent = originalButtonText;
                        submitButton.disabled = false;
                    });
            });
      