export interface IService<T> {
  findAll(): Promise<Array<T>>;
  findById(id: string): Promise<T>;
  save(model: T): Promise<T>;
  delete(id: string): Promise<void>;
  // update(model: T): Promise<T>;
}