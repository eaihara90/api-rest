import { Client } from 'pg';

import config from '@/config/config';

const { db } = config;

class DbConnection {
  private readonly client: Client;

  constructor() {
    this.client = new Client({
      host: db.HOST,
      database: db.NAME,
      user: db.USER,
      password: db.PASSWORD,
      port: Number(db.PORT),
    });
  }


  public async connect(): Promise<void> {
    try {
      await this.client.connect();
      console.log(`Connected to database ${db.NAME}`);
    } catch (error) {
      console.log(`Error while connecting to database ${db.NAME}`);
    }
  }
}

export default new DbConnection();