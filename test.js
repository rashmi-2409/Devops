const fs = require("fs");

let passed = true;

console.log("=================================");
console.log("STUDENT REGISTRATION TESTS");
console.log("=================================");

// =================================
// TEST CASE 1: index.html
// =================================

console.log("\nTEST CASE 1: INDEX.HTML");

if (fs.existsSync("index.html")) {
    console.log("✓ index.html exists");
} else {
    console.log("✗ index.html does not exist");
    passed = false;
}

const html = fs.readFileSync("index.html", "utf8");

if (html.includes('id="registrationForm"')) {
    console.log("✓ Registration form exists");
} else {
    console.log("✗ Registration form missing");
    passed = false;
}

if (html.includes('id="name"')) {
    console.log("✓ Name field exists");
} else {
    console.log("✗ Name field missing");
    passed = false;
}

if (html.includes('id="email"')) {
    console.log("✓ Email field exists");
} else {
    console.log("✗ Email field missing");
    passed = false;
}

if (html.includes('id="roll"')) {
    console.log("✓ Roll number field exists");
} else {
    console.log("✗ Roll number field missing");
    passed = false;
}

if (html.includes('id="course"')) {
    console.log("✓ Course field exists");
} else {
    console.log("✗ Course field missing");
    passed = false;
}

if (html.includes('id="phone"')) {
    console.log("✓ Phone field exists");
} else {
    console.log("✗ Phone field missing");
    passed = false;
}


// =================================
// TEST CASE 2: EMAIL VERIFICATION
// =================================

console.log("\nTEST CASE 2: EMAIL VERIFICATION");

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

if (isValidEmail("student123@example.com")) {
    console.log("✓ Another valid email accepted");
} else {
    console.log("✗ Another valid email rejected");
    passed = false;
}


// =================================
// TEST CASE 3: STUDENT.JSON
// =================================

console.log("\nTEST CASE 3: STUDENT.JSON");

if (fs.existsSync("student.json")) {

    console.log("✓ student.json exists");

    try {

        const data = JSON.parse(
            fs.readFileSync("student.json", "utf8")
        );

        if (Array.isArray(data.students)) {
            console.log("✓ students array exists");
        } else {
            console.log("✗ students array missing");
            passed = false;
        }

        if (data.students.length > 0) {

            const student = data.students[0];

            if (student.name) {
                console.log("✓ Student name exists");
            } else {
                console.log("✗ Student name missing");
                passed = false;
            }

            if (student.email) {
                console.log("✓ Student email exists");
            } else {
                console.log("✗ Student email missing");
                passed = false;
            }

            if (student.rollNumber) {
                console.log("✓ Roll number exists");
            } else {
                console.log("✗ Roll number missing");
                passed = false;
            }

            if (student.course) {
                console.log("✓ Course exists");
            } else {
                console.log("✗ Course missing");
                passed = false;
            }

            if (student.phone) {
                console.log("✓ Phone number exists");
            } else {
                console.log("✗ Phone number missing");
                passed = false;
            }

        } else {

            console.log("✗ No students found");
            passed = false;
        }

    } catch (error) {

        console.log("✗ student.json contains invalid JSON");
        passed = false;
    }

} else {

    console.log("✗ student.json does not exist");
    passed = false;
}


// =================================
// FINAL RESULT
// =================================

console.log("\n=================================");

if (passed) {

    console.log("ALL TEST CASES PASSED!");
    process.exit(0);

} else {

    console.log("TESTS FAILED!");
    process.exit(1);
}
