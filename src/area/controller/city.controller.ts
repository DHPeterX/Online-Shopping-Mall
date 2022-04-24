import { Controller ,Post,Body,Get,Param,Query} from '@nestjs/common';
import { CreateCityDto } from '../dto/create_area';
import { CityService } from '../service/city.service';

@Controller('area')
export class CityController {

    constructor(private cityservice: CityService) { }
    @Post('/cityinfor')
    createcity(@Body() city: CreateCityDto) {
        this.cityservice.create(city);

    }

    @Get('/findcity/:id')
    findcity(@Param('id') id: string,) {
        return this.cityservice.findOne(id);
    }

    @Post('/updatecity/:id')
    updatecity(@Param('id') id: string,@Body() city: CreateCityDto) {
        return this.cityservice.UdpateOne(id,city);
    }


    @Post('/deletecity/:id')
    deletecity(@Param('id') id: string) {
        return this.cityservice.DeleteOne(id);
    }



}
