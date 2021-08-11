import { SprintStatusEnum } from './enums/SprintStatusEnum';

export type SprintElementType = {
  id: string;
  order: number;
  title: string;
  status: SprintStatusEnum;
};
