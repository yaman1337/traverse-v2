import { createContext, useState, useEffect } from "react";
import { account } from "../src/lib/appwrite";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getSession = async () => {
      try {
        const user = await account.get();

        if (!user) {
          return;
        }

        setUser(user);
      } catch (error) {
        setError(error.message);
      }
    };

    getSession();
  }, []);

  const login = async (data) => {
    setUser(data);
  };

  const logout = async () => {
    try {
      await account.deleteSession("current");
      setUser(null);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
