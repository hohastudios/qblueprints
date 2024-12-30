import { create, StateCreator } from "zustand";
import { devtools } from "zustand/middleware";

type GlobalStateStore = {
  clearnodes: boolean;
  loading: boolean;
  saving: boolean;
  toggleClearNodes: () => void;
  toggleLoad: () => void;
  toggleSave: () => void;
};

export const useGlobalStateStore = create<GlobalStateStore>()(
  devtools((set) => ({
    clearnodes: false,
    loading: false,
    saving: false,
    toggleClearNodes: () => set((state) => ({ clearnodes: !state.clearnodes })),
    toggleLoad: () => set((state) => ({ loading: !state.loading })),
    toggleSave: () => set((state) => ({ saving: !state.saving })),
  }))
);

export default useGlobalStateStore;
