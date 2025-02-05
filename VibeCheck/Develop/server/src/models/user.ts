import {Model, DataTypes, Sequelize } from 'sequelize';
import brcrypt from 'bcryptjs';

export class User extends Model {
    public id!: number;
    public email!: string;
    public password!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

    public validatePassword(password: string): boolean {
        return brcrypt.compareSync(password, this.password);
    }
}

export const initUserModel = (sequelize: any) => {

    User.init(
        {
            id:{
              type: DataTypes.INTEGER,
              primaryKey: true,
              autoIncrement: true,  
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            password: {
                type:DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: "User",
        }
    );
};