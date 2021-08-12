import { SprintStatusEnum } from './enums/SprintStatusEnum';

export interface SprintElementType {
  id: string;
  order: number;
  title: string;
  status: SprintStatusEnum;
};
