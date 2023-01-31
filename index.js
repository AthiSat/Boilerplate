/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {AuthProvider} from './src/context/AuthContext';
import {AxiosProvider} from './src/context/AxiosContext';
import {NavigationProvider} from './src/context/NavigationContext';
import {ToastProvider} from './src/context/ToastContext';
import {Provider} from 'react-redux';
import store from './store';

const Root = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <ToastProvider>
          <AxiosProvider>
            <NavigationProvider>
              <App />
            </NavigationProvider>
          </AxiosProvider>
        </ToastProvider>
      </AuthProvider>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Root);
