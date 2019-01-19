import { StyleSheet, Platform } from 'react-native';

const platform = Platform.OS;

const styles = StyleSheet.create({
  topBar: {
    backgroundColor: '#0187ed',
    paddingBottom: platform === 'ios' ? 10 : 0,
  },
  topBarLeft: {
    flex: 1,
  },
  topBarCenter: {
    flex: 2,
    justifyContent: 'center',
  },
  topBarCenterTitle: {
    alignSelf: 'center',
  },
  topBarRight: {
    flex: 1,
  },
});
export default styles;
