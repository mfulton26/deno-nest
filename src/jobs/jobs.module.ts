import { Module } from '@nestjs/common';
import { JobsResolver } from './jobs.resolver.ts';

@Module({
  imports: [],
  providers: [JobsResolver],
})
export class JobsModule {}
