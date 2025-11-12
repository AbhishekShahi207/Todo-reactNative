import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class index extends Component {
  render() {
    return (
      <View style={{display:"flex",justifyContent:"center",alignItems:"center",top:50}}>
        <Text> textInComponent </Text>
        <Text> textInComponent </Text>
        <Text> textInComponent </Text>
        <Text> textInComponent </Text>
    
      </View>
    )
  }
}

export default index
