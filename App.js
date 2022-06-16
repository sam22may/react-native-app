import { View, Text } from 'react-native'
import Header from './components/header'
import { SafeAreaProvider } from 'react-native-safe-area-context'
//import Button from './components/Button/ButtonRNE'
import { Button } from '@rneui/base'
import { global } from './styles/global'
import { Icon } from '@rneui/themed'
import { useState } from 'react'
import TaskList from './components/TaskList/TaskList'

export default function App (){
	const [ myText, setMyText ] = useState('Hello World')

	const btnPress = () => {
		setMyText('La paprika des poupoules')
	}

	return (
		<SafeAreaProvider>
			<View>
				<Header title='Liste de tâches!!! magique yoolloo' />

				<Button style={global.m12} color='grey0' onPress={btnPress}>
					Salut
					<Icon name='forward' color='white' />
				</Button>
				<Text>{myText}</Text>
				<TaskList />
			</View>
		</SafeAreaProvider>
	)
}
