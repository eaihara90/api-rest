import { Request, Response } from 'express';
import { route, GET, POST, DELETE, PUT } from 'awilix-express';
import { v4 as uuidv4 } from 'uuid';

import { IController } from '@/interfaces/IController';
import { IRepository } from '@/interfaces/IRepository';
import { ProductModel } from '@/models/product.model';
import { InputProductDTO } from '@/dto/product.dto';

@route('/products')
export default class ProductsController implements IController<ProductModel> {
  constructor(private readonly productsRepository: IRepository<ProductModel>) { }

  @route('')
  @GET()
  public async getAll(req: Request, res: Response): Promise<void> {
    try {
      const response = await this.productsRepository.findAll();
      res.json(response);

    } catch (error) {

    }
  }

  @route('/:id')
  @GET()
  public async getById(req: Request, res: Response): Promise<void> {
    try {
      const outputProductDTO = await this.productsRepository.findById(req.params.id);
      res.json(outputProductDTO);
    } catch (error) {
      
    }
  }

  @route('')
  @POST()
  public async save(req: Request, res: Response): Promise<void> {
    try {
      const objectProperties = [
        {
          name: 'name',
          type: 'string'
        },
        {
          name: 'price',
          type: 'number'
        },
        {
          name: 'quantity',
          type: 'number'
        },
      ];

      if (!this.isValidRequestBodyFields(req.body, objectProperties)) {
        // console.log(`Field '' doesn't exist on request body or its value doesn't match ''`);
        res.status(400).json({ message: `One or more fields doesn't exist on request body or its value doesn't match` });
        return;
      }
      
      const inputProductDTO = new InputProductDTO();
      inputProductDTO.setId(uuidv4());
      inputProductDTO.setName(req.body.name);
      inputProductDTO.setPrice(req.body.price);
      inputProductDTO.setQuantity(req.body.quantity);

      const outputProductDTO = await this.productsRepository.save(inputProductDTO);
  
      res.json(outputProductDTO);
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

  private isValidRequestBodyFields(body: any, validationFields: { name: string, type: string }[]): boolean {
    let isValid = true;

    if (!body) {
      isValid = false;
    }
    
    validationFields.forEach(field => {
      if (!body.hasOwnProperty(field.name) || typeof body[field.name] !== field.type) {
        isValid = false;
      }
    });

    return isValid;
  }
}