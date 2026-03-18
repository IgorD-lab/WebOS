import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { locations } from '#constants';

// Extract the type of a single location (e.g., the 'work' or 'trash' object)
type Location = (typeof locations)[keyof typeof locations];

interface LocationState {
  activeLocation: Location; // Strictly typed to your constants
  setActiveLocation: (location: Location | null) => void;
  resetActiveLocation: () => void;
}

const DEFAULT_LOCATION = locations.work;

// Global state management for file explorer/projects
const useLocationStore = create<LocationState>()(
  immer((set) => ({
    activeLocation: DEFAULT_LOCATION,

    setActiveLocation: (location = null) =>
      set((state) => {
        if (location) {
          state.activeLocation = location;
        }
      }),

    resetActiveLocation: () =>
      set((state) => {
        state.activeLocation = DEFAULT_LOCATION;
      }),
  })),
);

export default useLocationStore;
