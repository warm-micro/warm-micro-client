import { SprintStatusEnum } from '@/common/types/enums/SprintStatusEnum';
import { SprintElementType } from '@/common/types/sprintElement.type';

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
export interface SprintResponse {
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
export interface changeSprint {
  element: SprintElementType;
  status: SprintStatusEnum;
}