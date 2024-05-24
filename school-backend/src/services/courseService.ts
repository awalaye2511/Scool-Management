// import { AppDataSource } from './database';
// import { Course } from '../models/course'; // Assuming ClassEntity is imported from the models directory
// import { Class } from '../models/class';

// export class CourseService {
//   private courseRepository = AppDataSource.getRepository(Course);
//   private classRepository = AppDataSource.getRepository(Class);

//   async getAllCourses(): Promise<Course[]> {
//     return await this.courseRepository.find({ relations: ['class'] });
//   }

//   async getCourseById(id: number): Promise<Course | null> {
//     return await this.courseRepository.findOne(id, { relations: ['class'] });
//   }

//   async createCourse(name: string, description: string, classId: number): Promise<Course> {
//     const classEntity = await this.classRepository.findOne(classId);

//     if (!classEntity) {
//       throw new Error('Classe non trouvée');
//     }

//     const newCourse = this.courseRepository.create({ name, description, class: classEntity });
//     return await this.courseRepository.save(newCourse);
//   }

//   async updateCourse(id: number, name: string, description: string, classId: number): Promise<Course | null> {
//     const courseToUpdate = await this.courseRepository.findOne(id, { relations: ['class'] });
//     const classEntity = await this.classRepository.findOne(classId);

//     if (!courseToUpdate || !classEntity) {
//       return null;
//     }

//     courseToUpdate.name = name;
//     courseToUpdate.description = description;
//     courseToUpdate.class = classEntity;
//     return await this.courseRepository.save(courseToUpdate);
//   }

//   async deleteCourse(id: number): Promise<boolean> {
//     const courseToDelete = await this.courseRepository.findOne(id);

//     if (!courseToDelete) {
//       return false;
//     }

//     await this.courseRepository.remove(courseToDelete);
//     return true;
//   }
// }