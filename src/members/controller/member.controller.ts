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

@Controller('member')
export class MemberController extends IBaseController {
  private logger = new Logger('MemberController');

  @Get()
  getMemberList(): Promise<void> {
    return;
  }

  @Get('/:id')
  getMemberBasicInfo(
    @Param('id') id: string,
    @Body() inParams: any,
  ): Promise<MemberBasicInfoDto> {
    //TODO
    return;
  }

  @Post('/create')
  createMember(@Body() inParams: MemberCreateDto): Promise<void> {
    return;
  }

  @Post('/:id')
  updateMember(
    @Param('id') id: string,
    @Body() inParams: MemberUpdateBasicInfo,
  ): Promise<void> {
    return;
  }

  @Post('/:id/updateCellPhone')
  updateMemberCellPhone(
    @Param('id') id: string,
    @Body() inParams: MemberUpdateBasicInfo,
  ): Promise<void> {
    const tgtValue = {};
    return;
  }

  @Post('/:id/updateEmail')
  updateMemberEmail(
    @Param('id') id: string,
    @Body() inParams: MemberUpdateBasicInfo,
  ): Promise<void> {
    const tgtValue = {};
    return;
  }

  @Delete('/:id')
  deleteMember(@Param('id') id: string, @Body() inParams): Promise<void> {
    const tgtValue = {};
    return;
  }
}
