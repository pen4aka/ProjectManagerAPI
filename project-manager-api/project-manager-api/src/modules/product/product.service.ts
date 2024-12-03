import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../../entities/product.entity';
import { User } from 'entities/user.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async create(product: Partial<Product>): Promise<Product> {
    try {
      const newProduct = this.productRepository.create(product); 
      return await this.productRepository.save(newProduct); 
    } catch (error) {
      console.error('Error creating product:', error); 
      throw error;
    }
  }
  
  async findAll() {
    return this.productRepository.find();
  }

  async findOne(id: number): Promise<Product> {
    const product = await this.productRepository.findOne({ where: { id } });
    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    return product;
  }

  async update(id: number, updateData: Partial<Product>) {
    await this.productRepository.update(id, updateData);
    return this.productRepository.findOneBy({ id });
  }

  async delete(id: number) {
    return this.productRepository.delete(id);
  }
  async findByUser(user: User): Promise<Product[]> {
    return this.productRepository.find({ where: { creator: user }, relations: ['category'] });
  }

  async findByCategory(categoryId: number): Promise<Product[]> {
    return this.productRepository.find({ where: { category: { id: categoryId } }, relations: ['creator'] });
  }
}
