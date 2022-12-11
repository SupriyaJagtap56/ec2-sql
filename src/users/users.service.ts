import { Injectable, Dependencies } from '@nestjs/common';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
// import { User } from './user.entity';

@Injectable()
@Dependencies(getRepositoryToken(User))
export class UsersService {
  update(arg0: number, updateUserDto: UpdateUserDto) {
    throw new Error('Method not implemented.');
  }
  async create(createUserDto: CreateUserDto) {
    const user = this.usersRepository.create(createUserDto);
    const user1 = await this.usersRepository.save(createUserDto);
    return { user, user1 };
  }
  constructor(private usersRepository: any) {
    this.usersRepository = usersRepository;
  }

  async findAll() {
    return this.usersRepository.find();
  }

  findOne(id: number) {
    return this.usersRepository.findOneBy({ id });
  }
  find(query: any) {
    return this.usersRepository.findOneBy(query);
  }

  async remove(id: number) {
    await this.usersRepository.delete(id);
  }
}
