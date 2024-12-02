import { Controller, Get, Post, Patch, Delete, Param, Body, UseGuards, Req, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ProductService } from './product.service';
import { Product } from '../../entities/product.entity';
//import { AuthenticatedRequest } from '../../interfaces/custom-request.interface'; 

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() product: Partial<Product>) {
    return this.productService.create(product);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  update(@Param('id') id: number, @Body() updateData: Partial<Product>) {
    return this.productService.update(id, updateData);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  delete(@Param('id') id: number) {
    return this.productService.delete(id);
  }

  @Get()
  findAll() {
    return this.productService.findAll();
  }
  
  @Get('my-products')
  @UseGuards(AuthGuard('jwt'))
  async findMyProducts(@Req() req: any) {
    const user = req.user; // Authenticated user from the request
    if (!user) {
      throw new UnauthorizedException('User is not authenticated.');
    }
    return this.productService.findByUser(user);
  }
   // List products filtered by a given category ID
   @Get('category/:categoryId')
   findByCategory(@Param('categoryId') categoryId: number) {
     return this.productService.findByCategory(categoryId);
   }
}
