import "reflect-metadata";
import { DataSource } from 'typeorm';
import { Class } from './models/class';
// import { Course } from './models/course';
// import { Student } from './models/student';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '<passer/>',
  database: 'db_school_management',
  entities: [Class],
 // entities: [Class, Course, Student],
  //entities: ["./src/models/*.ts"],
  synchronize: true, // Attention, cette option doit être désactivée en production
  // logging: false,
  // migrations: [],
  // subscribers: [],
});


// Initialisation de la connexion à la base de données

AppDataSource.initialize().then(() => {
    console.log('Connecté à la base de données db_school_management');
  })
  .catch((error) => console.error('Erreur de connexion à la base de données :', error));


