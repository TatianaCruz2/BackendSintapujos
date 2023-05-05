import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
//Importa la constante comentarios del modelo comentariosModel para hacer la relacion.
import { comentarios } from "./comentariosModel.js";
//Importa la constante juego del modelo juegosModel para hacer la relacion.
import { juego } from "./juegosModel.js";


export const aprendiz = sequelize.define('aprendices', {
   aprendiz_id:{
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
   aprendiz_nombre: {
        type: DataTypes.STRING(50),
        // allowNull: false,
    },
   aprendiz_apellido: {
        type: DataTypes.STRING(50),
        // allowNull: false,
    },
   aprendiz_tipoDocumento: {
        type: DataTypes.STRING(50),
        // allowNull: false,
    },
    aprendiz_numeroDocumento: {
        type: DataTypes.STRING(20),
        // allowNull: false,
    },
    aprendiz_telefono: {
        type: DataTypes.INTEGER(12),
    },
    aprendiz_fechaNacimiento: {
        type: DataTypes.DATE,
        // allowNull: false,
    },
    aprendiz_correoElectronico: {
        type: DataTypes.STRING(100),
        // allowNull: false,
        isEmail: true,
    },
   aprendiz_contraseñaLogin: {
        type: DataTypes.STRING(80),
        // allowNull: false,
    },
    aprendiz_numeroFicha: {
        type: DataTypes.STRING(20),
        allowNull: false,
        
    },
}, {
    //CreatedAt y UpdatedAt no aparescan.
    timestamps: false,
});

//Relacion de uno a muchos aprendiz - comentarios
aprendiz.hasMany(comentarios, {
    foreignkey: 'aprendizId',
    sourcekey: 'id'
})
comentarios.belongsTo(aprendiz, {
    foreignkey: 'aprendizId',
    targetId: 'idComentarios'
});

//Relacion de un a muchos aprendiz - juegos
aprendiz.hasMany(juego, {
    foreignkey: 'aprendizJuegoId',
    sourcekey: 'id',

});

export default aprendiz;