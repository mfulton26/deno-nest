import { Query, Resolver } from '@nestjs/graphql';
import { Job } from './jobs.model.ts';

@Resolver((of) => Job)
export class JobsResolver {
  constructor() {}

  @Query((returns) => [Job])
  async jobs(): Promise<Job[]> {
    return [];
  }
}
