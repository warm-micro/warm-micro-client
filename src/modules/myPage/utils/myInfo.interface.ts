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

export interface WorkspaceListResponse {
  message: string;
  body: {
    ID: number;
    CreatedAt: string;
    UpdatedAt: string;
    DeletedAt: null | string;
    Name: string;
    Members: null | number[];
  }[];
}

