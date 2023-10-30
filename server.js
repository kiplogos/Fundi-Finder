const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const mongoose = require('mongoose')


const app = express()
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://kip:Nixon1998!@cluster0.adfsqir.mongodb.net/workersDB', {useNewUrlParser:true});

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "docs", "index.html"))
})


const workerSchema = new mongoose.Schema ({
    first_name: String,
    last_name: String,
    phone_number: Number,
    email: String,
    trade: String,
    location: String
})

const Worker = mongoose.model("Worker", workerSchema)


app.post("/submit", async(req, res) => {
    const formData = req.body
    console.log("Recieved Data: ", formData)

    res.json({ message: 'Data received and processed.' });



    const worker = new Worker(formData)

    try {
        await worker.save()
        console.log(worker)
        console.log("Successfully saved to database.")
        

        
    } catch (error) {
        console.error("Error saving the user data!", error)
    }

})

Worker.estimatedDocumentCount({}, (err, count) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Estimated number of documents:', count)
      $(".registeredFundis").append(count)
    }
  });






app.listen(3000, () => {
    console.log("The server is running on port 3000")
})








// const nixon_logos_mason = new Worker ({
//     name: value1,
//     last_name: value2,
//     phone_number: value3,
//     email: value4,
//     trade: value5,
//     location: value6
// })