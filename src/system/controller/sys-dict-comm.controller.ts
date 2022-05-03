import {Body, Controller, Get, Logger, Param, Post} from '@nestjs/common';
import {SysDictSelTagDto} from "../dto/sys-dict-sel-tag.dto";
import { SysDictSelTagService, SysDictTypeService } from '../service';

@Controller('/sys-comm')
export class SysDictCommController {

    private logger = new Logger('SysDictCommController', { timestamp: true });

    constructor(
      private sysTabTagService : SysDictSelTagService
      , private sysDictTypeService: SysDictTypeService
    ) {
    }
    /**
     * System Public Function
     * */
    @Get('/config/:configId')
    getConfigById(@Param('configId') configId: string) {
        // TODO: sysTabTagService >> Fetch From Caching Service
    }

    @Get('/dictTags')
    fetchDictSelTag(){
        // TODO: sysTabTagService >> Fetch From Caching Service
    }

    @Get('/tablTags')
    fetchTableSelTag(@Body() inParams: SysDictSelTagDto){
        // TODO: sysTabTagService >> Fetch From Caching Service
    }
}
