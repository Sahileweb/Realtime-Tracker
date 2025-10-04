
const socket=io();
 if (navigator.geolocation){
    navigator.geolocation.watchPosition(
     (position)=>{
        const {latitude,longitude}=position.coords;
        socket.emit('sendlocation',{latitude,longitude});
     },
     (error)=>{
        console.log(error);
     },
     {
        enableHighAccuracy:true,
        timeout:5000,
        maximumAge:0
     }
    )
 }

 const map = L.map("map").setView([0,0],15);
 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    attribution:"sahil mundhe"
 }).addTo(map);

 const markers={};
 socket.on('receivelocation',(data)=>{
    const {id,latitude,longitude}=data;
    map.setView([latitude,longitude]);

    if(markers[id]){
        markers[id].setLatLng([latitude,longitude]);
    }
    else{
        markers[id]=L.marker([latitude,longitude]).addTo(map);
    }


 })

 socket.on('userdisconnected',(id)=>{
    map.removeLayer(markers[id]);
    delete markers[id];
 })