import { create, StateCreator } from "zustand";
import { devtools } from "zustand/middleware";

type GlobalStateStore = {
  loading: boolean;
  saving: boolean;
  toggleLoad: () => void;
  toggleSave: () => void;
};

export const useGlobalStateStore = create<GlobalStateStore>()(
  devtools((set) => ({
    loading: false,
    saving: false,
    toggleSave: () => set((state) => ({ saving: !state.saving })),
    toggleLoad: () => set((state) => ({ loading: !state.loading })),
  }))
);

export default useGlobalStateStore;
