import { ConflictException, InternalServerErrorException, Logger, } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { AuthCredentialsDto } from '../dto/auth-credentials.dto';
import { User } from '../entity/user.entity';
import { SecurityUtils } from 'src/common/core/utils/security.utils'
import * as bcrypt from 'bcrypt';
import { InjectRepository } from "@nestjs/typeorm";
import { JwtService } from "@nestjs/jwt";

@EntityRepository(User)
export class UsersRepository extends Repository<User> {

  private logger = new Logger('UsersRepository', { timestamp: true });

  async createUser(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    const { username, password } = authCredentialsDto;

    const salt = await bcrypt.genSalt();
    this.logger.log(salt);
    this.logger.log(salt.toString().length);

    const hashedPassword = await bcrypt.hash(password, salt);
    this.logger.log(hashedPassword);

    const user = this.create({ name: 'David', username, password: hashedPassword });

    try {

      await this.save(user);

    } catch (error) {

      //this.logger.log(error.message);
      if (error.code === '23505') {
        // duplicate username
        throw new ConflictException('Username Already Exists');
      } else {
        throw new InternalServerErrorException(error.message);
      }
    }
  }
}
