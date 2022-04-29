import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { time } from 'console';
import { IBaseController } from 'src/common/web/base';
import { MemberGradeService } from '../service';

@Controller('member-grade')
export class MemberGradeController extends IBaseController {
  private logger = new Logger('MemberGradeController', { timestamp: true });

  constructor(private memberGradeService : MemberGradeService) {
    super();
  }

}
