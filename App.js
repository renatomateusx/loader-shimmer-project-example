import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

import img1 from './assets/como.png';
import img2 from './assets/js.png';
import img3 from './assets/coverCodeEdit.png';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      posts: [
        { key: 1, username: 'Renato Mateus', image: img1 },
        { key: 2, username: 'Renato Moura', image: img2 },
        { key: 3, username: 'Mateus Santos', image: img3 }
      ]
    }
  }

  componentDidMount() {
    setTimeout(() => this.setState({ visible: !this.state.visible }), 5000);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{ fontSize: 25, color: '#000' }}>Instagram</Text>
        </View>

        <ScrollView>
          {this.state.posts.map((post) => {
            return (
              <View key={post.key}>

                <ShimmerPlaceHolder
                  style={{ height: 35, margin: 10, borderRadius: 10 }}
                  autoRun={true}
                  visible={this.state.visible}>

                  <View style={styles.postHeader}>
                    <Image source={post.image } style={styles.imgPerfil} />
                    <Text style={styles.username}>
                      {post.username}
                    </Text>
                  </View>

                </ShimmerPlaceHolder>

                <ShimmerPlaceHolder
                  style={{ width: '100%', height: 300 }}
                  autoRun={true}
                  visible={this.state.visible}>

                  <View style={styles.postImg}>
                    <Image source={post.image } style={styles.image} />
                  </View>

                </ShimmerPlaceHolder>

              </View>
            );
          })}
        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    height: 55,
    backgroundColor: '#DDD',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imgPerfil: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginLeft: 10
  },
  postImg: {
    backgroundColor: '#DDD',
    width: '100%',
    height: 300
  },
  username: {
    color: '#000',
    fontWeight: 'bold',
    marginLeft: 10
  },
  postHeader: {
    width: '100%',
    height: 55,
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    height: 300
  }
});