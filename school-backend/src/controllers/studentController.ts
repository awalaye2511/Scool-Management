// import { AppDataSource } from "../data-source";
// import { Student } from "../models/student";
// import { StudentService } from "../services/studentService";
// import { Request, Response } from "express";


// export class StudentController {
//     private studentService:StudentService;
//   constructor() {
//     this.initialize();
//   }

//   async initialize() {
//     try {
//       await AppDataSource.initialize(); // Assuming AppDataSource is initialized elsewhere
//       this.studentService = new StudentService(AppDataSource.getRepository(Student), AppDataSource.getRepository(Class));
//       console.log("TypeORM works and initialized the database well.");
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   async getAll(req, res) {
//     try {
//       const students = await this.studentService.getAllStudents();
//       res.json(students);
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   }

//   async getById(req, res) {
//     try {
//       const id = parseInt(req.params.id);
//       const studentById = await this.studentService.getStudentById(id);
//       if (studentById) {
//         res.json(studentById);
//       } else {
//         res.sendStatus(404);
//       }
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   }

//   async create(req, res) {
//     const { firstName, lastName, birthDate, email, phoneNumber, address, gender, classId } = req.body;
//     if (!firstName || !lastName || !address || !gender || !classId) {
//       res.status(400).json({ message: 'Missing required fields' });
//       return;
//     }

//     try {
//       const newStudent = await this.studentService.createStudent(firstName, lastName, birthDate, email, phoneNumber, address, gender, classId);
//       res.status(201).json(newStudent);
//     } catch (error) {
//       res.status(400).json({ message: error.message });
//     }
//   }

//   async update(req, res) {
//     try {
//       const id = parseInt(req.params.id);
//       const { firstName, lastName, birthDate, email, phoneNumber, address, gender, classId } = req.body;
//       const updatedStudent = await this.studentService.updateStudent(id, firstName, lastName, birthDate, email, phoneNumber, address, gender, classId);
//       if (updatedStudent) {
//         res.json(updatedStudent);
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
//       const deleted = await this.studentService.deleteStudent(id);
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
