<!-- ...your existing HTML content... -->

<section class="rsvp">
    <h2>RSVP</h2>
    <p>Will you be joining us to celebrate our special day?</p>
    <button id="rsvpButton">RSVP Now</button>
    <p id="responseMessage"></p>
</section>

<!-- ...your existing HTML content... -->

<script>
    // Get references to the button and response message elements
    const rsvpButton = document.getElementById("rsvpButton");
    const responseMessage = document.getElementById("responseMessage");

    // Add a click event listener to the button
    rsvpButton.addEventListener("click", function () {
        // Change the response message text
        responseMessage.textContent = "Thank you for RSVPing! We look forward to celebrating with you.";
    });
</script>
</body>
</html>
