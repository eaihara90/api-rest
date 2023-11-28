import { createContainer, InjectionMode, asClass, asValue } from 'awilix';

import ProductsController from '@/controllers/products.controller';
import ProductsRepository from '@/repositories/products.repository';
import dbConnection from '@/db/db-connection';

export const container = createContainer({
  injectionMode: InjectionMode.CLASSIC
})
.register({
  productsController: asClass(ProductsController),
  productsRepository: asClass(ProductsRepository).scoped(),
  db: asValue(dbConnection)
});
