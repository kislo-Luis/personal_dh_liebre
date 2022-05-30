const express = require('express') // requerimos expres
const app = express() // ejecutamos express dentro de la var app
const path = require('path') // path para sendFile y para resolver rutas join resolve.
app.listen( 3000,console.log('server running 3000'))//declaramos el puerto para el server local
app.use(express.static('public'));//aca atraves de app y el metodo use static de express avisamos que vamos a usar imagenes staticas


app.get('/', (req, res)=>res.sendFile(path.join(__dirname,'views/home.html'))); // aca usamos path para usar index.html y que la ruta nos lleve




  
