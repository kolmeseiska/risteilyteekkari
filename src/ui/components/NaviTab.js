import React, { PropTypes } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const NaviTab = ({item}) => {
  return (
    <TouchableOpacity style={ styles.NaviTab } >
      <Text style={ styles.NaviTabLabel }> { item.get('label') || 'TODO' } </Text>
    </TouchableOpacity>
  );
}

NaviTab.propTypes = {
  item: PropTypes.object
};

const styles = StyleSheet.create({
  NaviTab: {
    flex: 1,
    height: 50,
    justifyContent: 'space-around'
  },
  NaviTabLabel: {
    color: '#2f2f2f',
    fontWeight: '900',
    justifyContent: 'space-around',
    textAlign: 'center'
  }
});

export default NaviTab;