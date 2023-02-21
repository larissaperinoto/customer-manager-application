import sinon from "sinon";
import chai from "chai";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import chaiHttp = require("chai-http");

import app from "../../app";
import jsonwebtoken from "jsonwebtoken";
import IClient from "../../interfaces/IClient";
import { clientPost, customersMock } from "../mocks/customers.mock";
import ClientModel from "../../models/Client.model";
import { login, token } from "../mocks/user.mock";

chai.use(chaiHttp);

const { expect } = chai;

describe("Testes de integração nas rota /customers", () => {
  afterEach(function () {
    sinon.restore();
  });

  describe("Testa método GET na rota /customers", () => {
    it("Não é possível acessar a rota sem o token de acesso", async () => {
      sinon
        .stub(ClientModel, "find")
        .resolves(customersMock as unknown as IClient[]);

      const response = await chai
        .request(app)
        .get("/customers")
        .set("authorization", "");

      expect(response.status).to.be.equal(401);
      expect(response.body).to.be.deep.equal({ message: "Token not found" });
    });

    it("É possível obter todos os clientes", async () => {
      sinon.stub(jsonwebtoken, "verify").resolves({ username: login.username });
      sinon
        .stub(ClientModel, "find")
        .resolves(customersMock as unknown as IClient[]);

      const response = await chai
        .request(app)
        .get("/customers")
        .set("authorization", token);

      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.deep.equal(customersMock);
    });
  });

  describe("Testa método POST na rota /customers", () => {
    it("É possível cadastrar um cliente", async () => {
      sinon.stub(jsonwebtoken, "verify").resolves({ username: login.username });

      sinon
        .stub(ClientModel, "create")
        .resolves(clientPost as unknown as IClient);

      const response = await chai
        .request(app)
        .post("/customers")
        .send(clientPost)
        .set("authorization", token);

      expect(response.status).to.be.equal(201);
      expect(response.body).to.be.deep.equal(clientPost);
    });
  });
});
