import React, { createContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { _storeData } from '../helpers/asyncStorageHelper';

const AuthContext = createContext(null);
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    userDetails: null,
    accessToken: null,
    authenticated: false,
  });
  const [authToggle, setAuthToggle] = useState(false);


  const logout = async (key) => {
    try {
      await AsyncStorage.removeItem('data');
      setTimeout(() => {
        setAuthState({
          userDetails: null,
          accessToken: null,
          authenticated: false,
        })
      }, 500)
      return true;
    }
    catch (exception) {
      return false;
    }
  }

  const getAccessToken = () => {
    return authState.accessToken;
  };

  return (
    <Provider
      value={{
        authState,
        getAccessToken,
        setAuthState,
        logout,
        authToggle,
        setAuthToggle
      }}>
      {children}
    </Provider>
  );
};

export { AuthContext, AuthProvider };
