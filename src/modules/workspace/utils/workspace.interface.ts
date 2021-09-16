export interface WorkspaceListResponse {
  message: string;
  body: {
    ID: number;
    CreatedAt: string;
    UpdatedAt: string;
    DeletedAt: null | string;
    Name: string;
    Members: null | WorkspaceListMemberResponse[];
    Code: string;
  }[];
}
export interface CreatedWorkspaceResponse {
  message: string;
  body: {
    ID: number;
    CreatedAt: string;
    UpdatedAt: string;
    DeletedAt: null | string;
    Name: string;
    Members: null | WorkspaceListMemberResponse[];
    Code: string;
  };
}

export interface WorkspaceListMemberResponse {
  ID: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: null | string;
  Username: string;
  Workspaces: null;
}
