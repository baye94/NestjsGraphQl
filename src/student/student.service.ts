import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './student.model';
import { Repository } from 'typeorm';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) {}
  findAll(): Promise<Student[]> {
    return this.studentRepository.find();
  }
  findOne(id: string): Promise<Student> {
    return this.studentRepository.findOne({ where: { id: +id } });
  }
  async create(student: Student): Promise<Student> {
    return await this.studentRepository.save(student);
  }
  async update(id: string, student: Student): Promise<Student> {
    const students = await this.studentRepository.findOne({
      where: { id: +id },
    });
    if (!students) {
      throw new Error('Student not found');
    }
    students.firstName = student.firstName;
    students.class = student.class;
    students.email = student.email;
    return this.studentRepository.save(students);
  }
  async remove(id: string): Promise<void> {
    await this.studentRepository.delete(id);
  }
}
