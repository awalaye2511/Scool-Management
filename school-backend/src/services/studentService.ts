// import { AppDataSource } from './database';
// import { Student } from '../models/student';
// import { Class } from '../models/class';


// export class StudentService {
//   private studentRepository = AppDataSource.getRepository(Student);
//   private classRepository = AppDataSource.getRepository(Class);

//   async getAllStudents(): Promise<Student[]> {
//     return await this.studentRepository.find({ relations: ['class'] });
//   }

//   async getStudentById(id: number): Promise<Student | null> {
//     return await this.studentRepository.findOne(id, { relations: ['class'] });
//   }

//   async createStudent(
//     firstName: string,
//     lastName: string,
//     birthDate: Date | null,
//     email: string | null,
//     phoneNumber: string | null,
//     address: string,
//     gender: string,
//     classId: number
//   ): Promise<Student> {
//     const classEntity = await this.classRepository.findOne(classId);

//     if (!classEntity) {
//       throw new Error('Classe non trouvée');
//     }

//     const newStudent = this.studentRepository.create({ firstName, lastName, birthDate, email, phoneNumber, address, gender, class: classEntity });
//     return await this.studentRepository.save(newStudent);
//   }

//   async updateStudent(
//     id: number,
//     firstName: string,
//     lastName: string,
//     birthDate: Date | null,
//     email: string | null,
//     phoneNumber: string | null,
//     address: string,
//     gender: string,
//     classId: number
//   ): Promise<Student | null> {
//     const studentToUpdate = await this.studentRepository.findOne(id, { relations: ['class'] });
//     const classEntity = await this.classRepository.findOne(classId);

//     if (!studentToUpdate || !classEntity) {
//       return null;
//     }

//     studentToUpdate.firstName = firstName;
//     studentToUpdate.lastName = lastName;
//     studentToUpdate.birthDate = birthDate;
//     studentToUpdate.email = email;
//     studentToUpdate.phoneNumber = phoneNumber;
//     studentToUpdate.address = address;
//     studentToUpdate.gender = gender;
//     studentToUpdate.class = classEntity;
//     return await this.studentRepository.save(studentToUpdate);
//   }

//   async deleteStudent(id: number): Promise<boolean> {
//     const studentToDelete = await this.studentRepository.findOne(id);

//     if (!studentToDelete) {
//       return false;
//     }

//     await this.studentRepository.remove(studentToDelete);
//     return true;
//   }
// }