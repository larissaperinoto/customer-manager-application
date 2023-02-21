import sinon from "sinon";
import chai from "chai";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import chaiHttp = require("chai-http");

import customerservice from "../../../services/customers.service";
import { customersMock } from "../../mocks/customers.mock";
import ClientModel from "../../../models/Client.model";
import IClient from "../../../interfaces/IClient";

chai.use(chaiHttp);

const { expect } = chai;

describe("Testes de unidade para a camada service na rota /client", () => {
  afterEach(function () {
    sinon.restore();
  });

  describe("Testa método GET na rota /customers", () => {
    it("É possível buscar todos os clientes", async () => {
      sinon
        .stub(ClientModel, "find")
        .resolves(customersMock as unknown as IClient[]);

      const response = await customerservice.findAll();
      expect(response).to.be.equal(customersMock);
    });
  });

  describe("Testa método POST na rota /customers", () => {
    it("É possível cadastrar um cliente com sucesso", async () => {
      sinon
        .stub(ClientModel, "create")
        .resolves(customersMock[0] as unknown as IClient);

      const response = await customerservice.create(
        customersMock[0] as unknown as IClient
      );
      expect(response).to.be.equal(customersMock[0]);
    });
  });

  describe("Testa método PUT na rota /customers", () => {
    it("É possível atualizar um cliente com sucesso", async () => {
      sinon.stub(ClientModel, "updateOne").resolves();

      const id = customersMock[0]._id;

      const response = await customerservice.updateById(
        id,
        customersMock[0] as unknown as IClient
      );
      expect(response).to.be.equal(undefined);
    });
  });

  describe("Testa método DELETE na rota /customers", () => {
    it("É possível deletar um cliente com sucesso", async () => {
      sinon.stub(ClientModel, "deleteOne").resolves();

      const id = customersMock[0]._id;

      const response = await customerservice.delete(id);
      expect(response).to.be.equal(undefined);
    });
  });
});
