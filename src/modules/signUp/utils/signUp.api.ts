import makeRequest from '@/common/utils/makeRequest';

export const signUpAPI = (
  username: string,
  password: string,
  nickname: string,
  email: string,
  phoneNumber: string
) =>
  makeRequest<{ id: string }>({
    method: 'post',
    url: 'user/signup',
    body: {
      username,
      password,
      nickname,
      email,
      phoneNumber,
    },
  });
