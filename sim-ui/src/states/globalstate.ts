import { create, StateCreator } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";

type GlobalStateStore = {
  clearnodes: boolean;
  loading: boolean;
  saving: boolean;
  toggleClearNodes: () => void;
  toggleLoad: () => void;
  toggleSave: () => void;
};

export const useGlobalStateStore = create<GlobalStateStore>()(
  devtools(
    (set) => ({
      clearnodes: false,
      loading: false,
      saving: false,
      toggleClearNodes: () =>
        set((state) => ({ clearnodes: !state.clearnodes })),
      toggleLoad: () => set((state) => ({ loading: !state.loading })),
      toggleSave: () => set((state) => ({ saving: !state.saving })),
    }),

    persist(
      (set, get) => ({
        ws: "",
        saveWorkspace: (newws: string) => set({ ws: newws }),
      }),
      {
        name: "graph-storage", // name of the item in the storage (must be unique)
        storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
      }
    )
  )
);

export default useGlobalStateStore;
