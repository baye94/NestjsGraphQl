import { Field, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Classroom } from '../classe/classe.model'; // Assurez-vous d'avoir une entité Classroom

@Entity('students') // Nom de la table
export class Student {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  firstName: string;

  @Field()
  @Column()
  lastName: string;

  @Field()
  @Column({ length: 1000 })
  bio: string;

  @Field()
  @Column({ unique: true })
  email: string;

  @Field()
  @Column({ unique: true })
  countryCode: string;

  @Field()
  @Column({ unique: true })
  phone: string;

  @Field()
  @Column()
  parentFirstName: string;

  @Field()
  @Column()
  parentLastName: string;

  @Field()
  @Column({ unique: true })
  parentPhone: string;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => [Classroom])
  @ManyToOne(() => Classroom, classroom => classroom.students)
  @JoinColumn()
  class: Classroom[];
}


