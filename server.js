const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

const PORT = 3001;
const DATA_FILE = path.join(__dirname, "student.json");

app.use(express.json());
app.use(express.static(__dirname));

// Student Registration
app.post("/register", (req, res) => {
    try {

        const students = JSON.parse(
            fs.readFileSync(DATA_FILE, "utf8")
        );

        const newStudent = {
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            rollNumber: req.body.rollNumber,
            course: req.body.course,
            phone: req.body.phone,
            password: req.body.password
        };

        students.push(newStudent);

        fs.writeFileSync(
            DATA_FILE,
            JSON.stringify(students, null, 4)
        );

        console.log("Student registered successfully.");

        res.status(200).json({
            message: "Student registered successfully!"
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Error saving student."
        });
    }
});

// Student Login
app.post("/login", (req, res) => {
    try {

        const students = JSON.parse(
            fs.readFileSync(DATA_FILE, "utf8")
        );

        const { username, password } = req.body;

        const student = students.find(
            (item) =>
                item.username === username &&
                item.password === password
        );

        if (!student) {
            return res.status(401).json({
                message: "Invalid username or password."
            });
        }

        res.status(200).json({
            message: "Login successful!",
            name: student.name
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Error during login."
        });
    }
});

// Start Server
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});
