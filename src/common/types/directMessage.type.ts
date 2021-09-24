import { ProgressEnum } from '@/modules/sprintContent/utils/ProgressEnum';
import { hashTag } from './hashTag.type';
import { personTag } from './personTag.type';

export interface DirectMessageType {
  id: string;
  sender: number;
  receiver: number;
  time: Date;
  messageContent: string;
}
