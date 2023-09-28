import React from 'react'
import {
  TextInput,
  StyleSheet
} from 'react-native'

export const FormInput = ({
  placeholder,
  value,
  isSecureText,
  onInputChange,
  propStyles
})=> {
  //  style is an array of styles
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      style={[...propStyles,styles.input]}
      secureTextEntry={isSecureText}
      onChangeText={(newText)=>onInputChange(newText)}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    paddingLeft: 30,
    borderRadius: 5,
    fontSize: 14,
  }
})