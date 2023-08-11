import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/config";
import { createContext, useEffect, useState } from "react";
import { Spin } from "antd";

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

  return <AppContext.Provider value={{ user }}>{children}</AppContext.Provider>;
}

export default AppProvider;
