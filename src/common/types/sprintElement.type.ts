import { SprintStatusEnum } from './enums/SprintStatusEnum';

export type SprintElementType = {
  id: String;
  order: Number;
  title: String;
  status: SprintStatusEnum;
};
