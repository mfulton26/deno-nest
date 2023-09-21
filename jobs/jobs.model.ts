import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Job {
  @Field((type) => ID)
  id: string;
}
