const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async function(event) {

    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    try {

        const response = await fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                password
            })
        });

        const result = await response.json();

        document.getElementById("message").textContent =
            result.message;

        if (response.ok) {
            localStorage.setItem("studentName", result.name);
            window.location.href = "home.html";
        }

    } catch (error) {

        console.error(error);

        document.getElementById("message").textContent =
            "Unable to connect to server.";
    }
});