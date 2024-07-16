import express from "express";
import path from "path";
import cors from "cors";
import fs from "fs"
import { format } from 'date-fns';//installing a third-party to format the date 


const app=express()
app.use(cors())
const port=4000

app.get("/",(req,res)=>{
//when no endpoint is given

    res.status(200).send(
        ` <h1 style="text-align:center;background-color:black; padding:20px; color:white; ">Node js file system</h1>
        
        <div style="background-color:grey; color:black ; display: flex ; justify-content:center; flex-direction:column ;align-items:center; ">
        <h1>Hey pal...:) </h1>
        <p> Do See my Api-end points which will do certain things for ya like......</p>
        <br/>
        <h1>Endpoint : "/write"</h1>
        <p>This will create a text file in a particular folder</p>
  <h1>Endpoint : "/read"</h1>
        <p>This wil retrive all the text files in a folder</p>
        </div>`)
})


//1. For create a text file in a particular folder

 // when the endpoint is /write we are going to create files.
 
 app.get("/write",(req,res)=> {  

//i--we are gonna get the timestamp for the file name

//getting current date and time
const timestamp=new Date(); 

//formating the current date and time eg:(12-07-2024-10-30-15)
const formattimestamp= format(timestamp,"dd-MM-yyyy-hh-mm-ss") 

//ii--we are gonna give the path to the file

//Timestamp---folder we should create to store the files 
// formattimestamp.txt ----is a file we create when the endpoint is called.

const filepath=path.join("Timestamp",`${formattimestamp}.txt`)


//fs.writeFilesSync -- inbuild func to write files

fs.writeFileSync(filepath,`${new Date()}`,"utf8") //(path,name,format)
res.send(`File created with timestamp${formattimestamp}`) //sending the message to the user


})

//2. Retrive all the text files in a folder
     //when the endpoint is /read we are going to show the files to the user

app.get("/read", (req, res) => {
    const folderpath = "Timestamp";  //the created folder where the files are stored

    try {
        // Read all files in the directory - Timestamp
        const files = fs.readdirSync(folderpath);

        res.send(files);// send the files to the user


    } catch (err) {
        console.error(err);
        res.status(500).send("Error reading files");
    }
});

  



app.listen(port,()=>{
    console.log(`This port is running and responding to ${port}`)
})
