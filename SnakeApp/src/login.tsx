import React, {useState} from 'react';
import {Header, Item, Label} from 'native-base';

import {
  TouchableOpacity,
  View,
  ScrollView,
  SafeAreaView,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
} from 'react-native';
import axios from 'axios';

export interface Props {
  update: Function;
}

const Login: React.SFC<Props> = (props: Props) => {
  const [username, updateUsername] = useState('');
  const [password, updatePassword] = useState('');
  const [username2, updateUsername2] = useState('');
  const [password2, updatePassword2] = useState('');
  const [error, changeError] = useState(false);

  const update = async () => {
    const data = {username, password};
    try {
      const response = await axios.post(
        'http://35.200.186.104/v1/validate',
        data,
      );
      if (response.status === 200) {
        console.log(response.data.response);
        props.update(
          response.data.response.count,
          response.data.response.username,
        );
      }
      changeError(true);
    } catch (e) {
      console.log(e);
      changeError(true);
    }
  };

  const register = async () => {
    const data = {username: username2, password: password2};
    console.log(data);
    try {
      const response = await axios.post(
        'http://35.200.186.104/v1/create',
        data,
      );
      if (response.status === 200) {
        props.update(0, username);
      }
      changeError(true);
    } catch (e) {
      console.log(e);
      changeError(true);
    }
  };

  return (
    <SafeAreaView style={styles.safeareaview}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.view}>
            <Text style={styles.text}>Login</Text>
          </View>
          <View>
            <Label>Username</Label>
            <TextInput
              style={styles.inputBox}
              value={username}
              onChangeText={(e: any) => updateUsername(e)}
            />

            <Label>Password</Label>
            <TextInput
              style={styles.inputBox}
              value={password}
              onChangeText={(e: any) => updatePassword(e)}
            />

            <TouchableOpacity style={styles.button} onPress={update}>
              <Text style={styles.text2}>Enter</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.view}>
            <Text style={styles.text}>Register</Text>
          </View>
          <View>
            <Label>Username</Label>
            <TextInput
              style={styles.inputBox}
              value={username2}
              onChangeText={(e: any) => updateUsername2(e)}
            />

            <Label>Password (greater than 5 letters)</Label>
            <TextInput
              style={styles.inputBox}
              value={password2}
              onChangeText={(e: any) => updatePassword2(e)}
            />

            <TouchableOpacity
              style={styles.button}
              bordered
              dark
              onPress={register}>
              <Text style={styles.text2}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
        {error && (
          <Text style={styles.error}>
            Opps! Something Went Wrong. Please try again.
          </Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'pink',
    height: Dimensions.get('screen').height / 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  view: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  safeareaview: {
    padding: 10,
  },
  text: {
    fontFamily: 'lucida grande',
    fontSize: 30,
  },
  text2: {
    fontFamily: 'lucida grande',
  },
  inputBox: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    margin: 20,
  },
  container: {
    marginBottom: 80,
    marginLeft: 30,
    marginRight: 30,
  },
  error: {
    fontFamily: 'lucida grande',
    fontSize: 30,
    color: 'red',
  },
});
export default Login;
