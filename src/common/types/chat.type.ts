import { ProgressEnum } from '@/modules/sprintContent/utils/ProgressEnum';
import { hashTag } from './hashTag.type';
import { personTag } from './personTag.type';

export interface ChatType {
  id: string;
  title: string;
  sprintId: string;
  createdAt: Date;
  authorId: string;
  content: string;
  ptags: personTag[] | null;
  htags: hashTag[] | null;
  isCard: boolean;
  progress: ProgressEnum;
  progressOrder: number;
}
