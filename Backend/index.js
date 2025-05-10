const express = require('express');
const urlRoute=require('./routes/url')
const userRoute=require('./routes/user')
const {connecttodb} = require('./connect')
const cookieparser = require('cookie-parser')
const cors = require('cors')
const app = express();
const PORT = ;

connecttodb('').then(()=> console.log("Mongo Online")).catch(()=> console.log("Error"));

app.use(express.json());
app.use(cookieparser());
app.use(cors({
    "origin":'',
    "credentials":true
}));
app.use(express.urlencoded({extended: false}));
app.use('/', urlRoute);
app.use('/links', urlRoute);
app.use('/verify',userRoute);
app.use('/user', userRoute);

app.listen(PORT, ()=> console.log("Server Connected at "+PORT));
