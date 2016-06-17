/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
var {FBLogin, FBLoginManager} = require('react-native-facebook-login');

class FirstProject extends Component {
  render() {
    return (
      <FBLogin
        loginBehavior={FBLoginManager.LoginBehaviors.Native}
        permissions={["email","user_friends"]}
        onLogin={function(e){console.log(e)}}
        onLoginFound={function(e){console.log(e)}}
        onLoginNotFound={function(e){console.log(e)}}
        onLogout={function(e){console.log(e)}}
        onCancel={function(e){console.log(e)}}
        onPermissionsMissing={function(e){console.log(e)}}
      />
    );
  }
}

AppRegistry.registerComponent('FirstProject', () => FirstProject);
