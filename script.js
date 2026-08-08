document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const roll = document.getElementById("roll").value;
    const course = document.getElementById("course").value;
    const phone = document.getElementById("phone").value;

    const student = {
        name: name,
        email: email,
        rollNumber: roll,
        course: course,
        phone: phone
    };

    console.log("Student Registration:", student);

    document.getElementById("message").textContent =
        "Student registered successfully!";

    document.getElementById("registrationForm").reset();
});