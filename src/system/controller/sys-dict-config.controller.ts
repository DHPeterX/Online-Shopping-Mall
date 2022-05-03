import { Body, Controller, Delete, Get, Logger, Param, Post, Put } from '@nestjs/common';
import {
    SysDictConfigCreateDto,
    SysDictConfigDispDto,
    SysDictConfigDispOrderDto,
    SysDictConfigDto,
} from '../dto/sys-dict-config.dto';
import { SysDictConfigService } from '../service';
import { SysDictConfigEntity } from '../entity';

@Controller('/sys-config')
export class SysDictConfigController {

    private logger = new Logger('SysDictConfigController', { timestamp: true });

    constructor(
      private sysDictConfigService: SysDictConfigService
    ) {
    }

    @Get()
    async getAll(): Promise<SysDictConfigEntity[]>{
        return await this.sysDictConfigService.findAll();
    }

    @Get('/:id')
    async getOne(@Param() id:string): Promise<SysDictConfigDto>{
        return ;
    }

    @Post()
    async create(@Body() inParams: SysDictConfigCreateDto):Promise<SysDictConfigDto>{
        return;
    }

    @Post('/:id')
    async update(@Param() id:string, @Body() inParams: any): Promise<void>{
        this.logger.log({id, inParams});
    }

    @Post('/:id/updateDisp')
    async updateDisp(@Param() id:string, @Body() inParams: SysDictConfigDispDto): Promise<void>{
        this.logger.log({id, inParams});
    }

    @Post('/:id/updateDispOrd')
    async updateDispOrd(@Param() id:string, @Body() inParams: SysDictConfigDispOrderDto): Promise<void>{
        this.logger.log({id, inParams});
    }

    @Delete('/:id')
    async delete(@Param() id:string,): Promise<void>{
        this.logger.log({id});
    }

}
