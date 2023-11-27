import express, { Router } from 'express';

class MainRouter {
  private readonly instance: Router;

  constructor() {
    this.instance = express.Router();
    this.handler.get('', (req, res) => res.send('api works'));
  }

  public get handler(): Router {
    return this.instance;
  }
}

export default new MainRouter();