const { io } = require('../server');
io.on('connection', (client) => {
    console.log('se conecto cliente back');

    client.emit('enviarMensaje', {
        usuario: 'administrador',
        mensaje: 'Bievenidos a esta app'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado back');
    });

    //escuchar al cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);
        //broadcast es a todos los usuauiros que esten conectados
        client.broadcast.emit('enviarMensaje', { data });
        /*if (mensaje.usuario) {
            callback({
                resp: 'TTODO SALIO BIEN'
            });
        } else {
            callback({
                resp: 'TODO SALIO MAL!!!!!!'
            });
        }*/
    });
});