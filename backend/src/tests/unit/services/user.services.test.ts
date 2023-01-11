import sinon from "sinon";
import chai from "chai";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import chaiHttp = require("chai-http");

import UserModel from "../../../models/User.model";
import userService from "../../../services/user.service";
import jsonwebtoken from "jsonwebtoken";
import ILogin from "../../../interfaces/ILogin";
import IUser from "../../../interfaces/IUser";
import { userMockFromDB, token, login } from "../../mocks/user.mock";

chai.use(chaiHttp);

const { expect } = chai;

describe("Testa a rota /login e /user", () => {
  afterEach(function () {
    sinon.restore();
  });

  describe("Testa método POST na rota /login", () => {
    it("Usuário consegue fazer login com sucesso", async () => {
      sinon.stub(UserModel, "findOne").resolves(userMockFromDB as IUser);
      sinon.stub(jsonwebtoken, "sign").resolves(token);

      const response = await userService.login(login as ILogin);
      expect(response).to.be.equal(token);
    });
  });

  describe("Testa método POST na rota /user", () => {
    it("Usuário consegue se cadastrar com sucesso", async () => {
      sinon.stub(UserModel, "create").resolves(userMockFromDB as IUser);

      const response = await userService.create({
        ...login,
        email: "admin@email.com",
      } as ILogin);
      expect(response).to.be.equal("admin created successfully");
    });
  });
});
