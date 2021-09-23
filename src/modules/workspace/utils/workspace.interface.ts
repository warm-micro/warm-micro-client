export interface WorkspaceListResponse {
  message: string;
  body: {
    Id: number;
    Name: string;
    Members:
      | null
      | {
          Id: number;
          Username: string;
          Nickname: string;
          Email: string;
          PhoneNumber: string;
        }[];
    Code: string;
  }[];
}
export interface CreatedWorkspaceResponse {
  message: string;
  body: {
    Id: number;
    CreatedAt: string;
    UpdatedAt: string;
    DeletedAt: null | string;
    Name: string;
    Members: null | WorkspaceListMemberResponse[];
    Code: string;
  };
}
export interface JoinWorkspaceResponse {
  message: string;
  body: {
    Id: number;
    CreatedAt: string;
    UpdatedAt: string;
    DeletedAt: null | string;
    Name: string;
    Members: null | WorkspaceListMemberResponse[];
    Code: string;
  };
}


export interface WorkspaceListMemberResponse {
  Id: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: null | string;
  Username: string;
  Workspaces: null;
}

export interface MemberListResponse {
  body: {
    Id: number;
    Name: string;
    Members: {
      Id: number;
      Username: string;
      Nickname: string;
      Email: string;
      PhoneNumber: string;
    }[];
  };
  message: string;
}