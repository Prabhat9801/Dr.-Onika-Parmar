let currentTestimonialIndex = 0;

const testimonials = document.querySelectorAll('.testimonial');
const totalTestimonials = testimonials.length;

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.classList.toggle('testimonial-show', i === index);
    });
}

function nextTestimonial() {
    currentTestimonialIndex = (currentTestimonialIndex + 1) % totalTestimonials;
    showTestimonial(currentTestimonialIndex);
}

function prevTestimonial() {
    currentTestimonialIndex = (currentTestimonialIndex - 1 + totalTestimonials) % totalTestimonials;
    showTestimonial(currentTestimonialIndex);
}

// Initial display
showTestimonial(currentTestimonialIndex);

// Change testimonials every 5 seconds
setInterval(nextTestimonial, 5000);


function sendEmail(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the values from the input fields
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Create the mailto link with pre-filled data
    const subject = encodeURIComponent('Contact Request from Website');
    const body = encodeURIComponent(`Hello,\n\nYou have received a new message from your website contact form.\n\nHere are the details:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}\n\nBest Regards,\nYour Website`);
    
    // Open the user's email client with pre-filled details
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
}
    document.getElementById('appointment-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Get selected package and message
        const package = document.getElementById('package').value;
        const message = document.getElementById('message').value;

        // Construct WhatsApp URL
        const whatsappNumber = "YOUR_WHATSAPP_NUMBER"; // Add your WhatsApp number here (e.g., +911234567890)
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=Course%20Package:%20${encodeURIComponent(package)}%0A%0AMessage:%20${encodeURIComponent(message)}`;

        // Open WhatsApp with the pre-filled message
        window.open(whatsappURL, '_blank');
    });

