import { Controller ,Post,Body,Get,Param,Query} from '@nestjs/common';
import { CreateDeliveryDto } from '../dto/Create.delivery';
import { DeliveryService } from '../service/delivery.service';

@Controller('delivery')
export class DeliveryController {

    constructor(private deliveryservice: DeliveryService) { }
    @Post('/DeliveryInfor')
    Createdelivery(@Body() delivery: CreateDeliveryDto) {
        this.deliveryservice.create(delivery);

    }

    @Get('/Find/:id')
    finddelivery(@Param('id') id: string,) {
        return this.deliveryservice.findOne(id);
    }

    @Post('/Update/:id')
    udpatedelivery(@Param('id') id: string,@Body() delivery: CreateDeliveryDto) {
        return this.deliveryservice.UdpateOne(id,delivery);
    }


    @Post('/Delete/:id')
    deletedelivery(@Param('id') id: string) {
        return this.deliveryservice.DeleteOne(id);
    }



}
