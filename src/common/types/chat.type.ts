import { ProgressEnum } from '@/modules/sprintContent/utils/ProgressEnum';
import { hashTag } from './hashTag.type';
import { personTag } from './personTag.type';

export interface ChatType {
  id: string;
  title: string;
  sprintId: number;
  time: Date;
  authorId: string;
  content: string;
  pTag: personTag[] | null;
  hTag: hashTag[] | null;
  isCard: boolean;
  progress: ProgressEnum;
  progressOrder: number;
}
