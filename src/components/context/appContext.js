"use client";

import React from "react";
import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [home, setHome] = useState("");
  const [rooms, setRooms] = useState(0);
  const value = {
    home,
    setHome,
    rooms,
    setRooms,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
