document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById('text');
    const nameForm = document.getElementById('nameForm');
    const nameInput = document.getElementById('nameInput');
    const reminderText = document.getElementById('reminder');
    const countdownElement = document.getElementById('countdown');
    const targetDate = new Date("December 20, 2023 10:00:00").getTime();

    let typeElement = textElement
    let cursorElement = document.getElementById('cursor');

    let message = "What's your name?";
    let letterIndex = 0;
    let typingSpeed = 150;
    let deleting = false;
    let inactivityTimer;

    function type() {
        if (letterIndex < message.length) {
            letterIndex++;
            typeElement.textContent = message.substring(0, letterIndex);
            typeElement.classList.remove('blink'); // Stop blinking when typing
            setTimeout(type, typingSpeed);
        } else {
            typeElement.classList.add('blink'); // Stop blinking when typing
        }
    }

    function showInput () {
        // Show the form and reminder only after the message is fully typed
        nameForm.style.opacity = 1;
        nameForm.style.display = 'block';
        inactivityTimer = setTimeout(showReminder, 5000); // Reminder after 5 seconds of inactivity
    }

    function deleteText(callback) {
        if (letterIndex > 0) {
            letterIndex--;
            typeElement.classList.remove('blink'); // Stop blinking when typing
            typeElement.textContent = message.substring(0, letterIndex);
            setTimeout(() => deleteText(callback), typingSpeed);
        } else if (callback) {
            typeElement.classList.add('blink'); // Stop blinking when typing
            setTimeout(() => callback(), 1000);

        }
    }

    function showGreeting() {
        message = `Hello ${nameInput.value.trim() || 'WebExplorer2000'}.`;
        type();
        setTimeout(() => deleteText(showTCGGreeting), 4000); // Show greeting for a bit before deleting

    }

    function showTCGGreeting() {
        message = "We are The Codeero Group.";
        type();
        setTimeout(() => deleteText(showWebsiteMessage), 6500); // Show greeting for a bit before deleting
    }

    function showWebsiteMessage() {
        message = "Our website will be ready soon.";
        type();
        setTimeout(showCountdown, 6000); // Show this message for a bit before countdown

    }

    function showCountdown() {

        textElement.classList.remove('cursor'); // Stop blinking when typing
        textElement.classList.remove('blink'); // Stop blinking when typing
        countdownElement.classList.add('cursor'); // Stop blinking when typing
        countdownElement.classList.add('blink'); // Stop blinking when typing
        typeElement = countdownElement
        updateCountdown()
            setInterval(deleteText, 60000, updateCountdown); // Update every minute



    }

    function updateCountdown() {
        console.log("Update")
        const now = new Date().getTime();
        const distance = targetDate - now;
        if (distance < 0) {
            countdownElement.textContent = "Get Ready. Set. Go!";
            return;
        }
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        message = `${days}d ${hours}h ${minutes}m`;
        console.log(message)
        console.log(message.length)
        setTimeout(type, 3000); // Start after 3 seconds

    }


    nameForm.addEventListener('submit', function(event) {
        event.preventDefault();
        plausible('Viewer', { props: { name: nameInput.value.trim() } })
        clearTimeout(inactivityTimer);
        nameForm.style.opacity = 0;
        reminderText.style.opacity = 0;

        setTimeout(() => {
            nameForm.style.opacity = 0;
            reminderText.style.opacity = 0;
            deleteText(showGreeting); // Delete 'What's your name?' then show greeting
        }, 1500); // Fade out duration
    });

    function showReminder() {
        reminderText.style.opacity = 1;
    }

    nameInput.addEventListener('input', function() {
        clearTimeout(inactivityTimer);
    });

    setTimeout(type, 3000); // Start after 3 seconds
    setTimeout(showInput, 6000); // Reminder after 5 seconds of inactivity

});