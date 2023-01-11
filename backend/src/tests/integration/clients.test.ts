import sinon from "sinon";
import chai from "chai";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import chaiHttp = require("chai-http");

import app from "../../app";
import jsonwebtoken from "jsonwebtoken";
import IClient from "../../interfaces/IClient";
import { clientPost, clientsMock } from "../mocks/clients.mock";
import ClientModel from "../../models/Client.model";
import { login, token } from "../mocks/user.mock";

chai.use(chaiHttp);

const { expect } = chai;

describe("Testes de integração nas rota /clients", () => {
  afterEach(function () {
    sinon.restore();
  });

  describe("Testa método GET na rota /clients", () => {
    it("Não é possível acessar a rota sem o token de acesso", async () => {
      sinon
        .stub(ClientModel, "find")
        .resolves(clientsMock as unknown as IClient[]);

      const response = await chai
        .request(app)
        .get("/clients")
        .set("authorization", "");

      expect(response.status).to.be.equal(401);
      expect(response.body).to.be.deep.equal({ message: "Token not found" });
    });

    it("É possível obter todos os clientes", async () => {
      sinon.stub(jsonwebtoken, "verify").resolves({ username: login.username });
      sinon
        .stub(ClientModel, "find")
        .resolves(clientsMock as unknown as IClient[]);

      const response = await chai
        .request(app)
        .get("/clients")
        .set("authorization", token);

      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.deep.equal(clientsMock);
    });
  });

  describe("Testa método POST na rota /clients", () => {
    it("É possível cadastrar um cliente", async () => {
      sinon.stub(jsonwebtoken, "verify").resolves({ username: login.username });

      sinon
        .stub(ClientModel, "create")
        .resolves(clientPost as unknown as IClient);

      const response = await chai
        .request(app)
        .post("/clients")
        .send(clientPost)
        .set("authorization", token);

      expect(response.status).to.be.equal(201);
      expect(response.body).to.be.deep.equal(clientPost);
    });
  });
});
