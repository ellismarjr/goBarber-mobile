import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Teste from '~/Teste';

export default function App() {
  return <Teste />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
