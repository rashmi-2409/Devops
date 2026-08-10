
const fs = require("fs");

console.log("=================================");
console.log("TEST CASE 1: index.html");
console.log("=================================");

let passed = true;

// Check index.html exists
if (fs.existsSync("index.html")) {
    console.log("✓ index.html exists");
} else {
    console.log("✗ index.html does not exist");
    passed = false;
}

// Read HTML
const html = fs.readFileSync("index.html", "utf8");

// Check registration form
if (html.includes("<form")) {
    console.log("✓ Registration form exists");
} else {
    console.log("✗ Registration form missing");
    passed = false;
}

// Check name field
if (html.toLowerCase().includes("name")) {
    console.log("✓ Name field exists");
} else {
    console.log("✗ Name field missing");
    passed = false;
}

// Check email field
if (html.toLowerCase().includes("email")) {
    console.log("✓ Email field exists");
} else {
    console.log("✗ Email field missing");
    passed = false;
}

// Check CSS
if (html.includes("style.css")) {
    console.log("✓ style.css is linked");
} else {
    console.log("✗ style.css is not linked");
    passed = false;
}

// Check JavaScript
if (html.includes("script.js")) {
    console.log("✓ script.js is linked");
} else {
    console.log("✗ script.js is not linked");
    passed = false;
}

console.log("---------------------------------");

if (passed) {
    console.log("ALL index.html TESTS PASSED!");
    process.exit(0);
} else {
    console.log("index.html TEST FAILED!");
    process.exit(1);
}
