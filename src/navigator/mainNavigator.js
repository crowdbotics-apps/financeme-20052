import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList97965Navigator from '../features/NotificationList97965/navigator';
import Settings97964Navigator from '../features/Settings97964/navigator';
import Settings97956Navigator from '../features/Settings97956/navigator';
import UserProfile97954Navigator from '../features/UserProfile97954/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList97965: { screen: NotificationList97965Navigator },
Settings97964: { screen: Settings97964Navigator },
Settings97956: { screen: Settings97956Navigator },
UserProfile97954: { screen: UserProfile97954Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
