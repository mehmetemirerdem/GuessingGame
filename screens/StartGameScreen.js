import { TextInput, View, StyleSheet, Alert, Text } from "react-native";
import { useState } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/Colors";
import Title from "../components/ui/Title";
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

function StartGameScreen({onPickNumber}) {

    const [enteredNumber, setEnteredNumber] = useState('')

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid number!',
                'Number has to be a number between 1 and 99',
                [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}]
            );
            return;
        }
        onPickNumber(chosenNumber);
    }

    function resetInputHandler() {
        setEnteredNumber('');
    }

    return (
        <View style={styles.rootContainer}>
         <Title>Tuttuğum Sayıyı Tahmin Et</Title>
         <Card>
         <InstructionText>Bir sayı girin</InstructionText>
             <TextInput 
                 style={styles.numberInput}
                 maxLength={2}
                 keyboardType="number-pad"
                 autoCapitalize="none"
                 autoCorrect={false}
                 onChangeText = {numberInputHandler}
                 value = {enteredNumber}
             />
             <View style={styles.buttonsContainer}>
                 <View style={styles.buttonContainer}>
                     <PrimaryButton
                         onPress={resetInputHandler}
                     >
                         Reset
                     </PrimaryButton>
                 </View>
                 <View style={styles.buttonContainer}>
                     <PrimaryButton 
                         onPress={confirmInputHandler}
                     >
                         Confirm
                     </PrimaryButton>    
                 </View>
             </View>
         </Card>
       </View>
     ); 
 
}

export default StartGameScreen;

const styles = StyleSheet.create({
    rootContainer: {
		flex: 1,
		marginTop: 100,
		alignItems: 'center'
	},    
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        padding: 16,
        marginTop: 36,
        marginHorizontal: 24,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    },
});
