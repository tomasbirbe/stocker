"use client";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function Portal({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (isMounted) {
    const modal = document.getElementById("modal");

    if (modal) {
      return createPortal(children, modal);
    } else {
      throw new Error('An element with id "modal" must exists');
    }
  }

  return <>{children}</>;
}
