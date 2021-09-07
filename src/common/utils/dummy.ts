import { ProgressEnum } from '@/modules/sprintContent/utils/ProgressEnum';
import { ChatType } from '../types/chat.type';
import { DirectMessageType } from '../types/directMessage.type';
import { ColorEnum } from '../types/enums/ColorEnum';
import { SprintStatusEnum } from '../types/enums/SprintStatusEnum';
import { MemberType } from '../types/member.type';
import { SprintElementType } from '../types/sprintElement.type';
import { ThreadType } from '../types/thread.type';
import { WorkspaceType } from '../types/workspace.type';


export const dummyMessage: DirectMessageType[] = [
  {
    id: '01',
    sender: '002',
    receiver: '001',
    time: new Date('2021-08-11 10:24:30'),
    messageContent: '오늘 점심은 어떤 걸로 먹을까요? 짜장면? 밀면? 마라탕?',
  },
  {
    id: '02',
    sender: '001',
    receiver: '002',
    time: new Date('2021-08-11 10:24:35'),
    messageContent: '흠.. 오늘은 칼칼하고 매운게 땡기긴 한데.. 진호님 매운거 잘드십니까?',
  },
  {
    id: '03',
    sender: '002',
    receiver: '001',
    time: new Date('2021-08-11 10:24:36'),
    messageContent: '음 어느정도 잘 먹는거 같긴합니다. 오늘 날도 흐리고 좀 추워졌으니 따뜻하고 매운 마라탕으로 가시죠',
  },
  {
    id: '04',
    sender: '001',
    receiver: '002',
    time: new Date('2021-08-11 10:24:50'),
    messageContent:
      `오 ㄱㄱㄱ 좋습니다. 한 3단계정도에 소고기 추가해서 먹읍시다. 
      어디서 시킬까요?`,
  },
  {
    id: '05',
    sender: '002',
    receiver: '001',
    time: new Date('2021-08-11 10:24:55'),
    messageContent: '천라 쿵푸 기기기',
  },
 
];

export const dummy: WorkspaceType[] = [
  {
    id: '01',
    name: 'warm-micro',
    sprintList: ['sp1', 'sp2', 'sp3', 'sp4', 'sp5', 'sp6'],
    url: '/images/warm.png',
  },
  { id: '01', name: 'linker', sprintList: ['sp7', 'sp8'], url: '/images/linker.png' },
];

export const dummySprint: SprintElementType[] = [
  { id: 'sp1', order: 0, title: '스프린트1', status: SprintStatusEnum.FINISH },
  { id: 'sp2', order: 1, title: '스프린트2', status: SprintStatusEnum.FINISH },
  { id: 'sp3', order: 2, title: '사용자 기능 구현', status: SprintStatusEnum.CURRENT },
  { id: 'sp4', order: 3, title: '채팅 기능 구현', status: SprintStatusEnum.READY },
  { id: 'sp5', order: 4, title: '게시판 기능 구현', status: SprintStatusEnum.READY },
  { id: 'sp6', order: 5, title: '검색기능 구현', status: SprintStatusEnum.READY },
  { id: 'sp7', order: 0, title: '유니티 UI', status: SprintStatusEnum.READY },
  { id: 'sp8', order: 1, title: '포톤 서버 연동', status: SprintStatusEnum.READY },
];

export const dummySprintChat = [
  {
    sprintId: 'sp1',
    chats: ['chat0', 'chat1', 'chat2', 'chat3', 'chat4'],
  },
  {
    sprintId: 'sp2',
    chats: ['chat0', 'chat1', 'chat2'],
  },
  {
    sprintId: 'sp3',
    chats: ['chat0', 'chat1', 'chat2'],
  },
  {
    sprintId: 'sp4',
    chats: ['chat0'],
  },
  {
    sprintId: 'sp5',
    chats: ['chat1', 'chat2'],
  },
  {
    sprintId: 'sp6',
    chats: ['chat2'],
  },
  {
    sprintId: 'sp7',
    chats: ['chat5'],
  },
  {
    sprintId: 'sp8',
    chats: ['chat6'],
  },
];

export const dummySprintThread = [
  {
    chatId: 'chat0',
    threads: ['thread0', 'thread1', 'thread2'],
  },
  {
    chatId: 'chat1',
    threads: ['thread2'],
  },
  {
    chatId: 'chat2',
    threads: ['thread0', 'thread1'],
  },
];

export const TagList = [
  { id: '0', name: '기획', color: ColorEnum.GREEN },
  { id: '1', name: '개발', color: ColorEnum.BLUE },
  { id: '2', name: '디자인', color: ColorEnum.YELLOW },
];

export const MemberWorkspace = {
  '001': ['warm-micro', 'Linker'],
  '002': ['warm-micro'],
};



export const Members: MemberType[] = [
  {
    id: '001',
    name: 'Hyewon Kwak',
    url: '/images/hyewon.jpg',
    email: 'khw121699@gmail.com',
    phoneNumber: '010-2703-8658',
    active: true,
  },
  {
    id: '002',
    name: 'Jinho Jeong',
    url: '/images/jinho.png',
    email: 'hahoh0013@gmail.com',
    phoneNumber: '010-2703-8658',
    active: false,
  },
  {
    id: '003',
    name: 'Ricky Eom',
    url: '/images/eom.png',
    email: 'jungbin0329@gmail.com',
    phoneNumber: '010-2703-8658',
    active: false,
  },
];

