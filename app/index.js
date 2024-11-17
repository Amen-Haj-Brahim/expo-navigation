import { View, TextInput, Button, Alert } from 'react-native';
import React, { useState } from 'react';
import { Link } from 'expo-router';


export default function Page() {
  const [username, Setusername] = useState("");
  function submit() {
    if (username == "") {
      alert("user name not valid")
    }
  }
  return (
    <View>
      <TextInput placeholder='user name' onChangeText={Setusername} value={username}></TextInput>
      <Link href={{ pathname: '/details', params: { name: username } }}><Button style={{ color: 'black' }} title='submit' onPress={() => submit()}></Button></Link>
    </View>
  );
}
