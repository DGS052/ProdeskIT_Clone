document.addEventListener("DOMContentLoaded", function () {
    const chatIcon = document.getElementById('chat-icon');
    const contactSection = document.getElementById('contact-section');

    if (!contactSection) {
        console.error("Error: 'contact-section' ID nahi mila! HTML check karo.");
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Jab contact section screen par aaye, icon dikhao
                chatIcon.classList.add('show');
            } else {
                // Jab contact section screen se hateg, icon hata do
                chatIcon.classList.remove('show');
            }
        });
    }, { threshold: 0.1 }); // 10% section dikhte hi icon aa jayega

    observer.observe(contactSection);
});

function toggleChat() {
    const popup = document.getElementById('chat-popup');
    popup.classList.toggle('hidden');

    const iconOpen = document.querySelector('.icon-open');
    const iconClose = document.querySelector('.icon-close');

    if (popup.classList.contains('hidden')) {
        iconOpen.style.display = 'block';
        iconClose.style.display = 'none';
    } else {
        iconOpen.style.display = 'none';
        iconClose.style.display = 'block';
    }
}

document.getElementById('chat-form').addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('chat-form-container').classList.add('hidden');
    document.getElementById('chat-success').classList.remove('hidden');
    // Optional: Reset form fields
    this.reset();
});

document.addEventListener("DOMContentLoaded", function () {
    // --- Sidebar Toggle Logic ---
    const hamburgerIcons = document.querySelectorAll('[icon="hamburger"]');
    const sidebar = document.getElementById('n-64317-sidebar');
    const closeIcons = document.querySelectorAll('[data-ux="CloseIcon"]');

    if (sidebar) {
        // Open Sidebar
        hamburgerIcons.forEach(icon => {
            icon.addEventListener('click', function (e) {
                e.preventDefault(); // Prevent jump to top
                sidebar.classList.add('sidebar-visible'); // Use our new helper class
                sidebar.classList.remove('c1-w'); // Remove hidden class
            });
        });

        // Close Sidebar
        closeIcons.forEach(icon => {
            icon.addEventListener('click', function (e) {
                e.preventDefault();
                sidebar.classList.remove('sidebar-visible');
                sidebar.classList.add('c1-w'); // Re-hide it
            });
        });
    } else {
        console.warn("Sidebar element 'n-64317-sidebar' not found.");
    }
});