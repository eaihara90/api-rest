import { DbConnection } from '@/db/db-connection';
import { InputProductDTO, OutputProductDTO } from '@/dto/product.dto';
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

  public async findById(id: string): Promise<OutputProductDTO> {
    try {
      return this.db.query(`SELECT * FROM tb_products WHERE id = '${id}';`);
    } catch (error) {
      throw error;
    }
  }

  public async save(product: InputProductDTO): Promise<OutputProductDTO> {
    try {
      await this.db.query(`INSERT INTO tb_products(id, name, price, quantity) VALUES ('${product.getId()}', '${product.getName()}', '${product.getPrice()}', '${product.getQuantity()}');`);
      
      const outputProductDTO = new OutputProductDTO();
      outputProductDTO.setId(product.getId());
      outputProductDTO.setName(product.getName());
      outputProductDTO.setPrice(product.getPrice());
      outputProductDTO.setQuantity(product.getQuantity());
      
      return outputProductDTO;
    } catch (error) {
      throw error;
    }
  }
}