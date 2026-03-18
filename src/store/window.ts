import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { INITIAL_Z_INDEX, WINDOW_CONFIG } from '#constants';
import { WindowID, WindowState, FinderItem } from '#types';

interface WindowStore {
  windows: Record<WindowID, WindowState>;
  nextZIndex: number;
  openWindow: (windowKey: WindowID, data?: FinderItem) => void;
  closeWindow: (windowKey: WindowID) => void;
  focusWindow: (windowKey: WindowID) => void;
}

const useWindowStore = create<WindowStore>()(
  immer((set) => ({
    // Initialize using the config from constants
    windows: WINDOW_CONFIG as Record<WindowID, WindowState>,
    nextZIndex: INITIAL_Z_INDEX + 1,

    // Open a specific window and optionally pass file data (FinderItem)
    openWindow: (windowKey, data) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;

        win.isOpen = true;
        win.zIndex = state.nextZIndex;
        // Save the file object (Nike Project.txt, etc) into the window's data slot
        if (data) {
          state.windows[windowKey].data = data as FinderItem;
        }
        state.nextZIndex++;
      }),

    // Close window and wipe its local data to keep it clean for next use
    closeWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;

        win.isOpen = false;
        win.zIndex = INITIAL_Z_INDEX;
        win.data = null;
      }),

    // Bring window to front
    focusWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;

        win.zIndex = state.nextZIndex;
        state.nextZIndex++;
      }),
  })),
);

export default useWindowStore;
