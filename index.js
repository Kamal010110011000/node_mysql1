const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5000 || process.env.PORT;

//routes import
const userRoutes = require('./router/user.route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res, next)=>{
    res.send("welcome to api app");
})

app.use('/users', userRoutes);

app.listen(port, ()=> { console.log(`running on http://localhost:${port}`)})