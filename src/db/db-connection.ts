import { Client, QueryResult } from 'pg';

import config from '@/config/config';

const { db } = config;

export class DbConnection {
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

  public async query(query: string): Promise<any | any[]> {
    try {
      const response = await this.client.query(query);
      return response.rows;
    } catch (error) {
      throw Error(`Error while querying: ${error}`);
    }
  }
}

export default new DbConnection();