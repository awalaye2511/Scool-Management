//import { getRepository } from 'typeorm';
import { AppDataSource } from "../data-source";
import { Class } from "../models/class";

export class ClassService {
 
  async getAllClasses(): Promise<Class[]>{
    const classes : Class[] = await AppDataSource.manager.find(Class);
    return classes;
  }

  async getClassById(id: number): Promise<Class> {
    const classe:Class = await AppDataSource.manager.findOneBy(Class, {id:id});
    return classe;
  }

  async createClass(classe : Class): Promise<Class> {
    const newClass = await AppDataSource.manager.save(classe);
    return newClass;
  }

  async updateClass(id:number, classe : Class): Promise<Class | null> {
    const classToUpdate = await AppDataSource.manager.findOneBy(Class,{id:id});
    if (!classToUpdate) {
      return null;
    }

    classToUpdate.name = classe.name;
    classToUpdate.grade = classe.grade;
    classToUpdate.schoolYear = classe.schoolYear; // Assuming schoolYear property exists
    return await AppDataSource.manager.save(classToUpdate);
  }

  async deleteClass(id: number): Promise<boolean> {
    const classToDelete = await AppDataSource.manager.findOneBy(Class,{id:id});
    if (!classToDelete) {
      return false;
    }

    await AppDataSource.manager.remove(classToDelete);
    return true;
  }
}