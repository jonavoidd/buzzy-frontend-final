import { createContext, useContext, useState } from "react";

interface User {
  name: string;
  email: string;
}

interface ContextProps {
  currentUser: User | null;
  token: string | null;
  setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
  setToken: (newToken: string | null) => void;
}

interface ProviderProps {
  children: React.ReactNode;
}

const initialState: ContextProps = {
  currentUser: null,
  token: null,
  setCurrentUser: () => {},
  setToken: () => {},
};

const StateContext = createContext<ContextProps>(initialState);

export const ContextProvider: React.FC<ProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [token, _setToken] = useState<string | null>(
    localStorage.getItem("ACCESS_TOKEN")
  );
  // const [token, _setToken] = useState<string | null>('123')

  const handleSetToken = (newToken: string | null) => {
    _setToken(newToken);

    if (newToken) {
      localStorage.setItem("ACCESS_TOKEN", newToken);
    } else {
      localStorage.removeItem("ACCESS_TOKEN");
    }
  };

  return (
    <StateContext.Provider
      value={{
        currentUser,
        token,
        setCurrentUser,
        setToken: handleSetToken,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
