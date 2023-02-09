const express=require('express');
const env=require('dotenv');
const app=express();
app.use(express.static("public"));
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/index.html")
})

let port=process.env.PORT;
if(port==null || port==""){
  port=3000;
}
app.listen(port);