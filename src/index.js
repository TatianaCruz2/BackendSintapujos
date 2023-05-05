//IMPORTAMOS APP DEL ARCHIVO APP.JS
import app from './app.js';
//IMPORTAMOS LA INSTANCIA DE SEQUELIZE
import { sequelize } from './database/database.js';
//Importar los Modulos creados para visualizar las tablas a la fuerza
import './models/psicologaModel.js';
import './models/juegosModel.js';
import './models/eventoModel.js';
import './models/enfermeraModel.js';
import './models/comentariosModel.js';
import './models/aprendizModel.js';
    


//SERVIDOR BASICO QUE ESTA ESCUCHANDO EN EL PUERTO 3000
async function main() {
    try {
        //ELIMINA Y CREA TABLAS
        await sequelize.sync({ force: false });
        app.listen(4000);
        console.log('server is listening on port :)', 4000)

    } catch (error) {
        console.log("Unable to connect to the database: ", error);
    }
}


main();