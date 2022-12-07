import {Text, View, StyleSheet, Alert} from 'react-native';
import { useState, useEffect } from 'react';
import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

let minBoundary = 1;
let maxBoundary = 100;


function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor( Math.random() * (max-min) ) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

function GameScreen({userNumber, onGameOver}) {
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    useEffect( () => {
		if (currentGuess === userNumber) {
			onGameOver();
		}
	}, [currentGuess, userNumber, onGameOver]);

	function nextGuessHandler(direction) {	//direction => lower, greater
		if ((direction === 'lower' && currentGuess < userNumber) ||
			(direction === 'greater' && currentGuess > userNumber)
		) {
			Alert.alert("Yanlış Geri Bildirim!", "Hatalı yönlendirme yaptınız..", [{text: 'Üzgünüm', style: 'cancel'},
		   ]);
			return;
		}

		if (direction === 'lower') {
			maxBoundary = currentGuess;
		} else {
			minBoundary = currentGuess + 1;	
		}
		const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
		setCurrentGuess(newRndNumber);
	}

    return (
        <View style={styles.screen}>
            <Title>Rakibin Tahmini</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
            <InstructionText style={styles.instructionText}>Yükselt veya Azalt</InstructionText>
            <View style={styles.buttonsContainer}>
			 <View style={styles.buttonContainer}>
                <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
			 </View>
			 <View style={styles.buttonContainer}>
			 	<PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
             </View>
			 </View>
            </Card>
            {/* <View>OYUN KAYDI</View> */}
        </View>
    );

}


export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24
    },
    instructionText: {
		marginBottom: 12
	},
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    },

});

