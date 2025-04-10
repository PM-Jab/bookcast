"use client";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface UserContextType {
  userToken: string;
  setUserToken: (token: string) => void;

  username: string;
  setUsername: (username: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [userToken, setUserToken] = useState<string>("");
  const [username, setUsername] = useState<string>("");

  return (
    <UserContext.Provider
      value={{ userToken, setUserToken, username, setUsername }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
