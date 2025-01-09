"use client";

import React, { createContext, useState, ReactNode, useContext } from "react";

interface Variant {
  height: number;
  width: number;
  transition: {
    type: string;
    stiffness: number;
    damping: number;
  };
}

interface CursorContextType {
  cursorVariant: string;
  setCursorVariant: (variant: string) => void;
  textEnter: () => void;
  textLeave: () => void;
  variants: Record<string, Variant>;
}

const CursorContext = createContext<CursorContextType | undefined>(undefined);

interface CursorProviderProps {
  children: ReactNode;
}

export const CursorProvider: React.FC<CursorProviderProps> = ({ children }) => {
  const [cursorVariant, setCursorVariant] = useState<string>("default");

  // Cursor variants configuration
  const variants: Record<string, Variant> = {
    default: {
      height: 40,
      width: 40,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    text: {
      height: 300,
      width: 300,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  // Handlers to update the cursor variant
  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <CursorContext.Provider
      value={{ cursorVariant, setCursorVariant, textEnter, textLeave, variants }}
    >
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = (): CursorContextType => {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error("useCursor must be used within a CursorProvider");
  }
  return context;
};
