import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';
import { ViewsModule } from './views/views.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'node-sql.cicbapbfnkel.us-east-1.rds.amazonaws.com',
      port: 3306,
      username: 'admin',
      password: 'nodesql123',
      database: 'nodesql',
      entities: [User],
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, '..', 'dist/public'),
    //   exclude: ['/api*'],
    // }),
    ViewsModule,
  ],
  controllers: [AppController],
  providers: [AppService, AuthModule],
})
export class AppModule {}
