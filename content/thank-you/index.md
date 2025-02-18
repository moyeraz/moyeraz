---
Title: Thank You
sitemap_exclude: true
---

## Thank You for Contacting Us  
We will get back to you as soon as possible.

<p id="message" aria-live="polite">Redirecting in <span id="seconds">5</span> seconds...</p>
<a href="/" class="btn btn-arrow btn-solid btn-primary">Back to Home</a>

<script>
    let timeLeft = 5;    
    function updateCountdown() {
        const secondsElement = document.getElementById('seconds');

        if (secondsElement) {
            secondsElement.textContent = timeLeft;
        }

        if (timeLeft === 0) {
            const previousPageUrl = document.referrer;
            
            if (previousPageUrl) {
                window.location.href = previousPageUrl;
            } else {
                window.location.href = "/";
            }
        } else {
            timeLeft--;
            setTimeout(updateCountdown, 1000);
        }
    }

    updateCountdown();
</script>
