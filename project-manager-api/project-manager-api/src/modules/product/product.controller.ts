import { Controller, Get, Post, Patch, Delete, Param, Body, UseGuards, Req, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ProductService } from './product.service';
import { Product } from '../../entities/product.entity';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiBody } from '@nestjs/swagger';

@ApiTags('Products')
@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a new product' })
  @ApiResponse({ status: 201, description: 'Product created successfully.' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiBody({ type: Product })
  create(@Body() product: Partial<Product>) {
    return this.productService.create(product);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update a product' })
  @ApiResponse({ status: 200, description: 'Product updated successfully.' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  update(@Param('id') id: number, @Body() updateData: Partial<Product>) {
    return this.productService.update(id, updateData);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete a product' })
  @ApiResponse({ status: 200, description: 'Product deleted successfully.' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  delete(@Param('id') id: number) {
    return this.productService.delete(id);
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve all products' })
  @ApiResponse({ status: 200, description: 'List of products.' })
  findAll() {
    return this.productService.findAll();
  }

  @Get('my-products')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Retrieve products created by the authenticated user' })
  @ApiResponse({ status: 200, description: 'List of user-specific products.' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  async findMyProducts(@Req() req: any) {
    const user = req.user;
    if (!user) {
      throw new UnauthorizedException('User is not authenticated.');
    }
    return this.productService.findByUser(user);
  }

  @Get('category/:categoryId')
  @ApiOperation({ summary: 'Retrieve products by category' })
  @ApiResponse({ status: 200, description: 'List of products in the specified category.' })
  findByCategory(@Param('categoryId') categoryId: number) {
    return this.productService.findByCategory(categoryId);
  }
}
