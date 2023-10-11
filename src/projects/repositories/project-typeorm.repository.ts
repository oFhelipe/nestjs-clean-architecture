import { Project } from '../entities/project.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { ProjectRepository } from './project.repository';
import { Repository } from 'typeorm';

@Injectable()
export class ProjectTypeOrmRepository implements ProjectRepository {
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
