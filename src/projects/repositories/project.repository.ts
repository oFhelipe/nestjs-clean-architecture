import { Project } from '../entities/project.entity';

export abstract class ProjectRepository {
  abstract create(project: Project): Promise<void>;
  abstract update(project: Project): Promise<void>;
  abstract findAll(): Promise<Project[]>;
  abstract findById(id: string): Promise<Project>;
}
