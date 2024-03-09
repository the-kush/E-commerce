import express from "express";
import colors from "colors";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send(
       " <h1> Welcome to e-commerce website</h1>"
    )
})
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`.bgCyan.white);
})