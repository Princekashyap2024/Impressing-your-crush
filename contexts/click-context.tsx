"use client"

import { PropsWithChildren, createContext, useContext, useEffect, useState } from "react";

type ClickContext = {
  response: string[];
  addResponse: (r: string) => void;
  clearResponse: () => void;
};

export const useClickContext = () => {
    const context = useContext(ClickContext);
    if (!context) throw new Error("useClickContext must be used within a ClickProvider");
    return context;
}

const ClickContext = createContext<ClickContext | null>(null);

export function ClickProvider({ children }: PropsWithChildren) {
  const [response, setResponses] = useState<string[]>([]);
  function addResponse(r: string) {
    setResponses([...response, r]);
  }

  function clearResponse() {
    setResponses([]);
  }

  useEffect(() => {
    console.log(response)
  }, [response])

  return (
    <ClickContext.Provider
      value={{
        response: response,
        addResponse,
        clearResponse,
      }}
    >
      {children}
    </ClickContext.Provider>
  );
}
