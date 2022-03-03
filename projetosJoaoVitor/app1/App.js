import React from 'react';
import {View, SafeAreaView, StyleSheet, Image, ScrollView  } from 'react-native';

export default function app1() {
  return(

    <SafeAreaView>
      <View style={styles.header} >
      
        <Image
        source={require('./src/assets/camera.png')}

        style={{width:100, height:80}}
        resizeMode="contain"
        />

        <Image
        source={require('./src/assets/icon.png')}

        style={{width:50, height:30}}
        resizeMode="contain"
        />
      </View>
      <ScrollView>
        
      <View style={styles.box}>
      <Image
        source={require('./src/assets/cam.jpg')}
        style={{width:70, height:70}}
        resizeMode="contain"
        />
      </View>
      </ScrollView>
    </SafeAreaView>
    
  );
}



const styles = StyleSheet.create({
  header:{
    backgroundColor:'white',
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'center'
    
  },
  
  box:{
    height:70,
    backgroundColor:'#1C1C1C	',
    marginTop:550,
    paddingLeft:270
  }
});