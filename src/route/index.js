import Tabs from '../tabs/Tabs';
import Login from '../screens/Login';
import CamView from '../screens/CamView';
import Tab2 from '../tabs/Tab2';
import Tab3 from '../tabs/Tab3';

const publicRoutes = [{name: 'Login', component: Login}];

const authProtectedRoutes = [
  {name: 'Tabs', component: Tabs},
  {name: 'CamView', component: CamView},
  // {name: 'Tab2', component: Tab2},
  // {name: 'Tab3', component: Tab3},
];

export {publicRoutes, authProtectedRoutes};
