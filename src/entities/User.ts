//Classe responsável por fazer a representação do banco de dados na aplicação
import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm"
import {v4 as uuid} from "uuid";
import {Exclude} from "class-transformer";

@Entity("Users")
class User {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    admin: boolean;

    @Exclude()
    @Column()
    password: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        //Se um novo usuário for criado
        if(!this.id) {
            //Então, será gerado um novo id para ele
            this.id = uuid();
        }
    }

}

export {User};
