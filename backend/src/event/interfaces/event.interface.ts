import { EventNameEnum } from 'src/event/enums';

export interface EventInterface {
  id: string;
  name: EventNameEnum | string;
  object: string;
  data?: Record<string, unknown>;
}
