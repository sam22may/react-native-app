import { View, Text } from 'react-native'
import Header from './components/header'
import { SafeAreaProvider } from 'react-native-safe-area-context'
//import Button from './components/Button/ButtonRNE'
import { Button } from '@rneui/base'
import { global } from './styles/global'
import { Icon } from '@rneui/themed'

export default function App (){
	const btnPress = () => {
		console.log('Button pressed')
	}

	return (
		<SafeAreaProvider>
			<View>
				<Header title='Liste de tâches!!! magique yoolloo' />

				{/* <Button title='Press me cause button' onPress={btnPress} /> */}
				<Button style={global.m12} color='grey0'>
					Salut
					<Icon name='forward' color='white' />
				</Button>
				<Icon name='rowing' />
			</View>
		</SafeAreaProvider>
	)
}
