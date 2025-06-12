export interface Note {
  id: number;
  title: string;
  content: string;
  creationDate: Date;
  lastModified: Date;
  isLocked: boolean;
  canSee: boolean
  password: number | undefined;
}
