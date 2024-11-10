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
            // Force a full reload to the homepage (or any specific URL if needed)
            window.location.href = '/';
        } else {
            timeLeft--;
            setTimeout(updateCountdown, 1000);
        }
    }
    
    // Start the countdown
    updateCountdown();
</script>
