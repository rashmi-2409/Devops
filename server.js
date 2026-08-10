const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;

const server = http.createServer((req, res) => {

    // Register student
    if (req.method === "POST" && req.url === "/register") {

        let body = "";

        req.on("data", chunk => {
            body += chunk;
        });

        req.on("end", () => {

            try {

                const newStudent = JSON.parse(body);

                const filePath = path.join(__dirname, "student.json");

                const data = JSON.parse(
                    fs.readFileSync(filePath, "utf8")
                );

                // Add new student
                data.students.push(newStudent);

                // Save updated data
                fs.writeFileSync(
                    filePath,
                    JSON.stringify(data, null, 4)
                );

                res.writeHead(200, {
                    "Content-Type": "application/json"
                });

                res.end(JSON.stringify({
                    message: "Student registered successfully!"
                }));

            } catch (error) {

                console.error(error);

                res.writeHead(500, {
                    "Content-Type": "application/json"
                });

                res.end(JSON.stringify({
                    message: "Error saving student."
                }));
            }
        });

        return;
    }

    // Serve index.html
    if (req.url === "/" || req.url === "/index.html") {

        const file = fs.readFileSync(
            path.join(__dirname, "index.html")
        );

        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.end(file);
        return;
    }

    // Serve CSS
    if (req.url === "/style.css") {

        const file = fs.readFileSync(
            path.join(__dirname, "style.css")
        );

        res.writeHead(200, {
            "Content-Type": "text/css"
        });

        res.end(file);
        return;
    }

    // Serve JavaScript
    if (req.url === "/script.js") {

        const file = fs.readFileSync(
            path.join(__dirname, "script.js")
        );

        res.writeHead(200, {
            "Content-Type": "application/javascript"
        });

        res.end(file);
        return;
    }

    // Page not found
    res.writeHead(404);
    res.end("Not Found");
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
