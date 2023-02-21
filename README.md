# Desafio SHARENERGY 2023/01

## Objetivo

A aplicação desenvolvida conta com algumas páginas e funcionalidades, são elas:

- Login do usuário
- Cadastro de novos usuários
- Consumo de APIs externas
- Visualização dos clientes cadastrados no banco
- Atualização de clientes
- Cadastro de novos clientes
- Remoção de clientes

## Tecnologias e Ferramentas

<div>
   <img src='https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white' alt='HTML' />
    <img src='https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white' alt='CSS3' />
    <img src='https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black' alt='JavaScript' />
    <img src='https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB' alt='ReactJS' />
    <img src='https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white' alt='React-router' />
    <img src='https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white' alt='ESlint' />
    <img src="https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E" alt="Prettier" />
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="NodeJS"/>
    <img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white" alt="Docker"/>
    <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express"/>
    <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" />
    <img src="https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=Swagger&logoColor=white" alt="Swagger" />
    <img src="https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white" alt="Material ui" />
    <img src="https://img.shields.io/badge/Mocha-8D6748?style=for-the-badge&logo=Mocha&logoColor=white" alt="Mocha" />
    <img src="https://img.shields.io/badge/chai-A30701?style=for-the-badge&logo=chai&logoColor=white" alt="Chai" />
</div>

<br>

Na elaboração deste projeto utilizou-se as seguintes ferramentas:

### Front-end

- HTML
- CSS
- [ReactJS](https://pt-br.reactjs.org/)
- [React router](https://reactrouter.com/en/main)
- [TypeScript](https://www.typescriptlang.org/)
- [Material ui](https://mui.com/)

### Back-end

- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [Docker](https://www.docker.com/)
- [Mongoose](https://mongoosejs.com/)
- [MongoDB](https://www.mongodb.com/)
- [JWT](https://jwt.io/)
- Arquitetura Model-Service-Controller

### Testes

- [Mocha](https://mochajs.org/)
- [Sinon](https://sinonjs.org/)
- [Chai](https://www.chaijs.com/)

### Alinhamento de código

- [ESlint](https://eslint.org/)
- [Prettier](https://prettier.io/)

### Documentação

- [Swagger](https://swagger.io/)

### APIs externas

- [Random User Generator](https://randomuser.me/)
- [HTTP Cat](https://http.cat/)
- [Random Dog](https://random.dog/)

## ⚙️ Execução

Para executar a aplicação inicie realizando o clone deste repositório com o comando abaixo.

    git clone git@github.com:larissaperinoto/desafio-sharenergy-2023-01.git

Navegue até a raíz do projeto.

    cd desafio-sharenergy-2023-01/

Execute nas pastas backend e, posteriomente, na pasta frontend o comando para instalar as dependencias do projetos.

    cd backend && npm install
    cd ..
    cd frontend && npm install
    cd ..

Novamente na raíz do projeto, suba os containers do **sharenergy_frontend**, **sharenergy_backend** e **sharenergy_db** com o comando abaixo

    docker-compose up -d

Para acessar os logs dos containers:

- frontend: `docker logs --details sharenergy_frontend`
- backend: `docker logs --details sharenergy_backend`
- banco de dados `docker logs --details sharenergy_db`

## Como logar na aplicação

Acesse em seu navegador no endereço `localhost:3000` e clique em `Cadastrar` para cria uma conta. Na página de cadastro insira as credenciais a seguir:

- Username: `desafiosharenergy`
- Email: `sharenergy@email.com`
- Senha: `sh@r3n3rgy`

Em seguida, se direcione para a página de `Login` e faça o login na aplicação usando o username e senha cadastrados.

## Documentação da API

Para acessar a documentação da API acesse no seu navegador o endereço `localhost:3001/docs` após seguir os passos de execução do projeto como descritos no tópico Execução.

<details>
<summary>Prévia da documentação</summary>

![Captura de tela de 2023-01-11 11-40-38](https://user-images.githubusercontent.com/98956659/211838104-d92da152-8ecf-4faa-9c18-3a2c832915a9.png)

</details>

## Explicando a aplicação

Acessem o breve vídeo explicativo sobre as funcionalidades e como utlizar a aplicação.

[![Watch the video](https://user-images.githubusercontent.com/98956659/211910752-da9902f8-03ac-4d39-8c3a-5f9fa0d4c5c8.png)](https://youtu.be/x39Nhq84JKs)

---

Desenvolvido por [Larissa Perinoto](https://larissaperinoto.com.br/), © 2023.

<div>
    <a href = "mailto:perinotolarissa@gmail.com"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="Linkedin" /></a>
   <a href="http://www.linkedin.com/in/larissaperinoto" target="_blank"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" /></a>
</div>
