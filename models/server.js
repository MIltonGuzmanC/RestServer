    const express = require('express');
    const colors = require('colors');
    const cors = require('cors');

class Server
{   
    constructor()
    {
        this.app = express();
        this.port = process.env.PORT;
        
        this.routes();
        this.midlewares();
        this.start(this.port);
    }

    //MIDLEWARES
    midlewares(){
        //llamado a cors
        this.app.use(cors());
        //acceso a directorio publico
        this.app.use(express.static('public'));

        //lectura y parseo del body
        this.app.use(express.json);
    }

    //RUTAS
    routes()
    {
        this.app.use('/api/users',require('../routes/user'));
    }

    //ESCUCHANDO EL PUERTO
    start(port){
        this. app.listen(port,()=>{
            console.log(`Escuchando en el puerto '${port}`.green);
        });
    }

}
module.exports = Server;