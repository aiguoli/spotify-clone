"use client";

import { MyUserContextProvider } from "@/hooks/useUser";

interface UserProviderProps {
  children: React.ReactNode;
}

export default ({
  children
}: UserProviderProps) => {
  return (
    <MyUserContextProvider>
      {children}
    </MyUserContextProvider>
  );
}