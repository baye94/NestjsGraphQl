import { Field, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Student } from '../student/student.model';


@Entity('classrooms')
export class Classroom {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  code: string;

  @Field()
  @Column()
  label: string;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => [Student])
  @OneToMany(() => Student, student => student.class)
  students: Student[];
}
function CreateDateColumn(): (target: Classroom, propertyKey: "createdAt") => void {
  throw new Error('Function not implemented.');
}

