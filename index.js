const express=require("express")
const router=require("./src/routes")
const app=express()
const cors=require("cors")



app.use(express.json())


app.use(cors())
app.options("*",cors())

app.use("/",router)

app.use("*",(req,res)=>{
    return res.status(404).send("aradığınız sayfa bulunamadı")
})

app.listen(3000,()=>{
    console.log("http server 3000 portu dinleniyor")
})