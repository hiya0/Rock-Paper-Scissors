const express= require("express");
var app = express();
const path = require('path');
const router = express.Router();

app.use(express.static(__dirname + '/public'));

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/views/index.html'));
});

router.get('/computer',(req,res)=>{
    res.sendFile(path.join(__dirname+'/views/computer/comp.html'));
});

router.get('/multiplayer',(req,res)=>{
    res.sendFile(path.join(__dirname+'/views/multiplayer/room.html'));
});

app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');

