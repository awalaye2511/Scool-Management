import { AppDataSource } from "../data-source";
import { Class } from "../models/class";
import { ClassService } from "../services/classService";
import { Request, Response } from "express";

export class ClassController {
  private classService?:ClassService;
  constructor() {
    //this.initialize();
    this.classService = new ClassService();
  }

  // async initialize() {
  //   try {
  //     await AppDataSource.initialize(); // Assuming AppDataSource is initialized elsewhere
  //     this.classService = new ClassService();
  //     console.log("TypeORM works and initialized the database well.");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  async getAll(req:Request, res:Response) {
    try {
      const classes = await this.classService.getAllClasses();
      if(!classes){
        res.json([]);
      }else {
        res.json(classes);
      }
    } catch (error) {
      res.status(500).json({ message: "Error GETALL / "+error.message });
    }
  }

  async getById(req:Request, res:Response) {
    try {
      const id = parseInt(req.params.id);
      const classById = await this.classService.getClassById(id);
      if (classById) {
        res.json(classById);
      } else {
        res.sendStatus(404);
      }
    } catch (error) {
      res.status(500).json({ message: "Error GETBYID"+ error.message });
    }
  }

  async create(req:Request, res:Response) {
    const { name, grade, schoolYear } = req.body;
    if (!name || !grade) {
      res.status(400).json({ message: 'Missing required fields: name and grade' });
      return;
    }

    try {
      const classe:Class = new Class();
      classe.name = name;
      classe.grade=grade;
      classe.schoolYear = schoolYear ? schoolYear : "";
      const newClass = await this.classService.createClass(classe);
      res.status(201).json(newClass);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async update(req:Request, res:Response) {
    try {
      const id = parseInt(req.params.id);
    //   const { name, grade, schoolYear } = req.body;
    //   const classe:Class = new Class();
    //   classe.name = name;
    //   classe.grade=grade;
    //   classe.schoolYear = schoolYear : schoolYear ? "";
    const classe:Class = req.body;
    classe.id=id;
      const updatedClass = await this.classService.updateClass(id,classe);
      if (updatedClass) {
        res.status(200).json(updatedClass);
      } else {
        res.sendStatus(404);
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async delete(req:Request, res:Response) {
    try {
      const id = parseInt(req.params.id);
      const deleted = await this.classService.deleteClass(id);
      if (deleted) {
        res.status(204).json({ message : "Class with {{id}} is deleted succecfully."});
      } else {
        res.status(404).json({ message : "Class with {{id}} is not deleted"});
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}