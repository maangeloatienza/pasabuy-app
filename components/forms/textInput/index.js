import React, {useState} from 'react'
import {
  TextInput,
  StyleSheet
} from 'react-native'
import { fonts } from '../../../styles/fonts'
import { colors } from '../../../styles/colors'
import { ErrorText } from '../../errorHandler/errorText'

export const FormInput = ({
  placeholder,
  value,
  isSecureText,
  onInputChange,
  propStyles,
  errorText
})=> {
  //  style is an array of styles
  const [isError,setIsError] = useState(false)

  return (
    <>
      <TextInput
        placeholder={placeholder}
        value={value}
        style={[...propStyles,styles.input, isError?styles.errorInput: '']}
        secureTextEntry={isSecureText}
        // onPressOut={()=> {
        //   setIsError(value.length? false:true)
        // }}
        onChangeText={(newText)=>{
          onInputChange(newText)
          setIsError(newText.length? false:true)
        }}
      />
      <ErrorText 
        errorText={isError ? errorText : ''}
        errorTextStyle={[styles.errorTextStyle]}
        isShow={isError}
      />
    </>
  )
}

const styles = StyleSheet.create({
  input: {
    paddingLeft: 30,
    borderRadius: 5,
    fontSize: 14,
  },
  errorTextStyle: {
    fontSize: fonts['xs'],
    marginLeft: 10
  },
  errorInput : {
    borderColor: colors['color-red'],
    borderWidth: 1
  }
})