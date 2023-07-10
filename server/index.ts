import express, { NextFunction, Request, Response, urlencoded } from "express";
import { accountsRouter } from "./routers/accounts";
import { commentRouter } from "./routers/comments";
import { tacticsRouter } from "./routers/tactics";
import { matchesRouter } from "./routers/matches";
import { authenticationRouter } from "./routers/authentication"; // Asegúrate de importar el enrutador correctamente
import { playersRouter } from "./routers/players";
import swaggerUI from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import cors from 'cors';

const verifyToken = require('./middleware/authentication').verifyToken;


const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Vue Academy",
    version: "1.0.0",
  },
  servers: [
    {
      url: 'http://localhost:3001',
      description: "Local development server",
    },
  ],
};

const openapiSpecification = swaggerJSDoc({
  swaggerDefinition,
  apis: ["./routers/*.ts"],
});

const app = express();
const port = 3001;


app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(openapiSpecification));
app.use("/swagger.json", (req: Request, res: Response) =>
  res.json(openapiSpecification).status(200)
);
app.use(urlencoded({ extended: true }))
app.use(cors())
app.use(express.json());

app.use('/authentication', authenticationRouter)
app.use('/accounts', accountsRouter)

app.all('*',verifyToken)

app.use('/comments', commentRouter)
app.use('/tactics', tacticsRouter)
app.use('/matches', matchesRouter)
app.use('/players', playersRouter)


app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (process.env.ENVIROMENT === 'DEV') {
    return res.status(500).send(err)
  }
  return res.status(500).send('Something has gone wrong')
})

app.listen(port, () => console.log(`Application started on port: ${port}`));

