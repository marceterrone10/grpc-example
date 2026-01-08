import { Injectable, NotFoundException, OnModuleInit } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateUserDto, UpdateUserDto, User } from 'y/common';


@Injectable()
export class UsersService implements OnModuleInit {
  private users: User[] = [];

  onModuleInit() {
    for (let i = 0; i <= 100; i++) {
      this.create({
        username: randomUUID(),
        password: randomUUID(),
        age: Math.floor(Math.random() * 100)
      })
    }
  }

  create(createUserDto: CreateUserDto) {
    const user: User = {
      ...createUserDto,
      subscribed: false,
      socialMedia: undefined,
      id: randomUUID()
    };
    this.users.push(user);
    return user;
  }

  findAll() {
    return { users: this.users };
  }

  findOne(id: string) {
    return this.users.find(user => user.id === id);
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    const user = this.users.find(user => user.id === id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    const updatedUser: User = {
      ...user,
      ...updateUserDto,
      id: user.id
    };
    this.users = this.users.map(user => user.id === id ? updatedUser : user);
    return updatedUser;
  }

  remove(id: string) {
    const user = this.users.find(user => user.id === id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    this.users = this.users.filter(user => user.id !== id);
    return user;
  }
}
