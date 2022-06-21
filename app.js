const express = require("express")

const path = require("path")

const app = express()

// creado recursos de archivos estaticos
const publicPath = path.resolve(__dirname, "./public");

// middelware
app.use(express.static(publicPath))


//rutas : get, post, put, delete
/*app.listen(3001,()=>{
    console.log("servidor escuchando puerto 3001 funcionando")
})*/

app.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/home.html"))
})

app.get("/produc",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/form_produc.html"))
})

app.get("/register",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/register.html"))
})

app.get("/login",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/login.html"))
})

app.set('puerto',process.env.PORT || 3000)



app.listen(app.get('puerto'), ()=>console.log(`Servidor escuchando en puerto ${app.get('puerto')}`));