//Classe responsável por verificar se o usuário possui credenciais e privilégios de administrador

import {Request, Response, NextFunction} from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

export async function ensureAdmin(request: Request, response: Response, next: NextFunction) {

    const {user_id} = request;
    console.log(user_id);

    const usersRepositories = getCustomRepository(UsersRepositories);

    const {admin} = await usersRepositories.findOne(user_id);
    
    //Se é admin, prossegue
    if(admin) {
        return next();
    }

    //Se não é admin, status unauthorized
    return response.status(401).json({
        error: "User unauthorized",
    });
}