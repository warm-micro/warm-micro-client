export interface ChatType {
  id: string;
  sprintId: string;
  time: Date;
  authorId: string;
  content: string;
  pTag: string[] | null;
  hTag: string[] | null;
}
