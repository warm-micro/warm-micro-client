import { ColorEnum } from '@/common/types/enums/ColorEnum';

export const colorMapper = (color: ColorEnum) => {
  switch (color) {
    case ColorEnum.YELLOW:
      return { bgColor: '#FFEACB', txtColor: '#FFA723' };
    case ColorEnum.RED:
      return { bgColor: '#FFD8D8', txtColor: '#FF6363' };
    case ColorEnum.GREEN:
      return { bgColor: '#E1FDE6', txtColor: '#02D824' };
    case ColorEnum.BLUE:
      return { bgColor: '#DAEBFF', txtColor: '#096BFF' };
    default:
      console.log('no color, please check');
      break;
  }
};
