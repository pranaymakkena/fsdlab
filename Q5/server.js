const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/api/message", (req, res) => {
    res.json({
        message: "Hello from Node.js and Express!"
    });
});

app.listen(3000, () => {
    console.log("Server running at port 3000");
});
