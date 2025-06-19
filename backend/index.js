const express = require("express");
const mainRouter = require("./routes/route")
const cors = require("cors");
const PORT = 3000;

const app = express();

app.use(cors());
app.use(express.json());


app.use("/api/v1",mainRouter)

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});