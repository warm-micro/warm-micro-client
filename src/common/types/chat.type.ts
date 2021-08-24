import { ProgressEnum } from '@/modules/sprintContent/utils/ProgressEnum';

export interface ChatType {
  id: string;
  sprintId: string;
  time: Date;
  authorId: string;
  content: string;
  pTag: string[] | null;
  hTag: string[] | null;
  isCard: boolean;
  progress: ProgressEnum;
}
