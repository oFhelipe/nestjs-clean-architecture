import { Inject, Injectable } from '@nestjs/common';
import { ProjectTypeOrmRepository } from '../repositories/project-typeorm.repository';

@Injectable()
export class FindOneProjectUseCase {
  @Inject('IProjectRepository')
  private projectRepo: ProjectTypeOrmRepository;

  async execute(id: string) {
    return await this.projectRepo.findById(id);
  }
}
