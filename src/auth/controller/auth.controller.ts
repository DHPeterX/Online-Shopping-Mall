import {Body, Controller, Logger, Post} from '@nestjs/common';
import {AuthService} from '../service/auth.service';
import {AuthCredentialsDto} from '../dto/auth-credentials.dto';

@Controller('auth')
export class AuthController {

  private logger = new Logger('AuthController', {timestamp: true});

  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(@Body() authCredentialsDto: AuthCredentialsDto): Promise<void> {
    this.logger.log(authCredentialsDto);
    return this.authService.signUp(authCredentialsDto);
  }

  @Post('/signin')
  signIn(
    @Body() authCredentialsDto: AuthCredentialsDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(authCredentialsDto);
  }
}
