import { Injectable } from '@nestjs/common';
import { Classroom } from './classe.model';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ClasseService {
  constructor(
    @InjectRepository(Classroom)
    private classeRepository: Repository<Classroom>,
  ) {}

  findAll(): Promise<Classroom[]> {
    return this.classeRepository.find();
  }

  findOne(id: string): Promise<Classroom> {
    return this.classeRepository.findOne({ where: { id: +id } });
  }

  async create(classe: Classroom): Promise<Classroom> {
    return await this.classeRepository.save(classe);
  }

  async update(id: string, name: string): Promise<Classroom> {
    const classe = await this.classeRepository.findOne({ where: { id: +id } });
    if (!classe) {
      throw new Error('Classe not found');
    }
    classe.label = name;
    return this.classeRepository.save(classe);
  }

  async remove(id: string): Promise<void> {
    await this.classeRepository.delete(id);
  }
}
