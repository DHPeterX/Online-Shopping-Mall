import { Body, Controller, Post, Get, Patch, Param, Query, Delete, NotFoundException } from '@nestjs/common';
import { CreatedProductDto } from '../dtos/create-product.dto';
import { UpdateProductDto } from '../dtos/update-product.dto';
import { ProductService } from '../service/product.service';


@Controller('product')
export class ProductController {
    constructor(private productService: ProductService){}

    @Post('/create')
    createProduct(@Body() body: CreatedProductDto) {
        this.productService.create(body);
    }

    @Get('/:id')
    async findProduct(@Param('id') PROD_ID: string){
        const Product = await this.productService.findOne(PROD_ID);
        if(!Product) {
            throw new NotFoundException('Product not found');
        }

        return Product;    
    }

    @Get()
    findAllProducts(){
        return this.productService.find();
    }

    @Delete('/:id')
    removeProduct(@Param('id') PROD_ID: string){
        return this.productService.remove(PROD_ID);
    }

    @Patch('/:id')
    updateProduct(@Param('id') PROD_ID: string, @Body() body: UpdateProductDto){
        return this.productService.update(PROD_ID, body);
    }
}
