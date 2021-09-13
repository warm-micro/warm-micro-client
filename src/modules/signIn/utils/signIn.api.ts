import makeRequest from '@/common/utils/makeRequest';
import { UserInfoResponse } from '@/modules/myPage/utils/myInfo.interface';

export const signInAPI = (username: string, password: string) =>
  makeRequest<{ jwttoken: string; userResponse: UserInfoResponse }>({
    method: 'post',
    url: 'user/authenticate',
    body: { username, password },
  });
