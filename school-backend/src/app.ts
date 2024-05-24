import express from "express";
import "reflect-metadata";
//import { AppDataSource } from "./data-source";
import { ClassRoutes } from "./routes/classRoute";
// import { CourseRoutes } from './routes/courseRoute';
// import { StudentRoutes } from './routes/studentRoute';

require('dotenv').config();

const app = express();

// Middleware pour parser les données JSON
app.use(express.json());

// Routes
const classRoutes = new ClassRoutes();
// const courseRoutes = new CourseRoutes();
// const studentRoutes = new StudentRoutes();

app.use('/api/classes', classRoutes.router);
// app.use('/api/courses', courseRoutes.router);
// app.use('/api/students', studentRoutes.router);
 

// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
