import makeRequest from '@/common/utils/makeRequest';
import { UserInfoResponse, WorkspaceListResponse } from './myInfo.interface';

export const fetchUserInfoAPI = () =>
  makeRequest<UserInfoResponse>({
    method: 'get',
    url: 'user/info',
  });
export const fetchWorkspaceListAPI = (userId: number) =>
  makeRequest<WorkspaceListResponse>({
    method: 'get',
    url: 'workspace',
    query: { userId: userId },
  });