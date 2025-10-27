import { create } from 'zustand';

type Theme = 'light' | 'dark' | 'system';

interface UIState {
  theme: Theme;
  sidebarOpen: boolean;
  isSidebarOpen: boolean;
  mobileMenuOpen: boolean;
  isMobileMenuOpen: boolean;
  setTheme: (theme: Theme) => void;
  toggleSidebar: () => void;
  setSidebarOpen: (open: boolean) => void;
  toggleMobileMenu: () => void;
  setMobileMenuOpen: (open: boolean) => void;
}

export const useUIStore = create<UIState>((set) => ({
  theme: 'system',
  sidebarOpen: true,
  isSidebarOpen: true,
  mobileMenuOpen: false,
  isMobileMenuOpen: false,

  setTheme: (theme) => set({ theme }),
  
  toggleSidebar: () => set((state) => ({ 
    sidebarOpen: !state.sidebarOpen,
    isSidebarOpen: !state.isSidebarOpen 
  })),
  
  setSidebarOpen: (open) => set({ sidebarOpen: open, isSidebarOpen: open }),
  
  toggleMobileMenu: () => set((state) => ({ 
    mobileMenuOpen: !state.mobileMenuOpen,
    isMobileMenuOpen: !state.isMobileMenuOpen 
  })),
  
  setMobileMenuOpen: (open) => set({ mobileMenuOpen: open, isMobileMenuOpen: open }),
}));
