// atoms/userAtom.ts
import { atom } from "jotai";

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  bookings: string[]; 
}

export const userAtom = atom<UserProfile>({
  id: "user1",
  name: "John Doe",
  email: "john@example.com",
  bookings: [],
});
