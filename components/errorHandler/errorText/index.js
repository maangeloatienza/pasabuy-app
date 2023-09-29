import React from 'react'
import {
  Text,
  StyleSheet
} from 'react-native'
import { colors } from '../../../styles/colors'
import { fonts } from '../../../styles/fonts'


export const ErrorText = ({
  errorText,
  errorTextStyle,
  isShow
}) => {

  if(isShow){
    return (
      <>
        <Text 
          style={
            [
              ...errorTextStyle,
              styles.errorText,
              {
                display: isShow? 'flex' : 'none'
              }  
            ]}>
          {errorText}
        </Text>
      </>
    )
  }

}

const styles = StyleSheet.create({
  errorText: {
    color: colors['color-red']
  }
})