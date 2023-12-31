import { Inject, Injectable } from '@nestjs/common';
import { ProjectTypeOrmRepository } from '../repositories/project-typeorm.repository';

@Injectable()
export class FindAllProjectsUseCase {
  @Inject('IProjectRepository')
  private projectRepo: ProjectTypeOrmRepository;

  async execute() {
    return await this.projectRepo.findAll();
  }
}
