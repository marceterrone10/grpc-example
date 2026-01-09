import { Controller, NotFoundException } from '@nestjs/common';
import { UsersService } from './users.service';
import { type UsersServiceController, type CreateUserDto, type UpdateUserDto, UsersServiceControllerMethods, FindOneUserDto, PaginationDto } from 'y/common';
import { Observable } from 'rxjs';

@Controller()
@UsersServiceControllerMethods()
export class UsersController implements UsersServiceController {
  constructor(private readonly usersService: UsersService) {}

  createUser(createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  findAllUsers() {
    return this.usersService.findAll();
  }

  findOneUser(findOneUserDto: FindOneUserDto) {
    const user = this.usersService.findOne(findOneUserDto.id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  updateUser(updateUserDto: UpdateUserDto) {
    return this.usersService.update(updateUserDto.id, updateUserDto);
  }

  removeUser(findOneUserDto: FindOneUserDto) {
    return this.usersService.remove(findOneUserDto.id);
  }

  queryUsers(paginationDtoStream: Observable<PaginationDto>) {
    return this.usersService.queryUsers(paginationDtoStream);
  }
}
