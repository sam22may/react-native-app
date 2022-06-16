import { StyleSheet } from 'react-native'
import { Button } from '@rneui/base'
import { APP_COLORS } from '../../styles/color'

interface IProps {
	title: string
	color?: string
	onPress: () => void
}

const ButtonRNE = ({ title, color = 'primary', onPress }: IProps) => {
	return <Button style={styles.button} color={color} type='outline' title={title} onPress={onPress} />
}

const styles = StyleSheet.create({
	button: {
		margin: 12
	}
})

export default ButtonRNE
