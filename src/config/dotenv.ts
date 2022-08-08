import { ConfigModule } from '@nestjs/config';

const CONFIG_MODULE = ConfigModule.forRoot({
  isGlobal: true,
});

export default CONFIG_MODULE;
