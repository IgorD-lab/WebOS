import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { INITIAL_Z_INDEX, WINDOW_CONFIG } from '#constants';

// Blueprint for one single window's data
interface WindowState {
  isOpen: boolean;
  zIndex: number;
  data: any;
}

// Extract valid app names (finder, safari, etc.) from the config constant
export type WindowKey = keyof typeof WINDOW_CONFIG;

// Blueprint describing everything inside the store (State + Actions)
interface WindowStore {
  windows: Record<WindowKey, WindowState>;
  nextZIndex: number;
  openWindow: (windowKey: WindowKey, data?: any) => void;
  closeWindow: (windowKey: WindowKey) => void;
  focusWindow: (windowKey: WindowKey) => void;
}

// Pass <WindowStore> so Zustand knows the rules for the 'state' variable below
const useWindowStore = create<WindowStore>()(
  immer((set) => ({
    // Initial state: uses our static config and starting depth (Z-Index)
    windows: WINDOW_CONFIG,
    nextZIndex: INITIAL_Z_INDEX + 1,

    openWindow: (windowKey, data = null) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;

        win.isOpen = true;
        // Bring to front by assigning current highest Z-Index
        win.zIndex = state.nextZIndex;
        // Update data if provided, otherwise keep existing
        win.data = data ?? win.data;
        // Increment global counter so the next window opened is even higher
        state.nextZIndex++;
      }),

    closeWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;

        win.isOpen = false;
        // Reset depth to base level and clear window-specific data
        win.zIndex = INITIAL_Z_INDEX;
        win.data = null;
      }),

    focusWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;

        // Pop the window to the front by bumping it to the new highest Z-Index
        win.zIndex = state.nextZIndex++;
      }),
  })),
);

export default useWindowStore;
