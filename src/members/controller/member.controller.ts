import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Post,
} from '@nestjs/common';
import { IBaseController } from '../../common/web/base/i-base.controller';
import {
  MemberBasicInfoDto,
  MemberCreateDto,
  MemberUpdateBasicInfo,
} from '../dto/member.dto';
import { MemberService } from '../service';

@Controller('member')
export class MemberController extends IBaseController {

  private logger = new Logger('MemberController',{timestamp: true});

  constructor(private memberService : MemberService) {
    super();
  }
}
