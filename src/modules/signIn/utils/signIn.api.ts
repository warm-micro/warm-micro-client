import makeRequest from '@/common/utils/makeRequest';

export const signInAPI = (username: string, password: string) =>
  makeRequest<{ userToken: string }>({
    method: 'post',
    url: 'user/authenticate',
    body: { username, password },
  });
