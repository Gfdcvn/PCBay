const ws = new WebSocket('ws://localhost:9898');

ws.onopen = function (){
    console.log('Websocket Client Connected');
    ws.send("CLIENT: Hello, server!");
};

function send(message){
    ws.send(message);
}

ws.onmessage = function (e){
    console.log("Recieved: '" + e.data + "'")
};