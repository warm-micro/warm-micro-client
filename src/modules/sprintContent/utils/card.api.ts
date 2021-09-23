import { SprintStatusEnum } from '@/common/types/enums/SprintStatusEnum';
import makeRequest from '@/common/utils/makeRequest';
import {
  CardListResponse,
  CreateCardResponse,
  DeleteCardResponse,
} from './card.interface';
import { ProgressEnum } from './ProgressEnum';

export const fetchCardListAPI = (sprintId: number) =>
  makeRequest<CardListResponse>({
    method: 'get',
    url: 'card',
    query: { sprintId: sprintId },
  });

export const createCardAPI = (
  title: string,
  content: string,
  sprintId: number,
  isCard: boolean,
  progress: ProgressEnum
) =>
  makeRequest<CreateCardResponse>({
    method: 'post',
    url: 'sprint',
    body: {
      title: title,
      content: content,
      sprintId: sprintId,
      isCard: isCard,
      progress: ProgressEnum,
    },
  });

export const deleteCardAPI = (cardId: number) =>
  makeRequest<DeleteCardResponse>({
    method: 'delete',
    url: `card/${cardId}`,
  });

export const changeCardAPI = (cardId: number) =>
  makeRequest({
    method: 'put',
    url: `card/flag/${cardId}`,
  });
