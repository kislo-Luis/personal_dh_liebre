const express = require('express') 
const app = express() 
const path = require('path') 


//server run in port:
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});


app.use(express.urlencoded({extended:false}));

//static
app.use(express.static(path.join(__dirname,'public')));

//rutas

app.get('/', (req, res)=>res.sendFile(path.join(__dirname,'views/home.html'))); 

app.get('/login.html', (req, res) =>res.sendFile(path.join(__dirname, 'views/login.html')));

app.get('/register.html', (req, res) =>res.sendFile(path.join(__dirname, 'views/register.html')));




  
