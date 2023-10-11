import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { ProjectsController } from './projects.controller';
import { CreateProjectUseCase } from './use-cases/create-project.use-case';
import { FindAllProjectsUseCase } from './use-cases/find-all-projects.use-case';
import { StartProjectUseCase } from './use-cases/start-project.use-case';
import { ProjectTypeOrmRepository } from './repositories/project-typeorm.repository';
import { FindOneProjectUseCase } from './use-cases/find-one-project.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([Project])],
  controllers: [ProjectsController],
  providers: [
    {
      provide: 'IProjectRepository',
      useClass: ProjectTypeOrmRepository,
    },
    CreateProjectUseCase,
    FindAllProjectsUseCase,
    StartProjectUseCase,
    FindOneProjectUseCase,
  ],
})
export class ProjectsModule {}
