import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

import login from './../login/index.component';
import main from './../home/index.component';
const AppStack = createStackNavigator({
    // 登录
    login: { screen: login },
    // 注册
    register: { screen: login },
})

const Rooter = createSwitchNavigator(
    {
        AuthLoading: login,
        App: AppStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
);

export default Rooter;