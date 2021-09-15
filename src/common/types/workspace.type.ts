import { MemberType } from "./member.type";

export interface WorkspaceType {
  id: number;
  name: string;
  sprintList: string[] | null;
  url: string;
  members: MemberType[] | null;
  code : string;
}
