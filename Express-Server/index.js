import express from "express";

const app = express();
const port = 3000;

// create a reply for HTTP GET request

app.get("/", (req,res)=>{
    console.log(req.raw);
    // res.send("Hello world!");
})

// create an app listner on port 3000
app.listen(port, () =>{
    console.log(`Server running on ${port}.` );
})