import makeRequest from '@/common/utils/makeRequest';
import { UserInfoResponse } from './myInfo.interface';

export const fetchMyInfoAPI = () =>
  makeRequest<UserInfoResponse>({
    method: 'get',
    url: 'user/info',
  });
export const fetchUserInfoAPI = (id:  number) =>
  makeRequest<UserInfoResponse>({
    method: 'get',
    url: `user/info/${id}`,
  });

