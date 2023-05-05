import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
export const horas = sequelize.define('hora',{
    hora_id:{
        type: DataTypes.INTEGER.UNSIGNED,
        primarykey: true,
        autoIncrement: true
    },
    hora_inicio:{
        type: DataTypes.TIME,
        allowNull: false
    },
    hora_final:{
        type: DataTypes.TIME,
        allowNull: false
    }
},{
    //CreatedAt y UpdatedAt no aparescan.
     timestamps: false
});
export default horas;