import { create } from 'zustand';

interface Doctor {
  name: string;
  specialization: string;
  department: string;
  availability: string;
}

interface BookingStore {
  isModalOpen: boolean;
  selectedDoctor: Doctor | null;
  setIsModalOpen: (isOpen: boolean) => void;
  setSelectedDoctor: (doctor: Doctor | null) => void;
}

export const useBookingStore = create<BookingStore>((set) => ({
  isModalOpen: false,
  selectedDoctor: null,
  setIsModalOpen: (isOpen) => set({ isModalOpen: isOpen }),
  setSelectedDoctor: (doctor) => set({ selectedDoctor: doctor }),
}));