export interface UserInfoResponse {
  message: string;
  body: {
    id: number;
    username: string;
    nickname: string;
    email: string;
    phoneNumber: string;
  };
}


