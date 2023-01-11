import sinon from "sinon";
import chai from "chai";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import chaiHttp = require("chai-http");

import app from "../../app";
import jsonwebtoken from "jsonwebtoken";
import IClient from "../../interfaces/IClient";
import { login, userMockFromDB, token } from "../mocks/user.mock";
import UserModel from "../../models/User.model";

chai.use(chaiHttp);

const { expect } = chai;

describe("Testes de integração nas rota /user e /login", () => {
  afterEach(function () {
    sinon.restore();
  });

  describe("Testa método POST na rota /login", () => {
    it("Usuário consegue fazer login com sucesso", async () => {
      sinon
        .stub(UserModel, "findOne")
        .resolves(userMockFromDB as unknown as IClient);
      sinon.stub(jsonwebtoken, "sign").resolves(token);

      const response = await chai.request(app).post("/login").send(login);

      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.deep.equal({ token });
    });

    it('Usuário não informa o campo "username"', async () => {
      const response = await chai
        .request(app)
        .post("/login")
        .send({ password: login.password });

      expect(response.status).to.be.equal(400);
      expect(response.body).to.be.deep.equal({
        message: '"username" is required',
      });
    });

    it('Usuário não informa o campo "password"', async () => {
      const response = await chai
        .request(app)
        .post("/login")
        .send({ username: login.username });

      expect(response.status).to.be.equal(400);
      expect(response.body).to.be.deep.equal({
        message: '"password" is required',
      });
    });
  });

  describe("Testa método POST na rota /user", () => {
    it("Usuário consegue se cadastrar com sucesso", async () => {
      sinon.stub(UserModel, "create").resolves();

      const response = await chai
        .request(app)
        .post("/user")
        .send({ ...login, email: userMockFromDB.email });

      expect(response.status).to.be.equal(201);
      expect(response.body).to.be.deep.equal("admin created successfully");
    });
  });
});
