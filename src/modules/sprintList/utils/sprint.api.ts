import { SprintStatusEnum } from '@/common/types/enums/SprintStatusEnum';
import makeRequest from '@/common/utils/makeRequest';
import { SprintListResponse, CreatedSprintResponse } from './sprint.interface';

export const fetchSprintListAPI = (workspaceId: number) =>
  makeRequest<SprintListResponse>({
    method: 'get',
    url: 'sprint',
    query: { workspaceId: workspaceId },
  });

export const createSprintAPI = (
  workspaceId: number,
  newSprint: string,
  status: SprintStatusEnum
) =>
  makeRequest<CreatedSprintResponse>({
    method: 'post',
    url: 'sprint',
    body: { name: newSprint, workspaceId: workspaceId, status: status  },
  });
export const deleteSprintAPI = (
  sprintId: number,
) => makeRequest