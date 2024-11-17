import { View, Text, StyleSheet } from 'react-native';
import { Link, useLocalSearchParams } from 'expo-router';

export default function DetailsScreen() {
    const { username } = useLocalSearchParams();
    console.log(username);
    return (
        <View style={styles.container}>
            <Text>user name:{username}</Text>
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