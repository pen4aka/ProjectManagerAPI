import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from '../../entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async create(category: Partial<Category>) {
    return this.categoryRepository.save(category);
  }

  async findAll() {
    return this.categoryRepository.find();
  }

  async findOne(id: number) {
    return this.categoryRepository.findOneBy({ id });
  }

  async update(id: number, updateData: Partial<Category>) {
    await this.categoryRepository.update(id, updateData);
    return this.categoryRepository.findOneBy({ id });
  }

  async delete(id: number) {
    return this.categoryRepository.delete(id);
  }
}
