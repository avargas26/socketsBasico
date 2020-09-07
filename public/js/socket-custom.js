var socket = io();

socket.on('connect', function() {
    console.log('conectado al servidor frotn');
});
//los on son para escuchar
socket.on('disconnect', function() {
    console.log('se desconecto usuari front');
});

//los emit son para enviar información emitir
socket.emit('enviarMensaje', {
    usuario: 'Andres',
    mensaje: 'hola mundo'
}, function(resp) {
    console.log('Respuest server', resp);
});

//escuchar información del server
socket.on('enviarMensaje', function(respuesta) {
    console.log('Servidor: ', respuesta);
});