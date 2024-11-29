<script>
    function handleFormSubmission(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Extract form values
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();

        // Validate inputs
        if (!username || !email) {
            document.getElementById('formFeedback').innerText = "You have not sent Pi. Please complete all fields.";
            document.getElementById('formFeedback').style.display = "block";
            return;
        }

        // Simulate success or error
        document.getElementById('formFeedback').innerText = "You have not send pi...thank you!";
        document.getElementById('formFeedback').style.display = "block";

        // Optional: Clear form fields
        document.getElementById('piForm').reset();
    }
</script>

  
