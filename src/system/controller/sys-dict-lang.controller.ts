import {Controller, Logger} from '@nestjs/common';

@Controller('/sys-dict/lang')
export class SysDictLangController {

    private logger = new Logger('SysDictLangController', { timestamp: true });
}
