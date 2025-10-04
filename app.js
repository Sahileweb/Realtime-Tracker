const express = require('express');
const app = express();
const http = require('http');
const socketio=require('socket.io');
const server = http.createServer(app);
const io = socketio(server);
const path = require('path');

app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));

io.on('connection',(socket)=>{
    socket.on('sendlocation',(data)=>{
        io.emit('receivelocation',{id:socket.id,...data});
});
socket.on('disconnect',()=>{
    io.emit('userdisconnected',socket.id);
})
});

app.get('/',(req,res)=>{
    res.render('index');
})

// server.listen(3000);
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
