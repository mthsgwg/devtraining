import { CoursesService } from './courses.service';
import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Res,
} from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  constructor(private readonly courseService: CoursesService) {}

  @Get()
  findAll(@Res() response) {
    return response.status(200).send('oi');
  }

  @Get(':id/:name')
  findOne(@Param('id') id: string) {
    return `Curso ${id}`;
  }

  @HttpCode(204)
  @Post()
  create(@Body() body) {
    return body;
  }
}
