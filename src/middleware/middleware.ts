import { Application, json } from "express";
import morgan from "morgan";
import swaggerUI from "swagger-ui-express";
import { RegisterRoutes } from "../routes/routes";
import swaggerDocument from "../doc/swagger.json";

export const applyMiddlewares = (app: Application) => {
    app.use(json())
    app.use(morgan('combined'))
    // routes
    RegisterRoutes(app)
    //swagger
    app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
    // error handler
}