import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { Response } from 'superagent';
chai.use(chaiHttp);
const { expect } = chai;
import { app } from '../app';
import { teamsMock, team } from './mocks/team.mock';
import Teams from '../database/models/TeamModel';
chai.use(chaiHttp);

describe('Testes para route team', () => {
  it('A rota /teams retorna os times corretamente', async () => {
    sinon.stub(Teams, 'findAll').resolves(teamsMock as Teams[]);
    let chaiHttpResponse: Response;
    chaiHttpResponse = await chai.request(app).get('/teams');
    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).to.be.deep.equal(teamsMock);
  });
  it('A rota /teams:id retorna o time especifico', async () => {
    sinon.stub(Teams, 'findByPk').resolves(team as Teams);
    let chaiHttpResponse: Response;
    chaiHttpResponse = await chai.request(app).get('/teams/8');
    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).to.be.deep.equal(team);
  });
});
