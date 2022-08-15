import { TypeOrmModule } from '@nestjs/typeorm';

const { NODE_ENV, DB_USERNAME, DB_PASSWORD, DB_HOST, DB_DATABASE, DB_PORT } =
  process.env;

const DB_TYPE = NODE_ENV === 'production' ? 'mysql' : 'sqlite';

const DB_MODULE = TypeOrmModule.forRoot({
  type: DB_TYPE,
  host: DB_HOST,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  port: parseInt(DB_PORT),
  entities: [],
  synchronize: true,
});

export default DB_MODULE;
