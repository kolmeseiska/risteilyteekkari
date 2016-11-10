import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text } from 'react-native';

const BadgeView = ({ badges }) => {
  return (
    <View style={ styles.badges } >
      <Text>BadgeView</Text>
    </View>
  );
}

BadgeView.propTypes = {
  routes: PropTypes.object
};

const styles = StyleSheet.create({
  badges: {
    flex: 1,
    flexDirection: 'row'
  }
})

export default connect(
  (state, props) => ({
    badges: state.badges
  }))(BadgeView); 