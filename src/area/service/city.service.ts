import { Injectable, Param } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { City } from '../entity/city.entity';
import { stringify } from 'querystring';

@Injectable()
export class CityService {
    constructor(@InjectRepository(City) private repo: Repository<City>) { }

    create(city: Partial<City>) {

        var ts = Date.now();
        var concattime = new Date(ts);

        city.createdAt = concattime.toLocaleDateString().toString() + " " + concattime.toLocaleTimeString();
        city.createdBy = 'SYSTEM';
        city.updatedBy = 'SYSTEM';
        city.updatedAt = concattime.toLocaleDateString().toString() + " " + concattime.toLocaleTimeString();

        const data = this.repo.create(city);
        return this.repo.save(data);
    }

    findOne(City_ID: string) {
        return this.repo.findOne(City_ID);
    }

    findAll() {
        return this.repo.find();
    }

    async UdpateOne(City_ID: string, attrs: Partial<City>) {
        const city = await this.findOne(City_ID);
        if (!city) {
            throw new Error('City not found')
        }

        Object.assign(city, attrs);
        return this.repo.save(city);
    }

    async DeleteOne(City_ID: string) {
        const city = await this.findOne(City_ID);
        if (!city) {
            throw new Error('City not found')
        }

        return this.repo.delete(city);
    }


}
