import { Controller, Logger } from '@nestjs/common';
import { IBaseController } from '../../common/web/base/i-base.controller';
import { MemberService } from '../service';

@Controller('member')
export class MemberController extends IBaseController {

	private logger = new Logger('MemberController', { timestamp: true });

	constructor(private memberService: MemberService) {
		super();
	}
}
