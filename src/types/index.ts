// TODO: move all types here
export type WindowID =
  | 'finder'
  | 'contact'
  | 'resume'
  | 'safari'
  | 'photos'
  | 'terminal'
  | 'txtfile'
  | 'imgfile';

export interface FinderItem {
  id: number | string;
  name: string;
  icon: string;
  kind: 'folder' | 'file';
  type?: string;
  fileType?: string;
  position?: string;
  imageUrl?: string;
  href?: string;
  children?: FinderItem[];
}
