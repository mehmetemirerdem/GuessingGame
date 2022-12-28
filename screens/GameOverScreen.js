import { View, Image, Text, ScrollView, StyleSheet, useWindowDimensions } from "react-native";
import Title from '../components/ui/Title';
import Colors from '../constants/Colors';
import PrimaryButton from '../components/ui/PrimaryButton';


function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
	
	const { width, height } = useWindowDimensions();

	let imageSize = 300;

	if (width < 380) {
		imageSize = 150;
	}

	if (height < 400) {
		imageSize = 80;
	}

	const imageStyle = {
		width: imageSize,
		height: imageSize,
		borderRadius: imageSize / 2
	};

	
	return(
		<ScrollView style={styles.screen}>
			<Title>Oyun Bitti!</Title>
			<View style={[styles.imageContainer, imageStyle]}>
				<Image style={styles.image} source={require('../assets/images/success.png')} />
			</View>
			<Text style={styles.summaryText}>
			Telefonun <Text style={styles.highlight}>{userNumber}</Text>
			’yi <Text style={styles.highlight}>{roundsNumber}</Text> defada bildi.
			</Text>
			<PrimaryButton onPress={onStartNewGame}>Yeni Oyun Başlat</PrimaryButton>
		</ScrollView>
		);
	
}

export default GameOverScreen;

//const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
	screen: {
		flex: 1
	  },	
	rootContainer: {
		flex: 1,
		padding: 24,
		justifyContent: 'center',
		alignItems: 'center'
	},
	imageContainer: {
		//width: deviceWidth < 380 ? 150 : 300,
		//height: deviceWidth < 380 ? 150 : 300,
		//borderRadius: deviceWidth < 380 ? 75 : 150,
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

