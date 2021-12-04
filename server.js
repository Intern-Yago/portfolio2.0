const express = require("express")
const app = express()

app.use(express.static("public"))


app.use("/", (req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

app.listen(process.env.PORT || 8000, ()=>{
    console.log("Servidor rodando!\nVisit: http://localhost:8000\n")
})