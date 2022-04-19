import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { IBaseController } from 'src/common/web/base/i-base.controller';

@Controller('memberTier')
export class MemberTierController extend IBaseController{
  
  @Post('/create')
  createMemberTier(): Promise<void>  {
        return
  }

  @Post('/:id/update')
  updateMemberTier(@Param() id: string, @Body() inParams): Promise<void> {
        return;
  }

  @Delete('/:id')
  deleteMemberTier(@Param() id: string): Promise<void> {
        return;
  }
}
