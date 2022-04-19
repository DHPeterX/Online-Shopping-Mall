import { Controller, Logger } from '@nestjs/common';
import { time } from 'console';

@Controller('memberGrade')
export class MemberGradeController {
  private logger = new Logger('MemberGradeController', { timestamp: true });
}
