import { createContainer, InjectionMode, asClass, asValue } from 'awilix';

import ProductsController from '@/controllers/products.controller';
import ProductsRepository from '@/repositories/products.repository';
import dbConnection from '@/db/db-connection';
import ProductsService from '@/services/products.service';

export const container = createContainer({
  injectionMode: InjectionMode.CLASSIC
})
.register({
  productsController: asClass(ProductsController),
  productsService: asClass(ProductsService),
  productsRepository: asClass(ProductsRepository),
  db: asValue(dbConnection)
});
