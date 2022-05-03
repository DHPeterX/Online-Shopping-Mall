import { Controller, Logger } from '@nestjs/common';
import { IBaseController } from 'src/common/web/base';
import { MemberGradeService } from '../service';

@Controller('member-grade')
export class MemberGradeController extends IBaseController {
	private logger = new Logger('MemberGradeController', { timestamp: true });

	constructor(private memberGradeService: MemberGradeService) {
		super();
	}

}
