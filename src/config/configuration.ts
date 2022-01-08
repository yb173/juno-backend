import { entities } from '../entities';

export const configuration = () => ({
  port: parseInt(process.env.PORT, 10) || 6000,
  database: {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities:
      process.env.NODE_ENV === 'development'
        ? entities
        : ['src/**/**.entity{.ts,.js}'], // webpack hot reloadingでも読み込むようにする
    synchronize: false,
  },
});
