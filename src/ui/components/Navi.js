import React, { PropTypes } from 'react';
import { View, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import NaviTab from './NaviTab';

const Navi = ({ routes }) => {
  console.log(routes);
  const navigationItems = routes.get('views') || false;
  
  return (
    <View style={ styles.Navi } >
    { navigationItems &&
      navigationItems.toArray().map((item, i) => {
        return <NaviTab key={i} item={ item } />
      })
    }
    </View>
  );
};

Navi.propTypes = {
  routes: PropTypes.object
};

const styles = StyleSheet.create({
  Navi: {
    flexDirection: 'row',
    backgroundColor: '#FEC606',
    position: 'relative',
    elevation: 4,
    top: 0,
    left: 0,
    right: 0
  }
});

export default connect(
  (state, props) => ({
    routes: state.route
  }))(Navi);