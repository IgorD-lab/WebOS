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
  // Common properties
  type?: string;
  fileType?: string;
  position?: string;
  windowPosition?: string;
  // File specific properties
  href?: string;
  imageUrl?: string;
  // Text file specific (Flat, not nested)
  image?: string;
  subtitle?: string;
  description?: string[];
  // Folders
  children?: FinderItem[];
}

export interface WindowState {
  isOpen: boolean;
  zIndex: number;
  data: FinderItem | null;
}
