import { create, StateCreator } from "zustand";
import { devtools } from "zustand/middleware";

type GlobalStateStore = {
  saving: boolean;
  toggleSave: () => void;
};

export const useGlobalStateStore = create<GlobalStateStore>()(
  devtools((set) => ({
    saving: false,
    toggleSave: () => set((state) => ({ saving: !state.saving })),
  }))
);

export default useGlobalStateStore;
