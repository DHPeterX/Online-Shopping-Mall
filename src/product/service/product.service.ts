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

    findOne(prdId: string){
        return this.repo.findOne({prdId});
    }

    find(){
        return this.repo.find()
    }

    async update(prdId: string, attrs: Partial<Product> ){
        const product = await this.findOne(prdId);

        if(!product) {
            throw new NotFoundException('Product not found');            
        }

        Object.assign(product, attrs);
        return this.repo.save(product);
    }

    async remove(prdId: string){
        const product = await this.findOne(prdId);

        if(!product) {
            throw new NotFoundException('Procduct not found');            
        }

        return this.repo.remove(product);
    }
}
