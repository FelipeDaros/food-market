import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Poppins_400Regular, Poppins_500Medium, Poppins_700Bold, useFonts } from '@expo-google-fonts/poppins';
import { SignIn } from './src/screens/SignIn';
import { ThemeProvider } from 'styled-components';
import { theme } from './src/style/theme';
import { Loading } from './src/components/Loading';
import { SignUp } from './src/screens/SignUp';

export default function App() {
  const [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_500Medium, Poppins_700Bold });

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        backgroundColor="transparent"
        translucent
      />
      <SignUp />
    </ThemeProvider>
  );
}