import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from '../dto/auth-credentials.dto';
import { UsersRepository } from '../repository/users.repository';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from "../interface/jwt-payload.interface";
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {

  private logger = new Logger('AuthService', { timestamp: true });

  constructor(
    @InjectRepository(UsersRepository)
    private userRepo: UsersRepository,
    private jwtService: JwtService,
  ) { }

  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    return this.userRepo.createUser(authCredentialsDto);
  }

  async signIn(
    authCredentialsDto: AuthCredentialsDto,
  ): Promise<{ accessToken: string }> {
    const { username, password } = authCredentialsDto;
    const user = await this.userRepo.findOne({ username });

    this.logger.log(user.userStsCd);


    if (user && (await bcrypt.compare(password, user.password))) {
      const payload: JwtPayload = { username };
      const accessToken: string = await this.jwtService.sign(payload);
      return { accessToken };
    } else {
      throw new UnauthorizedException('Please check your login credentials');
    }
  }
}
