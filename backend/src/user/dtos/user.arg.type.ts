import { ArgsType, Field } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ValidateNested } from 'src/class-validator';
import { BaseArgType } from 'src/library/argTypes';
import { UserFilterArgType, UserOrderArgType, UserSearchArgType } from 'src/user/dtos';

@ArgsType()
export class UserArgType extends BaseArgType {
  @Field(() => UserSearchArgType, { nullable: true })
  @ValidateNested()
  @Type(() => UserSearchArgType)
  search?: UserSearchArgType;

  @Field(() => UserOrderArgType, { nullable: true })
  @ValidateNested()
  @Type(() => UserOrderArgType)
  order?: UserOrderArgType;

  @Field(() => UserFilterArgType, { nullable: true })
  @ValidateNested()
  @Type(() => UserFilterArgType)
  filter?: UserFilterArgType;
}
