import { Request, Response } from 'express';
import { route, GET, POST, DELETE, PUT } from 'awilix-express';

import { IController } from '@/interfaces/IController';
import { IRepository } from '@/interfaces/IRepository';
import { ProductModel } from '@/models/product.model';

@route('/products')
export default class ProductsController implements IController<ProductModel> {
  constructor(private readonly productsRepository: IRepository<ProductModel>) { }

  @route('')
  @GET()
  public async getAll(req: Request, res: Response): Promise<void> {
    try {
      const response = await this.productsRepository.findAll();
      
      console.log(response);

      res.json(response);

    } catch (error) {

    }
  }

  @route('/:id')
  @GET()
  public async getById(req: Request, res: Response): Promise<void> {
    try {
      res.json({});
    } catch (error) {
      
    }
  }

  @route('')
  @POST()
  public async save(req: Request, res: Response): Promise<void> {
    try {
      console.log(req.body);
      res.json(req.body);
    } catch (error) {
      
    }
  }

  @route('/:id')
  @DELETE()
  public async delete(req: Request, res: Response): Promise<void> {
    try {
      res.json({});
    } catch (error) {
      
    }
  }

  @route('')
  @PUT()
  public async update(req: Request, res: Response): Promise<void> {
    try {
      res.json({});
    } catch (error) {
      
    }
  }
}