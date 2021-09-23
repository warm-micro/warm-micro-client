import { SprintStatusEnum } from '@/common/types/enums/SprintStatusEnum';
import makeRequest from '@/common/utils/makeRequest';
import { SprintListResponse, SprintResponse } from './sprint.interface';

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
  makeRequest<SprintResponse>({
    method: 'post',
    url: 'sprint',
    body: { name: newSprint, workspaceId: workspaceId, status: status },
  });
export const deleteSprintAPI = (sprintId: number) =>
  makeRequest<SprintResponse>({
    method: 'delete',
    url: `sprint/${sprintId}`,
  });

export const changeSprintAPI = (sprintId: number, status: SprintStatusEnum) =>
  makeRequest<SprintResponse>({
    method: 'put',
    url: `sprint/status/${sprintId}`,
    body: {
      status: status,
    },
  });