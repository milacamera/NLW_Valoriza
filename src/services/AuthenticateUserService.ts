import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"

import {compare} from "bcryptjs";
import {sign} from "jsonwebtoken";

interface IAuthenticateRequest{
    email: string;
    password: string;
}

class AuthenticateUserService {
    async execute({email, password}: IAuthenticateRequest) {
        const usersRepositories = getCustomRepository(UsersRepositories);

        //Verficar se email existe
        const user = await usersRepositories.findOne({
            email
        });

        if(!user) {
            throw new Error("Email/Password incorrect")
        }

        //Verificar se senha está correta, comparando a senha cadastrada pelo user com a senha criptografada
        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch) {
            throw new Error("Email/Password incorrect")
        }

        //Gerar token
        const token = sign(
            {
            email: user.email
            }, 
            "e7dcca4d92d100563afb4a2be8a6999e", 
            {
                subject : user.id,
                expiresIn: "1d",
            }
        );
        return token;
    }
}

export {AuthenticateUserService}