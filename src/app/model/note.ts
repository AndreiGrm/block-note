export interface Note {
  id: number;
  title: string;
  content: string;
  creationDate: Date;
  lastModified: Date;
  isLocked: boolean;
  passward: string;
}
