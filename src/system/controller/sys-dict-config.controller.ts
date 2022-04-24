import {Controller, Logger} from '@nestjs/common';

@Controller('/sys-config')
export class SysDictConfigController {

    private logger = new Logger('SysDictConfigController', { timestamp: true });


}
