import React, {useState} from 'react'
import {
  View,
  Text,
  StatusBar,
  StyleSheet
} from 'react-native'
import { FormInput } from '../../components/forms/textInput'
import { colors } from '../../styles/colors'
import { fonts } from '../../styles/fonts'
import { ActionButton } from '../../components/buttons/actionButton'

export const SignUp = ({navigation}) => {
  const [firstName,setFirstName] = useState('')
  const [lastName,setLastName] = useState('')
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const [errorMessage,setErrorMessage] = useState('')

  // const onUsernameChange = (newText) => {
  //   setUsername(newText)
  // }

  // const onPasswordChange = (newPassword) => {
  //   setPassword(newPassword)
  // }

  // const onSignInHandler = () => {

  // }

  const onSignUpHandler = () => {
    navigation.navigate('Login')
  }

  return (
    <View style={[styles.container]}>
      <StatusBar style="auto" />
      <Text style={[styles.pageHeader]}>Register</Text>

      <FormInput
        placeholder={'First Name'}
        value={firstName}
        isSecureText={false}
        onInputChange={setFirstName}
        propStyles={[styles.inputSpacing,styles.inputField]}
      />

      <FormInput
        placeholder={'Last Name'}
        value={lastName}
        isSecureText={false}
        onInputChange={setLastName}
        propStyles={[styles.inputSpacing,styles.inputField]}
      />

      <FormInput
        placeholder={'Username'}
        value={username}
        isSecureText={false}
        onInputChange={setUsername}
        propStyles={[styles.inputSpacing,styles.inputField]}
      />

      <FormInput
        placeholder={'Password'}
        value={password}
        isSecureText={true}
        onInputChange={setPassword}
        propStyles={[styles.inputSpacing,styles.inputField]}
      />

      <Text >{errorMessage}</Text>

      <ActionButton
        buttonPropsStyles={[styles.buttonPropsStyles,styles.buttonSignUp]}
        textPropsStyles={[styles.textPropsStyles]}
        onPressAction={onSignUpHandler}
        buttonText={'Sign Up'}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    alignItems: 'start',
    justifyContent: 'start',
    alignContent: 'space-between',
    backgroundColor: colors['primary-color']
  },
  inputSpacing : {
    marginHorizontal: 10
  },
  inputField: {
    backgroundColor: colors['secondary-color'],
    paddingVertical: 10,
    marginVertical: 10,
    fontSize: fonts['large'],
    alignItems: 'flex-start'
  },
  pageHeader: {
    color: colors['color-white'],
    fontSize: fonts['xlarge'],
    textAlign: 'center',
    paddingVertical: 40
  },
  buttonSignUp : {
    borderRadius: 10,
    backgroundColor: colors['alternative-color']
  },
  buttonPropsStyles: {
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 20,
    justifyContent: 'center',
    alignContent: 'center'
  },
  textPropsStyles: {
    color: colors['color-white']
  },
  errorText: {
    color: colors['color-red'],
    fontSize: fonts['xs']
  }
})