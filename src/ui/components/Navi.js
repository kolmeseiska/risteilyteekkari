import React, { PropTypes } from 'react';
import { View, StyleSheet} from 'react-native';
import NaviTab from './NaviTab';

const Navi = ({item}) => {
  return (
    <View style={ styles.Navi } >
      <NaviTab />
      <NaviTab />
    </View>
  );
};

Navi.propTypes = {

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

export default Navi;