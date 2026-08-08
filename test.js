const fs = require("fs");
const assert = require("assert");

console.log("Starting Student Registration Project Tests...\n");

// Check index.html
assert.ok(
    fs.existsSync("index.html"),
    "index.html file is missing"
);

const html = fs.readFileSync("index.html", "utf8");

assert.ok(
    html.includes("Student Registration"),
    "Student Registration title is missing"
);

assert.ok(
    html.includes("registrationForm"),
    "Registration form is missing"
);

console.log("✓ index.html test passed");

// Check style.css
assert.ok(
    fs.existsSync("style.css"),
    "style.css file is missing"
);

const css = fs.readFileSync("style.css", "utf8");

assert.ok(
    css.includes(".container"),
    "CSS container is missing"
);

console.log("✓ style.css test passed");

// Check script.js
assert.ok(
    fs.existsSync("script.js"),
    "script.js file is missing"
);

const js = fs.readFileSync("script.js", "utf8");

assert.ok(
    js.includes("registrationForm"),
    "Registration form JavaScript is missing"
);

console.log("✓ script.js test passed");

// Check student.json
assert.ok(
    fs.existsSync("student.json"),
    "student.json file is missing"
);

const json = JSON.parse(fs.readFileSync("student.json", "utf8"));

assert.ok(
    Array.isArray(json.students),
    "students array is missing in student.json"
);

console.log("✓ student.json test passed");

console.log("\nAll tests passed successfully!");