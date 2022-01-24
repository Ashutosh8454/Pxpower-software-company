const express = require('express');
const path = require('path');
const port = 80;
const app = express();

mongoose.connect('mongodb://localhost/pxpower', { useNewUrlParser: true });

//for serve file and pages
app.use(express.static("public"));
app.get('/', (req, res) => {

    res.sendFile(__dirname + "/" + "index.html");
})

app.get('*', (req, res) => {

    res.status(404).send(`<center><h1>NOT FOUND</h1></center>`);
})


app.listen(port, (req, res) => {
    console.log("listen at port 80");
})

//contact section
///contact page 
const contactSchema = new mongoose.Schema({
    name: String,
    subject: String,
    email: String,
    detils: String,

});
const Contact = mongoose.model('ashutoshkart', contactSchema);

app.post('*t', (req, res) => {
    var myData = new Contact(req.body);
    myData.save().then(() => {
        res.send("This item has been saved to the database")
    }).catch(() => {
        res.status(400).send("item was not saved to the databse")
    })
})