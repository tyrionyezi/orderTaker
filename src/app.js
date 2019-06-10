import React, { Component } from 'react';
import { ToastAndroid, BackHandler, StatusBar } from 'react-native';
import { createAppContainer } from "react-navigation";
import routerStack from "./router/index.js";
export default createAppContainer(routerStack);
