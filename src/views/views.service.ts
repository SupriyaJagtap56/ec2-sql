import { Injectable } from '@nestjs/common';

@Injectable()
export class ViewsService {
  findAll() {
    return `This action returns all views`;
  }

  findOne(id: number) {
    return `This action returns a #${id} view`;
  }

  remove(id: number) {
    return `This action removes a #${id} view`;
  }
}

//
