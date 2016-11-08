import React, { PropTypes } from 'react';
import { View, StyleSheet} from 'react-native';
import NaviTab from './NaviTab';

const Navi = ({item}) => {
  return (
    <View style={ styles.Navi } >
    </View>
  );
}

Navi.propTypes = {
  item: PropTypes.object
};

const styles = StyleSheet.create({
  Navi: {
    flexDirection: 'row',
    backgroundColor: '#FEC606'
  }
});