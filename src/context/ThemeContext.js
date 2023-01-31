import React, { createContext, useEffect, useState } from 'react';
import { Appearance } from 'react-native/types';

const ThemeContext = createContext(null);
const { Provider } = ThemeContext;

const ThemeProvider = ({ children }) => {
  const colorScheme = Appearance.getColorScheme();
  const [colors, setColors] = useState({});


  useEffect(() => {
    if (colorScheme === 'dark') {
      setColors({
        backgound: 'white',
        card_background: 'blue',
      })
    }
    else {
      setColors({
        backgound: 'white',
        card_background: 'blue',
      })
    }
  }, [colorScheme])

  return (
    <Provider
      value={{
        colors,
      }}>
      {children}
    </Provider>
  );
};

export { ThemeContext, ThemeProvider };
