import express from "express";
import cors from "cors";

// Importe suas rotas
import produtoRoute from "./route/produtos.js";
import clienteRoute from "./route/clientes.js";
import loginRouter from "./route/logins.js";

const app = express();

// Middleware para interpretar JSON e urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuração do CORS
const corsOptions = {
  origin: "*", // ou '*' para permitir de qualquer origem
  methods: ["GET", "POST", "PUT", "DELETE"], // Métodos permitidos
  allowedHeaders: ["Content-Type", "Authorization", "x-custom-header"], // Cabeçalhos permitidos
  exposedHeaders: ["X-Total-Count"] // Expondo o cabeçalho X-Total-Count
};

app.use(cors(corsOptions));

// Middleware para adicionar o cabeçalho X-Total-Count
app.use((req, res, next) => {
  res.set('X-Total-Count', '100'); // Defina o valor total aqui ou ajuste conforme necessário
  next();
});

// Rotas
app.use("/", produtoRoute);
app.use("/", clienteRoute);
app.use("/", loginRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}!`));


// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import { Sequelize } from "sequelize";

// // Carregar variáveis de ambiente do .env
// dotenv.config();

// // Importe suas rotas
// import produtoRoute from "./route/produtos.js";
// import clienteRoute from "./route/clientes.js";
// import loginRouter from "./route/logins.js";

// const app = express();

// // Middleware para interpretar JSON e urlencoded
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Configuração do CORS
// const corsOptions = {
//   origin: "*", // ou '*' para permitir de qualquer origem
//   methods: ["GET", "POST", "PUT", "DELETE"], // Métodos permitidos
//   allowedHeaders: ["Content-Type", "Authorization", "x-custom-header"], // Cabeçalhos permitidos
//   exposedHeaders: ["X-Total-Count"] // Expondo o cabeçalho X-Total-Count
// };

// app.use(cors(corsOptions));

// // Middleware para adicionar o cabeçalho X-Total-Count
// app.use((req, res, next) => {
//   res.set('X-Total-Count', '100'); // Defina o valor total aqui ou ajuste conforme necessário
//   next();
// });

// // Configuração do Sequelize
// const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PWD, {
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   dialect: process.env.DB_DIALECT
// });

// // Testa a conexão com o banco de dados
// sequelize.authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });

// // Rotas
// app.use("/", produtoRoute);
// app.use("/", clienteRoute);
// app.use("/", loginRouter);

// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}!`));
