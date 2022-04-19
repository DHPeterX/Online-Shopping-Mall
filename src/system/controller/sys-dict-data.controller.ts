import {Controller, Logger} from '@nestjs/common';

@Controller('/sys-dict/data')
export class SysDictDataController {

    private logger = new Logger('SysDictDataController', { timestamp: true });
}
