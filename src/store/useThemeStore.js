import { create } from "zustand";
import { persist } from "zustand/middleware";

const defaultComponents = {
  table: {
    background: "#ffffff",
    text: "#000000",
    button: "#1976d2",
  },
  form: {
    background: "#f5f5f5",
    text: "#333333",
    input: "#ffffff",
    button: "#1976d2",
    border: "#cccccc",
  },
};

const useThemeStore = create(
  persist(
    (set) => ({
      components: defaultComponents,
      setComponentColor: (component, key, value) =>
        set((state) => ({
          components: {
            ...state.components,
            [component]: {
              ...state.components[component],
              [key]: value,
            },
          },
        })),
      resetColors: () => set({ components: defaultComponents }),
    }),
    {
      name: "theme-storage",
    }
  )
);

export default useThemeStore;
