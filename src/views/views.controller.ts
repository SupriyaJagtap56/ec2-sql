import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { ViewsService } from './views.service';

@Controller('')
export class ViewsController {
  constructor(private readonly viewsService: ViewsService) {}

  @Get()
  findAll(@Res() res: Response) {
    res.render('index');
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.viewsService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.viewsService.remove(+id);
  }
}
