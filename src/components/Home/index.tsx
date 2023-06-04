import React, {useState} from 'react';

import {StyleSheet, View, ActivityIndicator, Text} from 'react-native';

const Home = () => {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <View testID="home-component" style={styles.container}>
      {loading && <ActivityIndicator size="large" />}
      <View>
        <Text>Home Component</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    marginTop: 40,
    paddingHorizontal: 20,
  },
});

export default Home;
