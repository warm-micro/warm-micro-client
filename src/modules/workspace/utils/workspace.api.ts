import makeRequest from '@/common/utils/makeRequest';
import { WorkspaceListResponse, CreatedWorkspaceResponse } from './workspace.interface';

export const fetchWorkspaceListAPI = (userId: number) =>
  makeRequest<WorkspaceListResponse>({
    method: 'get',
    url: 'workspace',
    query: { userId: userId },
  });

export const createWorkspaceAPI = (newWorkspace: string) =>
  makeRequest<CreatedWorkspaceResponse>({
    method: 'post',
    url: 'workspace',
    body: { name: newWorkspace },
  });