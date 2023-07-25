import { create } from 'zustand'

export const useDataStore = create((set) => ({
    selectData: null,
    setSelectData:(selectData) => set({ selectData})
}))