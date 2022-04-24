import { Injectable, Param } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Country } from '../entity/country.entity';
import { stringify } from 'querystring';

@Injectable()
export class CountryService {
    constructor(@InjectRepository(Country) private repo: Repository<Country>) { }

    create(country: Partial<Country>) {

        var ts = Date.now();
        var concattime = new Date(ts);
        country.createdAt = concattime.toLocaleDateString().toString() + " " + concattime.toLocaleTimeString();
        country.createdBy = 'SYSTEM';
        country.updatedBy = 'SYSTEM';
        country.updatedAt = concattime.toLocaleDateString().toString() + " " + concattime.toLocaleTimeString();

        const data = this.repo.create(country);
        return this.repo.save(data);
    }

    findOne(Country_ID: string) {
        return this.repo.findOne(Country_ID);
    }

    findAll() {
        return this.repo.find();
    }

    async UdpateOne(Country_ID: string, attrs: Partial<Country>) {
        const country = await this.findOne(Country_ID);
        if (!country) {
            throw new Error('Country not found')
        }

        Object.assign(country, attrs);
        return this.repo.save(country);
    }

    async DeleteOne(Country_ID: string) {
        const country = await this.findOne(Country_ID);
        if (!country) {
            throw new Error('Country not found')
        }

        return this.repo.delete(country);
    }

}
