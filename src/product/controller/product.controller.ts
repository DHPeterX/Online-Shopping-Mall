import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post } from '@nestjs/common';
import { CreatedProductDto } from '../dtos/create-product.dto';
import { UpdateProductDto } from '../dtos/update-product.dto';
import { ProductService } from '../service/product.service';


@Controller('product')
export class ProductController {
	constructor(private productService: ProductService) {
	}

	@Post('/create')
	createProduct(@Body() body: CreatedProductDto) {
		this.productService.create(body);
	}

	@Get('/:id')
	async findProduct(@Param('id') prdId: string) {
		const Product = await this.productService.findOne(prdId);
		if (!Product) {
			throw new NotFoundException('Product not found');
		}

		return Product;
	}

	@Get()
	findAllProducts() {
		return this.productService.find();
	}

	@Delete('/:id')
	removeProduct(@Param('id') prdId: string) {
		return this.productService.remove(prdId);
	}

	@Patch('/:id')
	updateProduct(@Param('id') prdId: string, @Body() body: UpdateProductDto) {
		return this.productService.update(prdId, body);
	}
}
