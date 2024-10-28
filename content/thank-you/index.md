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
        
        secondsElement.textContent = timeLeft;
        
        if (timeLeft === 0) {
            window.history.go(-1);
        } else {
            timeLeft--;
            setTimeout(updateCountdown, 1000);
        }
    }
    updateCountdown();
</script>