import express, { Application as ExpressApplication } from 'express';
import { loadControllers, scopePerRequest } from 'awilix-express';

import { container } from './awilix-config';

class Application {
  private readonly instance: ExpressApplication;

  constructor() {
    this.instance = express();
    this.setupMiddlewares();
    // this.setRouters();
  }

  // public run(port: string | number): void {
  //   this.instance.listen(port,)
  // }

  public getInstance(): ExpressApplication {
    return this.instance;
  }

  private setupMiddlewares(): void {
    this.instance.use(express.json());
    this.instance.use(scopePerRequest(container));
    this.instance.use('/api', loadControllers('../controllers/*.ts', { cwd: __dirname }));
    // this.instance.use(apiErrorHandler);
  }
}

export default new Application();