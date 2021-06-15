const ws = new WebSocket('ws://localhost:9898');

ws.onopen = function (){
    console.log('Websocket Client Connected');
    ws.send("CLIENT: Connected");
};

function send(message){
    ws.send(message);
}

ws.onmessage = function (e){
    console.log("Server: '" + e.data + "'")
    document.getElementById("log").innerHTML += "Server:" + e.data + "\n";
};