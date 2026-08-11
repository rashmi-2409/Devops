const fs = require("fs");

let passed = true;

console.log("=================================");
console.log("STUDENT REGISTRATION TEST CASES");
console.log("=================================");

// TEST CASE 1: Files
console.log("\nTEST CASE 1: FILE VALIDATION");

const files = [
    "index.html",
    "style.css",
    "script.js",
    "server.js",
    "students.json"
];

files.forEach(file => {

    if (fs.existsSync(file)) {
        console.log(`✓ ${file} exists`);
    } else {
        console.log(`✗ ${file} not found`);
        passed = false;
    }

});

// TEST CASE 2: HTML FORM
console.log("\nTEST CASE 2: REGISTRATION FORM");

const html = fs.readFileSync("index.html", "utf8");

const requiredFields = [
    'id="studentForm"',
    'id="name"',
    'id="email"',
    'id="rollNumber"',
    'id="course"',
    'id="phone"'
];

requiredFields.forEach(field => {

    if (html.includes(field)) {
        console.log(`✓ ${field} exists`);
    } else {
        console.log(`✗ ${field} missing`);
        passed = false;
    }

});

// Make sure student table is NOT displayed
if (!html.includes("studentTable")) {
    console.log("✓ Registered students are not displayed");
} else {
    console.log("✗ Registered students table found");
    passed = false;
}

// TEST CASE 3: EMAIL VALIDATION
console.log("\nTEST CASE 3: EMAIL VERIFICATION");

function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

if (!isValidEmail("")) {
    console.log("✓ Empty email rejected");
} else {
    console.log("✗ Empty email accepted");
    passed = false;
}

if (!isValidEmail("student@")) {
    console.log("✓ Invalid email rejected");
} else {
    console.log("✗ Invalid email accepted");
    passed = false;
}

if (!isValidEmail("student.com")) {
    console.log("✓ Email without @ rejected");
} else {
    console.log("✗ Email without @ accepted");
    passed = false;
}

if (isValidEmail("student@gmail.com")) {
    console.log("✓ Valid email accepted");
} else {
    console.log("✗ Valid email rejected");
    passed = false;
}

// TEST CASE 4: STUDENTS.JSON
console.log("\nTEST CASE 4: STUDENTS.JSON");

try {

    const students = JSON.parse(
        fs.readFileSync("students.json", "utf8")
    );

    if (Array.isArray(students)) {
        console.log("✓ students.json contains an array");
    } else {
        console.log("✗ students.json is not an array");
        passed = false;
    }

    students.forEach((student, index) => {

        console.log(`\nStudent ${index + 1}:`);

        if (student.name && student.name.trim() !== "") {
            console.log("Name Validation : PASS");
        } else {
            console.log("Name Validation : FAIL");
            passed = false;
        }

        if (student.email && student.email.trim() !== "") {
            console.log("Email Validation : PASS");
        } else {
            console.log("Email Validation : FAIL");
            passed = false;
        }

        if (student.rollNumber && student.rollNumber.trim() !== "") {
            console.log("Roll Number Validation : PASS");
        } else {
            console.log("Roll Number Validation : FAIL");
            passed = false;
        }

        if (student.course && student.course.trim() !== "") {
            console.log("Course Validation : PASS");
        } else {
            console.log("Course Validation : FAIL");
            passed = false;
        }

        if (student.phone && /^\d{10}$/.test(student.phone)) {
            console.log("Phone Validation : PASS");
        } else {
            console.log("Phone Validation : FAIL");
            passed = false;
        }

    });

} catch (error) {

    console.log("✗ students.json contains invalid JSON");
    passed = false;
}

// FINAL RESULT
console.log("\n=================================");

if (passed) {

    console.log("ALL TEST CASES PASSED!");
    process.exit(0);

} else {

    console.log("SOME TEST CASES FAILED!");
    process.exit(1);
}
