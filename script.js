document.getElementById("registrationForm").addEventListener("submit", async function(event) {

    event.preventDefault();

    const student = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        rollNumber: document.getElementById("roll").value.trim(),
        course: document.getElementById("course").value,
        phone: document.getElementById("phone").value.trim()
    };

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(student.email)) {
        document.getElementById("message").textContent =
            "Please enter a valid email address.";
        return;
    }

    // Phone validation
    if (!/^\d{10}$/.test(student.phone)) {
        document.getElementById("message").textContent =
            "Please enter a valid 10-digit phone number.";
        return;
    }

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

        if (response.ok) {
            document.getElementById("registrationForm").reset();
        }

    } catch (error) {

        console.error(error);

        document.getElementById("message").textContent =
            "Error connecting to server.";
    }
});
