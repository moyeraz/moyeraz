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
    function updateCountdown() {
        const secondsElement = document.getElementById('seconds');
        
        if (secondsElement) {
            secondsElement.textContent = timeLeft;
        }
        
        if (timeLeft === 0) {
            // Set a flag to ensure the modal is closed on the previous page
            sessionStorage.setItem('modal-closed', 'true');

            // Redirect to the previous page, forcing a fresh load
            const previousPageUrl = document.referrer;

            if (previousPageUrl) {
                window.location.href = previousPageUrl;
            } else {
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