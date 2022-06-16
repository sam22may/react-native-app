import { StyleSheet } from 'react-native'
import { APP_COLORS } from '../../styles/color'

export const styles = StyleSheet.create({
	subHeader: {
		backgroundColor: APP_COLORS.primary,
		height: 20
	},
	header: {
		backgroundColor: APP_COLORS.secondary,
		height: 160,
		justifyContent: 'center',
		alignItems: 'center',
		shadowColor: APP_COLORS.dark,
		shadowOpacity: 0.3,
		shadowOffset: { width: 0, height: 6 },
		shadowRadius: 6
	},
	text: {
		color: APP_COLORS.text,
		fontSize: 20
	}
})
