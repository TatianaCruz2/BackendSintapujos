import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
export const evento = sequelize.define('evento',{
    idEvento:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    imagen:{
        type: DataTypes.BLOB('long'),
        allowNull: false,
    },

},{
    timestamps: true
});