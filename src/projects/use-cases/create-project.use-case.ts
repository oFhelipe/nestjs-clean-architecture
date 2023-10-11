import { CreateProjectDto } from '../dto/create-project.dto';
import { Project } from '../entities/project.entity';
import { Inject, Injectable } from '@nestjs/common';
import { ProjectTypeOrmRepository } from '../repositories/project-typeorm.repository';

@Injectable()
export class CreateProjectUseCase {
  @Inject('IProjectRepository')
  private projectRepo: ProjectTypeOrmRepository;

  async execute(input: CreateProjectDto) {
    const project = new Project(input);
    await this.projectRepo.create(project);
    return project;
  }
}
