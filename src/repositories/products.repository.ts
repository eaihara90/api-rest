import { IRepository } from "@/interfaces/IRepository";
import { ProductModel } from "@/models/product.model";

export class ProductsRepository implements IRepository<ProductModel> {
  constructor() {
    console.log('PRODUCTS RESPOSITORY')
  }

  public async findAll(): Promise<Array<ProductModel>> {
    return new Promise<Array<ProductModel>>((res, req) => {
      const product = new ProductModel();
      product.setName('Teste');
      product.setPrice(2.89);
      product.setQuantity(1);
      res([product]);
    });
  }
}