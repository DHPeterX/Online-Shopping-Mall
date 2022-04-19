import { string } from '@hapi/joi';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { IBaseController } from 'src/common/web/base/i-base.controller';

@Controller('memberTier')
export class MemberTierController extends IBaseController {
  //       @Get()
  //       getAll(): Promise < any > {
  //             return
  //       }
  //       @Get()
  //       getById(): Promise < any > {
  //             return
  //       }
  //   @Post('/create')
  //   createMemberTier(): Promise<string>  {
  //         return
  //   }
  //   @Post('/:id/update')
  //   updateMemberTier(@Param() id: string, @Body() inParams): Promise<string> {
  //         return
  //   }
  //   @Delete('/:id')
  //   deleteMemberTier(@Param() id: string): Promise<string> {
  //         return
  //   }
}
