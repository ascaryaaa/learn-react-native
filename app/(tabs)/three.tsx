import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

const Flex = () => {
  return (
    <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'column',
        },
      ]}>
      <View style={{flex: 1, backgroundColor: 'red'}}>
        <Text style={styles.title}>red</Text>
      </View>
      <View style={{flex: 2, backgroundColor: 'darkorange'}}>
        <Text style={styles.title}>darkorange</Text>
      </View>
      <View style={{flex: 3, backgroundColor: 'green'}}>
        <Text style={styles.title}>green</Text>
      </View>
    </View>
  );
};

export default function TabThreeScreen() {
  return (
    <View style={styles.container}>
      <Flex/>
      <Text style={styles.title}>Tab Three</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/three.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
