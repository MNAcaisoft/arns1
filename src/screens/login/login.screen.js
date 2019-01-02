import * as React from 'react';
import PropTypes from 'prop-types';

import { Container, Content, Button, Text, Spinner, View } from 'native-base';

import styles from './styles';

class Login extends React.Component {
  static propTypes = {
    onLogin: PropTypes.func,
    loginForm: PropTypes.object,
    loading: PropTypes.bool,
  };

  render() {
    const { onLogin, loginForm, loading } = this.props;
    const {
      formContainer,
      loginButtonContainer,
      loginButton,
      centeredContainer,
      loginFieldsContainer,
      loginLogoContainer,
    } = styles;
    return (
      <Container>
        <Content contentContainerStyle={{ flex: 1 }}>
          <View style={centeredContainer}>
            <View style={formContainer}>
              <View style={loginLogoContainer} />
              <View style={loginFieldsContainer}>{loginForm}</View>
              <View style={loginButtonContainer}>
                <Button onPress={onLogin} style={loginButton} rounded block>
                  {loading ? <Spinner color="white" /> : <Text>LOGIN</Text>}
                </Button>
              </View>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

export default Login;
