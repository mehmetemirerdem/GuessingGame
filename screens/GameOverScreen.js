import { View, Image, StyleSheet, Text } from "react-native";
import Title from '../components/ui/Title';
import Colors from '../constants/Colors';
import PrimaryButton from '../components/ui/PrimaryButton';


function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
	return(
		<View style={styles.rootContainer}>
			<Title>Oyun Bitti!</Title>
			<View style={styles.imageContainer}>
				<Image style={styles.image} source={require('../assets/images/success.png')} />
			</View>
			<Text style={styles.summaryText}>
			Telefonun <Text style={styles.highlight}>{userNumber}</Text>
			’yi <Text style={styles.highlight}>{roundsNumber}</Text> defada bildi.
			</Text>
			<PrimaryButton onPress={onStartNewGame}>Yeni Oyun Başlat</PrimaryButton>
		</View>
		);
	
}

export default GameOverScreen;

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		padding: 24,
		justifyContent: 'center',
		alignItems: 'center'
	},
	imageContainer: {
		width: 300,
		height: 300,
		borderRadius: 150,	//half of the width/height square becomes a circle
		borderWidth: 3,
		borderColor: Colors.primary800,
		overflow: 'hidden',
		margin: 36
	},
	image: {
		width: '100%',
		height: '100%'
	},
	summaryText: {
		fontFamily: 'open-sans',
		fontSize: 24,
		textAlign: 'center',
		marginBottom: 24
	},
	highlight: {
		fontFamily: 'open-sans-bold',
		color: Colors.primary500
	},

});

