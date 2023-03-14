import { DataSource } from "typeorm";

//https://orkhan.gitbook.io/typeorm/docs/data-source-options

//versão para SQLite
const AppDataSource = new DataSource({
    database: 'bdaula.sqlite',
    type: "sqlite", // se for SQLite, então use sqlite
    // true indica que o schema do BD será criado a cada vez que a aplicação inicializar
    // deixe false ao usar migrations
    synchronize: false, 
    logging: true, // true indica que as consultas e erros serão exibidas no terminal
    entities: ["src/entities/*.ts"], // entidades que serão convertidas em tabelas
    migrations: ["src/migrations/*.ts"], // local onde estarão os arquivos de migração
    subscribers: [],
    maxQueryExecutionTime: 2000 // 2 seg.
});

AppDataSource
    .initialize()
    .then(() => {
        console.log("Data Source inicializado!")
    })
    .catch((e) => {
        console.error("Erro na inicialização do Data Source:", e)
    });

export default AppDataSource;

// import { DataSource } from "typeorm"
// import * as dotenv from 'dotenv'
// dotenv.config()

// //https://orkhan.gitbook.io/typeorm/docs/data-source-options
// export const AppDataSource = new DataSource({
//     //url: process.env.BD_URL,
//     host:'localhost',
//     port:5432,
//     username:'postgres',
//     password:'123',
//     database:'bdaula',
//     type: "postgres",
//     synchronize: false, // true indica que o schema do BD será criado a cada vez que a aplicação inicializar
//     logging: false, // true indica que as consultas e erros serão exibidas no terminal
//     entities: ["src/entity/*.ts"], // entidades que serão convertidas em tabelas
//     migrations: ["src/migrations/*.ts"], // local onde estarão os arquivos de migração
//     subscribers: [],
//     maxQueryExecutionTime: 2000 // 2 seg.
// })

// // https://orkhan.gitbook.io/typeorm/docs/data-source
// AppDataSource
//     .initialize()
//     .then(() => {
//         console.log("Data Source inicializado!")
//     })
//     .catch((e) => {
//         console.error("Erro na inicialização do Data Source:", e)
//     })