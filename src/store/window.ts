import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { INITIAL_Z_INDEX, WINDOW_CONFIG } from '#constants';

/** * 1. THE BLUEPRINTS (Interfaces)
 * Think of these as the "Rules of the House."
 * They tell TypeScript exactly what a Window looks like.
 */
interface WindowState {
  isOpen: boolean;
  zIndex: number;
  data: unknown; // Changed from null to any/unknown so it can actually hold data
}

// WindowKey creates a list of allowed names (e.g., 'terminal' | 'browser')
// based on your actual config file (constants/index.ts).
export type WindowKey = keyof typeof WINDOW_CONFIG;

interface WindowStore {
  windows: Record<WindowKey, WindowState>; // A map of all windows
  nextZIndex: number; // The "depth" for the next focused window
  openWindow: (windowKey: WindowKey, data?: unknown) => void;
  closeWindow: (windowKey: WindowKey) => void;
  focusWindow: (windowKey: WindowKey) => void;
}

/**
 * 2. THE STORE
 * We use 'immer' middleware here. Normally, React state must be "immutable"
 * (you can't change it, you have to replace it).
 * Immer lets us write 'state.windows[key].isOpen = true' which is much easier to read!
 */
const useWindowStore = create<WindowStore>()(
  immer((set) => ({
    // Initial Data
    windows: WINDOW_CONFIG,
    nextZIndex: INITIAL_Z_INDEX + 1,

    // ACTION: Open a window
    openWindow: (windowKey, data = null) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;

        win.isOpen = true;
        win.zIndex = state.nextZIndex; // Put it on top
        win.data = data ?? win.data; // Attach any extra info (like a file path)
        state.nextZIndex++; // Prepare the next Z-Index for the next window
      }),

    // ACTION: Hide a window
    closeWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;

        win.isOpen = false;
        win.zIndex = INITIAL_Z_INDEX; // Send it back to the bottom
        win.data = null;
      }),

    // ACTION: Click to focus
    focusWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;

        // Every time you click, we give it a higher number than anyone else
        win.zIndex = state.nextZIndex;
        state.nextZIndex++;
      }),
  })),
);

export default useWindowStore;
