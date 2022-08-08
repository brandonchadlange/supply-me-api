import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

const JWT_MODULE = JwtModule.registerAsync({
  inject: [ConfigService],
  useFactory(config: ConfigService) {
    return {
      secret: config.get<string>('JWT_SECRET'),
      signOptions: { expiresIn: '1h' },
    };
  },
});

export default JWT_MODULE;
