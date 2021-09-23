import { SprintStatusEnum } from '@/common/types/enums/SprintStatusEnum';
import { SprintElementType } from '@/common/types/sprintElement.type';
import { ProgressEnum } from './ProgressEnum';

export interface CardListResponse {
  message: string;
  body: {
    id: number;
    title: string;
    content: null | string;
    createdAt: string;
    sprintId: number;
    authorid: number;
    isCard: boolean;
    progress: ProgressEnum;
    progressOrder: number;
    ptags: {
      userId: number;
      username: string;
      nickname: string;
      email: string;
      phoneNumber: string;
      color: null;
    }[];
    htags: {
      id: number;
      name: string;
      tagOrder: number;
      color: string;
      cardOrder: number;
    }[];
  }[];
}
export interface CreateCardResponse {
  title: string;
  content: string;
  sprintId: number;
  isCard: boolean;
  progress: ProgressEnum;
}
export interface DeleteCardResponse {
  message: string;
  body: null | {};
}
