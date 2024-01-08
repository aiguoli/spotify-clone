"use client";

import { useEffect, useState } from "react";

import AuthModal from "@/components/authModal";
//import SubscribeModal from "@/components/subscribeModal";
import UploadModal from "@/components/uploadModal";
import { ProductWithPrice } from "@/types/stripe";

interface ModalProviderProps {
  products: ProductWithPrice[];
}

export default () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <AuthModal />
      {/*<SubscribeModal products={products} />*/}
      <UploadModal />
    </>
  );
}
