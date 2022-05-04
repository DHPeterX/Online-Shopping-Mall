import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateWardDto } from '../dto/create_area';
import { WardService } from '../service/ward.service';

@Controller('area')
export class WardController {

	constructor(private wardservice: WardService) {
	}

	@Post('/wardinfor')
	createwrad(@Body() ward: CreateWardDto) {
		this.wardservice.create(ward);

	}

	@Get('/findward/:id')
	findward(@Param('id') id: string) {
		return this.wardservice.findOne(id);
	}

	@Post('/updateward/:id')
	updateward(@Param('id') id: string, @Body() ward: CreateWardDto) {
		return this.wardservice.UdpateOne(id, ward);
	}


	@Post('/deleteward/:id')
	deleteward(@Param('id') id: string) {
		return this.wardservice.DeleteOne(id);
	}


}
