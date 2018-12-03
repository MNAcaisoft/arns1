import { AsyncStorage } from 'react-native';
import Http, { setAuthHeader, removeAuthHeader } from '@services/http';
import Config from '@services/config';

const auth = {
  effects: dispatch => ({
    async storeToken(token) {
      this.setToken(token);
      try {
        await AsyncStorage.setItem(`@${Config.urlPrefix}:token`, token);
      } catch (error) {
        console.log('Something went wrong!');
      }
    },
    async getToken() {
      try {
        const token = await AsyncStorage.getItem(`@${Config.urlPrefix}:token`);
        if (token !== null) {
          this.setToken(token);
        }
        console.log('token');
        return token;
      } catch (error) {
        console.log('Something went wrong!');
      }
    },
    async login(data) {
      try {
        const response = await Http.post('/auth/login/', data);
        await this.storeToken(response.data.token);
        this.setUser(response.data.user);
        dispatch.navigation.changeAppRoot({
          view: `${Config.urlPrefix}.Home`,
          title: 'Home',
          sidebar: true,
        });
        return response;
      } catch (err) {
        throw err.response;
      }
    },
    async logout() {
      try {
        await AsyncStorage.removeItem(`@${Config.urlPrefix}:token`);
        this.setToken(null);
        removeAuthHeader();
        dispatch.navigation.changeAppRoot({
          view: `${Config.urlPrefix}.Home`,
          title: 'Home',
          sidebar: false,
        });
      } catch (error) {
        console.log('Something went wrong!');
      }
    },
  }),
  reducers: {
    setToken(state, payload) {
      return {
        ...state,
        token: payload,
      };
    },
    setUser(state, payload) {
      return {
        ...state,
        user: payload,
      };
    },
  },
  state: {
    token: null,
    user: null,
  },
};

export default auth;
