import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
//import { Student } from '../models/student';

@Entity('classes')
export class Class {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  grade: string;

  @Column()
  schoolYear: string;

  // @OneToMany(()=>Student, (student)=>student.class)
  // classes:Student[]
  // @OneToMany(() => Student, (studentEntity) => studentEntity.class)
  // students: Student[];
}