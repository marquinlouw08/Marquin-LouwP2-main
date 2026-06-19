// STEP 1: Initialize with YOUR Public Key
(function() {
    emailjs.init("2bBd4-S88MGxyw3xv");
})();

// STEP 2: Get form element + popup
const form = document.getElementById('contactForm');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');

// STEP 3: Handle submit
form.addEventListener('submit', function(e) {
    e.preventDefault();

    // STEP 4: Send enquiry to your bakery inbox
    emailjs.sendForm(
        "service_4kgqdli",   // your Service ID
        "template_qi8akf5",  // your Template ID
        form
    )
    .then(() => {
        // Show popup
        popup.classList.remove("hidden");
        form.reset();

        // Trigger stars animation
        const stars = document.getElementById("stars");
        stars.classList.remove("hidden");
        stars.classList.add("show");

        setTimeout(() => {
            stars.classList.remove("show");
            stars.classList.add("hidden");
        }, 3000);

        // STEP 5: Send confirmation email back to user
        emailjs.send(
            "service_4kgqdli",
            "template_reply", // your new confirmation template ID
            {
                from_name: "Jason Bakery",
                reply_to: form.querySelector("[name='reply_to']").value
            }
        );
    }, (error) => {
        alert("❌ Error: " + error.text);
        console.log(error);
    });
});

// STEP 6: Close popup
closePopup.addEventListener("click", () => {
    popup.classList.add("hidden");
});
