import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
chai.use(chaiHttp);
const { expect } = chai;
import { app } from '../app';
import { login, user, token, invalidToken, role } from './mocks/login.mock';
import UserModel from '../database/models/UserModel';
chai.use(chaiHttp);

describe('Testes para route user', () => {
  afterEach(sinon.restore);
  it('A rota /login permite acesso com dados válidos', async () => {
    sinon.stub(UserModel, "findOne").resolves(user as UserModel);
    sinon.stub(bcrypt, 'compareSync').returns(true);
    sinon.mock(jwt).expects('sign').returns(token);
    chai.request(app).post('/login').send(login).then((chaiHttpResponse) => {
    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).to.be.deep.equal({token: token})});
  });

  it('Teste a postLogin caso tenha "All fields must be filled"', async () => {
    const chaiHttpResponse = await chai.request(app).post('/login').send({email: "", password: ""});
    expect(chaiHttpResponse.status).to.be.equal(400);
    expect(chaiHttpResponse.body).to.be.deep.equal({message: "All fields must be filled"});
  });

  it('Rota /login não permite acesso sem os campos email e password preenchidos', async () => {
    const chaiHttpResponse = await chai.request(app).post('/login').send({
        email: "admin@admiiiin.com",
        password: "12678"
    });
    expect(chaiHttpResponse.status).to.be.equal(401);
    expect(chaiHttpResponse.body).to.be.deep.equal({ message: "Invalid email or password" });
  });

  it('A rota /login não permite acesso sem informar o token', async () => {
    sinon.stub(UserModel, "findOne").resolves(user as UserModel);
    sinon.stub(bcrypt, 'compareSync').returns(true);
    sinon.mock(jwt).expects('sign').returns({token: ""});
    chai.request(app).post('/login').send(login).then((chaiHttpResponse) => {
    expect(chaiHttpResponse.status).to.be.equal(401);
    expect(chaiHttpResponse.body).to.be.deep.equal({message: 'Token not found'})});
  });

  it('A rota /login não permite acesso sem um token valido', async () => {
        sinon.stub(UserModel, "findOne").resolves(user as UserModel);
        sinon.stub(bcrypt, 'compareSync').returns(true);
        sinon.mock(jwt).expects('verify').withArgs('token').returns(invalidToken);
        chai.request(app).post('/login').send(login).then((chaiHttpResponse) => {
        expect(chaiHttpResponse.status).to.be.equal(401);
        expect(chaiHttpResponse.body).to.be.deep.equal({ message: 'Token must be a valid token' })});
   });
   
   it('A rota /login/validate retorna a data corretamente', async () => {
    sinon.stub(UserModel, "findOne").resolves(role as UserModel);
    sinon.stub(bcrypt, 'compareSync').returns(true);
    sinon.mock(jwt).expects('sign').returns(token);
    chai.request(app).post('/login/role').send(role).then((chaiHttpResponse) => {
    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body).to.be.deep.equal(role)});
  });

  it('A rota /login/role não permite acesso sem informar o token', async () => {
    sinon.stub(UserModel, "findOne").resolves(role as UserModel);
    sinon.stub(bcrypt, 'compareSync').returns(true);
    sinon.mock(jwt).expects('sign').returns({token: ""});
    chai.request(app).post('/login/role').send(role).then((chaiHttpResponse) => {
    expect(chaiHttpResponse.status).to.be.equal(401);
    expect(chaiHttpResponse.body).to.be.deep.equal({ message: 'Token not found' })});
  });
});