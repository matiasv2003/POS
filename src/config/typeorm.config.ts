import { ConfigService } from '@nestjs/config'
import type {TypeOrmModuleOptions} from '@nestjs/typeorm'

export const typeOrmConfig = (configServie: ConfigService) : TypeOrmModuleOptions => ({
    type: 'postgres',
    host: configServie.get('DATABASE_HOST'),
    port: configServie.get('DATABASE_PORT'),
    username: configServie.get('DATABASE_USER'),
    password: configServie.get('DATABASE_PASS'),
    database: configServie.get('DATABASE_NAME'),
    ssl: {
        rejectUnauthorized: false,
    },
    synchronize: true,
    autoLoadEntities: true,
    logging: true,
})