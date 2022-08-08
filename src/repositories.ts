import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';

export default {
  USER: TypeOrmModule.forFeature([User]),
};
