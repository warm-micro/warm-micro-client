import makeRequest from '@/common/utils/makeRequest';
import {
  WorkspaceListResponse,
  CreatedWorkspaceResponse,
  MemberListResponse,
  JoinWorkspaceResponse,
} from './workspace.interface';

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
export const fetchMemberListAPI = (workspaceId: number) =>
  makeRequest<MemberListResponse>({
    method: 'get',
    url: `workspace/members/${workspaceId}`,
  });

export const joinWorkspaceAPI = (code: string) =>
  makeRequest<JoinWorkspaceResponse>({
    method: 'post',
    url: 'workspace/accept',
    body: {
      code: code,
    },
  });