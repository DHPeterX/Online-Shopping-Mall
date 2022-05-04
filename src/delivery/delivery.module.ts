import { Module } from '@nestjs/common';
import { DeliveryController } from './controller/delivery.controller';
import { DeliveryService } from './service/delivery.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Delivery } from './entity/delivery.entity';

@Module({
	imports: [TypeOrmModule.forFeature([Delivery])],
	controllers: [DeliveryController],
	providers: [DeliveryService],
})
export class DeliveryModule {
}
