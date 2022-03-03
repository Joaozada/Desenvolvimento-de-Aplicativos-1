import React from 'react';
import type {Node} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,Image
} from 'react-native';

const app = () =>{
  return(
   <><><><Image
      style={{
        width: 410,
        height: 270,
        
      }}
      source={require('./img/naruto.jpg')} /><Image
        style={{
          width: 400,
          height: 170
        }}

        
        source={require('./img/naruto.jpg')} /></><Image
        style={{
          width: 133,
          height: 170
        }}
        source={require('./img/naruto.jpg')} /></><Image
        style={{
          width: 133,
          height:170
          
        }}
        source={require('./img/naruto.jpg')} /></>
        
      
  )
  
}
export default app;
