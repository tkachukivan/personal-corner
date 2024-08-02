import { CreationOptional, DataTypes, Model } from 'sequelize';

import sequelize from '../../db/index.js';

export class PeakFlow extends Model {
    declare id: CreationOptional<string>;
    declare peakFlowValue: number;
    declare userId: string;
    declare recordDate: Date;
}

PeakFlow.init(
    {
        id: {
            allowNull: false,
            autoIncrementIdentity: true,
            primaryKey: true,
            type: DataTypes.BIGINT,
            unique: true,
        },
        peakFlowValue: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        recordDate: {
            allowNull: false,
            type: DataTypes.DATE,
        },
        userId: {
            allowNull: false,
            type: DataTypes.STRING,
        },
    },
    { sequelize, tableName: 'PeakFlow', timestamps: false },
);
