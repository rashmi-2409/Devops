const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

const PORT = 3001;
const DATA_FILE = path.join(__dirname, "students.json");

app.use(express.json());
app.use(express.static(__dirname));

app.post("/register", (req, res) => {

    try {

        const students = JSON.parse(
            fs.readFileSync(DATA_FILE, "utf8")
        );

        const newStudent = {
            name: req.body.name,
            email: req.body.email,
            rollNumber: req.body.rollNumber,
            course: req.body.course,
            phone: req.body.phone
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

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});
