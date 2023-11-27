export interface IController<T> {
  getAll(): Promise<Array<T>>;
  getById(id: string): Promise<T>;
  save(model: T): Promise<T>;
  delete(id: string): Promise<void>;
  update(model: T): Promise<T>;
}