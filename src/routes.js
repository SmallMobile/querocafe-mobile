import { createStackNavigator } from 'react-navigation-stack';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

export const SignedOutRoutes = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            title: "Entrar"
        }
    },
});

export const SignedInRoutes = createStackNavigator({
    Dashboard: {
        screen: Dashboard,
        navigationOptions: {
            title: "Dashboard"
        }
    },
});

export const createRootNavigator = (signedIn = false) => {
    return createStackNavigator({
        SignedIn: { screen: SignedInRoutes },
        SignedOut: { screen: SignedOutRoutes }
    },
        {
            headerMode: "none",
            mode: "modal",
            initialRouteName: signedIn ? "SignedIn" : "SignedOut",
            navigationOptions: {
                gesturesEnabled: false
            }
        });
};
