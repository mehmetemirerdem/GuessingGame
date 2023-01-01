import {Text, StyleSheet, Platform} from 'react-native';

function Title({children}) {
    return <Text style={styles.title}>{children}</Text>
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold', //already bold
        fontSize: 24,
        //fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        //borderWidth: Platform.OS === 'android' ? 2 : 0,
        //borderWidth: Platform.select({ ios: 0, android: 2}),
        //borderColor: 'white',
        //borderWidth: 0,
        padding: 12,
        maxWidth: '80%',
        width: 300
    }
})