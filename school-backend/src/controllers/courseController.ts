// import { AppDataSource } from "../data-source";
// import { Course } from "../models/course";
// import { CourseService } from "../services/courseService";
// import { Request, Response } from "express";


// export class CourseController {
//     private courseService:CourseService;
//   constructor() {
//     this.initialize();
//   }

//   async initialize() {
//     try {
//       await AppDataSource.initialize(); // Assuming AppDataSource is initialized elsewhere
//       this.courseService = new CourseService(AppDataSource.getRepository(Course), AppDataSource.getRepository(Class));
//       console.log("TypeORM works and initialized the database well.");
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   async getAll(req, res) {
//     try {
//       const courses = await this.courseService.getAllCourses();
//       res.json(courses);
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   }

//   async getById(req, res) {
//     try {
//       const id = parseInt(req.params.id);
//       const courseById = await this.courseService.getCourseById(id);
//       if (courseById) {
//         res.json(courseById);
//       } else {
//         res.sendStatus(404);
//       }
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   }

//   async create(req, res) {
//     const { name, description, classId } = req.body;
//     if (!name || !description || !classId) {
//       res.status(400).json({ message: 'Missing required fields: name, description, and classId' });
//       return;
//     }

//     try {
//       const newCourse = await this.courseService.createCourse(name, description, classId);
//       res.status(201).json(newCourse);
//     } catch (error) {
//       res.status(400).json({ message: error.message });
//     }
//   }

//   async update(req, res) {
//     try {
//       const id = parseInt(req.params.id);
//       const { name, description, classId } = req.body;
//       const updatedCourse = await this.courseService.updateCourse(id, name, description, classId);
//       if (updatedCourse) {
//         res.json(updatedCourse);
//       } else {
//         res.sendStatus(404);
//       }
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   }

//   async delete(req, res) {
//     try {
//       const id = parseInt(req.params.id);
//       const deleted = await this.courseService.deleteCourse(id);
//       if (deleted) {
//         res.sendStatus(204);
//       } else {
//         res.sendStatus(404);
//       }
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   }
// }