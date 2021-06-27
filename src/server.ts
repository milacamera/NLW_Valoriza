import "reflect-metadata";
import express, {Request, Response, NextFunction} from "express";
import "express-async-errors";

import {router} from "./routes";

import "./database";

const app = express();

app.use(express.json());

app.use(router);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if(err instanceof Error) {
        return response.status(400).json({
            error: err.message
        })
    }
    return response.status(500).json({
        status: "error",
        message: "Internal Server ErrorS"
    })
})

app.listen(3030, () => console.log("Server is running"));
    // http://localhost:3030 (porta)


/** TESTS
 * app.get("/test", (request, response) => {
    // http://localhost:3030/test

    // Request -> Entrando
    // Response -> Saindo
    return response.send("Olá!");
});

app.post("/test-post", (request, response) => {
    // http://localhost:3030/test-post
    return response.send("Olá com método POST!");
});
*/




