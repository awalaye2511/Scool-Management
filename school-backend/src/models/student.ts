// import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
// import { Class } from './class';

// @Entity('students')
// export class Student {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column()
//   firstName: string;

//   @Column()
//   lastName: string;

//   @Column({nullable:true})
//   birthDate: Date;

//   @Column({nullable:true})
//   email: string;

//   @Column({nullable:true})
//   phoneNumber: string;

//   @Column()
//   address: string;

//   @Column()
//   gender: string;

//   // @ManyToOne(() => Class, (class) => class.classes)
//   // class: Class;

//    @ManyToOne(() => Class, (classEntity) => classEntity.students)
//   class: Class;
// }