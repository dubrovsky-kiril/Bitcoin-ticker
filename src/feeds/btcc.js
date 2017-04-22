

var socket = io('https://websocket.btcchina.com/');
socket.emit('subscribe', ['marketdata_cnybtc']);
socket.emit('subscribe', ['marketdata_cnyltc']);
socket.on('connect', function(){
    console.log("Hello,btcc!");
      socket.on('trade', function (data) {
        console.log("Hello,trade!");
          console.log(data);});
});
