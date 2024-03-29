import { Field, InputType } from '@nestjs/graphql';
import { IsDefined, IsEmail, IsString } from 'src/class-validator';
import { Trim } from 'src/library/decorators';

@InputType()
export class ForgotPasswordDto {
  @Field()
  @IsEmail()
  @Trim()
  @IsDefined()
  @IsString()
  email: string;
}
