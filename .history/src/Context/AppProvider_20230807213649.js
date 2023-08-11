import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { Spin } from "antd";
import useFirestore from "../hooks/useFirestore";
import { AuthContext } from "./AuthProvider";

export const AppContext = createContext();

function AppProvider({ children }) {
  const {
    user: { uid },
  } = useContext(AuthContext);

  const roomsCondition = useMemo(() => {
    return {
      fieldName: "members",
      operator: "array-contains",
      compareValue: uid,
    };
  });

  const rooms = useFirestore("rooms", roomsCondition);

  return (
    <AppContext.Provider value={{ rooms }}>{children}</AppContext.Provider>
  );
}

export default AppProvider;
