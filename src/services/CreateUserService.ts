//Classe responsável pelas regras de negócio da aplicação, baseada no README.md

import { UsersRepositories } from "../repositories/UsersRepositories"
import {getCustomRepository} from "typeorm" 
import {hash} from "bcryptjs";

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean
    password: string;
}

class CreateUserService {
    async execute({name, email, admin = false, password} : IUserRequest) {
        const usersRepository = getCustomRepository(UsersRepositories);
        
        //Verifica se o email está preenchido corretamente
        if (!email) {
            throw new Error("Email is incorrect!");
        }

        const userAlreadyExists = await usersRepository.findOne({
            email
        });

        //Verifica se o usuário já existe
        if (userAlreadyExists) {
            throw new Error("User already exists");
        }

        const passwordHash = await hash(password, 8)

        const user = usersRepository.create({
            name,
            email,
            admin,
            password: passwordHash,
        })

        //Salva no banco
        await usersRepository.save(user);

        return user;
    }
}

export {CreateUserService}