import React, {useState} from 'react';
import {
  Container,
  Button,
  Text,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
} from 'native-base';
import axios from 'axios';

export interface Props {
  update: Function;
}

const Login: React.SFC<Props> = (props: Props) => {
  const [username, updateUsername] = useState('');
  const [password, updatePassword] = useState('');

  const update = async () => {
    const data = {username, password};
    console.log(data);
    try {
      const response = await axios.post(
        'http://10.0.3.2:3000/v1/validate',
        data,
      );
      if (response.status === 200) {
        props.update(
          response.data.response.count,
          response.data.response.username,
        );
      }
    } catch (e) {
      console.log(e);
    }
  };

  const register = async () => {
    const data = {username, password};
    console.log(data);
    try {
      const response = await axios.post('http://10.0.3.2:3000/v1/create', data);
      if (response.status === 200) {
        props.update(
          response.data.response.count,
          response.data.response.username,
        );
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Container>
        <Header />
        <Content>
          <Text>Login</Text>
          <Form>
            <Item stackedLabel>
              <Label>Username</Label>
              <Input
                value={username}
                onChangeText={(e: any) => updateUsername(e)}
              />
            </Item>
            <Item stackedLabel last>
              <Label>Password</Label>
              <Input
                value={password}
                onChangeText={(e: any) => updatePassword(e)}
              />
            </Item>
            <Button bordered dark onPress={update}>
              <Text>Enter</Text>
            </Button>
          </Form>
        </Content>
      </Container>

      <Container>
        <Header />
        <Text>Register</Text>
        <Content>
          <Form>
            <Item stackedLabel>
              <Label>Username</Label>
              <Input
                value={username}
                onChangeText={(e: any) => updateUsername(e)}
              />
            </Item>
            <Item stackedLabel last>
              <Label>Password</Label>
              <Input
                value={password}
                onChangeText={(e: any) => updatePassword(e)}
              />
            </Item>
            <Button bordered dark onPress={register}>
              <Text>Register</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    </>
  );
};

export default Login;
