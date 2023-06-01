import express, { Request, Response } from "express";
import { userRouter } from "./routers/user";
import { commentRouter } from "./routers/comments";
import { tacticsRouter } from "./routers/tactics";
import swaggerUI from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";

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

app.use('/users', userRouter)
app.use('/comments', commentRouter)
app.use('/tactics', tacticsRouter)

  app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(openapiSpecification));
  app.use("/swagger.json", (req: Request, res: Response) =>
    res.json(openapiSpecification).status(200)
  );
  
  app.listen(port, () => console.log(`Application started on port: ${port}`));

