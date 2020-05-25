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

export interface Props {
  update: Function;
}

const Login: React.SFC<Props> = (props: Props) => {
  const update = () => {
    props.update();
  };
  const [username, updateUsername] = useState('');
  const [password, updatePassword] = useState('');
  return (
    <>
      <Container>
        <Header />
        <Content>
          <Form>
            <Item stackedLabel>
              <Label>Username</Label>
              <Input
                value={username}
                onChange={(e: any) => updateUsername(e.target.value)}
              />
            </Item>
            <Item stackedLabel last>
              <Label>Password</Label>
              <Input
                value={password}
                onChange={(e: any) => updatePassword(e.target.value)}
              />
            </Item>
          </Form>
        </Content>
      </Container>
      <Button bordered dark onClick={update}>
        <Text>Enter</Text>
      </Button>
    </>
  );
};

export default Login;
