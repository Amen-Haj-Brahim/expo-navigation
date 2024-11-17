import { View, TextInput, Button, Alert } from 'react-native';
import React, { useState } from 'react';
import { Link, router } from 'expo-router';


export default function Page() {
  const [username, Setusername] = useState("");

  return (
    <View>
      <TextInput placeholder='user name' onChangeText={Setusername} value={username}></TextInput>
      <Link href={{ pathname: '/user/[username]', params: { name: username } }}> Details with dynamic routing</Link>
      <br />
      <Button style={{ color: 'black' }} title='Details' onPress={() => {
        router.push({ pathname: 'details', params: { username } });
      }}> </Button>

    </View>
  );
}
