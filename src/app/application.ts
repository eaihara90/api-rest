import express, { Application as ExpressApplication } from 'express';
import { loadControllers, scopePerRequest } from 'awilix-express';

import { container } from '@/config/awilix-config';
import db from '@/db/db-connection';

class Application {
  private readonly instance: ExpressApplication;

  constructor() {
    this.instance = express();
    this.setupMiddlewares();
  }

  public run(port: string | number): void {
    this.instance.listen(port, async () => {
      console.log(`Server running on port ${port}`);
      await db.connect();
    });
  }

  public getInstance(): ExpressApplication {
    return this.instance;
  }

  private setupMiddlewares(): void {
    this.instance.use(express.json());
    this.instance.use(scopePerRequest(container));
    this.instance.use('/api', loadControllers('../controllers/*controller.ts', { cwd: __dirname }));
    this.instance.use('/api', loadControllers('../controllers/*controller.js', { cwd: __dirname }));
    // this.instance.use(apiErrorHandler);
  }
}

export default new Application();