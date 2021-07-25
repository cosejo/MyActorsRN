import React, { Component } from 'react';

import { StyleSheet, View, TextInput, Text, TouchableOpacity } from 'react-native';

import PropTypes from 'prop-types';

const LoginView = (props: { usernameChanged: Function; passwordChanged: Function; loginEvent: Function; message: String}) => {
  const {usernameChanged, passwordChanged, loginEvent, message}  = props;

    return (
        <View style={styles.container}>
          <Text style={styles.message}>{message}</Text>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Email"
                    placeholderTextColor="#003f5c"
                    onChangeText={text => usernameChanged(text)} />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    secureTextEntry
                    style={styles.inputText}
                    placeholder="Password"
                    placeholderTextColor="#003f5c"
                    onChangeText={text => passwordChanged(text)} />
            </View>
            <TouchableOpacity 
                style={styles.loginBtn}
                onPress={() => loginEvent()}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputView:{
    width:"80%",
    backgroundColor:"#ffffff",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20,
    shadowColor: "#465881",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1
    },
    elevation: 5
  },
  inputText:{
    height:50,
    color:"black"
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white"
  },
  message: {
    height:70,
    color:"black"
  }
});

LoginView.propTypes = {
  usernameChanged: PropTypes.func.isRequired,
  passwordChanged: PropTypes.func.isRequired,
  loginEvent: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired
}

export default LoginView;