import { Suspense } from "react";
import BookingPage from "@/components/BookingPage";

export default function Book() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <BookingPage />
    </Suspense>
  );
}

