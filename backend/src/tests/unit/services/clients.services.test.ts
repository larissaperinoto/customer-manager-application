import sinon from "sinon";
import chai from "chai";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import chaiHttp = require("chai-http");

import clientService from "../../../services/clients.service";
import { clientsMock } from "../../mocks/clients.mock";
import ClientModel from "../../../models/Client.model";
import IClient from "../../../interfaces/IClient";

chai.use(chaiHttp);

const { expect } = chai;

describe("Testes de unidade para a camada service na rota /client", () => {
  afterEach(function () {
    sinon.restore();
  });

  describe("Testa método GET na rota /clients", () => {
    it("É possível buscar todos os clientes", async () => {
      sinon
        .stub(ClientModel, "find")
        .resolves(clientsMock as unknown as IClient[]);

      const response = await clientService.findAll();
      expect(response).to.be.equal(clientsMock);
    });
  });

  describe("Testa método POST na rota /clients", () => {
    it("É possível cadastrar um cliente com sucesso", async () => {
      sinon
        .stub(ClientModel, "create")
        .resolves(clientsMock[0] as unknown as IClient);

      const response = await clientService.create(
        clientsMock[0] as unknown as IClient
      );
      expect(response).to.be.equal(clientsMock[0]);
    });
  });

  describe("Testa método PUT na rota /clients", () => {
    it("É possível atualizar um cliente com sucesso", async () => {
      sinon.stub(ClientModel, "updateOne").resolves();

      const id = clientsMock[0]._id;

      const response = await clientService.updateById(
        id,
        clientsMock[0] as unknown as IClient
      );
      expect(response).to.be.equal(undefined);
    });
  });

  describe("Testa método DELETE na rota /clients", () => {
    it("É possível deletar um cliente com sucesso", async () => {
      sinon.stub(ClientModel, "deleteOne").resolves();

      const id = clientsMock[0]._id;

      const response = await clientService.delete(id);
      expect(response).to.be.equal(undefined);
    });
  });
});
