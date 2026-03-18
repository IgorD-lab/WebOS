import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { locations } from '#constants';
import { FinderItem } from '#types'; // Use your new alias/path

interface LocationState {
  activeLocation: FinderItem;
  setActiveLocation: (location: FinderItem | null) => void;
  resetActiveLocation: () => void;
}

const DEFAULT_LOCATION = locations.work as FinderItem;

const useLocationStore = create<LocationState>()(
  immer((set) => ({
    activeLocation: DEFAULT_LOCATION,
    setActiveLocation: (location) =>
      set((state) => {
        if (location === undefined) return;
        state.activeLocation = location as FinderItem;
      }),
    resetActiveLocation: () =>
      set((state) => {
        state.activeLocation = DEFAULT_LOCATION;
      }),
  })),
);

export default useLocationStore;
