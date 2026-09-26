const studentName = localStorage.getItem("studentName");

const welcomeMessage = document.getElementById("welcomeMessage");

if (studentName) {
    welcomeMessage.textContent = `Welcome, ${studentName}!`;
} else {
    welcomeMessage.textContent = "Welcome, Student!";
}