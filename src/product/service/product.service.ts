import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatedProductDto } from '../dtos/create-product.dto';
import { Product } from '../entity/product.entity';

@Injectable()
export class ProductService {
    constructor(@InjectRepository(Product) private repo: Repository<Product>){}

    create(productDto: CreatedProductDto){
        const product = this.repo.create(productDto);

        return this.repo.save(product);
    }

    findOne(PROD_ID: string){
        return this.repo.findOne({PROD_ID});
    }

    find(){
        return this.repo.find()
    }

    async update(PROD_ID: string, attrs: Partial<Product> ){
        const product = await this.findOne(PROD_ID);

        if(!product) {
            throw new NotFoundException('Product not found');            
        }

        Object.assign(product, attrs);
        return this.repo.save(product);
    }

    async remove(PROD_ID: string){
        const product = await this.findOne(PROD_ID);

        if(!product) {
            throw new NotFoundException('Procduct not found');            
        }

        return this.repo.remove(product);
    }
}
