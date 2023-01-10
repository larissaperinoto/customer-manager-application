import sinon from "sinon";
import chai from "chai";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import chaiHttp = require("chai-http");

import UserModel from "../../../models/User.model";
import userService from "../../../services/user.service";
import jsonwebtoken from "jsonwebtoken";
import ILogin from "../../../interfaces/ILogin";
import IUser from "../../../interfaces/ILogin";
import { userMock, token } from "./mocks/user.mock";

chai.use(chaiHttp);

const { expect } = chai;

describe("Testa a rota /login", () => {
  afterEach(function () {
    sinon.restore();
  });

  describe("Testa método POST na rota /login", () => {
    it("Usuário consegue fazer login com sucesso", async () => {
      sinon.stub(UserModel, "findOne").resolves(userMock as IUser);
      sinon.stub(jsonwebtoken, "sign").resolves(token);

      const credentials = {
        username: "admin",
        password: "senha123",
      };

      const response = await userService.login(credentials as ILogin);
      expect(response).to.be.equal(token);
    });
  });

  describe("Testa método POST na rota /user", () => {
    it("Usuário consegue se cadastrar com sucesso", async () => {
      sinon.stub(UserModel, "create").resolves(userMock as IUser);

      const credentials = {
        email: "admin@email.com",
        username: "admin",
        password: "senha123",
      };

      const response = await userService.create(credentials as ILogin);
      expect(response).to.be.equal("admin created successfully");
    });
  });
});
