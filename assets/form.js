document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const submitButton = form.querySelector("button");

    const notification = document.createElement("p");
    notification.id = "notification";
    notification.style.display = "none"; 
    form.appendChild(notification); 

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        submitButton.disabled = true;
        submitButton.textContent = "Sending...";

        setTimeout(() => {
            notification.textContent = "Your message has been sent successfully!";
            notification.style.color = "green";
            notification.style.display = "block"; 

            form.reset();

            submitButton.disabled = false;
            submitButton.textContent = "Send";

            setTimeout(() => {
                notification.style.display = "none";
            }, 3000);
        }, 2000); 
    });
});
