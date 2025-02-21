import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));




app.get("/", (req, res) => {
    res.render("home.ejs")
})

app.get("/AboutMe:D", (req, res) => {
    res.render("about.ejs")
})

app.get("/ContactMe:D", (req, res) => {
    res.render("contact.ejs")
})

app.get("/Personal:D", (req, res) => {
    res.render("personal.ejs")
})

app.get("/Pets:D", (req, res) => {
    res.render("pets.ejs")
})

app.get("/Portraits:D", (req, res) => {
    res.render("portraits.ejs")
})

app.get("/Streets:D!", (req, res) => {
    res.render("streets.ejs")
})

app.get("/Food:D", (req, res) => {
    res.render("food.ejs")
})

app.get("/Nature:D", (req, res) => {
    res.render("nature.ejs")
})




app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });