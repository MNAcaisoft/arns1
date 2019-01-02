import { Text, Container, View, Content } from 'native-base';
import { Image } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import Swiper from 'react-native-swiper';
import TopBar from '../../components/topBar';

import styles from './styles';
import SideBarIcon from '../../components/sideBar/_components/sideBarIcon';

const user = require('../../../assets/images/user-icon.png');

export default class Home extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <TopBar title={'Home'} left={<SideBarIcon navigation={navigation} />} />
        <Content contentContainerStyle={{ flex: 1 }}>
          <View style={styles.swiper}>
            <Swiper loop={false} showButtons horizontal>
              <View style={styles.slide}>
                <View style={[styles.slideImage, styles.flexCenter]}>
                  <Image source={user} />
                  <View style={styles.slideDescription}>
                    <Text style={styles.slideDescriptionText}>Simple Swiper.</Text>
                  </View>
                </View>
              </View>
              <View style={styles.slide}>
                <View style={[styles.slideImage, styles.flexCenter]}>
                  <Image source={user} />
                  <View style={styles.slideDescription}>
                    <Text style={styles.slideDescriptionText}>Add here whatever you want.</Text>
                  </View>
                </View>
              </View>
              <View style={styles.slide}>
                <View style={[styles.slideImage, styles.flexCenter]}>
                  <Image source={user} />
                  <View style={styles.slideDescription}>
                    <Text style={styles.slideDescriptionText}>Have fun.</Text>
                  </View>
                </View>
              </View>
            </Swiper>
          </View>
        </Content>
      </Container>
    );
  }
}
