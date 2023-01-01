import { ImageBackground, StyleSheet, SafeAreaView } from 'react-native';
import { useState } from 'react';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from './constants/Colors';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';


export default function App() {

  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });

  if(!fontsLoaded) {
    return <AppLoading />;
  }
  
  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler(numberOfRounds) {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds)
  }

  function startNewGameHandler() {
    setUserNumber(null);
    setGuessRounds(0);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />

  if(userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if(gameIsOver && userNumber) {
    screen = (
      <GameOverScreen 
        userNumber={userNumber}
        roundsNumber={guessRounds}
        onStartNewGame={startNewGameHandler}
      />
    );
  }

  return (
    <>
    <StatusBar style='light' /> 
    <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
      <ImageBackground
        source={require('./assets/images/background.jpg')}
        resizeMode = "cover"
        style = {styles.rootScreen}
        imageStyle = {styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>  
      </ImageBackground>
    </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15
  }
});
