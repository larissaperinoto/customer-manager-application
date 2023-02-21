# Customer Manager Application

## Description

Customer Manager is a application to manage clients and allows to organize a business service sector, for example.

The application have some functionalities:

- User login verification
- Register new users
- Access customers from the database
- Update customers information
- Register new customers
- Delete customers

## Technologies and Tools

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

This project was developed using the following tools and technologies:

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

### Tests

- [Mocha](https://mochajs.org/)
- [Sinon](https://sinonjs.org/)
- [Chai](https://www.chaijs.com/)

### Code alignment

- [ESlint](https://eslint.org/)
- [Prettier](https://prettier.io/)

### Documentation

- [Swagger](https://swagger.io/)

### External APIs

- [Random User Generator](https://randomuser.me/)

## ⚙️ How to run

To run this application start cloning this repository using the following command.

    git clone git@github.com:larissaperinoto/customer-manager-application.git

Navigate to the root folder of the project.

    cd customer-manager-application/

Install the project dependencies using the following command sequence.

    cd backend && npm install
    cd ..
    cd frontend && npm install
    cd ..

In the root of the project, upload the containers of **customer_manager_frontend**, **customer_manager_backend** and **customer_manager_db** with the following command.

    docker-compose up -d

Acess the containers logs:

  - frontend: `docker logs --details customer_manager_frontend`
  - backend: `docker logs --details customer_manager_backend`
  - banco de dados `docker logs --details customer_manager_db`

## How to login

Go to `localhost:3000` in your browser and click on `Register` to create an account. After creating an account, go to the `Login` page and login to the application using the registered username and password.

## API documentation

To access the API documentation, go to `localhost:3001/docs` in your browser after following the project execution steps as described in the "How to run" topic.

<details>
<summary>Documentation preview</summary>

![Captura de tela de 2023-02-21 13-54-41](https://user-images.githubusercontent.com/98956659/220409913-e9a2232b-2f3d-4ab7-b310-4bcca8ec8e42.png)


</details>

---

Deelop by [Larissa Perinoto](https://larissaperinoto.com.br/), © 2023.

<div>
    <a href = "mailto:perinotolarissa@gmail.com"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="Linkedin" /></a>
   <a href="http://www.linkedin.com/in/larissaperinoto" target="_blank"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" /></a>
</div>
