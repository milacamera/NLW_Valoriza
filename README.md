# NLWValoriza

## ABOUT THE PROJECT
The project is based on an application of appreciating your colleague/friend/collaborator.
 On the platform, the user can use #tags to exalt qualities in the other, adding comments 
 as a form of reward for some collaboration of the partner.

## PROJETC RULES
- User Registration
    [x]  It isn't allowed register more than one user with the same email address
    [x]  It isn't allowed register user without email address

- TAG Registration
    [x] It isn't allowed register more than one tag with the same name (duplicated tags)
    [x] It isn't allowed register user without name
    [x]  It isn't allowed register a tag for non admin user

- Compliments Registration
    [x] It isn't allowed an user register a compliment for yourself
    [x] It isn't allowed register a compliment for invalid users
    [x] The user must be authenticated on the application

## FRAMEWORKS
- Frameworks: 
    Database - SQLite3 + BeeKeeper
    ORM - TypeORM
    API - Insomnia

## NOTES (in portuguese)
 * Application flow:
    Server -> Routes -> Controller -> Service

 * GET -> Buscar uma informação
 * POST -> Inserir ou criar uma informação
 * PUT -> Alterar uma informação
 * DELETE -> Remover um dado
 * PATCH -> Alterar uma informação específica

 * Tipos de parâmetros:
 * Routes Params => Fazem parte da rota. Ex.: http://localhost:3030/produtos/2154648321689 (ID da rota)
 * Query Params => Fazem parte de uma query. Usado para buscas e filtros. 
 *                 Ex.: http://localhost:3030/produtos?name=teclado&description=tecladobom
 * Diferença entre Route e Query Params é que o Query não é obrigatório na rota e não vem explícito na rota
 * Body Params => Utilizado para os métodos POST, PUT e PATCH. Não utilizado para método GET
 *                Vêm no corpo da requisição
 *                 Ex. em JSON: {
 *  "name": "teclado",
 *  "description": "teclado bom"
 * }

 * Middleware: 
    Interceptadores dentro de uma requisição. Usados para interomper uma requisição por completo ou adicionar uma função
    Exemplo na aplicação: 
        app.use(router);
        /Injeta as rotas na aplicação

        app.use(express.json());
        //Habilita um json para fazer requisições a partir da variavel app criada

        app.listen(3030, () => console.log("Server is running"));
        //Habilita a porta 3030 e mostra uma mensagem de que o servidor está rodando quando conectado corretamente na porta

 * JWT - JSON Web Token:
    Padrão  de token com propriedades como id de usuário, criptografia, por exemplo, e outras ferramentas de autenticação.
    Comunicação via token para não precisar de verificação via usuário de senha a todo momento
    O JWT é codificado e dividido por três partes no JSON, sendo separado por ponto.
        Header => algoritmo e tipo do token
        Payload => informações que quero passar dentro do token (dados não sensíveis)
        Verify Signature => concatenar primeira + segunda partes + validação do token com chave única
    Saber mais: www.jwt.io

 * MD5 Hash Generator - Site gerador de Hash/tokens
 


## NECESSARY COMMANDS 
- If you want to create this project from zero, run all of the commands below
- If not, just run npm install --global yarn and yarn install instead

npm install --global yarn

yarn init -y

yarn add typescript -D (instal ts just in development environment)

yarn tsc --init (initializes ts)

yarn add express

yarn add @types/express -D

yarn add ts-node-dev -D (automatically converts ts to js)

yarn add typeorm reflect-metadata sqlite3

yarn typeorm migration:create -n CreateUsers

yarn typeorm migration:run

yarn typeorm entity:create -n User (do this after added in the ormconfig.json the code "entitiesDir": "src/entity" below)

"cli": {
    "migrationsDir": "src/database/migrations",
    "entitiesDir": "src/entity"
}
yarn add uuid

yarn add @types/uuid -D

yarn add express-async-errors

yarn typeorm migration:create -n CreateTags

yarn typeorm migration:run

yarn typeorm entity:create -n Tag

yarn add jsonwebtoken

yarn add @types/jsonwebtoken -D

yarn typeorm migration:create -n AlterUserAddColumnPassword

yarn typeorm migration:run

yarn add bcryptjs

yarn add @types/bcryptjs -D

yarn typeorm migration:create -n CreateCompliments

yarn typeorm migration:run

yarn typeorm entity:create -n Compliment

yarn add class-transformer (It is a library that allows you to customize entities.)

yarn add cors (library needed when front-end makes API requests)

yarn add @types/cors -D


General Tips 💡
Useful commands:
yarn tsc (converte ts para js)

yarn dev (utilizado para rodar o projeto após a instalação do ts-node-dev)


Configurations below in package.json is used to transform the code js in code ts using te ts-node-dev in a automatic way.
"scripts": {
    "dev": "ts-node-dev src/server.ts"
}
How to revert a migration:
yarn typeorm migration:revert
