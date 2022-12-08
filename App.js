import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements';
import { Avatar } from 'react-native-elements';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
      <Avatar
        size={250}
        rounded
        icon={{ name: 'user', type: 'font-awesome' }}
        onPress={() => console.log("Works!")}
        activeOpacity={0.7}
        containerStyle={{ marginTop: 5, }}
      />
      <Input
        placeholder='Login'
        containerStyle={{width:270, marginTop: 0 }}
      />
      <Input
        placeholder='Senha'
        containerStyle={{width:270,  marginTop: 5 }}
      />
      </View>
      <Button
        title="Login"
        containerStyle={{ marginBottom: 10, width: 250 }} />
      <Button
        title="Cadastre-se"
        containerStyle={{width: 250, color: 'primary'}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7DDD7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
