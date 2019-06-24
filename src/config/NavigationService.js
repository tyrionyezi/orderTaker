import { NavigationActions, StackActions } from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
    _navigator = navigatorRef;
}

function navigate(routeName, params) {
    _navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params,
        })
    );
}

function back() {
    console.log(_navigator, 'NavigationActionsNavigationActions')
    _navigator.dispatch(
        NavigationActions.back()
    )
}

function pop() {
    _navigator.dispatch(
        StackActions.pop({
            n: 1,
        })
    )
}

// add other navigation functions that you need and export them

export default {
    back,
    navigate,
    setTopLevelNavigator,
    pop,
};