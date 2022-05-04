import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateCountryDto } from '../dto/create_area';
import { CountryService } from '../service/country.service';

@Controller('area')
export class CountryController {

	constructor(private countryservice: CountryService) {
	}

	@Post('/countryinfor')
	createcountry(@Body() country: CreateCountryDto) {
		this.countryservice.create(country);

	}

	@Get('/findcountry/:id')
	findcountry(@Param('id') id: string) {
		return this.countryservice.findOne(id);
	}

	@Post('/updatecountry/:id')
	udpatecountry(@Param('id') id: string, @Body() country: CreateCountryDto) {
		return this.countryservice.UdpateOne(id, country);
	}


	@Post('/deletecountry/:id')
	deletecountry(@Param('id') id: string) {
		return this.countryservice.DeleteOne(id);
	}


}