export const Chats: ChatType[] = [
  {
    id: 'chat0',
    title: '사용자 기능 기획',
    sprintId: 'sp1',
    time: new Date('2021-08-11 10:24:30'),
    authorId: '001',
    content: `오늘 논의하기로 한 사용자 기능에 대해서 회의를 진행하고자 합니다.  다들 10시 반 어떠신가요? `,
    pTag: [
      { id: '0', order: 0, personId: '002', cardOrder: 0 },
      { id: '1', order: 1, personId: '003', cardOrder: 0 },
    ],
    hTag: [{ id: '0', order: 0, name: '기획', color: ColorEnum.GREEN, cardOrder: 0 }],
    isCard: true,
    progress: ProgressEnum.FINISHED,
    progressOrder: 0,
  },
  {
    id: 'chat1',
    title: '구글 로그인 api',
    sprintId: 'sp1',
    time: new Date('2021-08-11 13:01:30'),
    authorId: '002',
    content: `사용자 로그인 : 구글 api 사용사용자 인증 방식 : 토큰 기반 
-> 오늘 토큰기반 인증 jwt 에 대한 공부를 하고 구글 로그인 api 를 사용하는 방법으로 공부할 예정임.`,
    pTag: [],
    hTag: [{ id: '1', order: 0, name: '개발', color: ColorEnum.BLUE, cardOrder: 0 }],
    isCard: true,
    progress: ProgressEnum.REVIEW,
    progressOrder: 0,
  },
  {
    id: 'chat2',
    title: '로그인, 회원가입 페이지',
    sprintId: 'sp1',
    time: new Date('2021-08-12 11:58:30'),
    authorId: '002',
    content: `사용자 로그인 화면, 회원가입 화면이랑 마이페이지 부분 디자인 필요할 것 같습니다.
#로그인 화면 #회원가입 화면 #마이페이지 #디자인`,
    pTag: [{ id: '2', order: 2, personId: '001', cardOrder: 0 }],
    hTag: [{ id: '2', order: 0, name: '디자인', color: ColorEnum.YELLOW, cardOrder: 0 }],
    isCard: true,
    progress: ProgressEnum.INPROGRESS,
    progressOrder: 0,
  },
  {
    id: 'chat3',
    title: '마이 페이지 디자인',
    sprintId: 'sp1',
    time: new Date('2021-08-13 11:58:45'),
    authorId: '001',
    content: `오늘 1시에 개발팀 회의 있습니다. `,
    pTag: [{ id: '2', order: 2, personId: '001', cardOrder: 1 }],
    hTag: [{ id: '2', order: 0, name: '디자인', color: ColorEnum.YELLOW, cardOrder: 1 }],
    isCard: true,
    progress: ProgressEnum.BACKLOG,
    progressOrder: 0,
  },
  {
    id: 'chat4',
    title: '사용자 디비',
    sprintId: 'sp1',
    time: new Date('2021-08-14 11:58:50'),
    authorId: '002',
    content: `디비에 사용자 정보 넣기로 한거 그때 컬럼을id, password로 하고 다른 정보는 어떻게할까요`,
    pTag: [
      { id: '2', order: 2, personId: '001', cardOrder: 2 },
      { id: '0', order: 0, personId: '002', cardOrder: 1 },
    ],
    hTag: [{ id: '2', order: 0, name: '디자인', color: ColorEnum.YELLOW, cardOrder: 2 }],
    isCard: true,
    progress: ProgressEnum.BACKLOG,
    progressOrder: 1,
  },
  {
    id: 'chat5',
    title: '유니티 UI 수정',
    sprintId: 'sp7',
    time: new Date('2021-08-14 11:58:50'),
    authorId: '002',
    content: `유니티 ui 수정 해야할 것 같습니다. `,
    pTag: [
      { id: '2', order: 2, personId: '001', cardOrder: 2 },
      { id: '0', order: 0, personId: '002', cardOrder: 1 },
    ],
    hTag: [{ id: '2', order: 0, name: '디자인', color: ColorEnum.YELLOW, cardOrder: 2 }],
    isCard: true,
    progress: ProgressEnum.BACKLOG,
    progressOrder: 1,
  },
  {
    id: 'chat6',
    title: '모델링 위치 변경',
    sprintId: 'sp8',
    time: new Date('2021-08-14 11:58:50'),
    authorId: '002',
    content: `모델링 위치가 좀 이상하네요. 확인 바랍니다. `,
    pTag: [
      { id: '2', order: 2, personId: '001', cardOrder: 2 },
      { id: '0', order: 0, personId: '002', cardOrder: 1 },
    ],
    hTag: [{ id: '2', order: 0, name: '디자인', color: ColorEnum.YELLOW, cardOrder: 2 }],
    isCard: true,
    progress: ProgressEnum.BACKLOG,
    progressOrder: 1,
  },
];

export const dummyThreads: ThreadType[] = [
  {
    id: 'thread0',
    chatId: 'chat0',
    time: new Date('2021-08-11 10:24:30'),
    authorId: '002',
    content: `11시엔 어떠신가요? 팀원 한분이 늦게 올 예정이라고 합니다.`,
  },
  {
    id: 'thread1',
    chatId: 'chat0',
    time: new Date('2021-08-11 10:25:30'),
    authorId: '001',
    content: `아 그렇군요 그럼 11시에 회의실 1에서 뵙겠습니다.`,
  },
  {
    id: 'thread2',
    chatId: 'chat0',
    time: new Date('2021-08-11 10:26:30'),
    authorId: '002',
    content: `넵, 회의 관련 자료 준비해서 가겠습니다.`,
  },
];
