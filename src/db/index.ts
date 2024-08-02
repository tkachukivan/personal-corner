import * as dotEnv from 'dotenv';
import { Sequelize } from 'sequelize';

dotEnv.config();

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
    dialect: 'postgres',
    host: process.env.DB_HOST,
    logging: function (str: string) {
        if (process.env.SEQ_LOGGING === 'true') {
            console.info(str);
        }
    },
    port: Number(process.env.DB_PORT),
    schema: process.env.DB_SCHEMA,
});

export default sequelize;
