import { Injectable, Param } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Delivery } from '../entity/delivery.entity';
import { stringify } from 'querystring';

@Injectable()
export class DeliveryService {
    constructor(@InjectRepository(Delivery) private repo: Repository<Delivery>) { }

    create(delivery: Partial<Delivery>) {

        var ts = Date.now();
        var concattime = new Date(ts);
        var concatregex = delivery.state_cntry_cd + delivery.state_city_cd + delivery.state_ward_cd;
        var concatcount = this.findAll().finally.length;
        var generatedID = concattime.getFullYear() + concattime.getMonth() + concattime.getDay() + concatregex + concatcount;

        delivery.createdAt = concattime.toLocaleDateString().toString() + " " + concattime.toLocaleTimeString();
        delivery.createdBy = 'SYSTEM';
        delivery.updatedBy = 'SYSTEM';
        delivery.updatedAt = concattime.toLocaleDateString().toString() + " " + concattime.toLocaleTimeString();

        const data = this.repo.create(delivery);
        return this.repo.save(data);
    }

    findOne(dlr_id: string) {
        return this.repo.findOne(dlr_id);
    }

    findAll() {
        return this.repo.find();
    }

    async UdpateOne(dlr_id: string, attrs: Partial<Delivery>) {
        const delivery = await this.findOne(dlr_id);
        if (!delivery) {
            throw new Error('User not found')
        }

        Object.assign(delivery, attrs);
        return this.repo.save(delivery);
    }

    async DeleteOne(dlr_id: string) {
        const delivery = await this.findOne(dlr_id);
        if (!delivery) {
            throw new Error('User not found')
        }

        return this.repo.delete(delivery);
    }


}
