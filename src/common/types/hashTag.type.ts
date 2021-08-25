import { ColorEnum } from './enums/ColorEnum';

export interface hashTag {
  id: string;
  name: string;
  order: number;
  color: ColorEnum;
  cardOrder: number;
}
