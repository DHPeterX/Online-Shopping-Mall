import {Body, Controller, Get, Logger, Param, Post} from '@nestjs/common';
import {SysDictSelTagDto} from "../dto/sys-dict-sel-tag.dto";

@Controller('/sys-comm')
export class SysDictCommController {

    private logger = new Logger('SysDictCommController', { timestamp: true });

    @Get('/config/:configId')
    getConfigById(@Param('configId') configId: string) {

    }

    @Get('/dict-tag')
    fetchDictSelTag(){

    }

    @Post('/table-tag')
    fetchTableSelTag(@Body() inParams: SysDictSelTagDto){
    }
}
