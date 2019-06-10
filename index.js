/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/app';
// import App from './app/pages/home/index.component.js';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
