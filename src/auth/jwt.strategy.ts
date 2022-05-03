import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtPayload } from './interface/jwt-payload.interface';
import { User } from './entity/user.entity';
import { UsersRepository } from './repository/users.repository';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

	private logger = new Logger('AuthService', { timestamp: true });

	constructor(
		@InjectRepository(UsersRepository)
		private usersRepository: UsersRepository,
		private configService: ConfigService,
	) {
		super({
			secretOrKey: configService.get('JWT_SECRET'),
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
		});
	}

	async validate(payload: JwtPayload): Promise<User> {
		const { username } = payload;
		const user: User = await this.usersRepository.findOneOrFail({ username });

		this.logger.log(user.id);
		if (!user) {
			throw new UnauthorizedException();
		}

		return user;
	}
}
