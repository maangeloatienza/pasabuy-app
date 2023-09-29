import React, {useState,useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { verifyLogin } from '../../services/userService'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  StyleSheet
} from 'react-native'
import { FormInput } from '../../components/forms/textInput'
import { colors } from '../../styles/colors'
import { fonts } from '../../styles/fonts'
import { ActionButton } from '../../components/buttons/actionButton'


export const Login = ({navigation}) => {
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const [isError,setIsError] = useState(true)

  const selector = useSelector(state => state.user)
  const dispatch = useDispatch()

  const onSignInHandler = () => {
    let body = {
      username,
      password
    }

    if(!setIsError){
      let [user, error] = verifyLogin(body,selector.users[0])
      if(error){
        console.log(error)
      }

      dispatch(user.data)
    }

  }

  const onSignUpHandler = () => {
    navigation.navigate('SignUp')
  }

  useEffect(()=>{

    setIsError(username&&password?false:true)

  },[username,password])

  return (
    <View style={[styles.container]}>
      <StatusBar style="auto" />
      <Text style={[styles.pageHeader]}>Login</Text>

      <FormInput
        placeholder={'Username'}
        value={username}
        isSecureText={false}
        onInputChange={setUsername}
        errorText={'Username is required'}
        propStyles={[styles.inputSpacing,styles.inputField]}
      />

      <FormInput
        placeholder={'Password'}
        value={password}
        isSecureText={true}
        onInputChange={setPassword}
        errorText={'Password is required'}
        propStyles={[styles.inputSpacing,styles.inputField]}
      />

      <Text style={[styles.forgotPasswordText]}>Forgot password?</Text>
      
      <ActionButton
        buttonPropsStyles={[styles.buttonPropsStyles, isError? styles.buttonSignInDisabled :styles.buttonSignIn]}
        textPropsStyles={[styles.textSignIn]}
        disabled={isError}
        onPressAction={onSignInHandler}
        buttonText={'Sign In'}
      />

      <Text style={[styles.orText]}>OR</Text>

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
    justifyContent: 'center',
    alignContent: 'space-between',
    backgroundColor: colors['primary-color']
  },
  inputField: {
    backgroundColor: colors['secondary-color'],
    paddingVertical: 10,
    marginVertical: 10,
    fontSize: fonts['large'],
    alignItems: 'flex-start'
  },  
  inputSpacing : {
    marginHorizontal: 10
  },
  forgotPasswordText: {
    textAlign: 'right',
    fontSize: fonts['xs'],
    marginRight: 10,
    color: colors['color-white']
  },  
  pageHeader: {
    color: colors['color-white'],
    fontSize: fonts['xlarge'],
    textAlign: 'center',
    paddingVertical: 40
  },
  orText: {
    textAlign: 'center',
    color: colors['color-white']
  },
  buttonSignIn: {
    backgroundColor: colors['tersiary-color'],
  },
  buttonSignInDisabled: {
    backgroundColor: '#CECECE'
  },
  buttonSignUp: {
    backgroundColor: colors['alternative-color'],
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
  textSignIn: {
    color: colors['alternative-color']
  }
})