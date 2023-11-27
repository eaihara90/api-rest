import { createContainer, InjectionMode, asClass } from 'awilix';

import ProductsController from '@/controllers/products.controller';
import ProductsRepository from '@/repositories/products.repository';

export const container = createContainer({
  injectionMode: InjectionMode.CLASSIC
})
.register({
  productsController: asClass(ProductsController),
  productsRepository: asClass(ProductsRepository).scoped()
});
