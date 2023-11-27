import { IController } from '@/interfaces/IController';
import { IRepository } from '@/interfaces/IRepository';
import { ProductModel } from '@/models/product.model';

export class ProductsController implements IController<ProductModel> {
  constructor(private productsRepository: IRepository<ProductModel>) {}
  
  getAll(): Promise<ProductModel[]> {
    return new Promise((res, rej) => {
      res([new ProductModel()]);
    });
  }

  getById(id: string): Promise<ProductModel> {
    return new Promise((res, rej) => {
      res(new ProductModel());
    });
  }

  delete(id: string): Promise<void> {
    return new Promise((res, rej) => {
      res();
    });
  }

  save(product: ProductModel): Promise<ProductModel> {
    return new Promise((res, rej) => {
      res(new ProductModel());
    });
  }

  update(product: ProductModel): Promise<ProductModel> {
    return new Promise((res, rej) => {
      res(new ProductModel());
    });
  }
}