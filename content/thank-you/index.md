---
Title: Thank You
sitemap_exclude: true
---

Thank you for contacting us.  
We will get back to you as soon as possible.

<p id="message">Redirecting in <span id="seconds">5</span> seconds</p>
<a href="/" class="btn btn-arrow btn-solid btn-primary">Back to Home</a>

<script>
    let timeLeft = 5;

    function closeModal() {
        // Find any open modal window by class or ID
        const openModal = document.querySelector('.modal:not(.hidden), .open-modal');
        if (openModal) {
            openModal.classList.add('hidden'); // Add 'hidden' class to close the modal
        }
    }

    function updateCountdown() {
        const secondsElement = document.getElementById('seconds');

        if (secondsElement) {
            secondsElement.textContent = timeLeft;
        }

        if (timeLeft === 0) {
            closeModal(); // Ensure modal is closed before redirecting

            const previousPageUrl = document.referrer;

            if (previousPageUrl) {
                // Redirect to the previous page
                window.location.href = previousPageUrl;
            } else {
                // Fallback: reload or navigate back
                window.location.reload();
                window.history.back();
            }
        } else {
            timeLeft--;
            setTimeout(updateCountdown, 1000);
        }
    }

    // Start the countdown when the script loads
    updateCountdown();
</script>
