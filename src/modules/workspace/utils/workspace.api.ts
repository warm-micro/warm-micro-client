import makeRequest from '@/common/utils/makeRequest';
import { WorkspaceListResponse } from './workspace.interface';

export const fetchWorkspaceListAPI = (userId: number) =>
  makeRequest<WorkspaceListResponse>({
    method: 'get',
    url: 'workspace',
    query: { userId: userId },
  });
