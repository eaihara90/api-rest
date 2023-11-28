import { DbConnection } from '@/db/db-connection';
import { IRepository } from '@/interfaces/IRepository';
import { ProductModel } from '@/models/product.model';

export default class ProductsRepository implements IRepository<ProductModel> {
  constructor(private readonly db: DbConnection) { }

  public async findAll(): Promise<ProductModel[]> {
    try {
      return this.db.query('SELECT * FROM tb_product;');
    } catch (error) {
      throw error;
    }
  }
}