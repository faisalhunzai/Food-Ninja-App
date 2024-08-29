import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../ReduxStore/Action';


const ReduxScreen = () => {

  const count = useSelector((states) =>states.count);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text>{count}</Text>
      <Button title='increment' onPress={() => dispatch(increment())} />
      <Button title='decrement' onPress={() => dispatch(decrement())} />
    </View>
  );
}

export default ReduxScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});
