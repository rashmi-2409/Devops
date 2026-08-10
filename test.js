console.log("=================================");
console.log("TEST CASE 2: EMAIL VERIFICATION");
console.log("=================================");

let passed = true;

// Email validation function
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Test 1 - Empty email
if (!isValidEmail("")) {
    console.log("✓ Empty email rejected");
} else {
    console.log("✗ Empty email accepted");
    passed = false;
}

// Test 2 - Invalid email
if (!isValidEmail("student@")) {
    console.log("✓ Invalid email rejected");
} else {
    console.log("✗ Invalid email accepted");
    passed = false;
}

// Test 3 - Invalid email
if (!isValidEmail("student.com")) {
    console.log("✓ Email without @ rejected");
} else {
    console.log("✗ Email without @ accepted");
    passed = false;
}

// Test 4 - Valid email
if (isValidEmail("student@gmail.com")) {
    console.log("✓ Valid email accepted");
} else {
    console.log("✗ Valid email rejected");
    passed = false;
}

// Test 5 - Another valid email
if (isValidEmail("student123@example.com")) {
    console.log("✓ Another valid email accepted");
} else {
    console.log("✗ Another valid email rejected");
    passed = false;
}

console.log("---------------------------------");

if (passed) {
    console.log("ALL EMAIL TESTS PASSED!");
    process.exit(0);
} else {
    console.log("EMAIL TEST FAILED!");
    process.exit(1);
}
