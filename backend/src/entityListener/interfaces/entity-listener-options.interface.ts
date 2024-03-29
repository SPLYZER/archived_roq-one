import { Abstract, Type } from '@nestjs/common';
import { EntityListenerType } from 'src/entityListener/types';
export interface EntityListenerOptionsInterface {
  name: string;
  useFactory: (...args: unknown[]) => Promise<EntityListenerType> | EntityListenerType;
  inject?: (string | symbol | Type<unknown> | Abstract<unknown>)[];
}
