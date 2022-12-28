import { TextInput, View, StyleSheet, Alert, useWindowDimensions, KeyboardAvoidingView, ScrollView } from "react-native";
import { useState } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/Colors";
import Title from "../components/ui/Title";
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

function StartGameScreen({onPickNumber}) {

    const [enteredNumber, setEnteredNumber] = useState('')

    const { width, height } = useWindowDimensions();
//when the orientation changes, this function will be executed and the height and width are updated


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

    const marginTopDistance = height < 380 ? 30 : 100;
//Write this code just before the JSX code


    return (
        <ScrollView style={styles.screen}>
	    <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, {marginTop: marginTopDistance}]}>
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
       </KeyboardAvoidingView>
	</ScrollView>

     ); 
 
}

export default StartGameScreen;

//const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
      },    
    rootContainer: {
		flex: 1,
		//marginTop: deviceHeight < 380 ? 30 : 100,
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
