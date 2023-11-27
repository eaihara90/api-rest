import express, { Application as ExpressApplication } from 'express';
import mainRouter from './main-router';

class Application {
  private readonly instance: ExpressApplication;

  constructor() {
    this.instance = express();
    this.setMiddlewares();
    this.setRouters();
  }

  public getInstance(): ExpressApplication {
    return this.instance;
  }

  private setMiddlewares(): void {
    this.instance.use(express.json());
  }

  private setRouters(): void {
    this.instance.use('/api', mainRouter.handler);
  }
}

export default new Application();