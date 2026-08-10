document.getElementById("registrationForm").addEventListener("submit", async function(event) {

    event.preventDefault();

    const student = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        rollNumber: document.getElementById("roll").value,
        course: document.getElementById("course").value,
        phone: document.getElementById("phone").value
    };

    try {

        const response = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(student)
        });

        const result = await response.json();

        document.getElementById("message").textContent =
            result.message;

        document.getElementById("registrationForm").reset();

    } catch (error) {

        document.getElementById("message").textContent =
            "Error registering student.";
    }
});
