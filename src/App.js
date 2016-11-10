import React, { PropTypes } from 'react';
import { StyleSheet, View } from 'react-native';
import Navi from './ui/components/Navi';
import BadgeView from './ui/BadgeView';

const App = ({ routes, badges }) => {
  return (
    <View style={ styles.app } >
      <Navi routes={ routes } />
    <BadgeView badges={ badges } />
    </View>
  );
}

App.propTypes = {
  routes: PropTypes.object,
  badges: PropTypes.object
};

const styles = StyleSheet.create({

})

export default connect(
  (state, props) => ({
    routes: state.routes,
    badges: state.badges
  }))(App);