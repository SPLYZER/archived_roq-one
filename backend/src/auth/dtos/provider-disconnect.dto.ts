import { Field, InputType } from '@nestjs/graphql';
import { LoginProviderEnum } from 'src/auth/enums';
import { IsDefined, IsEnum, IsString } from 'src/class-validator';

@InputType()
export class ProviderDisconnectDto {
  @Field()
  @IsDefined()
  @IsString()
  @IsEnum(LoginProviderEnum)
  providerId: LoginProviderEnum;
}
