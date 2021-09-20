import { SprintStatusEnum } from '@/common/types/enums/SprintStatusEnum';

export interface SprintListResponse {
  message: string;
  body: {
    ID: number;
    CreatedAt: string;
    UpdatedAt: string;
    DeletedAt: null | string;
    Name: string;
    Status: SprintStatusEnum;
    Order: number;
    WorkspaceId: number;
  }[];
}
export interface CreatedSprintResponse {
  message: string;
  body: {
    ID: number;
    CreatedAt: string;
    UpdatedAt: string;
    DeletedAt: null | string;
    Name: string;
    Status: SprintStatusEnum;
    Order: number;
    WorkspaceId: number;
  };
}
