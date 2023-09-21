import { Module } from '@nestjs/common';
import { AppController } from './app.controller.ts';
import { AppService } from './app.service.ts';
import { GraphQLModule } from '@nestjs/graphql';
import { YogaDriver, YogaDriverConfig } from '@graphql-yoga/nestjs';
import { JobsResolver } from './jobs/jobs.resolver.ts';

@Module({
  imports: [
    JobsResolver,
    GraphQLModule.forRoot<YogaDriverConfig>({
      driver: YogaDriver,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
