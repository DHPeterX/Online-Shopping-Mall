import { Module } from '@nestjs/common';
import { CityController } from './controller/city.controller';
import { CountryController } from './controller/country.controller';
import { WardController } from './controller/ward.controller';
import { CityService } from './service/city.service';
import { CountryService } from './service/country.service';
import { WardService } from './service/ward.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { City } from './entity/city.entity';
import { Country } from './entity/country.entity';
import { Ward } from './entity/ward.entity';

@Module({
	imports: [TypeOrmModule.forFeature([City, Country, Ward])],
	controllers: [CityController, CountryController, WardController],
	providers: [CityService, CountryService, WardService],
})
export class AreaModule {
}
