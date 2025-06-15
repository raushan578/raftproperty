// hooks/useUserActions.ts
import { userAtom } from "@/lib/userAtom";
import { useAtom } from "jotai";

export const useUserActions = () => {
  const [user, setUser] = useAtom(userAtom);

  const addBookingId = (bookingId: string) => {
    if (!user.bookings.includes(bookingId)) {
      setUser({
        ...user,
        bookings: [...user.bookings, bookingId],
      });
    }
  };

  const removeByBookingId = (bookingId: string) => {
    if (user.bookings.includes(bookingId)) {
      setUser({
        ...user,
        bookings: user.bookings.filter((id) => id !== bookingId),
      });
    }
  };

  return { user, addBookingId, removeByBookingId };
};
