import { Controller, Get, Post, Body, Param, Inject } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { CreateProjectUseCase } from './use-cases/create-project.use-case';
import { FindAllProjectsUseCase } from './use-cases/find-all-projects.use-case';
import { StartProjectUseCase } from './use-cases/start-project.use-case';
import { StartProjectDto } from './dto/start-project.dto';
import { FindOneProjectUseCase } from './use-cases/find-one-project.use-case';

@Controller('projects')
export class ProjectsController {
  @Inject(CreateProjectUseCase)
  private readonly createProjectUseCase: CreateProjectUseCase;

  @Inject(FindAllProjectsUseCase)
  private readonly findAllProjectsUseCase: FindAllProjectsUseCase;

  @Inject(StartProjectUseCase)
  private readonly startProjectUseCase: StartProjectUseCase;

  @Inject(FindOneProjectUseCase)
  private readonly findOneProjectUseCase: FindOneProjectUseCase;

  @Post()
  async create(@Body() createProjectDto: CreateProjectDto) {
    return await this.createProjectUseCase.execute(createProjectDto);
  }

  @Get()
  async findAll() {
    return await this.findAllProjectsUseCase.execute();
  }

  @Post(':id/start')
  async start(
    @Param('id') id: string,
    @Body() startProjectDto: StartProjectDto,
  ) {
    return await this.startProjectUseCase.execute(id, startProjectDto);
  }

  @Get(':id')
  async findOneById(
    @Param('id') id: string,
    @Body() startProjectDto: StartProjectDto,
  ) {
    return await this.startProjectUseCase.execute(id, startProjectDto);
  }
}
