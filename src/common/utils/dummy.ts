import { SprintStatusEnum } from '../types/enums/SprintStatusEnum';
import { SprintElementType } from '../types/sprintElement.type';

export const dummy = [
  {
    workspace: 'warmmicro',
    sprintIdList: ['sp1', 'sp2', 'sp3', 'sp4', 'sp5', 'sp6'],
  },
];

export const dummySprint: SprintElementType[] = [
  { id: 'sp1', order: 0, title: '스프린트1', status: SprintStatusEnum.FINISH },
  { id: 'sp2', order: 0, title: '스프린트2', status: SprintStatusEnum.FINISH },
  { id: 'sp3', order: 0, title: '사용자 기능 구현', status: SprintStatusEnum.CURRENT },
  { id: 'sp4', order: 0, title: '채팅 기능 구현', status: SprintStatusEnum.READY },
  { id: 'sp5', order: 0, title: '게시판 기능 구현', status: SprintStatusEnum.READY },
  { id: 'sp6', order: 0, title: '검색기능 구현', status: SprintStatusEnum.READY },
];
