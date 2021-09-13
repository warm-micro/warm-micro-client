import makeRequest from '@/common/utils/makeRequest';
import { UserInfoResponse } from './myInfo.interface';

export const fetchUserInfoAPI = () =>
  makeRequest<UserInfoResponse>({
    method: 'get',
    url: 'user/info',
  });
