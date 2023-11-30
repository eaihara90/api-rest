import { InputProductDTO, OutputProductDTO } from '@/dto/product.dto';
import { IRepository } from '@/interfaces/IRepository';
import { ProductModel } from '@/models/product.model';
import { v4 as uuidv4 } from 'uuid';

export default class ProductsService {
  constructor(private readonly productsRepository: IRepository<ProductModel>) { }

  public async findAll(): Promise<OutputProductDTO[]> {
    try {
      return this.productsRepository.findAll();
    } catch (error) {
      throw error;
    }
  }

  public async findById(_id: string): Promise<OutputProductDTO> {
    try {
      const response = await this.productsRepository.findById(_id);
      console.log(typeof response);
      if (response?.length <= 0) {
        throw new Error('Product not found');
      }

      // const product = response[0];

      // const outputProductDTO = new OutputProductDTO();
      // outputProductDTO.setId(product.getId());
      // outputProductDTO.setName(product.getName());
      // outputProductDTO.setPrice(product.getPrice());
      // outputProductDTO.setQuantity(product.getQuantity());

      return response[0];
    } catch (error) {
      throw error;
    }
  }

  public async save(_inputProductDTO: InputProductDTO): Promise<OutputProductDTO> {
    try {
      const newProduct = new ProductModel();
      newProduct.id = uuidv4();
      newProduct.name = _inputProductDTO.name;
      newProduct.price = _inputProductDTO.price;
      newProduct.quantity = _inputProductDTO.quantity;
      await this.productsRepository.save(newProduct);

      const response = await this.productsRepository.findById(newProduct.id);
      const product = response[0];
      
      const outputProductDTO = new OutputProductDTO();
      outputProductDTO.id = product.id;
      outputProductDTO.name = product.name;
      outputProductDTO.price = product.price;
      outputProductDTO.quantity = product.quantity
      return outputProductDTO;
    } catch (error) {
      throw error;
    }
  }

  public async delete(_id: string): Promise<void> {
    try {
      return this.productsRepository.delete(_id);
    } catch (error) {
      throw error;
    }
  }
}