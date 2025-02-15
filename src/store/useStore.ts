import { create } from 'zustand'

interface RetroShareState {
  activePanel: string
  systemStatus: {
    cpuShared: number
    memoryShared: number
    storageShared: number
    networkBandwidth: number
    activePeers: number
    applicationsRunning: number
  }
  resourceUsage: {
    cpu: number
    memory: {
      used: number
      total: number
    }
    storage: {
      used: number
      total: number
    }
  }
  setActivePanel: (panel: string) => void
  updateResourceUsage: (type: 'cpu' | 'memory' | 'storage', value: any) => void
}

export const useStore = create<RetroShareState>((set) => ({
  activePanel: 'dashboard',
  systemStatus: {
    cpuShared: 45,
    memoryShared: 2.5,
    storageShared: 120,
    networkBandwidth: 25,
    activePeers: 12,
    applicationsRunning: 3,
  },
  resourceUsage: {
    cpu: 23,
    memory: {
      used: 1.2,
      total: 2.5,
    },
    storage: {
      used: 67,
      total: 120,
    },
  },
  setActivePanel: (panel) => set({ activePanel: panel }),
  updateResourceUsage: (type, value) => 
    set((state) => ({
      resourceUsage: {
        ...state.resourceUsage,
        [type]: value,
      },
    })),
}))
