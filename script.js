document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const roll = document.getElementById("roll").value.trim();
    const course = document.getElementById("course").value;
    const phone = document.getElementById("phone").value.trim();

    const student = {
        name: name,
        email: email,
        rollNumber: roll,
        course: course,
        phone: phone
    };

    console.log("Student Registration:", student);

    // Check email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        document.getElementById("message").textContent =
            "Please enter a valid email address.";
        return;
    }

    // Check phone number
    if (!/^\d{10}$/.test(phone)) {
        document.getElementById("message").textContent =
            "Please enter a valid 10-digit phone number.";
        return;
    }

    document.getElementById("message").textContent =
        "Student registered successfully!";

    console.log("Student data:", student);

    document.getElementById("registrationForm").reset();
});
