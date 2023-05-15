import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
const { expect } = chai;
import { app } from '../app';
import {allMatchesMock, inProgressTrue, inProgressFalse} from './mocks/match.mock';
chai.use(chaiHttp);

describe('Testes para route match', () => {
  afterEach(sinon.restore);
  it('A rota /matches retorna os dados corretamente', async () => {
    chai.request(app).get('/matches').send().then((httpResponse) => {
    expect(httpResponse.status).to.be.equal(200);
    expect(httpResponse.body).to.be.deep.equal(allMatchesMock)
    });
  });

  it('A rota /matches retorna matches in progress', async () => {
    chai.request(app).get('/matches:inProgress').send().then((httpResponse) => {
    expect(httpResponse.status).to.be.equal(200);
    expect(httpResponse.body).to.be.deep.equal(inProgressTrue)
    });
  });

  it('A rota /matches retorna finished matches', async () => {
    chai.request(app).get('/matches:inProgress=false').send().then((httpResponse) => {
    expect(httpResponse.status).to.be.equal(200);
    expect(httpResponse.body).to.be.deep.equal(inProgressFalse)
    });
  });
});