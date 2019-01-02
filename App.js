import React from 'react';

import AppDrawerNavigator from "./src/Navigation/Drawer.Screen";

import { Root } from "native-base";
import { Font, AppLoading } from "expo";

import { Provider } from "react-redux";
import Store from "./src/Middleware/Store";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }
  render() {
    if (this.state.loading) {
      return (
        <Root>
          <AppLoading />
        </Root>
      );
    }
    return (
      <Root>
        <Provider store={Store}>
          <AppDrawerNavigator />
        </Provider>
      </Root>
    );
  }
}