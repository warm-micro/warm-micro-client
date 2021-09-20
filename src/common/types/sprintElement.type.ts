import { SprintStatusEnum } from './enums/SprintStatusEnum';

export interface SprintElementType {
  id: number;
  order: number;
  title: string;
  status: SprintStatusEnum;
  workspaceId: number;
};

