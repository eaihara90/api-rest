import { DbConnection } from '@/db/db-connection';
import { OutputProductDTO } from '@/dto/product.dto';
import { IRepository } from '@/interfaces/IRepository';
import { ProductModel } from '@/models/product.model';

export default class ProductsRepository implements IRepository<ProductModel> {
  constructor(private readonly db: DbConnection) { }

  public async findAll(): Promise<OutputProductDTO[]> {
    try {
      return this.db.query('SELECT * FROM tb_products;');
    } catch (error) {
      throw error;
    }
  }

  public async findById(id: string): Promise<OutputProductDTO[]> {
    try {
      return this.db.query(`SELECT * FROM tb_products WHERE id = '${id}';`);
    } catch (error) {
      throw error;
    }
  }

  public async save(product: ProductModel): Promise<OutputProductDTO> {
    try {
      return this.db.query(`INSERT INTO tb_products(id, name, price, quantity) VALUES ('${product.id}', '${product.name}', '${product.price}', '${product.quantity}');`);
    } catch (error) {
      throw error;
    }
  }

  public async delete(_id: string): Promise<void> {
    try {
      return this.db.query(`DELETE FROM tb_products WHERE id = '${_id}';`);
    } catch (error) {
      throw error;
    }
  }
}