import React, { useContext } from 'react';
import { NavigationContainer, NavigationContext, useNavigation } from '@react-navigation/native';
import { publicRoutes, authProtectedRoutes } from '.';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from './CustomDrawerContent';
import { AuthContext } from '../context/AuthContext';

const Drawer = createDrawerNavigator();

export default function MainRouter() {
  const authContext = useContext(AuthContext);
  const publicComponents = publicRoutes.map((route, idx) => {
    return (
      <Drawer.Screen
        key={idx}
        name={route.name}
        component={route.component}
        options={{ headerShown: false }}
      />
    );
  })
  const authProtectedComponents = authProtectedRoutes.map((route, idx) => {
    return (
      <Drawer.Screen
        key={idx}
        name={route.name}
        component={route.component}
        options={{ headerShown: false }}
      />
    );
  })

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props}
        />
        }
        backBehavior="history"
      >
        {
          // TODO : 
          // Need to replace the hard coded "true" to the proper code
          true ?
          // authContext.authState.authenticated ?
            authProtectedComponents
            : publicComponents
        }
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
