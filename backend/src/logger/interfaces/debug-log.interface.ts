import { LoggingTypeEnum } from 'src/logger/enums';

export interface DebugLogInterface {
  type: LoggingTypeEnum.system;
  data?: unknown;
  message: string;
}
