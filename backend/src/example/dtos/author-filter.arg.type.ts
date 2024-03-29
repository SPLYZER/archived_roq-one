import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ValidateNested } from 'src/class-validator';
import {
  BaseFilterArgType,
  DateFilterArgType,
  IdFilterArgType,
  IntFilterArgType,
  StringFilterArgType,
} from 'src/library/argTypes';

@InputType()
export class AuthorFilterArgType extends BaseFilterArgType {
  @Field(() => StringFilterArgType, { nullable: true })
  @ValidateNested()
  @Type(() => StringFilterArgType)
  name?: StringFilterArgType;
  @Field(() => StringFilterArgType, { nullable: true })
  @ValidateNested()
  @Type(() => StringFilterArgType)
  surname?: StringFilterArgType;
  @Field(() => IntFilterArgType, { nullable: true })
  @ValidateNested()
  @Type(() => IntFilterArgType)
  age?: IntFilterArgType;
  @Field(() => DateFilterArgType, { nullable: true })
  @ValidateNested()
  @Type(() => DateFilterArgType)
  birthDate?: DateFilterArgType;
  @Field(() => StringFilterArgType, { nullable: true })
  @ValidateNested()
  @Type(() => StringFilterArgType)
  email?: StringFilterArgType;
  @Field(() => StringFilterArgType, { nullable: true })
  @ValidateNested()
  @Type(() => StringFilterArgType)
  gender?: StringFilterArgType;

  @Field(() => IdFilterArgType, { nullable: true })
  @ValidateNested()
  @Type(() => IdFilterArgType)
  bookId?: IdFilterArgType;
}
