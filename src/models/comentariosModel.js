import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
export const comentarios = sequelize.define('comentarios',{
    idComentarios:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    comentario:{
        type: DataTypes.TEXT,
    },

},{
    timestamps: true,
});
