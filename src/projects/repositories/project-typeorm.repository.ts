import { Project } from '../entities/project.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { IProjectRepository } from './project.repository';

@Injectable()
export class ProjectTypeOrmRepository implements IProjectRepository {
  constructor(
    @InjectRepository(Project)
    private typeOrmRepo: Repository<Project>,
  ) {}

  async create(project: Project): Promise<void> {
    await this.typeOrmRepo.save(project);
  }
  async update(project: Project): Promise<void> {
    await this.typeOrmRepo.update(project.id, project);
  }
  async findAll(): Promise<Project[]> {
    return await this.typeOrmRepo.find();
  }
  async findById(id: string): Promise<Project> {
    return await this.typeOrmRepo.findOneOrFail({ where: { id } });
  }
}
