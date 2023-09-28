import React from 'react'
import {
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native'

export const ActionButton = ({
  buttonPropsStyles,
  textPropsStyles,
  onPressAction,
  buttonText
}) => {

  return (
    <TouchableOpacity 
      style={[...buttonPropsStyles,styles.buttonSpacing]}
      onPress={()=>onPressAction()}
      >
      <Text
        style={[...textPropsStyles]}
      >{buttonText}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonSpacing: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 45
  }
})