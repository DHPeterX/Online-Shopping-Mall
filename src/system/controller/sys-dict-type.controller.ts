import {Controller, Logger} from '@nestjs/common';

@Controller('/sys-dict/type')
export class SysDictTypeController {
    private logger = new Logger('SysDictTypeController', { timestamp: true });
}
