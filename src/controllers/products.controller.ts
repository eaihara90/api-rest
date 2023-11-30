import { Request, Response } from 'express';
import { route, GET, POST, DELETE, PUT } from 'awilix-express';


import { IController } from '@/interfaces/IController';
import { ProductModel } from '@/models/product.model';
import { InputProductDTO } from '@/dto/product.dto';
import { IService } from '@/interfaces/IService';

@route('/products')
export default class ProductsController implements IController<ProductModel> {
  constructor(private readonly productsService: IService<ProductModel>) { }

  @route('')
  @GET()
  public async getAll(req: Request, res: Response): Promise<void> {
    try {
      const response = await this.productsService.findAll();
      res.json(response);

    } catch (error) {
      res.status(500).send();
    }
  }

  @route('/:id')
  @GET()
  public async getById(req: Request, res: Response): Promise<void> {
    try {
      const outputProductDTO = await this.productsService.findById(req.params.id);
      res.json(outputProductDTO);
    } catch (error) {
      res.status(500).send();
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
      
      const outputProductDTO = await this.productsService.save(<InputProductDTO>req.body);
  
      res.json(outputProductDTO);
    } catch (error) {
      res.status(500).send();
    }
  }

  @route('/:id')
  @DELETE()
  public async delete(req: Request, res: Response): Promise<void> {
    try {
      await this.productsService.delete(req.params.id);
      res.status(201).json(true);
    } catch (error) {
      res.status(500).send();
    }
  }

  @route('')
  @PUT()
  public async update(req: Request, res: Response): Promise<void> {
    try {
      res.json({});
    } catch (error) {
      res.status(500).send();
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