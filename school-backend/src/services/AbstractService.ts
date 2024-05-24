// import { DeepPartial, FindOptions, FindOptionsWhere, Repository } from "typeorm";
// import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";

// export abstract class AbstractService<T, FilterType extends object = object> {
//   protected repository: Repository<T>;

//   constructor(repository: Repository<T>) {
//     this.repository = repository;
//   }

//   async getAll(filter?: FilterType, options?: FindOptions<T>): Promise<T[]> {
//     const list: T[] = await this.repository.find({ where: filter as FindOptionsWhere<T>, ...options });
//     return list;
//   }

//   async getById(filter: FilterType, options?: FindOptions<T>): Promise<T | null> {
//     const data: T | null = await this.repository.findOneBy(filter as FindOptionsWhere<T>, options);
//     return data;
//   }

//   abstract create(data: DeepPartial<T>): Promise<T>;
//   abstract update(id: string | number, data: DeepPartialEntity<T>): Promise<T>;
//   abstract delete(id: string | number): Promise<void>;
// }