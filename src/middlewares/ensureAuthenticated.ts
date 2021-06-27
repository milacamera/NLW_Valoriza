import {Request, Response, NextFunction} from "express";
import {verify} from "jsonwebtoken";

interface IPayload {
    sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    //Receber o token
    const authToken = request.headers.authorization

    //Validar se o token está preenchido
    if(!authToken) {
        return response.status(401).end();
    }

    //Confirmar se o token é válido
    const [,token] = authToken.split(" ")

    try {
        const {sub} = verify(token, "e7dcca4d92d100563afb4a2be8a6999e") as IPayload;
        
    //Recuperar informações do user
        request.user_id = sub;
        
        return next();
    } catch(err) {
        return response.status(401).end();
    }


    return next();
}