import { View, Text, StyleSheet } from 'react-native';
import { Link, useLocalSearchParams } from 'expo-router';

export default function Details() {
    const { username } = useLocalSearchParams();
    console.log(username);
    return (
        <View style={styles.container}>
            <Text> details tab<br /> user name: {username}</Text>
            <br />
            {/* <Link href="/">back to index</Link> */}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});